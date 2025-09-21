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
    Play,
    Clock,
} from "lucide-react";

interface Video {
    id: number;
    title: string;
    description: string;
    youtube_url: string;
    youtube_id: string;
    thumbnail_url: string;
    category: string;
    duration: number;
    is_featured: boolean;
    is_active: boolean;
    sort_order: number;
    created_at: string;
    updated_at: string;
}

interface PaginatedVideos {
    data: Video[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
}

interface Props {
    videos: PaginatedVideos;
    categories: string[];
    filters: {
        search?: string;
        category?: string;
        status?: string;
        featured?: string;
    };
}

export default function Index({ videos, categories, filters }: Props) {
    const [selectedVideos, setSelectedVideos] = useState<number[]>([]);
    const [searchTerm, setSearchTerm] = useState(filters.search || "");
    const [selectedCategory, setSelectedCategory] = useState(
        filters.category || ""
    );
    const [selectedStatus, setSelectedStatus] = useState(filters.status || "");
    const [selectedFeatured, setSelectedFeatured] = useState(
        filters.featured || ""
    );

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(route("admin.videos.index"), {
            search: searchTerm,
            category: selectedCategory,
            status: selectedStatus,
            featured: selectedFeatured,
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

        if (selectedCategory && type !== "category")
            params.category = selectedCategory;
        if (selectedStatus && type !== "status") params.status = selectedStatus;
        if (selectedFeatured && type !== "featured")
            params.featured = selectedFeatured;

        router.get(route("admin.videos.index"), params);
    };

    const clearFilters = () => {
        setSearchTerm("");
        setSelectedCategory("");
        setSelectedStatus("");
        setSelectedFeatured("");
        router.get(route("admin.videos.index"));
    };

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedVideos(videos.data.map((video) => video.id));
        } else {
            setSelectedVideos([]);
        }
    };

    const handleSelectVideo = (videoId: number, checked: boolean) => {
        if (checked) {
            setSelectedVideos([...selectedVideos, videoId]);
        } else {
            setSelectedVideos(selectedVideos.filter((id) => id !== videoId));
        }
    };

    const handleBulkAction = (action: string) => {
        if (selectedVideos.length === 0) return;

        router.post(
            route("admin.videos.bulk-action"),
            {
                action,
                ids: selectedVideos,
            },
            {
                onSuccess: () => setSelectedVideos([]),
            }
        );
    };

    const handleDelete = (videoId: number) => {
        router.delete(route("admin.videos.destroy", videoId));
    };

    const handleToggleStatus = (videoId: number) => {
        router.patch(route("admin.videos.toggle-status", videoId));
    };

    const handleToggleFeatured = (videoId: number) => {
        router.patch(route("admin.videos.toggle-featured", videoId));
    };

    const truncateText = (text: string, length: number = 100) => {
        return text.length > length ? text.substring(0, length) + "..." : text;
    };

    const formatDuration = (seconds: number) => {
        if (!seconds) return "N/A";
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
    };

    const getCategoryBadgeColor = (category: string) => {
        const colors: { [key: string]: string } = {
            prevention: "bg-blue-100 text-blue-800",
            awareness: "bg-green-100 text-green-800",
            treatment: "bg-purple-100 text-purple-800",
            community: "bg-orange-100 text-orange-800",
            education: "bg-pink-100 text-pink-800",
            training: "bg-gray-100 text-gray-800",
        };
        return colors[category] || "bg-gray-100 text-gray-800";
    };

