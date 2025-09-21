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
    MessageCircle,
    Star,
    Clock,
    CheckCircle,
    AlertCircle,
    Users,
    TrendingUp,
    Calendar,
    MessageSquare,
} from "lucide-react";

interface Feedback {
    id: number;
    type: string;
    name: string;
    email: string;
    phone: string | null;
    subject: string;
    message: string;
    rating: number | null;
    ip_address: string | null;
    status: string;
    admin_response: string | null;
    responded_at: string | null;
    created_at: string;
    updated_at: string;
}

interface PaginatedFeedback {
    data: Feedback[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
}

interface Stats {
    total: number;
    pending: number;
    resolved: number;
    complaints: number;
    compliments: number;
    suggestions: number;
    general: number;
    average_rating: number;
}

interface Props {
    feedback: PaginatedFeedback;
    types: { [key: string]: string };
    statuses: { [key: string]: string };
    stats: Stats;
    filters: {
        search?: string;
        type?: string;
        status?: string;
        rating?: string;
        date_from?: string;
        date_to?: string;
    };
}

export default function Index({ feedback, types, statuses, stats, filters }: Props) {
    const [selectedFeedback, setSelectedFeedback] = useState<number[]>([]);
    const [searchTerm, setSearchTerm] = useState(filters.search || "");
    const [selectedType, setSelectedType] = useState(filters.type || "");
    const [selectedStatus, setSelectedStatus] = useState(filters.status || "");
    const [selectedRating, setSelectedRating] = useState(filters.rating || "");
    const [dateFrom, setDateFrom] = useState(filters.date_from || "");
    const [dateTo, setDateTo] = useState(filters.date_to || "");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(route("admin.feedback.index"), {
            search: searchTerm,
            type: selectedType,
            status: selectedStatus,
            rating: selectedRating,
            date_from: dateFrom,
            date_to: dateTo,
        });
    };

    const handleFilterChange = (filterType: string, value: string) => {
        const params: any = { search: searchTerm };

        if (filterType === "type") {
            const typeValue = value === "all" ? "" : value;
            setSelectedType(typeValue);
            if (typeValue) params.type = typeValue;
        } else if (filterType === "status") {
            const statusValue = value === "all" ? "" : value;
            setSelectedStatus(statusValue);
            if (statusValue) params.status = statusValue;
        } else if (filterType === "rating") {
            const ratingValue = value === "all" ? "" : value;
            setSelectedRating(ratingValue);
            if (ratingValue) params.rating = ratingValue;
        }

        if (selectedType && filterType !== "type") params.type = selectedType;
        if (selectedStatus && filterType !== "status") params.status = selectedStatus;
        if (selectedRating && filterType !== "rating") params.rating = selectedRating;
        if (dateFrom) params.date_from = dateFrom;
        if (dateTo) params.date_to = dateTo;

        router.get(route("admin.feedback.index"), params);
    };

