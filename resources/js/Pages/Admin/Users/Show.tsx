import React from "react";
import { Head, Link, router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
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
    ArrowLeft,
    Edit,
    Trash2,
    User,
    Mail,
    Phone,
    Calendar,
    Clock,
    Shield,
    CheckCircle,
    XCircle,
    Globe,
    Activity,
    Settings,
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
    last_login_ip: string | null;
    created_at: string;
    updated_at: string;
    role_display_name: string;
    status_display_name: string;
}

interface Props {
    user: User;
}

export default function Show({ user }: Props) {
    const handleDelete = () => {
        router.delete(route("admin.users.destroy", user.id));
    };

    const handleStatusUpdate = (status: string) => {
        router.patch(route("admin.users.update-status", user.id), {
            status: status,
        });
    };

    const handleRoleUpdate = (role: string) => {
        router.patch(route("admin.users.update-role", user.id), {
            role: role,
        });
    };

    const handleEmailVerification = (action: "verify" | "unverify") => {
        if (action === "verify") {
            router.patch(route("admin.users.verify-email", user.id));
        } else {
            router.patch(route("admin.users.unverify-email", user.id));
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
        return new Date(dateString).toLocaleString("en-US", {
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
            return `${diffDays} day${diffDays !== 1 ? "s" : ""}`;
        } else if (diffDays < 365) {
            const months = Math.floor(diffDays / 30);
            return `${months} month${months !== 1 ? "s" : ""}`;
        } else {
            const years = Math.floor(diffDays / 365);
            return `${years} year${years !== 1 ? "s" : ""}`;
        }
    };

    const getLastLoginStatus = () => {
        if (!user.last_login_at) return "Never logged in";

        const lastLogin = new Date(user.last_login_at);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - lastLogin.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) return "Last seen yesterday";
        if (diffDays < 7) return `Last seen ${diffDays} days ago`;
        if (diffDays < 30)
            return `Last seen ${Math.floor(diffDays / 7)} weeks ago`;
        return `Last seen ${Math.floor(diffDays / 30)} months ago`;
    };

    return (
        <AdminLayout>
            <Head title={`User - ${user.name}`} />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href={route("admin.users.index")}>
                            <Button variant="outline" size="sm">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Users
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                User Details
                            </h1>
                            <p className="text-gray-600">
                                View and manage user information
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href={route("admin.users.edit", user.id)}>
                            <Button>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            onClick={() =>
                                handleStatusUpdate(
                                    user.status === "active"
                                        ? "inactive"
                                        : "active"
                                )
                            }
                        >
                            <Activity className="h-4 w-4 mr-2" />
                            {user.status === "active"
                                ? "Deactivate"
                                : "Activate"}
                        </Button>
                        {user.id !== 1 && ( // Prevent deleting the first admin user
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="destructive">
                                        <Trash2 className="h-4 w-4 mr-2" />
                                        Delete
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>
                                            Delete User
                                        </AlertDialogTitle>
                                        <AlertDialogDescription>
                                            Are you sure you want to delete this
                                            user? This action cannot be undone
                                            and will remove all user data.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>
                                            Cancel
                                        </AlertDialogCancel>
                                        <AlertDialogAction
                                            onClick={handleDelete}
                                        >
                                            Delete
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        )}
                    </div>
                </div>

                {/* User Profile Card */}
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-start gap-6">
                            {user.avatar ? (
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                            ) : (
                                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-2xl font-bold">
                                        {user.name.charAt(0).toUpperCase()}
                                    </span>
                                </div>
                            )}
                            <div className="flex-1">
                                <div className="flex items-center gap-4 mb-2">
                                    <h2 className="text-3xl font-bold text-gray-900">
                                        {user.name}
                                    </h2>
                                    <Badge
                                        className={getRoleBadgeColor(user.role)}
                                    >
                                        {getRoleIcon(user.role)}{" "}
                                        {user.role_display_name}
                                    </Badge>
                                    <Badge
                                        className={getStatusBadgeColor(
                                            user.status
                                        )}
                                    >
                                        {user.status_display_name}
                                    </Badge>
                                </div>
                                <div className="flex items-center gap-6 text-gray-600">
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
                                        Joined {getAccountAge()} ago
                                    </span>
                                </div>
                                <div className="mt-3 flex items-center gap-4">
                                    {user.email_verified_at ? (
                                        <div className="flex items-center gap-1 text-green-600">
                                            <CheckCircle className="h-4 w-4" />
                                            <span className="text-sm">
                                                Email verified
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-1 text-red-600">
                                            <XCircle className="h-4 w-4" />
                                            <span className="text-sm">
                                                Email not verified
                                            </span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-1 text-gray-600">
                                        <Clock className="h-4 w-4" />
                                        <span className="text-sm">
                                            {getLastLoginStatus()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Account Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Account Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        User ID
                                    </h4>
                                    <p className="text-gray-600 font-mono">
                                        #{user.id}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Role
                                    </h4>
                                    <Badge
                                        className={getRoleBadgeColor(user.role)}
                                    >
                                        {getRoleIcon(user.role)}{" "}
                                        {user.role_display_name}
                                    </Badge>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Status
                                    </h4>
                                    <Badge
                                        className={getStatusBadgeColor(
                                            user.status
                                        )}
                                    >
                                        {user.status_display_name}
                                    </Badge>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Email Status
                                    </h4>
                                    {user.email_verified_at ? (
                                        <Badge className="bg-green-100 text-green-800">
                                            <CheckCircle className="h-3 w-3 mr-1" />
                                            Verified
                                        </Badge>
                                    ) : (
                                        <Badge className="bg-red-100 text-red-800">
                                            <XCircle className="h-3 w-3 mr-1" />
                                            Unverified
                                        </Badge>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Information</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-1 flex items-center gap-2">
                                    <Mail className="h-4 w-4" />
                                    Email Address
                                </h4>
                                <p className="text-gray-600">
                                    <a
                                        href={`mailto:${user.email}`}
                                        className="text-blue-600 hover:underline"
                                    >
                                        {user.email}
                                    </a>
                                </p>
                                {user.email_verified_at && (
                                    <p className="text-xs text-green-600 mt-1">
                                        Verified on{" "}
                                        {formatDate(user.email_verified_at)}
                                    </p>
                                )}
                            </div>
                            {user.phone && (
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1 flex items-center gap-2">
                                        <Phone className="h-4 w-4" />
                                        Phone Number
                                    </h4>
                                    <p className="text-gray-600">
                                        <a
                                            href={`tel:${user.phone}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            {user.phone}
                                        </a>
                                    </p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Activity & Security */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login Activity</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-1">
                                    Last Login
                                </h4>
                                <p className="text-gray-600">
                                    {user.last_login_at
                                        ? formatDate(user.last_login_at)
                                        : "Never logged in"}
                                </p>
                            </div>
                            {user.last_login_ip && (
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Last Login IP
                                    </h4>
                                    <p className="text-gray-600 font-mono">
                                        {user.last_login_ip}
                                    </p>
                                </div>
                            )}
                            <div>
                                <h4 className="font-medium text-gray-900 mb-1">
                                    Account Created
                                </h4>
                                <p className="text-gray-600">
                                    {formatDate(user.created_at)}
                                </p>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 mb-1">
                                    Last Updated
                                </h4>
                                <p className="text-gray-600">
                                    {formatDate(user.updated_at)}
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Security & Permissions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-2">
                                    Role Permissions
                                </h4>
                                <div className="space-y-2 text-sm">
                                    {user.role === "admin" && (
                                        <>
                                            <div className="flex items-center gap-2 text-green-600">
                                                <CheckCircle className="h-3 w-3" />
                                                <span>Full system access</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-green-600">
                                                <CheckCircle className="h-3 w-3" />
                                                <span>User management</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-green-600">
                                                <CheckCircle className="h-3 w-3" />
                                                <span>Content management</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-green-600">
                                                <CheckCircle className="h-3 w-3" />
                                                <span>
                                                    System configuration
                                                </span>
                                            </div>
                                        </>
                                    )}
                                    {user.role === "manager" && (
                                        <>
                                            <div className="flex items-center gap-2 text-green-600">
                                                <CheckCircle className="h-3 w-3" />
                                                <span>Content management</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-green-600">
                                                <CheckCircle className="h-3 w-3" />
                                                <span>User moderation</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-400">
                                                <XCircle className="h-3 w-3" />
                                                <span>
                                                    System configuration
                                                </span>
                                            </div>
                                        </>
                                    )}
                                    {user.role === "editor" && (
                                        <>
                                            <div className="flex items-center gap-2 text-green-600">
                                                <CheckCircle className="h-3 w-3" />
                                                <span>
                                                    Create and edit content
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-400">
                                                <XCircle className="h-3 w-3" />
                                                <span>User management</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-400">
                                                <XCircle className="h-3 w-3" />
                                                <span>
                                                    System configuration
                                                </span>
                                            </div>
                                        </>
                                    )}
                                    {user.role === "user" && (
                                        <>
                                            <div className="flex items-center gap-2 text-green-600">
                                                <CheckCircle className="h-3 w-3" />
                                                <span>Basic access</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-400">
                                                <XCircle className="h-3 w-3" />
                                                <span>Content management</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-400">
                                                <XCircle className="h-3 w-3" />
                                                <span>User management</span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Actions Summary */}
                <Card>
                    <CardHeader>
                        <CardTitle>Available Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-gray-900 mb-2">
                                    Edit User
                                </h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    Update user information, role, and status
                                </p>
                                <Link href={route("admin.users.edit", user.id)}>
                                    <Button size="sm" className="w-full">
                                        <Edit className="h-4 w-4 mr-2" />
                                        Edit
                                    </Button>
                                </Link>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-gray-900 mb-2">
                                    {user.status === "active"
                                        ? "Deactivate"
                                        : "Activate"}{" "}
                                    User
                                </h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    {user.status === "active"
                                        ? "Disable user access to the system"
                                        : "Enable user access to the system"}
                                </p>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="w-full"
                                    onClick={() =>
                                        handleStatusUpdate(
                                            user.status === "active"
                                                ? "inactive"
                                                : "active"
                                        )
                                    }
                                >
                                    <Activity className="h-4 w-4 mr-2" />
                                    {user.status === "active"
                                        ? "Deactivate"
                                        : "Activate"}
                                </Button>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-gray-900 mb-2">
                                    Email Verification
                                </h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    {user.email_verified_at
                                        ? "Remove email verification status"
                                        : "Mark email as verified"}
                                </p>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="w-full"
                                    onClick={() =>
                                        handleEmailVerification(
                                            user.email_verified_at
                                                ? "unverify"
                                                : "verify"
                                        )
                                    }
                                >
                                    <Mail className="h-4 w-4 mr-2" />
                                    {user.email_verified_at
                                        ? "Unverify"
                                        : "Verify"}{" "}
                                    Email
                                </Button>
                            </div>
                            {user.id !== 1 && (
                                <div className="p-4 border rounded-lg">
                                    <h4 className="font-medium text-gray-900 mb-2">
                                        Delete User
                                    </h4>
                                    <p className="text-sm text-gray-600 mb-3">
                                        Permanently remove this user account
                                    </p>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button
                                                size="sm"
                                                variant="destructive"
                                                className="w-full"
                                            >
                                                <Trash2 className="h-4 w-4 mr-2" />
                                                Delete
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>
                                                    Delete User
                                                </AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Are you sure you want to
                                                    delete this user? This
                                                    action cannot be undone.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>
                                                    Cancel
                                                </AlertDialogCancel>
                                                <AlertDialogAction
                                                    onClick={handleDelete}
                                                >
                                                    Delete
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