    return (
        <AdminLayout>
            <Head title="Video Management" />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Video Management
                        </h1>
                        <p className="text-gray-600">
                            Manage YouTube videos and educational content
                        </p>
                    </div>
                    <Link href={route("admin.videos.create")}>
                        <Button>
                            <Plus className="h-4 w-4 mr-2" />
                            Add Video
                        </Button>
                    </Link>
                </div>

                {/* Filters */}
                <div className="bg-white p-4 rounded-lg border space-y-4">
                    <form
                        onSubmit={handleSearch}
                        className="flex gap-4 items-end"
                    >
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Search
                            </label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                <Input
                                    type="text"
                                    placeholder="Search videos, descriptions, or categories..."
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
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
                                onValueChange={(value) =>
                                    handleFilterChange("category", value)
                                }
                            >
                                <SelectTrigger className="w-40">
                                    <SelectValue placeholder="All Categories" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">
                                        All Categories
                                    </SelectItem>
                                    {categories.map((category) => (
                                        <SelectItem
                                            key={category}
                                            value={category}
                                        >
                                            {category.charAt(0).toUpperCase() +
                                                category.slice(1)}
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
                                onValueChange={(value) =>
                                    handleFilterChange("status", value)
                                }
                            >
                                <SelectTrigger className="w-32">
                                    <SelectValue placeholder="All Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">
                                        All Status
                                    </SelectItem>
                                    <SelectItem value="active">
                                        Active
                                    </SelectItem>
                                    <SelectItem value="inactive">
                                        Inactive
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Featured
                            </label>
                            <Select
                                value={selectedFeatured || "all"}
                                onValueChange={(value) =>
                                    handleFilterChange("featured", value)
                                }
                            >
                                <SelectTrigger className="w-32">
                                    <SelectValue placeholder="All Videos" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">
                                        All Videos
                                    </SelectItem>
                                    <SelectItem value="yes">
                                        Featured
                                    </SelectItem>
                                    <SelectItem value="no">
                                        Not Featured
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button type="submit">
                            <Filter className="h-4 w-4 mr-2" />
                            Filter
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={clearFilters}
                        >
                            Clear
                        </Button>
                    </form>
                </div>

                {/* Bulk Actions */}
                {selectedVideos.length > 0 && (
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-blue-800">
                                {selectedVideos.length} video(s) selected
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
                                    onClick={() =>
                                        handleBulkAction("deactivate")
                                    }
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
                                            <AlertDialogTitle>
                                                Delete Videos
                                            </AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Are you sure you want to delete{" "}
                                                {selectedVideos.length} video(s)?
                                                This action cannot be undone.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>
                                                Cancel
                                            </AlertDialogCancel>
                                            <AlertDialogAction
                                                onClick={() =>
                                                    handleBulkAction("delete")
                                                }
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
                                            selectedVideos.length ===
                                                videos.data.length &&
                                            videos.data.length > 0
                                        }
                                        onCheckedChange={handleSelectAll}
                                    />
                                </TableHead>
                                <TableHead className="w-20">Thumbnail</TableHead>
                                <TableHead>Title</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Duration</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Featured</TableHead>
                                <TableHead>Sort Order</TableHead>
                                <TableHead className="w-24">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {videos.data.length === 0 ? (
                                <TableRow>
                                    <TableCell
                                        colSpan={9}
                                        className="text-center py-8 text-gray-500"
                                    >
                                        No videos found.{" "}
                                        <Link
                                            href={route("admin.videos.create")}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Create your first video
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                videos.data.map((video) => (
                                    <TableRow key={video.id}>
                                        <TableCell>
                                            <Checkbox
                                                checked={selectedVideos.includes(
                                                    video.id
                                                )}
                                                onCheckedChange={(checked) =>
                                                    handleSelectVideo(
                                                        video.id,
                                                        checked as boolean
                                                    )
                                                }
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <div className="relative w-16 h-12 bg-gray-100 rounded overflow-hidden">
                                                <img
                                                    src={`https://img.youtube.com/vi/${video.youtube_id}/mqdefault.jpg`}
                                                    alt={video.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <Play className="h-4 w-4 text-white opacity-80" />
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            <div>
                                                <div className="font-medium">
                                                    {truncateText(video.title, 50)}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {truncateText(video.description, 60)}
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge
                                                className={getCategoryBadgeColor(
                                                    video.category
                                                )}
                                            >
                                                {video.category
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    video.category.slice(1)}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-3 w-3 text-gray-400" />
                                                <span className="text-sm">
                                                    {formatDuration(video.duration)}
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <button
                                                onClick={() =>
                                                    handleToggleStatus(video.id)
                                                }
                                                className="flex items-center"
                                            >
                                                {video.is_active ? (
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
                                            <button
                                                onClick={() =>
                                                    handleToggleFeatured(video.id)
                                                }
                                                className="flex items-center"
                                            >
                                                {video.is_featured ? (
                                                    <Badge className="bg-yellow-100 text-yellow-800">
                                                        <Star className="h-3 w-3 mr-1" />
                                                        Featured
                                                    </Badge>
                                                ) : (
                                                    <Badge className="bg-gray-100 text-gray-800">
                                                        <StarOff className="h-3 w-3 mr-1" />
                                                        Regular
                                                    </Badge>
                                                )}
                                            </button>
                                        </TableCell>
                                        <TableCell>{video.sort_order}</TableCell>
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
                                                                "admin.videos.show",
                                                                video.id
                                                            )}
                                                        >
                                                            <Eye className="h-4 w-4 mr-2" />
                                                            View
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem asChild>
                                                        <Link
                                                            href={route(
                                                                "admin.videos.edit",
                                                                video.id
                                                            )}
                                                        >
                                                            <Edit className="h-4 w-4 mr-2" />
                                                            Edit
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        onClick={() =>
                                                            handleToggleStatus(
                                                                video.id
                                                            )
                                                        }
                                                    >
                                                        {video.is_active ? (
                                                            <ToggleLeft className="h-4 w-4 mr-2" />
                                                        ) : (
                                                            <ToggleRight className="h-4 w-4 mr-2" />
                                                        )}
                                                        {video.is_active
                                                            ? "Deactivate"
                                                            : "Activate"}
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        onClick={() =>
                                                            handleToggleFeatured(
                                                                video.id
                                                            )
                                                        }
                                                    >
                                                        {video.is_featured ? (
                                                            <StarOff className="h-4 w-4 mr-2" />
                                                        ) : (
                                                            <Star className="h-4 w-4 mr-2" />
                                                        )}
                                                        {video.is_featured
                                                            ? "Unfeature"
                                                            : "Feature"}
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        onSelect={(e) =>
                                                            e.preventDefault()
                                                        }
                                                    >
                                                        <AlertDialog>
                                                            <AlertDialogTrigger
                                                                asChild
                                                            >
                                                                <button className="flex items-center w-full">
                                                                    <Trash2 className="h-4 w-4 mr-2" />
                                                                    Delete
                                                                </button>
                                                            </AlertDialogTrigger>
                                                            <AlertDialogContent>
                                                                <AlertDialogHeader>
                                                                    <AlertDialogTitle>
                                                                        Delete
                                                                        Video
                                                                    </AlertDialogTitle>
                                                                    <AlertDialogDescription>
                                                                        Are you
                                                                        sure you
                                                                        want to
                                                                        delete
                                                                        this
                                                                        video?
                                                                        This
                                                                        action
                                                                        cannot
                                                                        be
                                                                        undone.
                                                                    </AlertDialogDescription>
                                                                </AlertDialogHeader>
                                                                <AlertDialogFooter>
                                                                    <AlertDialogCancel>
                                                                        Cancel
                                                                    </AlertDialogCancel>
                                                                    <AlertDialogAction
                                                                        onClick={() =>
                                                                            handleDelete(
                                                                                video.id
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
                {videos.last_page > 1 && (
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-700">
                            Showing {videos.from} to {videos.to} of {videos.total}{" "}
                            results
                        </div>
                        <div className="flex gap-2">
                            {Array.from(
                                { length: videos.last_page },
                                (_, i) => i + 1
                            ).map((page) => (
                                <Link
                                    key={page}
                                    href={route("admin.videos.index", {
                                        page,
                                        search: searchTerm,
                                        category: selectedCategory,
                                        status: selectedStatus,
                                        featured: selectedFeatured,
                                    })}
                                    className={`px-3 py-2 text-sm rounded-md ${
                                        page === videos.current_page
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
