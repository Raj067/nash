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
    ToggleLeft,
    ToggleRight,
    Filter,
    Download,
    Mail,
    Users,
    UserCheck,
    UserX,
    Calendar,
    TrendingUp,
} from "lucide-react";

interface NewsletterSubscriber {
    id: number;
    email: string;
    ip_address: string;
    is_active: boolean;
    subscribed_at: string;
    unsubscribed_at: string | null;
    created_at: string;
    updated_at: string;
}

interface PaginatedSubscribers {
    data: NewsletterSubscriber[];
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
    today: number;
    this_week: number;
    this_month: number;
}

interface Props {
    subscribers: PaginatedSubscribers;
    stats: Stats;
    filters: {
        search?: string;
        status?: string;
        date_from?: string;
        date_to?: string;
    };
}

export default function Index({ subscribers, stats, filters }: Props) {
    const [selectedSubscribers, setSelectedSubscribers] = useState<number[]>([]);
    const [searchTerm, setSearchTerm] = useState(filters.search || "");
    const [selectedStatus, setSelectedStatus] = useState(filters.status || "");
    const [dateFrom, setDateFrom] = useState(filters.date_from || "");
    const [dateTo, setDateTo] = useState(filters.date_to || "");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(route("admin.newsletter-subscribers.index"), {
            search: searchTerm,
            status: selectedStatus,
            date_from: dateFrom,
            date_to: dateTo,
        });
    };

    const handleFilterChange = (type: string, value: string) => {
        const params: any = { search: searchTerm };

        if (type === "status") {
            const statusValue = value === "all" ? "" : value;
            setSelectedStatus(statusValue);
            if (statusValue) params.status = statusValue;
        }

        if (selectedStatus && type !== "status") params.status = selectedStatus;
        if (dateFrom) params.date_from = dateFrom;
        if (dateTo) params.date_to = dateTo;

        router.get(route("admin.newsletter-subscribers.index"), params);
    };

    const clearFilters = () => {
        setSearchTerm("");
        setSelectedStatus("");
        setDateFrom("");
        setDateTo("");
        router.get(route("admin.newsletter-subscribers.index"));
    };

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedSubscribers(subscribers.data.map((subscriber) => subscriber.id));
        } else {
            setSelectedSubscribers([]);
        }
    };

    const handleSelectSubscriber = (subscriberId: number, checked: boolean) => {
        if (checked) {
            setSelectedSubscribers([...selectedSubscribers, subscriberId]);
        } else {
            setSelectedSubscribers(selectedSubscribers.filter((id) => id !== subscriberId));
        }
    };

    const handleBulkAction = (action: string) => {
        if (selectedSubscribers.length === 0) return;

        router.post(
            route("admin.newsletter-subscribers.bulk-action"),
            {
                action,
                ids: selectedSubscribers,
            },
            {
                onSuccess: () => setSelectedSubscribers([]),
            }
        );
    };

    const handleDelete = (subscriberId: number) => {
        router.delete(route("admin.newsletter-subscribers.destroy", subscriberId));
    };

    const handleToggleStatus = (subscriberId: number) => {
        router.patch(route("admin.newsletter-subscribers.toggle-status", subscriberId));
    };

    const handleExport = () => {
        const params = new URLSearchParams({
            search: searchTerm,
            status: selectedStatus,
            date_from: dateFrom,
            date_to: dateTo,
        });
        
        window.open(route("admin.newsletter-subscribers.export") + "?" + params.toString());
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <AdminLayout>
            <Head title="Newsletter Subscribers Management" />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Newsletter Subscribers
                        </h1>
                        <p className="text-gray-600">
                            Manage newsletter subscriptions and email list
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" onClick={handleExport}>
                            <Download className="h-4 w-4 mr-2" />
                            Export CSV
                        </Button>
                        <Link href={route("admin.newsletter-subscribers.create")}>
                            <Button>
                                <Plus className="h-4 w-4 mr-2" />
                                Add Subscriber
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-blue-500" />
                                <div>
                                    <p className="text-2xl font-bold">{stats.total}</p>
                                    <p className="text-xs text-gray-500">Total</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <UserCheck className="h-4 w-4 text-green-500" />
                                <div>
                                    <p className="text-2xl font-bold">{stats.active}</p>
                                    <p className="text-xs text-gray-500">Active</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <UserX className="h-4 w-4 text-red-500" />
                                <div>
                                    <p className="text-2xl font-bold">{stats.inactive}</p>
                                    <p className="text-xs text-gray-500">Inactive</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-purple-500" />
                                <div>
                                    <p className="text-2xl font-bold">{stats.today}</p>
                                    <p className="text-xs text-gray-500">Today</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-orange-500" />
                                <div>
                                    <p className="text-2xl font-bold">{stats.this_week}</p>
                                    <p className="text-xs text-gray-500">This Week</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-indigo-500" />
                                <div>
                                    <p className="text-2xl font-bold">{stats.this_month}</p>
                                    <p className="text-xs text-gray-500">This Month</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Filters */}
                <div className="bg-white p-4 rounded-lg border space-y-4">
                    <form
                        onSubmit={handleSearch}
                        className="flex gap-4 items-end flex-wrap"
                    >
                        <div className="flex-1 min-w-64">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Search
                            </label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                <Input
                                    type="text"
                                    placeholder="Search by email or IP address..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Status
                            </label>
                            <Select
                                value={selectedStatus || "all"}
                                onValueChange={(value) =>
                                    handleFilterChange("status", value)
                                }
                            >
                                <SelectTrigger className="w-32">
                                    <SelectValue placeholder="All Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Status</SelectItem>
                                    <SelectItem value="active">Active</SelectItem>
                                    <SelectItem value="inactive">Inactive</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                From Date
                            </label>
                            <Input
                                type="date"
                                value={dateFrom}
                                onChange={(e) => setDateFrom(e.target.value)}
                                className="w-40"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                To Date
                            </label>
                            <Input
                                type="date"
                                value={dateTo}
                                onChange={(e) => setDateTo(e.target.value)}
                                className="w-40"
                            />
                        </div>
                        <Button type="submit">
                            <Filter className="h-4 w-4 mr-2" />
                            Filter
                        </Button>
                        <Button type="button" variant="outline" onClick={clearFilters}>
                            Clear
                        </Button>
                    </form>
                </div>

                {/* Bulk Actions */}
                {selectedSubscribers.length > 0 && (
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-blue-800">
                                {selectedSubscribers.length} subscriber(s) selected
                            </span>
                            <div className="flex gap-2">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleBulkAction("activate")}
                                >
                                    Activate
                                </Button>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleBulkAction("deactivate")}
                                >
                                    Deactivate
                                </Button>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button size="sm" variant="destructive">
                                            Delete
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>
                                                Delete Subscribers
                                            </AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Are you sure you want to delete{" "}
                                                {selectedSubscribers.length} subscriber(s)?
                                                This action cannot be undone.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction
                                                onClick={() => handleBulkAction("delete")}
                                            >
                                                Delete
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </div>
                    </div>
                )}

                {/* Table */}
                <div className="bg-white rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-12">
                                    <Checkbox
                                        checked={
                                            selectedSubscribers.length ===
                                                subscribers.data.length &&
                                            subscribers.data.length > 0
                                        }
                                        onCheckedChange={handleSelectAll}
                                    />
                                </TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>IP Address</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Subscribed At</TableHead>
                                <TableHead>Unsubscribed At</TableHead>
                                <TableHead className="w-24">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {subscribers.data.length === 0 ? (
                                <TableRow>
                                    <TableCell
                                        colSpan={7}
                                        className="text-center py-8 text-gray-500"
                                    >
                                        No newsletter subscribers found.{" "}
                                        <Link
                                            href={route("admin.newsletter-subscribers.create")}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Add your first subscriber
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                subscribers.data.map((subscriber) => (
                                    <TableRow key={subscriber.id}>
                                        <TableCell>
                                            <Checkbox
                                                checked={selectedSubscribers.includes(
                                                    subscriber.id
                                                )}
                                                onCheckedChange={(checked) =>
                                                    handleSelectSubscriber(
                                                        subscriber.id,
                                                        checked as boolean
                                                    )
                                                }
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            <div className="flex items-center gap-2">
                                                <Mail className="h-4 w-4 text-gray-400" />
                                                {subscriber.email}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <span className="font-mono text-sm text-gray-600">
                                                {subscriber.ip_address || "N/A"}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <button
                                                onClick={() =>
                                                    handleToggleStatus(subscriber.id)
                                                }
                                                className="flex items-center"
                                            >
                                                {subscriber.is_active ? (
                                                    <Badge className="bg-green-100 text-green-800">
                                                        <UserCheck className="h-3 w-3 mr-1" />
                                                        Active
                                                    </Badge>
                                                ) : (
                                                    <Badge className="bg-red-100 text-red-800">
                                                        <UserX className="h-3 w-3 mr-1" />
                                                        Inactive
                                                    </Badge>
                                                )}
                                            </button>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm text-gray-600">
                                                {formatDate(subscriber.subscribed_at)}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm text-gray-600">
                                                {subscriber.unsubscribed_at
                                                    ? formatDate(subscriber.unsubscribed_at)
                                                    : "—"}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" size="sm">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem asChild>
                                                        <Link
                                                            href={route(
                                                                "admin.newsletter-subscribers.show",
                                                                subscriber.id
                                                            )}
                                                        >
                                                            <Eye className="h-4 w-4 mr-2" />
                                                            View
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem asChild>
                                                        <Link
                                                            href={route(
                                                                "admin.newsletter-subscribers.edit",
                                                                subscriber.id
                                                            )}
                                                        >
                                                            <Edit className="h-4 w-4 mr-2" />
                                                            Edit
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        onClick={() =>
                                                            handleToggleStatus(subscriber.id)
                                                        }
                                                    >
                                                        {subscriber.is_active ? (
                                                            <ToggleLeft className="h-4 w-4 mr-2" />
                                                        ) : (
                                                            <ToggleRight className="h-4 w-4 mr-2" />
                                                        )}
                                                        {subscriber.is_active
                                                            ? "Deactivate"
                                                            : "Activate"}
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        onSelect={(e) => e.preventDefault()}
                                                    >
                                                        <AlertDialog>
                                                            <AlertDialogTrigger asChild>
                                                                <button className="flex items-center w-full">
                                                                    <Trash2 className="h-4 w-4 mr-2" />
                                                                    Delete
                                                                </button>
                                                            </AlertDialogTrigger>
                                                            <AlertDialogContent>
                                                                <AlertDialogHeader>
                                                                    <AlertDialogTitle>
                                                                        Delete Subscriber
                                                                    </AlertDialogTitle>
                                                                    <AlertDialogDescription>
                                                                        Are you sure you want to
                                                                        delete this newsletter
                                                                        subscriber? This action
                                                                        cannot be undone.
                                                                    </AlertDialogDescription>
                                                                </AlertDialogHeader>
                                                                <AlertDialogFooter>
                                                                    <AlertDialogCancel>
                                                                        Cancel
                                                                    </AlertDialogCancel>
                                                                    <AlertDialogAction
                                                                        onClick={() =>
                                                                            handleDelete(
                                                                                subscriber.id
                                                                            )
                                                                        }
                                                                    >
                                                                        Delete
                                                                    </AlertDialogAction>
                                                                </AlertDialogFooter>
                                                            </AlertDialogContent>
                                                        </AlertDialog>
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

                {/* Pagination */}
                {subscribers.last_page > 1 && (
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-700">
                            Showing {subscribers.from} to {subscribers.to} of{" "}
                            {subscribers.total} results
                        </div>
                        <div className="flex gap-2">
                            {Array.from(
                                { length: subscribers.last_page },
                                (_, i) => i + 1
                            ).map((page) => (
                                <Link
                                    key={page}
                                    href={route("admin.newsletter-subscribers.index", {
                                        page,
                                        search: searchTerm,
                                        status: selectedStatus,
                                        date_from: dateFrom,
                                        date_to: dateTo,
                                    })}
                                    className={`px-3 py-2 text-sm rounded-md ${
                                        page === subscribers.current_page
                                            ? "bg-blue-600 text-white"
                                            : "bg-white text-gray-700 border hover:bg-gray-50"
                                    }`}
                                >
                                    {page}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
