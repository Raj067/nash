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
import {
    ArrowLeft,
    Save,
    Upload,
    User,
    Mail,
    Phone,
    Shield,
    Eye,
    EyeOff,
} from "lucide-react";

interface Props {
    roles: { [key: string]: string };
    statuses: { [key: string]: string };
}

export default function Create({ roles, statuses }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: "",
        status: "active",
        phone: "",
        avatar: null as File | null,
    });

    const [previewAvatar, setPreviewAvatar] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] =
        useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("admin.users.store"));
    };

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setData("avatar", file);

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setPreviewAvatar(e.target?.result as string);
            reader.readAsDataURL(file);
        } else {
            setPreviewAvatar(null);
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

    const getRoleDescription = (role: string) => {
        const descriptions: { [key: string]: string } = {
            admin: "Full system access and user management",
            manager: "Manage content and moderate users",
            editor: "Create and edit content",
            user: "Basic access to assigned features",
        };
        return descriptions[role] || "";
    };

    const getStatusDescription = (status: string) => {
        const descriptions: { [key: string]: string } = {
            active: "User can log in and access the system",
            inactive: "User account is disabled",
            suspended: "User account is temporarily restricted",
        };
        return descriptions[status] || "";
    };

    return (
        <AdminLayout>
            <Head title="Create New User" />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href={route("admin.users.index")}>
                        <Button variant="outline" size="sm">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Users
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Create New User
                        </h1>
                        <p className="text-gray-600">
                            Add a new user to the system with appropriate role
                            and permissions
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>User Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    {/* Basic Information */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">
                                                Full Name{" "}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </Label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                                <Input
                                                    id="name"
                                                    type="text"
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Enter full name"
                                                    className={`pl-10 ${
                                                        errors.name
                                                            ? "border-red-500"
                                                            : ""
                                                    }`}
                                                />
                                            </div>
                                            {errors.name && (
                                                <p className="text-sm text-red-600">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">
                                                Email Address{" "}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </Label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={data.email}
                                                    onChange={(e) =>
                                                        setData(
                                                            "email",
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Enter email address"
                                                    className={`pl-10 ${
                                                        errors.email
                                                            ? "border-red-500"
                                                            : ""
                                                    }`}
                                                />
                                            </div>
                                            {errors.email && (
                                                <p className="text-sm text-red-600">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Phone Number */}
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">
                                            Phone Number (Optional)
                                        </Label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                            <Input
                                                id="phone"
                                                type="tel"
                                                value={data.phone}
                                                onChange={(e) =>
                                                    setData(
                                                        "phone",
                                                        e.target.value
                                                    )
                                                }
                                                placeholder="Enter phone number"
                                                className={`pl-10 ${
                                                    errors.phone
                                                        ? "border-red-500"
                                                        : ""
                                                }`}
                                            />
                                        </div>
                                        {errors.phone && (
                                            <p className="text-sm text-red-600">
                                                {errors.phone}
                                            </p>
                                        )}
                                    </div>

                                    {/* Password Fields */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="password">
                                                Password{" "}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="password"
                                                    type={
                                                        showPassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    value={data.password}
                                                    onChange={(e) =>
                                                        setData(
                                                            "password",
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Enter password"
                                                    className={`pr-10 ${
                                                        errors.password
                                                            ? "border-red-500"
                                                            : ""
                                                    }`}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setShowPassword(
                                                            !showPassword
                                                        )
                                                    }
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
                                                <p className="text-sm text-red-600">
                                                    {errors.password}
                                                </p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="password_confirmation">
                                                Confirm Password{" "}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="password_confirmation"
                                                    type={
                                                        showPasswordConfirmation
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    value={
                                                        data.password_confirmation
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "password_confirmation",
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Confirm password"
                                                    className={`pr-10 ${
                                                        errors.password_confirmation
                                                            ? "border-red-500"
                                                            : ""
                                                    }`}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        setShowPasswordConfirmation(
                                                            !showPasswordConfirmation
                                                        )
                                                    }
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
                                                <p className="text-sm text-red-600">
                                                    {
                                                        errors.password_confirmation
                                                    }
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Role and Status */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="role">
                                                Role{" "}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </Label>
                                            <Select
                                                value={data.role}
                                                onValueChange={(value) =>
                                                    setData("role", value)
                                                }
                                            >
                                                <SelectTrigger
                                                    className={
                                                        errors.role
                                                            ? "border-red-500"
                                                            : ""
                                                    }
                                                >
                                                    <SelectValue placeholder="Select user role" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {Object.entries(roles).map(
                                                        ([key, label]) => (
                                                            <SelectItem
                                                                key={key}
                                                                value={key}
                                                            >
                                                                <div className="flex items-center gap-2">
                                                                    <span>
                                                                        {getRoleIcon(
                                                                            key
                                                                        )}
                                                                    </span>
                                                                    <div>
                                                                        <div className="font-medium">
                                                                            {
                                                                                label
                                                                            }
                                                                        </div>
                                                                        <div className="text-xs text-gray-500">
                                                                            {getRoleDescription(
                                                                                key
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </SelectItem>
                                                        )
                                                    )}
                                                </SelectContent>
                                            </Select>
                                            {errors.role && (
                                                <p className="text-sm text-red-600">
                                                    {errors.role}
                                                </p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="status">
                                                Status{" "}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </Label>
                                            <Select
                                                value={data.status}
                                                onValueChange={(value) =>
                                                    setData("status", value)
                                                }
                                            >
                                                <SelectTrigger
                                                    className={
                                                        errors.status
                                                            ? "border-red-500"
                                                            : ""
                                                    }
                                                >
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {Object.entries(
                                                        statuses
                                                    ).map(([key, label]) => (
                                                        <SelectItem
                                                            key={key}
                                                            value={key}
                                                        >
                                                            <div>
                                                                <div className="font-medium">
                                                                    {label}
                                                                </div>
                                                                <div className="text-xs text-gray-500">
                                                                    {getStatusDescription(
                                                                        key
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            {errors.status && (
                                                <p className="text-sm text-red-600">
                                                    {errors.status}
                                                </p>
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
                                        <label
                                            htmlFor="avatar"
                                            className="cursor-pointer"
                                        >
                                            {previewAvatar ? (
                                                <div className="space-y-2">
                                                    <img
                                                        src={previewAvatar}
                                                        alt="Preview"
                                                        className="w-24 h-24 mx-auto rounded-full object-cover"
                                                    />
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        size="sm"
                                                    >
                                                        Change Avatar
                                                    </Button>
                                                </div>
                                            ) : (
                                                <div className="space-y-2">
                                                    <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
                                                        <Upload className="h-8 w-8 text-gray-400" />
                                                    </div>
                                                    <div className="font-medium">
                                                        Upload avatar
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        JPG, PNG up to 2MB
                                                    </div>
                                                </div>
                                            )}
                                        </label>
                                    </div>
                                    {errors.avatar && (
                                        <p className="text-sm text-red-600">
                                            {errors.avatar}
                                        </p>
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
                                        {processing
                                            ? "Creating..."
                                            : "Create User"}
                                    </Button>
                                    <Link href={route("admin.users.index")}>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="w-full"
                                        >
                                            Cancel
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Role Guide */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Role Guide</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {Object.entries(roles).map(([key, label]) => (
                                    <div
                                        key={key}
                                        className="border-l-4 border-gray-200 pl-4"
                                    >
                                        <div className="flex items-center gap-2 font-medium">
                                            <span>{getRoleIcon(key)}</span>
                                            <span>{label}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-1">
                                            {getRoleDescription(key)}
                                        </p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Password Requirements */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Password Requirements</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Shield className="h-3 w-3 text-gray-500" />
                                        <span>Minimum 8 characters</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Shield className="h-3 w-3 text-gray-500" />
                                        <span>
                                            At least one uppercase letter
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Shield className="h-3 w-3 text-gray-500" />
                                        <span>
                                            At least one lowercase letter
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Shield className="h-3 w-3 text-gray-500" />
                                        <span>At least one number</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Shield className="h-3 w-3 text-gray-500" />
                                        <span>
                                            At least one special character
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Account Info */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Account Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2 text-sm">
                                    <p>
                                        <strong>Email Verification:</strong>{" "}
                                        User will be automatically verified when
                                        created by admin
                                    </p>
                                    <p>
                                        <strong>Default Status:</strong> New
                                        users are set to "Active" by default
                                    </p>
                                    <p>
                                        <strong>Login Access:</strong> User can
                                        log in immediately after creation
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Preview */}
                {(data.name || data.email) && (
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                User Preview
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4 p-4 border rounded-lg bg-gray-50">
                                {previewAvatar ? (
                                    <img
                                        src={previewAvatar}
                                        alt="Avatar"
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                                        <span className="text-lg font-medium text-gray-600">
                                            {data.name
                                                ? data.name
                                                      .charAt(0)
                                                      .toUpperCase()
                                                : "?"}
                                        </span>
                                    </div>
                                )}
                                <div className="flex-1">
                                    <h3 className="font-medium text-lg">
                                        {data.name || "User Name"}
                                    </h3>
                                    <p className="text-gray-600">
                                        {data.email || "user@example.com"}
                                    </p>
                                    {data.phone && (
                                        <p className="text-gray-600 text-sm">
                                            {data.phone}
                                        </p>
                                    )}
                                    <div className="flex items-center gap-2 mt-2">
                                        {data.role && (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                {getRoleIcon(data.role)}{" "}
                                                {roles[data.role]}
                                            </span>
                                        )}
                                        {data.status && (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                {statuses[data.status]}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AdminLayout>
    );
}
