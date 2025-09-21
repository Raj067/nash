import React, { useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
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
    User,
    Lock,
    Shield,
    Trash2,
    Save,
    CheckCircle,
    XCircle,
    Eye,
    EyeOff,
    AlertTriangle,
    Settings,
    Mail,
    Phone,
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

export default function ProfileSettings({ user, mustVerifyEmail, status }: Props) {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Profile form
    const { data: profileData, setData: setProfileData, patch: patchProfile, processing: profileProcessing, errors: profileErrors } = useForm({
        name: user.name,
        email: user.email,
        phone: user.phone || "",
    });

    // Password form
    const { data: passwordData, setData: setPasswordData, patch: patchPassword, processing: passwordProcessing, errors: passwordErrors, reset: resetPassword } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    // Delete account form
    const { data: deleteData, setData: setDeleteData, delete: deleteAccount, processing: deleteProcessing, errors: deleteErrors } = useForm({
        password: "",
    });

    const handleProfileSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        patchProfile(route("profile.update"));
    };

    const handlePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        patchPassword(route("profile.password.update"), {
            onSuccess: () => {
                resetPassword();
                setShowCurrentPassword(false);
                setShowNewPassword(false);
                setShowConfirmPassword(false);
            }
        });
    };

    const handleDeleteAccount = () => {
        deleteAccount(route("profile.destroy"));
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

    return (
        <AdminLayout>
            <Head title="Account Settings" />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href={route("profile.edit")}>
                            <Button variant="outline" size="sm">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Profile
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                Account Settings
                            </h1>
                            <p className="text-gray-600">
                                Manage your account security and preferences
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Badge className={getRoleBadgeColor(user.role)}>
                            <Shield className="h-3 w-3 mr-1" />
                            {getRoleDisplayName(user.role)}
                        </Badge>
                        <Badge className={getStatusBadgeColor(user.status)}>
                            {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                        </Badge>
                    </div>
                </div>

                {/* Success Messages */}
                {status === 'profile-updated' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 text-green-800">
                            <CheckCircle className="h-4 w-4" />
                            <span className="font-medium">Profile updated successfully!</span>
                        </div>
                    </div>
                )}

                {status === 'password-updated' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 text-green-800">
                            <CheckCircle className="h-4 w-4" />
                            <span className="font-medium">Password updated successfully!</span>
                        </div>
                    </div>
                )}

                {/* Settings Tabs */}
                <Tabs defaultValue="profile" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="profile" className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            Profile
                        </TabsTrigger>
                        <TabsTrigger value="security" className="flex items-center gap-2">
                            <Lock className="h-4 w-4" />
                            Security
                        </TabsTrigger>
                        <TabsTrigger value="danger" className="flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4" />
                            Danger Zone
                        </TabsTrigger>
                    </TabsList>

                    {/* Profile Settings */}
                    <TabsContent value="profile">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    Profile Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleProfileSubmit} className="space-y-6">
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
                                                    value={profileData.name}
                                                    onChange={(e) => setProfileData("name", e.target.value)}
                                                    className={`pl-10 ${profileErrors.name ? "border-red-500" : ""}`}
                                                />
                                            </div>
                                            {profileErrors.name && (
                                                <p className="text-sm text-red-600">{profileErrors.name}</p>
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
                                                    value={profileData.email}
                                                    onChange={(e) => setProfileData("email", e.target.value)}
                                                    className={`pl-10 ${profileErrors.email ? "border-red-500" : ""}`}
                                                />
                                            </div>
                                            {profileErrors.email && (
                                                <p className="text-sm text-red-600">{profileErrors.email}</p>
                                            )}
                                            {mustVerifyEmail && !user.email_verified_at && (
                                                <div className="flex items-center gap-2 text-amber-600 text-sm">
                                                    <XCircle className="h-4 w-4" />
                                                    <span>Your email address is unverified.</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                            <Input
                                                id="phone"
                                                type="tel"
                                                value={profileData.phone}
                                                onChange={(e) => setProfileData("phone", e.target.value)}
                                                placeholder="Enter your phone number"
                                                className={`pl-10 ${profileErrors.phone ? "border-red-500" : ""}`}
                                            />
                                        </div>
                                        {profileErrors.phone && (
                                            <p className="text-sm text-red-600">{profileErrors.phone}</p>
                                        )}
                                    </div>

                                    <Button 
                                        type="submit" 
                                        disabled={profileProcessing}
                                        className="w-full md:w-auto"
                                    >
                                        <Save className="h-4 w-4 mr-2" />
                                        {profileProcessing ? "Updating..." : "Update Profile"}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Security Settings */}
                    <TabsContent value="security">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Lock className="h-4 w-4" />
                                    Change Password
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handlePasswordSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="current_password">
                                            Current Password <span className="text-red-500">*</span>
                                        </Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                            <Input
                                                id="current_password"
                                                type={showCurrentPassword ? "text" : "password"}
                                                value={passwordData.current_password}
                                                onChange={(e) => setPasswordData("current_password", e.target.value)}
                                                className={`pl-10 pr-10 ${passwordErrors.current_password ? "border-red-500" : ""}`}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                            >
                                                {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                            </button>
                                        </div>
                                        {passwordErrors.current_password && (
                                            <p className="text-sm text-red-600">{passwordErrors.current_password}</p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="password">
                                                New Password <span className="text-red-500">*</span>
                                            </Label>
                                            <div className="relative">
                                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                                <Input
                                                    id="password"
                                                    type={showNewPassword ? "text" : "password"}
                                                    value={passwordData.password}
                                                    onChange={(e) => setPasswordData("password", e.target.value)}
                                                    className={`pl-10 pr-10 ${passwordErrors.password ? "border-red-500" : ""}`}
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                >
                                                    {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                                </button>
                                            </div>
                                            {passwordErrors.password && (
                                                <p className="text-sm text-red-600">{passwordErrors.password}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="password_confirmation">
                                                Confirm New Password <span className="text-red-500">*</span>
                                            </Label>
                                            <div className="relative">
                                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                                <Input
                                                    id="password_confirmation"
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    value={passwordData.password_confirmation}
                                                    onChange={(e) => setPasswordData("password_confirmation", e.target.value)}
                                                    className="pl-10 pr-10"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                                >
                                                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                        <h4 className="font-medium text-blue-900 mb-2">Password Requirements:</h4>
                                        <ul className="text-sm text-blue-800 space-y-1">
                                            <li>• At least 8 characters long</li>
                                            <li>• Contains at least one uppercase letter</li>
                                            <li>• Contains at least one lowercase letter</li>
                                            <li>• Contains at least one number</li>
                                            <li>• Contains at least one special character</li>
                                        </ul>
                                    </div>

                                    <Button 
                                        type="submit" 
                                        disabled={passwordProcessing}
                                        className="w-full md:w-auto"
                                    >
                                        <Save className="h-4 w-4 mr-2" />
                                        {passwordProcessing ? "Updating..." : "Update Password"}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Danger Zone */}
                    <TabsContent value="danger">
                        <Card className="border-red-200">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-red-600">
                                    <AlertTriangle className="h-4 w-4" />
                                    Danger Zone
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                        <div className="flex items-start gap-3">
                                            <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                                            <div>
                                                <h4 className="font-medium text-red-900">Delete Account</h4>
                                                <p className="text-sm text-red-700 mt-1">
                                                    Once you delete your account, all of your data will be permanently deleted. 
                                                    This action cannot be undone.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button variant="destructive">
                                                <Trash2 className="h-4 w-4 mr-2" />
                                                Delete Account
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be undone. This will permanently delete your account
                                                    and remove all your data from our servers.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <div className="space-y-4">
                                                <div className="space-y-2">
                                                    <Label htmlFor="delete_password">
                                                        Enter your password to confirm
                                                    </Label>
                                                    <Input
                                                        id="delete_password"
                                                        type="password"
                                                        value={deleteData.password}
                                                        onChange={(e) => setDeleteData("password", e.target.value)}
                                                        placeholder="Enter your password"
                                                        className={deleteErrors.password ? "border-red-500" : ""}
                                                    />
                                                    {deleteErrors.password && (
                                                        <p className="text-sm text-red-600">{deleteErrors.password}</p>
                                                    )}
                                                </div>
                                            </div>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction 
                                                    onClick={handleDeleteAccount}
                                                    disabled={deleteProcessing}
                                                    className="bg-red-600 hover:bg-red-700"
                                                >
                                                    {deleteProcessing ? "Deleting..." : "Delete Account"}
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </AdminLayout>
    );
}
