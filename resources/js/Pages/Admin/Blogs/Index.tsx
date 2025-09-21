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
    Star,
    StarOff,
    PenTool,
    Calendar,
    Users,
    TrendingUp,
    FileText,
    Bookmark,
} from "lucide-react";

interface Blog {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    featured_image: string | null;
    author: string;
    published_date: string;
    tags: string[];
    is_featured: boolean;
    is_published: boolean;
    views_count: number;
    sort_order: number;
    created_at: string;
    updated_at: string;
    reading_time: string;
    formatted_published_date: string;
}

interface PaginatedBlogs {
    data: Blog[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
}

interface Stats {
    total: number;
    published: number;
    featured: number;
    total_views: number;
    categories_count: number;
    this_month: number;
}

interface Props {
    blogs: PaginatedBlogs;
    categories: { [key: string]: string };
    stats: Stats;
    filters: {
        search?: string;
        category?: string;
        status?: string;
        featured?: string;
        date_from?: string;
        date_to?: string;
    };
}

export default function Index({ blogs, categories, stats, filters }: Props) {
    const [selectedBlogs, setSelectedBlogs] = useState<number[]>([]);
    const [searchTerm, setSearchTerm] = useState(filters.search || "");
    const [selectedCategory, setSelectedCategory] = useState(filters.category || "");
    const [selectedStatus, setSelectedStatus] = useState(filters.status || "");
    const [selectedFeatured, setSelectedFeatured] = useState(filters.featured || "");
    const [dateFrom, setDateFrom] = useState(filters.date_from || "");
    const [dateTo, setDateTo] = useState(filters.date_to || "");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(route("admin.blogs.index"), {
            search: searchTerm,
            category: selectedCategory,
            status: selectedStatus,
            featured: selectedFeatured,
            date_from: dateFrom,
            date_to: dateTo,
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
        }

        if (selectedCategory && type !== "category") params.category = selectedCategory;
        if (selectedStatus && type !== "status") params.status = selectedStatus;
        if (selectedFeatured && type !== "featured") params.featured = selectedFeatured;
        if (dateFrom) params.date_from = dateFrom;
        if (dateTo) params.date_to = dateTo;

        router.get(route("admin.blogs.index"), params);
    };

    const clearFilters = () => {
        setSearchTerm("");
        setSelectedCategory("");
        setSelectedStatus("");
        setSelectedFeatured("");
        setDateFrom("");
        setDateTo("");
        router.get(route("admin.blogs.index"));
    };

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedBlogs(blogs.data.map((blog) => blog.id));
        } else {
            setSelectedBlogs([]);
        }
    };

    const handleSelectBlog = (blogId: number, checked: boolean) => {
        if (checked) {
            setSelectedBlogs([...selectedBlogs, blogId]);
        } else {
            setSelectedBlogs(selectedBlogs.filter((id) => id !== blogId));
        }
    };

    const handleBulkAction = (action: string) => {
        if (selectedBlogs.length === 0) return;

        router.post(
            route("admin.blogs.bulk-action"),
            {
                action,
                ids: selectedBlogs,
            },
            {
                onSuccess: () => setSelectedBlogs([]),
            }
        );
    };

    const handleDelete = (blogId: number) => {
        router.delete(route("admin.blogs.destroy", blogId));
    };

    const handleToggleStatus = (blogId: number) => {
        router.patch(route("admin.blogs.toggle-status", blogId));
    };

    const handleToggleFeatured = (blogId: number) => {
        router.patch(route("admin.blogs.toggle-featured", blogId));
    };

    const truncateText = (text: string, length: number = 100) => {
        return text.length > length ? text.substring(0, length) + "..." : text;
    };

    const getCategoryBadgeColor = (category: string) => {
        const colors: { [key: string]: string } = {
            news: "bg-blue-100 text-blue-800",
            press_releases: "bg-green-100 text-green-800",
            speeches: "bg-purple-100 text-purple-800",
            events: "bg-orange-100 text-orange-800",
            newsletter: "bg-pink-100 text-pink-800",
            photo_gallery: "bg-indigo-100 text-indigo-800",
        };
        return colors[category] || "bg-gray-100 text-gray-800";
    };

    const getCategoryIcon = (category: string) => {
        const icons: { [key: string]: string } = {
            news: "📰",
            press_releases: "📄",
            speeches: "🎤",
            events: "📅",
            newsletter: "📧",
            photo_gallery: "📸",
        };
        return icons[category] || "📝";
    };

    const stripHtml = (html: string) => {
        const tmp = document.createElement("div");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    return (
        <AdminLayout>
            <Head title="Blog Management" />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Blog Management
                        </h1>
                        <p className="text-gray-600">
                            Create and manage blog posts, news, and articles
                        </p>
                    </div>
                    <Link href={route("admin.blogs.create")}>
                        <Button>
                            <Plus className="h-4 w-4 mr-2" />
                            New Blog Post
                        </Button>
                    </Link>
                </div>

                {/* Statistics Cards */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <PenTool className="h-4 w-4 text-blue-500" />
                                <div>
                                    <p className="text-2xl font-bold">{stats.total}</p>
                                    <p className="text-xs text-gray-500">Total Posts</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4 text-green-500" />
                                <div>
                                    <p className="text-2xl font-bold">{stats.published}</p>
                                    <p className="text-xs text-gray-500">Published</p>
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
                                <Eye className="h-4 w-4 text-purple-500" />
                                <div>
                                    <p className="text-2xl font-bold">{stats.total_views}</p>
                                    <p className="text-xs text-gray-500">Total Views</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Bookmark className="h-4 w-4 text-orange-500" />
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
                                <Calendar className="h-4 w-4 text-indigo-500" />
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
                    <form onSubmit={handleSearch} className="flex gap-4 items-end flex-wrap">
                        <div className="flex-1 min-w-64">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Search
                            </label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                <Input
                                    type="text"
                                    placeholder="Search posts, authors, or content..."
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
                                            {getCategoryIcon(key)} {label}
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
                                    <SelectItem value="published">Published</SelectItem>
                                    <SelectItem value="draft">Draft</SelectItem>
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
                {selectedBlogs.length > 0 && (
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-blue-800">
                                {selectedBlogs.length} post(s) selected
                            </span>
                            <div className="flex gap-2">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleBulkAction("publish")}
                                >
                                    Publish
                                </Button>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleBulkAction("unpublish")}
                                >
                                    Unpublish
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
                                            <AlertDialogTitle>Delete Blog Posts</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Are you sure you want to delete {selectedBlogs.length} blog post(s)?
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
                                            selectedBlogs.length === blogs.data.length &&
                                            blogs.data.length > 0
                                        }
                                        onCheckedChange={handleSelectAll}
                                    />
                                </TableHead>
                                <TableHead>Post</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Author</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Views</TableHead>
                                <TableHead>Published</TableHead>
                                <TableHead className="w-24">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {blogs.data.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={8} className="text-center py-8 text-gray-500">
                                        No blog posts found.{" "}
                                        <Link
                                            href={route("admin.blogs.create")}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Create your first blog post
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                blogs.data.map((blog) => (
                                    <TableRow key={blog.id}>
                                        <TableCell>
                                            <Checkbox
                                                checked={selectedBlogs.includes(blog.id)}
                                                onCheckedChange={(checked) =>
                                                    handleSelectBlog(blog.id, checked as boolean)
                                                }
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            <div className="flex items-start gap-3">
                                                {blog.featured_image ? (
                                                    <img
                                                        src={blog.featured_image}
                                                        alt={blog.title}
                                                        className="w-12 h-12 object-cover rounded"
                                                    />
                                                ) : (
                                                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                                                        <span className="text-lg">
                                                            {getCategoryIcon(blog.category)}
                                                        </span>
                                                    </div>
                                                )}
                                                <div className="flex-1">
                                                    <div className="font-medium flex items-center gap-2">
                                                        {truncateText(blog.title, 50)}
                                                        {blog.is_featured && (
                                                            <Star className="h-3 w-3 text-yellow-500" />
                                                        )}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {truncateText(stripHtml(blog.excerpt || blog.content), 80)}
                                                    </div>
                                                    <div className="text-xs text-gray-400 mt-1">
                                                        {blog.reading_time}
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge className={getCategoryBadgeColor(blog.category)}>
                                                {getCategoryIcon(blog.category)} {categories[blog.category]}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm">{blog.author}</span>
                                        </TableCell>
                                        <TableCell>
                                            <button
                                                onClick={() => handleToggleStatus(blog.id)}
                                                className="flex items-center"
                                            >
                                                {blog.is_published ? (
                                                    <Badge className="bg-green-100 text-green-800">
                                                        Published
                                                    </Badge>
                                                ) : (
                                                    <Badge className="bg-yellow-100 text-yellow-800">
                                                        Draft
                                                    </Badge>
                                                )}
                                            </button>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm font-medium">
                                                {blog.views_count}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-sm text-gray-600">
                                                {blog.formatted_published_date}
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
                                                        <Link href={route("admin.blogs.show", blog.id)}>
                                                            <Eye className="h-4 w-4 mr-2" />
                                                            View
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem asChild>
                                                        <Link href={route("admin.blogs.edit", blog.id)}>
                                                            <Edit className="h-4 w-4 mr-2" />
                                                            Edit
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        onClick={() => handleToggleStatus(blog.id)}
                                                    >
                                                        {blog.is_published ? (
                                                            <ToggleLeft className="h-4 w-4 mr-2" />
                                                        ) : (
                                                            <ToggleRight className="h-4 w-4 mr-2" />
                                                        )}
                                                        {blog.is_published ? "Unpublish" : "Publish"}
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        onClick={() => handleToggleFeatured(blog.id)}
                                                    >
                                                        {blog.is_featured ? (
                                                            <StarOff className="h-4 w-4 mr-2" />
                                                        ) : (
                                                            <Star className="h-4 w-4 mr-2" />
                                                        )}
                                                        {blog.is_featured ? "Unfeature" : "Feature"}
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
                                                                        Delete Blog Post
                                                                    </AlertDialogTitle>
                                                                    <AlertDialogDescription>
                                                                        Are you sure you want to delete this
                                                                        blog post? This action cannot be undone.
                                                                    </AlertDialogDescription>
                                                                </AlertDialogHeader>
                                                                <AlertDialogFooter>
                                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                                    <AlertDialogAction
                                                                        onClick={() => handleDelete(blog.id)}
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
                {blogs.last_page > 1 && (
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-700">
                            Showing {blogs.from} to {blogs.to} of {blogs.total} results
                        </div>
                        <div className="flex gap-2">
                            {Array.from({ length: blogs.last_page }, (_, i) => i + 1).map((page) => (
                                <Link
                                    key={page}
                                    href={route("admin.blogs.index", {
                                        page,
                                        search: searchTerm,
                                        category: selectedCategory,
                                        status: selectedStatus,
                                        featured: selectedFeatured,
                                        date_from: dateFrom,
                                        date_to: dateTo,
                                    })}
                                    className={`px-3 py-2 text-sm rounded-md ${
                                        page === blogs.current_page
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
