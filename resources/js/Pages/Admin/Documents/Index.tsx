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
    File,
    Star,
    StarOff,
    FileText,
    Users,
    Calendar,
    TrendingUp,
} from "lucide-react";

interface Document {
    id: number;
    title: string;
    description: string;
    category: string;
    file_type: string;
    file_path: string | null;
    file_url: string | null;
    file_size: number | null;
    published_date: string;
    author: string;
    version: string | null;
    tags: string[];
    is_featured: boolean;
    is_active: boolean;
    download_count: number;
    sort_order: number;
    created_at: string;
    updated_at: string;
    formatted_file_size: string | null;
    file_icon: string;
}

interface PaginatedDocuments {
    data: Document[];
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
    featured: number;
    total_downloads: number;
    categories_count: number;
    file_types_count: number;
}

interface Props {
    documents: PaginatedDocuments;
    categories: { [key: string]: string };
    fileTypes: string[];
    stats: Stats;
    filters: {
        search?: string;
        category?: string;
        status?: string;
        featured?: string;
        file_type?: string;
    };
}

export default function Index({ documents, categories, fileTypes, stats, filters }: Props) {
    const [selectedDocuments, setSelectedDocuments] = useState<number[]>([]);
    const [searchTerm, setSearchTerm] = useState(filters.search || "");
    const [selectedCategory, setSelectedCategory] = useState(filters.category || "");
    const [selectedStatus, setSelectedStatus] = useState(filters.status || "");
    const [selectedFeatured, setSelectedFeatured] = useState(filters.featured || "");
    const [selectedFileType, setSelectedFileType] = useState(filters.file_type || "");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(route("admin.documents.index"), {
            search: searchTerm,
            category: selectedCategory,
            status: selectedStatus,
            featured: selectedFeatured,
            file_type: selectedFileType,
        });
    };

    const handleFilterChange = (type: string, value: string) => {
        const params: any = { search: searchTerm };

        if (type === "category") {
            const categoryValue = value === "all" ? "" : value;
            setSelectedCategory(categoryValue);
            if (categoryValue) params.category = categoryValue;
        } else if (type === "status") {
            const statusValue = value === "all" ? "" : value;
            setSelectedStatus(statusValue);
            if (statusValue) params.status = statusValue;
        } else if (type === "featured") {
            const featuredValue = value === "all" ? "" : value;
            setSelectedFeatured(featuredValue);
            if (featuredValue) params.featured = featuredValue;
        } else if (type === "file_type") {
            const fileTypeValue = value === "all" ? "" : value;
            setSelectedFileType(fileTypeValue);
            if (fileTypeValue) params.file_type = fileTypeValue;
        }

        if (selectedCategory && type !== "category") params.category = selectedCategory;
        if (selectedStatus && type !== "status") params.status = selectedStatus;
        if (selectedFeatured && type !== "featured") params.featured = selectedFeatured;
        if (selectedFileType && type !== "file_type") params.file_type = selectedFileType;

        router.get(route("admin.documents.index"), params);
    };

    const clearFilters = () => {
        setSearchTerm("");
        setSelectedCategory("");
        setSelectedStatus("");
        setSelectedFeatured("");
        setSelectedFileType("");
        router.get(route("admin.documents.index"));
    };

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedDocuments(documents.data.map((doc) => doc.id));
        } else {
            setSelectedDocuments([]);
        }
    };

    const handleSelectDocument = (docId: number, checked: boolean) => {
        if (checked) {
            setSelectedDocuments([...selectedDocuments, docId]);
        } else {
            setSelectedDocuments(selectedDocuments.filter((id) => id !== docId));
        }
    };

    const handleBulkAction = (action: string) => {
        if (selectedDocuments.length === 0) return;

        router.post(
            route("admin.documents.bulk-action"),
            {
                action,
                ids: selectedDocuments,
            },
            {
                onSuccess: () => setSelectedDocuments([]),
            }
        );
    };

    const handleDelete = (docId: number) => {
        router.delete(route("admin.documents.destroy", docId));
    };

    const handleToggleStatus = (docId: number) => {
        router.patch(route("admin.documents.toggle-status", docId));
    };

    const handleToggleFeatured = (docId: number) => {
        router.patch(route("admin.documents.toggle-featured", docId));
    };

    const handleDownload = (docId: number) => {
        window.open(route("admin.documents.download", docId));
    };

    const truncateText = (text: string, length: number = 100) => {
        return text.length > length ? text.substring(0, length) + "..." : text;
    };

    const getCategoryBadgeColor = (category: string) => {
        const colors: { [key: string]: string } = {
            plans_strategic: "bg-blue-100 text-blue-800",
            policy: "bg-green-100 text-green-800",
            guidelines: "bg-purple-100 text-purple-800",
            reports: "bg-orange-100 text-orange-800",
            manuals_sops: "bg-pink-100 text-pink-800",
            frameworks: "bg-indigo-100 text-indigo-800",
            iec_sbc: "bg-yellow-100 text-yellow-800",
            databases: "bg-gray-100 text-gray-800",
        };
        return colors[category] || "bg-gray-100 text-gray-800";
    };

    const getFileTypeIcon = (fileType: string) => {
        switch (fileType.toLowerCase()) {
            case 'pdf': return '📄';
            case 'doc':
            case 'docx': return '📝';
            case 'xls':
            case 'xlsx': return '📊';
            case 'ppt':
            case 'pptx': return '📋';
            case 'zip':
            case 'rar': return '📦';
            case 'jpg':
            case 'jpeg':
            case 'png':
            case 'gif': return '🖼️';
            case 'url': return '🔗';
            default: return '📁';
        }
    };

    return (
        <AdminLayout>
            <Head title="Document Management" />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Document Management
                        </h1>
                        <p className="text-gray-600">
                            Manage documents, files, and resources
                        </p>
                    </div>
                    <Link href={route("admin.documents.create")}>
                        <Button>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Document
                        </Button>
                    </Link>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <File className="h-4 w-4 text-blue-500" />
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
                                <FileText className="h-4 w-4 text-green-500" />
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
                                <Star className="h-4 w-4 text-yellow-500" />
                                <div>
                                    <p className="text-2xl font-bold">{stats.featured}</p>
                                    <p className="text-xs text-gray-500">Featured</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Download className="h-4 w-4 text-purple-500" />
                                <div>
                                    <p className="text-2xl font-bold">{stats.total_downloads}</p>
                                    <p className="text-xs text-gray-500">Downloads</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Users className="h-4 w-4 text-orange-500" />
                                <div>
                                    <p className="text-2xl font-bold">{stats.categories_count}</p>
                                    <p className="text-xs text-gray-500">Categories</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-indigo-500" />
                                <div>
                                    <p className="text-2xl font-bold">{stats.file_types_count}</p>
                                    <p className="text-xs text-gray-500">File Types</p>
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
                                    placeholder="Search documents, authors, or tags..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Category
                            </label>
                            <Select
                                value={selectedCategory || "all"}
                                onValueChange={(value) => handleFilterChange("category", value)}
                            >
                                <SelectTrigger className="w-40">
                                    <SelectValue placeholder="All Categories" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Categories</SelectItem>
                                    {Object.entries(categories).map(([key, label]) => (
                                        <SelectItem key={key} value={key}>
                                            {label}
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
                                    <SelectItem value="active">Active</SelectItem>
                                    <SelectItem value="inactive">Inactive</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Featured
                            </label>
                            <Select
                                value={selectedFeatured || "all"}
                                onValueChange={(value) => handleFilterChange("featured", value)}
                            >
                                <SelectTrigger className="w-32">
                                    <SelectValue placeholder="All" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="yes">Featured</SelectItem>
                                    <SelectItem value="no">Regular</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                File Type
                            </label>
                            <Select
                                value={selectedFileType || "all"}
                                onValueChange={(value) => handleFilterChange("file_type", value)}
                            >
                                <SelectTrigger className="w-32">
                                    <SelectValue placeholder="All Types" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Types</SelectItem>
                                    {fileTypes.map((type) => (
                                        <SelectItem key={type} value={type}>
                                            {type.toUpperCase()}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
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
                {selectedDocuments.length > 0 && (
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-blue-800">
                                {selectedDocuments.length} document(s) selected
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
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleBulkAction("feature")}
                                >
                                    Feature
                                </Button>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleBulkAction("unfeature")}
                                >
                                    Unfeature
                                </Button>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button size="sm" variant="destructive">
                                            Delete
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Delete Documents</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Are you sure you want to delete {selectedDocuments.length} document(s)?
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
                                            selectedDocuments.length === documents.data.length &&
                                            documents.data.length > 0
                                        }
                                        onCheckedChange={handleSelectAll}
                                    />
                                </TableHead>
                                <TableHead>Document</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Author</TableHead>
                                <TableHead>File Type</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Downloads</TableHead>
                                <TableHead className="w-24">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {documents.data.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={8} className="text-center py-8 text-gray-500">
                                        No documents found.{" "}
                                        <Link
                                            href={route("admin.documents.create")}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Create your first document
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                documents.data.map((document) => (
                                    <TableRow key={document.id}>
                                        <TableCell>
                                            <Checkbox
                                                checked={selectedDocuments.includes(document.id)}
                                                onCheckedChange={(checked) =>
                                                    handleSelectDocument(document.id, checked as boolean)
                                                }
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            <div className="flex items-start gap-3">
                                                <span className="text-lg">
                                                    {getFileTypeIcon(document.file_type)}
                                                </span>
                                                <div>
                                                    <div className="font-medium flex items-center gap-2">
                                                        {truncateText(document.title, 50)}
                                                        {document.is_featured && (
                                                            <Star className="h-3 w-3 text-yellow-500" />
                                                        )}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {truncateText(document.description, 80)}
                                                    </div>
                                                    {document.formatted_file_size && (
                                                        <div className="text-xs text-gray-400">
                                                            {document.formatted_file_size}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge className={getCategoryBadgeColor(document.category)}>
                                                {categories[document.category] || document.category}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm">{document.author}</span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                                                {document.file_type.toUpperCase()}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <button
                                                onClick={() => handleToggleStatus(document.id)}
                                                className="flex items-center"
                                            >
                                                {document.is_active ? (
                                                    <Badge className="bg-green-100 text-green-800">
                                                        Active
                                                    </Badge>
                                                ) : (
                                                    <Badge className="bg-red-100 text-red-800">
                                                        Inactive
                                                    </Badge>
                                                )}
                                            </button>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm font-medium">
                                                {document.download_count}
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
                                                        <Link href={route("admin.documents.show", document.id)}>
                                                            <Eye className="h-4 w-4 mr-2" />
                                                            View
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem asChild>
                                                        <Link href={route("admin.documents.edit", document.id)}>
                                                            <Edit className="h-4 w-4 mr-2" />
                                                            Edit
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    {document.file_path && (
                                                        <DropdownMenuItem
                                                            onClick={() => handleDownload(document.id)}
                                                        >
                                                            <Download className="h-4 w-4 mr-2" />
                                                            Download
                                                        </DropdownMenuItem>
                                                    )}
                                                    <DropdownMenuItem
                                                        onClick={() => handleToggleStatus(document.id)}
                                                    >
                                                        {document.is_active ? (
                                                            <ToggleLeft className="h-4 w-4 mr-2" />
                                                        ) : (
                                                            <ToggleRight className="h-4 w-4 mr-2" />
                                                        )}
                                                        {document.is_active ? "Deactivate" : "Activate"}
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        onClick={() => handleToggleFeatured(document.id)}
                                                    >
                                                        {document.is_featured ? (
                                                            <StarOff className="h-4 w-4 mr-2" />
                                                        ) : (
                                                            <Star className="h-4 w-4 mr-2" />
                                                        )}
                                                        {document.is_featured ? "Unfeature" : "Feature"}
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
                                                                        Delete Document
                                                                    </AlertDialogTitle>
                                                                    <AlertDialogDescription>
                                                                        Are you sure you want to delete this
                                                                        document? This action cannot be undone.
                                                                    </AlertDialogDescription>
                                                                </AlertDialogHeader>
                                                                <AlertDialogFooter>
                                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                    <AlertDialogAction
                                                                        onClick={() => handleDelete(document.id)}
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
                {documents.last_page > 1 && (
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-700">
                            Showing {documents.from} to {documents.to} of {documents.total} results
                        </div>
                        <div className="flex gap-2">
                            {Array.from({ length: documents.last_page }, (_, i) => i + 1).map((page) => (
                                <Link
                                    key={page}
                                    href={route("admin.documents.index", {
                                        page,
                                        search: searchTerm,
                                        category: selectedCategory,
                                        status: selectedStatus,
                                        featured: selectedFeatured,
                                        file_type: selectedFileType,
                                    })}
                                    className={`px-3 py-2 text-sm rounded-md ${
                                        page === documents.current_page
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
