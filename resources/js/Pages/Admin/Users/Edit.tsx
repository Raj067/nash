import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { ArrowLeft, Save, Upload, User, Mail, Phone, Shield, Eye, EyeOff, Calendar, Clock } from "lucide-react";

interface User {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    role: string;
    status: string;
    avatar: string | null;
    email_verified_at: string | null;
    last_login_at: string | null;
    last_login_ip: string | null;
    created_at: string;
    updated_at: string;
    role_display_name: string;
    status_display_name: string;
}

interface Props {
    user: User;
    roles: { [key: string]: string };
    statuses: { [key: string]: string };
}

export default function Edit({ user, roles, statuses }: Props) {
    const { data, setData, patch, processing, errors } = useForm({
        name: user.name,
        email: user.email,
        password: "",
        password_confirmation: "",
        role: user.role,
        status: user.status,
        phone: user.phone || "",
        avatar: null as File | null,
    });

    const [previewAvatar, setPreviewAvatar] = useState<string | null>(user.avatar);
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(route("admin.users.update", user.id));
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setData('avatar', file);
        
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setPreviewAvatar(e.target?.result as string);
            reader.readAsDataURL(file);
        }
    };

    const getRoleIcon = (role: string) => {
        const icons: { [key: string]: string } = {
            admin: "👑",
            manager: "🔧",
            editor: "✏️",
            user: "👤",
        };
        return icons[role] || "👤";
    };

    const getStatusBadgeColor = (status: string) => {
        const colors: { [key: string]: string } = {
            active: "bg-green-100 text-green-800",
            inactive: "bg-yellow-100 text-yellow-800",
            suspended: "bg-red-100 text-red-800",
        };
        return colors[status] || "bg-gray-100 text-gray-800";
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <AdminLayout>
            <Head title={`Edit User - ${user.name}`} />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href={route("admin.users.index")}>
                        <Button variant="outline" size="sm">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Users
                        </Button>
                    </Link>
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-gray-900">
                            Edit User
                        </h1>
                        <p className="text-gray-600">
                            Update user information, role, and permissions
                        </p>
                    </div>
                    <Link href={route("admin.users.show", user.id)}>
                        <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                        </Button>
                    </Link>
                </div>

                {/* Current User Info */}
                <Card>
                    <CardHeader>
                        <CardTitle>Current User Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                            <div>
                                <span className="font-medium text-gray-700">Status:</span>
                                <div className="mt-1">
                                    <Badge className={getStatusBadgeColor(user.status)}>
                                        {user.status_display_name}
                                    </Badge>
                                </div>
                            </div>
                            <div>
                                <span className="font-medium text-gray-700">Role:</span>
                                <div className="mt-1">{getRoleIcon(user.role)} {user.role_display_name}</div>
                            </div>
                            <div>
                                <span className="font-medium text-gray-700">Email Verified:</span>
                                <div className="mt-1">
                                    {user.email_verified_at ? (
                                        <Badge className="bg-green-100 text-green-800">Verified</Badge>
                                    ) : (
                                        <Badge className="bg-red-100 text-red-800">Unverified</Badge>
                                    )}
                                </div>
                            </div>
                            <div>
                                <span className="font-medium text-gray-700">Last Login:</span>
                                <div className="mt-1 text-gray-600">
                                    {user.last_login_at ? formatDate(user.last_login_at) : 'Never'}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>User Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Basic Information */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">
                                                Full Name <span className="text-red-500">*</span>
                                            </Label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                                <Input
                                                    id="name"
                                                    type="text"
                                                    value={data.name}
                                                    onChange={(e) => setData("name", e.target.value)}
                                                    className={`pl-10 ${errors.name ? "border-red-500" : ""}`}
                                                />
                                            </div>
                                            {errors.name && (
                                                <p className="text-sm text-red-600">{errors.name}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">
                                                Email Address <span className="text-red-500">*</span>
                                            </Label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={data.email}
                                                    onChange={(e) => setData("email", e.target.value)}
                                                    className={`pl-10 ${errors.email ? "border-red-500" : ""}`}
                                                />
                                            </div>
                                            {errors.email && (
                                                <p className="text-sm text-red-600">{errors.email}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Phone Number */}
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                            <Input
                                                id="phone"
                                                type="tel"
                                                value={data.phone}
                                                onChange={(e) => setData("phone", e.target.value)}
                                                className={`pl-10 ${errors.phone ? "border-red-500" : ""}`}
                                            />
                                        </div>
                                        {errors.phone && (
                                            <p className="text-sm text-red-600">{errors.phone}</p>
                                        )}
                                    </div>

                                    {/* Password Fields */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="password">
                                                New Password (Leave blank to keep current)
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="password"
                                                    type={showPassword ? "text" : "password"}
                                                    value={data.password}
                                                    onChange={(e) => setData("password", e.target.value)}
                                                    placeholder="Enter new password"
                                                    className={`pr-10 ${errors.password ? "border-red-500" : ""}`}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                >
                                                    {showPassword ? (
                                                        <EyeOff className="h-4 w-4" />
                                                    ) : (
                                                        <Eye className="h-4 w-4" />
                                                    )}
                                                </button>
                                            </div>
                                            {errors.password && (
                                                <p className="text-sm text-red-600">{errors.password}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="password_confirmation">
                                                Confirm New Password
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="password_confirmation"
                                                    type={showPasswordConfirmation ? "text" : "password"}
                                                    value={data.password_confirmation}
                                                    onChange={(e) => setData("password_confirmation", e.target.value)}
                                                    placeholder="Confirm new password"
                                                    className={`pr-10 ${errors.password_confirmation ? "border-red-500" : ""}`}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowPasswordConfirmation(!showPasswordConfirmation)}
                                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                >
                                                    {showPasswordConfirmation ? (
                                                        <EyeOff className="h-4 w-4" />
                                                    ) : (
                                                        <Eye className="h-4 w-4" />
                                                    )}
                                                </button>
                                            </div>
                                            {errors.password_confirmation && (
                                                <p className="text-sm text-red-600">{errors.password_confirmation}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Role and Status */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="role">
                                                Role <span className="text-red-500">*</span>
                                            </Label>
                                            <Select
                                                value={data.role}
                                                onValueChange={(value) => setData("role", value)}
                                            >
                                                <SelectTrigger className={errors.role ? "border-red-500" : ""}>
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {Object.entries(roles).map(([key, label]) => (
                                                        <SelectItem key={key} value={key}>
                                                            {getRoleIcon(key)} {label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {errors.role && (
                                                <p className="text-sm text-red-600">{errors.role}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="status">
                                                Status <span className="text-red-500">*</span>
                                            </Label>
                                            <Select
                                                value={data.status}
                                                onValueChange={(value) => setData("status", value)}
                                            >
                                                <SelectTrigger className={errors.status ? "border-red-500" : ""}>
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {Object.entries(statuses).map(([key, label]) => (
                                                        <SelectItem key={key} value={key}>
                                                            {label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {errors.status && (
                                                <p className="text-sm text-red-600">{errors.status}</p>
                                            )}
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Avatar Upload */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Profile Avatar</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                                        <input
                                            id="avatar"
                                            type="file"
                                            onChange={handleAvatarChange}
                                            accept="image/*"
                                            className="hidden"
                                        />
                                        <label htmlFor="avatar" className="cursor-pointer">
                                            {previewAvatar ? (
                                                <div className="space-y-2">
                                                    <img
                                                        src={previewAvatar}
                                                        alt="Preview"
                                                        className="w-24 h-24 mx-auto rounded-full object-cover"
                                                    />
                                                    <Button type="button" variant="outline" size="sm">
                                                        Change Avatar
                                                    </Button>
                                                </div>
                                            ) : (
                                                <div className="space-y-2">
                                                    <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                                                        <span className="text-lg font-medium text-gray-600">
                                                            {user.name.charAt(0).toUpperCase()}
                                                        </span>
                                                    </div>
                                                    <div className="font-medium">Upload avatar</div>
                                                    <div className="text-sm text-gray-500">
                                                        JPG, PNG up to 2MB
                                                    </div>
                                                </div>
                                            )}
                                        </label>
                                    </div>
                                    {errors.avatar && (
                                        <p className="text-sm text-red-600">{errors.avatar}</p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Actions */}
                        <Card>
                            <CardContent className="pt-6">
                                <div className="space-y-3">
                                    <Button 
                                        onClick={handleSubmit} 
                                        disabled={processing}
                                        className="w-full"
                                    >
                                        <Save className="h-4 w-4 mr-2" />
                                        {processing ? "Updating..." : "Update User"}
                                    </Button>
                                    <Link href={route("admin.users.index")}>
                                        <Button type="button" variant="outline" className="w-full">
                                            Cancel
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Original Info */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Original Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm">
                                <div>
                                    <span className="font-medium text-gray-700">User ID:</span>
                                    <div className="text-gray-600">#{user.id}</div>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-700">Original Role:</span>
                                    <div className="text-gray-600">{user.role_display_name}</div>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-700">Original Status:</span>
                                    <div className="text-gray-600">{user.status_display_name}</div>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-700">Created:</span>
                                    <div className="text-gray-600">{formatDate(user.created_at)}</div>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-700">Last Updated:</span>
                                    <div className="text-gray-600">{formatDate(user.updated_at)}</div>
                                </div>
                                {user.last_login_at && (
                                    <div>
                                        <span className="font-medium text-gray-700">Last Login:</span>
                                        <div className="text-gray-600">{formatDate(user.last_login_at)}</div>
                                        {user.last_login_ip && (
                                            <div className="text-xs text-gray-500">IP: {user.last_login_ip}</div>
                                        )}
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Quick Actions */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Actions</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full"
                                    onClick={() => {
                                        setData('status', user.status === 'active' ? 'inactive' : 'active');
                                    }}
                                >
                                    <Clock className="h-4 w-4 mr-2" />
                                    {user.status === 'active' ? 'Deactivate' : 'Activate'} User
                                </Button>
                                {!user.email_verified_at && (
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full"
                                        onClick={() => {
                                            // This would trigger email verification
                                        }}
                                    >
                                        <Mail className="h-4 w-4 mr-2" />
                                        Verify Email
                                    </Button>
                                )}
                            </CardContent>
                        </Card>

                        {/* Security Note */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Security Note</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <p>• Leave password fields blank to keep the current password</p>
                                    <p>• Changing the role will affect user permissions immediately</p>
                                    <p>• Deactivating a user will prevent them from logging in</p>
                                    <p>• Email changes may require re-verification</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
