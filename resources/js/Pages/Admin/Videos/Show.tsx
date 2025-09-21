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
    ToggleLeft,
    ToggleRight,
    Star,
    StarOff,
    Calendar,
    Hash,
    Tag,
    Clock,
    Play,
    ExternalLink,
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

interface Props {
    video: Video;
}

export default function Show({ video }: Props) {
    const handleDelete = () => {
        router.delete(route("admin.videos.destroy", video.id));
    };

    const handleToggleStatus = () => {
        router.patch(route("admin.videos.toggle-status", video.id));
    };

    const handleToggleFeatured = () => {
        router.patch(route("admin.videos.toggle-featured", video.id));
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

    const formatDuration = (seconds: number) => {
        if (!seconds) return "N/A";
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
    };

    return (
        <AdminLayout>
            <Head title={`Video - ${video.title.substring(0, 50)}...`} />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href={route("admin.videos.index")}>
                            <Button variant="outline" size="sm">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Videos
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                Video Details
                            </h1>
                            <p className="text-gray-600">
                                View and manage video information
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <a
                            href={video.youtube_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button variant="outline" size="sm">
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Watch on YouTube
                            </Button>
                        </a>
                        <Link href={route("admin.videos.edit", video.id)}>
                            <Button>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                            </Button>
                        </Link>
                        <Button variant="outline" onClick={handleToggleStatus}>
                            {video.is_active ? (
                                <ToggleLeft className="h-4 w-4 mr-2" />
                            ) : (
                                <ToggleRight className="h-4 w-4 mr-2" />
                            )}
                            {video.is_active ? "Deactivate" : "Activate"}
                        </Button>
                        <Button
                            variant="outline"
                            onClick={handleToggleFeatured}
                        >
                            {video.is_featured ? (
                                <StarOff className="h-4 w-4 mr-2" />
                            ) : (
                                <Star className="h-4 w-4 mr-2" />
                            )}
                            {video.is_featured ? "Unfeature" : "Feature"}
                        </Button>
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
                                        Delete Video
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Are you sure you want to delete this
                                        video? This action cannot be undone.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>
                                        Cancel
                                    </AlertDialogCancel>
                                    <AlertDialogAction onClick={handleDelete}>
                                        Delete
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>

                {/* Status and Metadata Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <div
                                    className={`w-3 h-3 rounded-full ${
                                        video.is_active
                                            ? "bg-green-500"
                                            : "bg-red-500"
                                    }`}
                                />
                                <span className="text-sm font-medium">
                                    {video.is_active ? "Active" : "Inactive"}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Tag className="h-4 w-4 text-gray-500" />
                                <Badge
                                    className={getCategoryBadgeColor(
                                        video.category
                                    )}
                                >
                                    {video.category.charAt(0).toUpperCase() +
                                        video.category.slice(1)}
                                </Badge>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">
                                    Duration: {formatDuration(video.duration)}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                {video.is_featured ? (
                                    <Star className="h-4 w-4 text-yellow-500" />
                                ) : (
                                    <StarOff className="h-4 w-4 text-gray-500" />
                                )}
                                <span className="text-sm">
                                    {video.is_featured ? "Featured" : "Regular"}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Video Player */}
                <Card>
                    <CardHeader>
                        <CardTitle>Video Player</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                            <iframe
                                src={`https://www.youtube.com/embed/${video.youtube_id}`}
                                title={video.title}
                                className="w-full h-full"
                                allowFullScreen
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Video Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>Video Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {video.title}
                                </h3>
                                <div className="prose max-w-none">
                                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                        {video.description}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <Badge
                                    className={getCategoryBadgeColor(
                                        video.category
                                    )}
                                >
                                    {video.category.charAt(0).toUpperCase() +
                                        video.category.slice(1)}
                                </Badge>
                                <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    <span>
                                        {formatDuration(video.duration)}
                                    </span>
                                </div>
                                {video.is_featured && (
                                    <Badge className="bg-yellow-100 text-yellow-800">
                                        <Star className="h-3 w-3 mr-1" />
                                        Featured
                                    </Badge>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Technical Details */}
                <Card>
                    <CardHeader>
                        <CardTitle>Technical Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        YouTube URL
                                    </h4>
                                    <a
                                        href={video.youtube_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline break-all"
                                    >
                                        {video.youtube_url}
                                    </a>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        YouTube ID
                                    </h4>
                                    <p className="text-gray-600 font-mono text-sm">
                                        {video.youtube_id}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Sort Order
                                    </h4>
                                    <p className="text-gray-600">
                                        {video.sort_order}
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Created
                                    </h4>
                                    <p className="text-gray-600">
                                        {new Date(
                                            video.created_at
                                        ).toLocaleString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Last Updated
                                    </h4>
                                    <p className="text-gray-600">
                                        {new Date(
                                            video.updated_at
                                        ).toLocaleString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Video ID
                                    </h4>
                                    <p className="text-gray-600">#{video.id}</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Thumbnail Preview */}
                <Card>
                    <CardHeader>
                        <CardTitle>Thumbnail Preview</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="space-y-2">
                                <img
                                    src={`https://img.youtube.com/vi/${video.youtube_id}/maxresdefault.jpg`}
                                    alt="Max resolution thumbnail"
                                    className="w-full rounded border"
                                />
                                <p className="text-xs text-gray-500 text-center">
                                    Max Resolution
                                </p>
                            </div>
                            <div className="space-y-2">
                                <img
                                    src={`https://img.youtube.com/vi/${video.youtube_id}/mqdefault.jpg`}
                                    alt="Medium quality thumbnail"
                                    className="w-full rounded border"
                                />
                                <p className="text-xs text-gray-500 text-center">
                                    Medium Quality
                                </p>
                            </div>
                            <div className="space-y-2">
                                <img
                                    src={`https://img.youtube.com/vi/${video.youtube_id}/hqdefault.jpg`}
                                    alt="High quality thumbnail"
                                    className="w-full rounded border"
                                />
                                <p className="text-xs text-gray-500 text-center">
                                    High Quality
                                </p>
                            </div>
                            <div className="space-y-2">
                                <img
                                    src={`https://img.youtube.com/vi/${video.youtube_id}/default.jpg`}
                                    alt="Default thumbnail"
                                    className="w-full rounded border"
                                />
                                <p className="text-xs text-gray-500 text-center">
                                    Default
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Preview as User Would See */}
                <Card>
                    <CardHeader>
                        <CardTitle>User Preview</CardTitle>
                        <p className="text-sm text-gray-600">
                            This is how the video will appear to users on the
                            website
                        </p>
                    </CardHeader>
                    <CardContent>
                        <div className="border rounded-lg p-6 bg-gray-50">
                            <div className="space-y-4">
                                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
                                    <img
                                        src={`https://img.youtube.com/vi/${video.youtube_id}/mqdefault.jpg`}
                                        alt={video.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-red-600 text-white rounded-full p-3">
                                            <Play className="h-6 w-6" />
                                        </div>
                                    </div>
                                    {video.is_featured && (
                                        <div className="absolute top-2 right-2">
                                            <Badge className="bg-yellow-500 text-white">
                                                <Star className="h-3 w-3 mr-1" />
                                                Featured
                                            </Badge>
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                                        {video.title}
                                    </h3>
                                    <p className="text-gray-700 text-sm line-clamp-3">
                                        {video.description}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <Badge
                                        variant="secondary"
                                        className="text-xs"
                                    >
                                        {video.category
                                            .charAt(0)
                                            .toUpperCase() +
                                            video.category.slice(1)}
                                    </Badge>
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        <span>
                                            {formatDuration(video.duration)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
