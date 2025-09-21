import React, { useState, useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { Switch } from "@/Components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { ArrowLeft, Save, Play, Clock, Eye } from "lucide-react";

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
    categories: string[];
}

export default function Edit({ video, categories }: Props) {
    const { data, setData, patch, processing, errors } = useForm({
        title: video.title,
        description: video.description,
        youtube_url: video.youtube_url,
        category: video.category,
        duration: video.duration.toString(),
        is_featured: video.is_featured,
        is_active: video.is_active,
        sort_order: video.sort_order.toString(),
    });

    const [youtubeId, setYoutubeId] = useState(video.youtube_id);
    const [thumbnailUrl, setThumbnailUrl] = useState(video.thumbnail_url);

    // Extract YouTube ID when URL changes
    useEffect(() => {
        if (data.youtube_url) {
            const extractYouTubeId = (url: string) => {
                const regex =
                    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
                const matches = url.match(regex);
                return matches ? matches[1] : null;
            };

            const id = extractYouTubeId(data.youtube_url);
            if (id) {
                setYoutubeId(id);
                setThumbnailUrl(
                    `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
                );
            } else {
                setYoutubeId("");
                setThumbnailUrl("");
            }
        } else {
            setYoutubeId("");
            setThumbnailUrl("");
        }
    }, [data.youtube_url]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(route("admin.videos.update", video.id));
    };

    const predefinedCategories = [
        { value: "prevention", label: "Prevention" },
        { value: "awareness", label: "Awareness" },
        { value: "treatment", label: "Treatment" },
        { value: "community", label: "Community" },
        { value: "education", label: "Education" },
        { value: "training", label: "Training" },
    ];

    const formatDuration = (seconds: number) => {
        if (!seconds) return "0:00";
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
    };

    return (
        <AdminLayout>
            <Head title={`Edit Video - ${video.title.substring(0, 50)}...`} />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href={route("admin.videos.index")}>
                        <Button variant="outline" size="sm">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Videos
                        </Button>
                    </Link>
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-gray-900">
                            Edit Video
                        </h1>
                        <p className="text-gray-600">
                            Update the video information
                        </p>
                    </div>
                    <Link href={route("admin.videos.show", video.id)}>
                        <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                        </Button>
                    </Link>
                </div>

                {/* Form */}
                <Card>
                    <CardHeader>
                        <CardTitle>Video Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* YouTube URL */}
                            <div className="space-y-2">
                                <Label htmlFor="youtube_url">
                                    YouTube URL{" "}
                                    <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="youtube_url"
                                    type="url"
                                    value={data.youtube_url}
                                    onChange={(e) =>
                                        setData("youtube_url", e.target.value)
                                    }
                                    placeholder="https://www.youtube.com/watch?v=..."
                                    className={
                                        errors.youtube_url
                                            ? "border-red-500"
                                            : ""
                                    }
                                />
                                {errors.youtube_url && (
                                    <p className="text-sm text-red-600">
                                        {errors.youtube_url}
                                    </p>
                                )}
                                <p className="text-sm text-gray-500">
                                    Enter a valid YouTube video URL. The video
                                    ID will be extracted automatically.
                                </p>
                            </div>

                            {/* Title */}
                            <div className="space-y-2">
                                <Label htmlFor="title">
                                    Title{" "}
                                    <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="title"
                                    type="text"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    placeholder="Enter video title..."
                                    className={
                                        errors.title ? "border-red-500" : ""
                                    }
                                />
                                {errors.title && (
                                    <p className="text-sm text-red-600">
                                        {errors.title}
                                    </p>
                                )}
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <Label htmlFor="description">
                                    Description{" "}
                                    <span className="text-red-500">*</span>
                                </Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                    placeholder="Enter video description..."
                                    rows={4}
                                    className={
                                        errors.description
                                            ? "border-red-500"
                                            : ""
                                    }
                                />
                                {errors.description && (
                                    <p className="text-sm text-red-600">
                                        {errors.description}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Category */}
                                <div className="space-y-2">
                                    <Label htmlFor="category">
                                        Category{" "}
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <Select
                                        value={data.category}
                                        onValueChange={(value) =>
                                            setData("category", value)
                                        }
                                    >
                                        <SelectTrigger
                                            className={
                                                errors.category
                                                    ? "border-red-500"
                                                    : ""
                                            }
                                        >
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {predefinedCategories.map(
                                                (category) => (
                                                    <SelectItem
                                                        key={category.value}
                                                        value={category.value}
                                                    >
                                                        {category.label}
                                                    </SelectItem>
                                                )
                                            )}
                                            {/* Show existing categories that aren't in predefined list */}
                                            {categories
                                                .filter(
                                                    (cat) =>
                                                        !predefinedCategories.some(
                                                            (pred) =>
                                                                pred.value ===
                                                                cat
                                                        )
                                                )
                                                .map((category) => (
                                                    <SelectItem
                                                        key={category}
                                                        value={category}
                                                    >
                                                        {category
                                                            .charAt(0)
                                                            .toUpperCase() +
                                                            category.slice(1)}
                                                    </SelectItem>
                                                ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.category && (
                                        <p className="text-sm text-red-600">
                                            {errors.category}
                                        </p>
                                    )}
                                </div>

                                {/* Duration */}
                                <div className="space-y-2">
                                    <Label htmlFor="duration">
                                        Duration (seconds)
                                    </Label>
                                    <Input
                                        id="duration"
                                        type="number"
                                        value={data.duration}
                                        onChange={(e) =>
                                            setData("duration", e.target.value)
                                        }
                                        placeholder="Enter duration in seconds"
                                        min="1"
                                        className={
                                            errors.duration
                                                ? "border-red-500"
                                                : ""
                                        }
                                    />
                                    {data.duration && (
                                        <p className="text-sm text-gray-500 flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            Duration:{" "}
                                            {formatDuration(
                                                parseInt(data.duration)
                                            )}
                                        </p>
                                    )}
                                    {errors.duration && (
                                        <p className="text-sm text-red-600">
                                            {errors.duration}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Sort Order */}
                                <div className="space-y-2">
                                    <Label htmlFor="sort_order">
                                        Sort Order
                                    </Label>
                                    <Input
                                        id="sort_order"
                                        type="number"
                                        value={data.sort_order}
                                        onChange={(e) =>
                                            setData(
                                                "sort_order",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Enter sort order"
                                        min="0"
                                        className={
                                            errors.sort_order
                                                ? "border-red-500"
                                                : ""
                                        }
                                    />
                                    {errors.sort_order && (
                                        <p className="text-sm text-red-600">
                                            {errors.sort_order}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Status Toggles */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2">
                                    <Switch
                                        id="is_active"
                                        checked={data.is_active}
                                        onCheckedChange={(checked) =>
                                            setData("is_active", checked)
                                        }
                                    />
                                    <Label htmlFor="is_active">Active</Label>
                                    <p className="text-sm text-gray-500 ml-2">
                                        {data.is_active
                                            ? "Video will be visible to users"
                                            : "Video will be hidden from users"}
                                    </p>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Switch
                                        id="is_featured"
                                        checked={data.is_featured}
                                        onCheckedChange={(checked) =>
                                            setData("is_featured", checked)
                                        }
                                    />
                                    <Label htmlFor="is_featured">
                                        Featured
                                    </Label>
                                    <p className="text-sm text-gray-500 ml-2">
                                        {data.is_featured
                                            ? "Video will appear in featured sections"
                                            : "Video will appear in regular listings"}
                                    </p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-4 pt-6 border-t">
                                <Button type="submit" disabled={processing}>
                                    <Save className="h-4 w-4 mr-2" />
                                    {processing
                                        ? "Updating..."
                                        : "Update Video"}
                                </Button>
                                <Link href={route("admin.videos.index")}>
                                    <Button type="button" variant="outline">
                                        Cancel
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {/* Preview */}
                <Card>
                    <CardHeader>
                        <CardTitle>Preview</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {youtubeId && (
                                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${youtubeId}`}
                                        title="Video preview"
                                        className="w-full h-full"
                                        allowFullScreen
                                    />
                                </div>
                            )}
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900">
                                    {data.title}
                                </h3>
                            </div>
                            <div>
                                <p className="text-gray-700 whitespace-pre-wrap">
                                    {data.description}
                                </p>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <span>Category:</span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                        {data.category.charAt(0).toUpperCase() +
                                            data.category.slice(1)}
                                    </span>
                                </div>
                                {data.duration && (
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        <span>
                                            {formatDuration(
                                                parseInt(data.duration)
                                            )}
                                        </span>
                                    </div>
                                )}
                                <div className="flex items-center gap-2">
                                    <span>Status:</span>
                                    <span
                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                            data.is_active
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                        }`}
                                    >
                                        {data.is_active ? "Active" : "Inactive"}
                                    </span>
                                </div>
                                {data.is_featured && (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                        Featured
                                    </span>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Metadata */}
                <Card>
                    <CardHeader>
                        <CardTitle>Metadata</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                        YouTube ID
                                    </h4>
                                    <p className="text-gray-600 font-mono text-sm">
                                        {youtubeId}
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-4">
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
                                        Sort Order
                                    </h4>
                                    <p className="text-gray-600">
                                        {data.sort_order}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
