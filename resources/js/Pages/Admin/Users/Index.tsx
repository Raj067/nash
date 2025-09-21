import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Badge } from "@/Components/ui/badge";
import { Checkbox } from "@/Components/ui/checkbox";
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
    Plus,
    Search,
    MoreHorizontal,
    Edit,
    Trash2,
    Eye,
    Filter,
    Download,
    Users,
    UserCheck,
    UserX,
    Shield,
    Clock,
    CheckCircle,
    XCircle,
    Calendar,
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
    last_login_ip: string | null;
    created_at: string;
    updated_at: string;
    role_display_name: string;
    status_display_name: string;
}

interface PaginatedUsers {
    data: User[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
}

interface Stats {
    total: number;
    active: number;
    inactive: number;
    admins: number;
    managers: number;
    editors: number;
    users: number;
    verified: number;
    unverified: number;
}

interface Props {
    users: PaginatedUsers;
    roles: { [key: string]: string };
    statuses: { [key: string]: string };
    stats: Stats;
    filters: {
        search?: string;
        role?: string;
        status?: string;
        verified?: string;
        date_from?: string;
        date_to?: string;
    };
}

export default function Index({
    users,
    roles,
    statuses,
    stats,
    filters,
}: Props) {
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
    const [searchTerm, setSearchTerm] = useState(filters.search || "");

    const handleExport = () => {
        window.open(route("admin.users.export"));
    };

    return (
        <AdminLayout>
            <Head title="User Management" />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            User Management
                        </h1>
                        <p className="text-gray-600">
                            Manage system users, roles, and permissions
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={handleExport}>
                            <Download className="h-4 w-4 mr-2" />
                            Export CSV
                        </Button>
                        <Link href={route("admin.users.create")}>
                            <Button>
                                <Plus className="h-4 w-4 mr-2" />
                                Add User
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-2 md:grid-cols-9 gap-4">
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-blue-500" />
                                <div>
                                    <p className="text-2xl font-bold">
                                        {stats.total}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Total
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <UserCheck className="h-4 w-4 text-green-500" />
                                <div>
                                    <p className="text-2xl font-bold">
                                        {stats.active}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Active
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <UserX className="h-4 w-4 text-yellow-500" />
                                <div>
                                    <p className="text-2xl font-bold">
                                        {stats.inactive}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Inactive
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Shield className="h-4 w-4 text-red-500" />
                                <div>
                                    <p className="text-2xl font-bold">
                                        {stats.admins}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Admins
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-purple-500" />
                                <div>
                                    <p className="text-2xl font-bold">
                                        {stats.managers}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Managers
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Edit className="h-4 w-4 text-blue-500" />
                                <div>
                                    <p className="text-2xl font-bold">
                                        {stats.editors}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Editors
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-gray-500" />
                                <div>
                                    <p className="text-2xl font-bold">
                                        {stats.users}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Users
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <div>
                                    <p className="text-2xl font-bold">
                                        {stats.verified}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Verified
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <XCircle className="h-4 w-4 text-red-500" />
                                <div>
                                    <p className="text-2xl font-bold">
                                        {stats.unverified}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Unverified
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Basic Table for now - will be enhanced */}
                <div className="bg-white rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>User</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Verified</TableHead>
                                <TableHead>Last Login</TableHead>
                                <TableHead>Joined</TableHead>
                                <TableHead className="w-24">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.data.length === 0 ? (
                                <TableRow>
                                    <TableCell
                                        colSpan={7}
                                        className="text-center py-8 text-gray-500"
                                    >
                                        No users found.{" "}
                                        <Link
                                            href={route("admin.users.create")}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Add your first user
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                users.data.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell className="font-medium">
                                            <div className="flex items-center gap-3">
                                                {user.avatar ? (
                                                    <img
                                                        src={user.avatar}
                                                        alt={user.name}
                                                        className="w-10 h-10 rounded-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                                        <span className="text-sm font-medium text-gray-600">
                                                            {user.name
                                                                .charAt(0)
                                                                .toUpperCase()}
                                                        </span>
                                                    </div>
                                                )}
                                                <div>
                                                    <div className="font-medium">
                                                        {user.name}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {user.email}
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge className="bg-blue-100 text-blue-800">
                                                {user.role_display_name}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Badge className="bg-green-100 text-green-800">
                                                {user.status_display_name}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            {user.email_verified_at ? (
                                                <Badge className="bg-green-100 text-green-800">
                                                    Verified
                                                </Badge>
                                            ) : (
                                                <Badge className="bg-red-100 text-red-800">
                                                    Unverified
                                                </Badge>
                                            )}
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm text-gray-600">
                                                {user.last_login_at
                                                    ? new Date(
                                                          user.last_login_at
                                                      ).toLocaleDateString()
                                                    : "Never"}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm text-gray-600">
                                                {new Date(
                                                    user.created_at
                                                ).toLocaleDateString()}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                    >
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem asChild>
                                                        <Link
                                                            href={route(
                                                                "admin.users.show",
                                                                user.id
                                                            )}
                                                        >
                                                            <Eye className="h-4 w-4 mr-2" />
                                                            View
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem asChild>
                                                        <Link
                                                            href={route(
                                                                "admin.users.edit",
                                                                user.id
                                                            )}
                                                        >
                                                            <Edit className="h-4 w-4 mr-2" />
                                                            Edit
                                                        </Link>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AdminLayout>
    );
}