    const clearFilters = () => {
        setSearchTerm("");
        setSelectedType("");
        setSelectedStatus("");
        setSelectedRating("");
        setDateFrom("");
        setDateTo("");
        router.get(route("admin.feedback.index"));
    };

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedFeedback(feedback.data.map((item) => item.id));
        } else {
            setSelectedFeedback([]);
        }
    };

    const handleSelectFeedback = (feedbackId: number, checked: boolean) => {
        if (checked) {
            setSelectedFeedback([...selectedFeedback, feedbackId]);
        } else {
            setSelectedFeedback(selectedFeedback.filter((id) => id !== feedbackId));
        }
    };

    const handleBulkAction = (action: string) => {
        if (selectedFeedback.length === 0) return;

        router.post(
            route("admin.feedback.bulk-action"),
            {
                action,
                ids: selectedFeedback,
            },
            {
                onSuccess: () => setSelectedFeedback([]),
            }
        );
    };

    const handleDelete = (feedbackId: number) => {
        router.delete(route("admin.feedback.destroy", feedbackId));
    };

    const handleExport = () => {
        const params = new URLSearchParams({
            search: searchTerm,
            type: selectedType,
            status: selectedStatus,
            rating: selectedRating,
            date_from: dateFrom,
            date_to: dateTo,
        });
        window.open(`${route("admin.feedback.export")}?${params.toString()}`);
    };

    const truncateText = (text: string, length: number = 100) => {
        return text.length > length ? text.substring(0, length) + "..." : text;
    };

    const getTypeBadgeColor = (type: string) => {
        const colors: { [key: string]: string } = {
            complaint: "bg-red-100 text-red-800",
            compliment: "bg-green-100 text-green-800",
            suggestion: "bg-blue-100 text-blue-800",
            general: "bg-gray-100 text-gray-800",
        };
        return colors[type] || "bg-gray-100 text-gray-800";
    };

    const getStatusBadgeColor = (status: string) => {
        const colors: { [key: string]: string } = {
            pending: "bg-yellow-100 text-yellow-800",
            in_progress: "bg-blue-100 text-blue-800",
            resolved: "bg-green-100 text-green-800",
        };
        return colors[status] || "bg-gray-100 text-gray-800";
    };

    const getTypeIcon = (type: string) => {
        const icons: { [key: string]: string } = {
            complaint: "😞",
            compliment: "😊",
            suggestion: "💡",
            general: "💬",
        };
        return icons[type] || "💬";
    };

    const renderStars = (rating: number | null) => {
        if (!rating) return null;
        return (
            <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        className={`h-3 w-3 ${
                            star <= rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                        }`}
                    />
                ))}
                <span className="ml-1 text-xs text-gray-600">({rating})</span>
            </div>
        );
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <AdminLayout>
            <Head title="Feedback Management" />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Feedback Management
                        </h1>
                        <p className="text-gray-600">
                            Manage customer feedback, complaints, and suggestions
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={handleExport}>
                            <Download className="h-4 w-4 mr-2" />
                            Export CSV
                        </Button>
                        <Link href={route("admin.feedback.create")}>
                            <Button>
                                <Plus className="h-4 w-4 mr-2" />
                                Add Feedback
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-2 md:grid-cols-8 gap-4">
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <MessageCircle className="h-4 w-4 text-blue-500" />
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
                                <Clock className="h-4 w-4 text-yellow-500" />
                                <div>
                                    <p className="text-2xl font-bold">{stats.pending}</p>
                                    <p className="text-xs text-gray-500">Pending</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <div>
                                    <p className="text-2xl font-bold">{stats.resolved}</p>
                                    <p className="text-xs text-gray-500">Resolved</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <AlertCircle className="h-4 w-4 text-red-500" />
                                <div>
                                    <p className="text-2xl font-bold">{stats.complaints}</p>
                                    <p className="text-xs text-gray-500">Complaints</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <MessageSquare className="h-4 w-4 text-green-500" />
                                <div>
                                    <p className="text-2xl font-bold">{stats.compliments}</p>
                                    <p className="text-xs text-gray-500">Compliments</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-blue-500" />
                                <div>
                                    <p className="text-2xl font-bold">{stats.suggestions}</p>
                                    <p className="text-xs text-gray-500">Suggestions</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-purple-500" />
                                <div>
                                    <p className="text-2xl font-bold">{stats.general}</p>
                                    <p className="text-xs text-gray-500">General</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Star className="h-4 w-4 text-yellow-500" />
                                <div>
                                    <p className="text-2xl font-bold">
                                        {stats.average_rating && typeof stats.average_rating === 'number' ? stats.average_rating.toFixed(1) : 'N/A'}
                                    </p>
                                    <p className="text-xs text-gray-500">Avg Rating</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Filters */}
                <div className="bg-white p-4 rounded-lg border space-y-4">
                    <form onSubmit={handleSearch} className="flex gap-4 items-end flex-wrap">
                        <div className="flex-1 min-w-64">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Search
                            </label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                <Input
                                    type="text"
                                    placeholder="Search feedback, names, emails..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Type
                            </label>
                            <Select
                                value={selectedType || "all"}
                                onValueChange={(value) => handleFilterChange("type", value)}
                            >
                                <SelectTrigger className="w-40">
                                    <SelectValue placeholder="All Types" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Types</SelectItem>
                                    {Object.entries(types).map(([key, label]) => (
                                        <SelectItem key={key} value={key}>
                                            {getTypeIcon(key)} {label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Status
                            </label>
                            <Select
                                value={selectedStatus || "all"}
                                onValueChange={(value) => handleFilterChange("status", value)}
                            >
                                <SelectTrigger className="w-32">
                                    <SelectValue placeholder="All Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Status</SelectItem>
                                    {Object.entries(statuses).map(([key, label]) => (
                                        <SelectItem key={key} value={key}>
                                            {label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Rating
                            </label>
                            <Select
                                value={selectedRating || "all"}
                                onValueChange={(value) => handleFilterChange("rating", value)}
                            >
                                <SelectTrigger className="w-32">
                                    <SelectValue placeholder="All Ratings" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Ratings</SelectItem>
                                    {[5, 4, 3, 2, 1].map((rating) => (
                                        <SelectItem key={rating} value={rating.toString()}>
                                            {rating} Star{rating !== 1 ? 's' : ''}
                                        </SelectItem>
                                    ))}
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
                {selectedFeedback.length > 0 && (
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-blue-800">
                                {selectedFeedback.length} feedback item(s) selected
                            </span>
                            <div className="flex gap-2">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleBulkAction("mark_pending")}
                                >
                                    Mark Pending
                                </Button>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleBulkAction("mark_in_progress")}
                                >
                                    Mark In Progress
                                </Button>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleBulkAction("mark_resolved")}
                                >
                                    Mark Resolved
                                </Button>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button size="sm" variant="destructive">
                                            Delete
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Delete Feedback</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Are you sure you want to delete {selectedFeedback.length} feedback item(s)?
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
                                            selectedFeedback.length === feedback.data.length &&
                                            feedback.data.length > 0
                                        }
                                        onCheckedChange={handleSelectAll}
                                    />
                                </TableHead>
                                <TableHead>Feedback</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Contact</TableHead>
                                <TableHead>Rating</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead className="w-24">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {feedback.data.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={8} className="text-center py-8 text-gray-500">
                                        No feedback found.{" "}
                                        <Link
                                            href={route("admin.feedback.create")}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Add your first feedback entry
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                feedback.data.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            <Checkbox
                                                checked={selectedFeedback.includes(item.id)}
                                                onCheckedChange={(checked) =>
                                                    handleSelectFeedback(item.id, checked as boolean)
                                                }
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            <div className="space-y-1">
                                                <div className="font-medium">
                                                    {truncateText(item.subject, 40)}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {truncateText(item.message, 60)}
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge className={getTypeBadgeColor(item.type)}>
                                                {getTypeIcon(item.type)} {types[item.type]}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <div className="space-y-1">
                                                <div className="font-medium text-sm">{item.name}</div>
                                                <div className="text-xs text-gray-500">{item.email}</div>
                                                {item.phone && (
                                                    <div className="text-xs text-gray-500">{item.phone}</div>
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            {renderStars(item.rating)}
                                        </TableCell>
                                        <TableCell>
                                            <Badge className={getStatusBadgeColor(item.status)}>
                                                {statuses[item.status]}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm text-gray-600">
                                                {formatDate(item.created_at)}
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
                                                        <Link href={route("admin.feedback.show", item.id)}>
                                                            <Eye className="h-4 w-4 mr-2" />
                                                            View
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem asChild>
                                                        <Link href={route("admin.feedback.edit", item.id)}>
                                                            <Edit className="h-4 w-4 mr-2" />
                                                            Edit
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
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
                                                                        Delete Feedback
                                                                    </AlertDialogTitle>
                                                                    <AlertDialogDescription>
                                                                        Are you sure you want to delete this
                                                                        feedback? This action cannot be undone.
                                                                    </AlertDialogDescription>
                                                                </AlertDialogHeader>
                                                                <AlertDialogFooter>
                                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                    <AlertDialogAction
                                                                        onClick={() => handleDelete(item.id)}
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
                {feedback.last_page > 1 && (
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-700">
                            Showing {feedback.from} to {feedback.to} of {feedback.total} results
                        </div>
                        <div className="flex gap-2">
                            {Array.from({ length: feedback.last_page }, (_, i) => i + 1).map((page) => (
                                <Link
                                    key={page}
                                    href={route("admin.feedback.index", {
                                        page,
                                        search: searchTerm,
                                        type: selectedType,
                                        status: selectedStatus,
                                        rating: selectedRating,
                                        date_from: dateFrom,
                                        date_to: dateTo,
                                    })}
                                    className={`px-3 py-2 text-sm rounded-md ${
                                        page === feedback.current_page
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
