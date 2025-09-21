import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import {
    User,
    Mail,
    Phone,
    Calendar,
    Shield,
    Settings,
    Upload,
    Save,
    CheckCircle,
    XCircle,
    Clock,
    Edit,
} from "lucide-react";

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
    created_at: string;
    updated_at: string;
}

interface Props {
    user: User;
    mustVerifyEmail: boolean;
    status?: string;
}

export default function ProfileIndex({ user, mustVerifyEmail, status }: Props) {
    const { data, setData, patch, processing, errors } = useForm({
        name: user.name,
        email: user.email,
        phone: user.phone || "",
        avatar: null as File | null,
    });

    const [previewAvatar, setPreviewAvatar] = useState<string | null>(user.avatar);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(route("profile.update"));
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

    const getRoleDisplayName = (role: string) => {
        const roles: { [key: string]: string } = {
            admin: 'Administrator',
            manager: 'Manager',
            editor: 'Editor',
            user: 'User',
        };
        return roles[role] || role.charAt(0).toUpperCase() + role.slice(1);
    };

    const getRoleBadgeColor = (role: string) => {
        const colors: { [key: string]: string } = {
            admin: "bg-red-100 text-red-800",
            manager: "bg-purple-100 text-purple-800",
            editor: "bg-blue-100 text-blue-800",
            user: "bg-gray-100 text-gray-800",
        };
        return colors[role] || "bg-gray-100 text-gray-800";
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

    const getAccountAge = () => {
        const created = new Date(user.created_at);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - created.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays < 30) {
            return `${diffDays} day${diffDays !== 1 ? 's' : ''}`;
        } else if (diffDays < 365) {
            const months = Math.floor(diffDays / 30);
            return `${months} month${months !== 1 ? 's' : ''}`;
        } else {
            const years = Math.floor(diffDays / 365);
            return `${years} year${years !== 1 ? 's' : ''}`;
        }
    };

    return (
        <AdminLayout>
            <Head title="My Profile" />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            My Profile
                        </h1>
                        <p className="text-gray-600">
                            Manage your personal information and account settings
                        </p>
                    </div>
                    <Link href={route("profile.settings")}>
                        <Button>
                            <Settings className="h-4 w-4 mr-2" />
                            Account Settings
                        </Button>
                    </Link>
                </div>

                {/* Success Message */}
                {status === 'profile-updated' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 text-green-800">
                            <CheckCircle className="h-4 w-4" />
                            <span className="font-medium">Profile updated successfully!</span>
                        </div>
                    </div>
                )}

                {/* Profile Overview */}
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-start gap-6">
                            <Avatar className="w-24 h-24">
                                <AvatarImage 
                                    src={previewAvatar || undefined} 
                                    alt={user.name} 
                                />
                                <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-2xl font-bold">
                                    {user.name.charAt(0).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-2">
                                    <h2 className="text-3xl font-bold text-gray-900">{user.name}</h2>
                                    <Badge className={getRoleBadgeColor(user.role)}>
                                        <Shield className="h-3 w-3 mr-1" />
                                        {getRoleDisplayName(user.role)}
                                    </Badge>
                                    <Badge className={getStatusBadgeColor(user.status)}>
                                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-6 text-gray-600 mb-3">
                                    <span className="flex items-center gap-1">
                                        <Mail className="h-4 w-4" />
                                        {user.email}
                                    </span>
                                    {user.phone && (
                                        <span className="flex items-center gap-1">
                                            <Phone className="h-4 w-4" />
                                            {user.phone}
                                        </span>
                                    )}
                                    <span className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        Member for {getAccountAge()}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    {user.email_verified_at ? (
                                        <div className="flex items-center gap-1 text-green-600">
                                            <CheckCircle className="h-4 w-4" />
                                            <span className="text-sm">Email verified</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-1 text-red-600">
                                            <XCircle className="h-4 w-4" />
                                            <span className="text-sm">Email not verified</span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <Clock className="h-4 w-4" />
                                        <span className="text-sm">
                                            Last login: {user.last_login_at ? formatDate(user.last_login_at) : 'Never'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Edit Profile Form */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Edit className="h-4 w-4" />
                                    Edit Profile Information
                                </CardTitle>
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
                                                placeholder="Enter your phone number"
                                                className={`pl-10 ${errors.phone ? "border-red-500" : ""}`}
                                            />
                                        </div>
                                        {errors.phone && (
                                            <p className="text-sm text-red-600">{errors.phone}</p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <Button 
                                        type="submit" 
                                        disabled={processing}
                                        className="w-full md:w-auto"
                                    >
                                        <Save className="h-4 w-4 mr-2" />
                                        {processing ? "Updating..." : "Update Profile"}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Avatar Upload */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Profile Picture</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-center">
                                        <Avatar className="w-32 h-32">
                                            <AvatarImage 
                                                src={previewAvatar || undefined} 
                                                alt={user.name} 
                                            />
                                            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-4xl font-bold">
                                                {user.name.charAt(0).toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                                        <input
                                            id="avatar"
                                            type="file"
                                            onChange={handleAvatarChange}
                                            accept="image/*"
                                            className="hidden"
                                        />
                                        <label htmlFor="avatar" className="cursor-pointer">
                                            <div className="space-y-2">
                                                <Upload className="h-8 w-8 mx-auto text-gray-400" />
                                                <div className="font-medium">Upload new picture</div>
                                                <div className="text-sm text-gray-500">
                                                    JPG, PNG up to 2MB
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                    {errors.avatar && (
                                        <p className="text-sm text-red-600">{errors.avatar}</p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Account Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Account Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-sm">
                                <div>
                                    <span className="font-medium text-gray-700">User ID:</span>
                                    <div className="text-gray-600">#{user.id}</div>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-700">Role:</span>
                                    <div className="text-gray-600">{getRoleDisplayName(user.role)}</div>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-700">Status:</span>
                                    <div className="text-gray-600">{user.status.charAt(0).toUpperCase() + user.status.slice(1)}</div>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-700">Member Since:</span>
                                    <div className="text-gray-600">{formatDate(user.created_at)}</div>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-700">Last Updated:</span>
                                    <div className="text-gray-600">{formatDate(user.updated_at)}</div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Actions */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Actions</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Link href={route("profile.settings")}>
                                    <Button variant="outline" className="w-full">
                                        <Settings className="h-4 w-4 mr-2" />
                                        Account Settings
                                    </Button>
                                </Link>
                                {mustVerifyEmail && !user.email_verified_at && (
                                    <Button variant="outline" className="w-full">
                                        <Mail className="h-4 w-4 mr-2" />
                                        Verify Email
                                    </Button>
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
