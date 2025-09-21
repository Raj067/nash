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
    User,
    Eye,
    Hash,
    Clock,
    Tag,
    Globe,
    BookOpen,
    TrendingUp,
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
    meta_data: {
        seo_title?: string;
        seo_description?: string;
        seo_keywords?: string;
    } | null;
}

interface Props {
    blog: Blog;
}

export default function Show({ blog }: Props) {
    const handleDelete = () => {
        router.delete(route("admin.blogs.destroy", blog.id));
    };

    const handleToggleStatus = () => {
        router.patch(route("admin.blogs.toggle-status", blog.id));
    };

    const handleToggleFeatured = () => {
        router.patch(route("admin.blogs.toggle-featured", blog.id));
    };

    const getCategoryDisplayName = (category: string) => {
        const categories: { [key: string]: string } = {
            news: "News",
            press_releases: "Press Releases",
            speeches: "Speeches",
            events: "NASHCOP Events",
            newsletter: "Newsletter",
            photo_gallery: "Photo Gallery",
        };
        return categories[category] || category;
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

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const stripHtml = (html: string) => {
        const tmp = document.createElement("div");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
    };

    const getWordCount = (text: string) => {
        return stripHtml(text)
            .split(/\s+/)
            .filter((word) => word.length > 0).length;
    };

    return (
        <AdminLayout>
            <Head title={`Blog Post - ${blog.title}`} />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href={route("admin.blogs.index")}>
                            <Button variant="outline" size="sm">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Blog Posts
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                Blog Post Details
                            </h1>
                            <p className="text-gray-600">
                                View and manage blog post information
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" asChild>
                            <a
                                href={`/blog/${blog.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Globe className="h-4 w-4 mr-2" />
                                View Live
                            </a>
                        </Button>
                        <Link href={route("admin.blogs.edit", blog.id)}>
                            <Button>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                            </Button>
                        </Link>
                        <Button variant="outline" onClick={handleToggleStatus}>
                            {blog.is_published ? (
                                <ToggleLeft className="h-4 w-4 mr-2" />
                            ) : (
                                <ToggleRight className="h-4 w-4 mr-2" />
                            )}
                            {blog.is_published ? "Unpublish" : "Publish"}
                        </Button>
                        <Button
                            variant="outline"
                            onClick={handleToggleFeatured}
                        >
                            {blog.is_featured ? (
                                <StarOff className="h-4 w-4 mr-2" />
                            ) : (
                                <Star className="h-4 w-4 mr-2" />
                            )}
                            {blog.is_featured ? "Unfeature" : "Feature"}
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
                                        Delete Blog Post
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Are you sure you want to delete this
                                        blog post? This action cannot be undone.
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

                {/* Status and Quick Info */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <div
                                    className={`w-3 h-3 rounded-full ${
                                        blog.is_published
                                            ? "bg-green-500"
                                            : "bg-yellow-500"
                                    }`}
                                />
                                <span className="text-sm font-medium">
                                    {blog.is_published ? "Published" : "Draft"}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Hash className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">ID: {blog.id}</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Eye className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">
                                    {blog.views_count} views
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">
                                    {blog.reading_time}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <BookOpen className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">
                                    {getWordCount(blog.content)} words
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Featured Image */}
                {blog.featured_image && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Featured Image</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img
                                src={blog.featured_image}
                                alt={blog.title}
                                className="w-full max-w-2xl h-64 object-cover rounded-lg"
                            />
                        </CardContent>
                    </Card>
                )}

                {/* Blog Content */}
                <Card>
                    <CardHeader>
                        <CardTitle>Blog Post Content</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <h2 className="text-3xl font-bold text-gray-900">
                                        {blog.title}
                                    </h2>
                                    {blog.is_featured && (
                                        <Badge className="bg-yellow-100 text-yellow-800">
                                            <Star className="h-3 w-3 mr-1" />
                                            Featured
                                        </Badge>
                                    )}
                                    <Badge
                                        className={
                                            blog.is_published
                                                ? "bg-green-100 text-green-800"
                                                : "bg-yellow-100 text-yellow-800"
                                        }
                                    >
                                        {blog.is_published
                                            ? "Published"
                                            : "Draft"}
                                    </Badge>
                                </div>

                                <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                        {getCategoryIcon(blog.category)}{" "}
                                        {getCategoryDisplayName(blog.category)}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <User className="h-4 w-4" />
                                        {blog.author}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        {blog.formatted_published_date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" />
                                        {blog.reading_time}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Eye className="h-4 w-4" />
                                        {blog.views_count} views
                                    </span>
                                </div>

                                {blog.excerpt && (
                                    <div className="mb-6">
                                        <h4 className="font-medium text-gray-900 mb-2">
                                            Excerpt
                                        </h4>
                                        <p className="text-lg text-gray-700 italic border-l-4 border-blue-500 pl-4">
                                            {blog.excerpt}
                                        </p>
                                    </div>
                                )}

                                <div className="prose max-w-none">
                                    <h4 className="font-medium text-gray-900 mb-4">
                                        Content
                                    </h4>
                                    <div
                                        className="prose-content"
                                        dangerouslySetInnerHTML={{
                                            __html: blog.content,
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Tags */}
                            {blog.tags && blog.tags.length > 0 && (
                                <div className="border-t pt-6">
                                    <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                                        <Tag className="h-4 w-4" />
                                        Tags
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {blog.tags.map((tag, index) => (
                                            <Badge
                                                key={index}
                                                variant="secondary"
                                                className="bg-gray-100 text-gray-700"
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* SEO Information */}
                {blog.meta_data &&
                    (blog.meta_data.seo_title ||
                        blog.meta_data.seo_description ||
                        blog.meta_data.seo_keywords) && (
                        <Card>
                            <CardHeader>
                                <CardTitle>SEO Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                                    {blog.meta_data.seo_title && (
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">
                                                SEO Title
                                            </h4>
                                            <p className="text-gray-600">
                                                {blog.meta_data.seo_title}
                                            </p>
                                        </div>
                                    )}
                                    {blog.meta_data.seo_description && (
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">
                                                SEO Description
                                            </h4>
                                            <p className="text-gray-600">
                                                {blog.meta_data.seo_description}
                                            </p>
                                        </div>
                                    )}
                                    {blog.meta_data.seo_keywords && (
                                        <div>
                                            <h4 className="font-medium text-gray-900 mb-1">
                                                SEO Keywords
                                            </h4>
                                            <p className="text-gray-600">
                                                {blog.meta_data.seo_keywords}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    )}

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
                                        URL Slug
                                    </h4>
                                    <p className="text-gray-600 font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                                        /blog/{blog.slug}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Category
                                    </h4>
                                    <Badge className="bg-blue-100 text-blue-800">
                                        {getCategoryIcon(blog.category)}{" "}
                                        {getCategoryDisplayName(blog.category)}
                                    </Badge>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Sort Order
                                    </h4>
                                    <p className="text-gray-600">
                                        {blog.sort_order}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Word Count
                                    </h4>
                                    <p className="text-gray-600">
                                        {getWordCount(blog.content)} words
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Created
                                    </h4>
                                    <p className="text-gray-600">
                                        {formatDate(blog.created_at)}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Last Updated
                                    </h4>
                                    <p className="text-gray-600">
                                        {formatDate(blog.updated_at)}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Published Date
                                    </h4>
                                    <p className="text-gray-600">
                                        {new Date(
                                            blog.published_date
                                        ).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Reading Time
                                    </h4>
                                    <p className="text-gray-600">
                                        {blog.reading_time}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Actions Summary */}
                <Card>
                    <CardHeader>
                        <CardTitle>Available Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-gray-900 mb-2">
                                    Edit Post
                                </h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    Update content, settings, and metadata
                                </p>
                                <Link href={route("admin.blogs.edit", blog.id)}>
                                    <Button size="sm" className="w-full">
                                        <Edit className="h-4 w-4 mr-2" />
                                        Edit
                                    </Button>
                                </Link>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-gray-900 mb-2">
                                    {blog.is_published
                                        ? "Unpublish"
                                        : "Publish"}
                                </h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    {blog.is_published
                                        ? "Hide post from public view"
                                        : "Make post visible to readers"}
                                </p>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="w-full"
                                    onClick={handleToggleStatus}
                                >
                                    {blog.is_published ? (
                                        <ToggleLeft className="h-4 w-4 mr-2" />
                                    ) : (
                                        <ToggleRight className="h-4 w-4 mr-2" />
                                    )}
                                    {blog.is_published
                                        ? "Unpublish"
                                        : "Publish"}
                                </Button>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-gray-900 mb-2">
                                    {blog.is_featured ? "Unfeature" : "Feature"}
                                </h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    {blog.is_featured
                                        ? "Remove from featured sections"
                                        : "Highlight in featured sections"}
                                </p>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="w-full"
                                    onClick={handleToggleFeatured}
                                >
                                    {blog.is_featured ? (
                                        <StarOff className="h-4 w-4 mr-2" />
                                    ) : (
                                        <Star className="h-4 w-4 mr-2" />
                                    )}
                                    {blog.is_featured ? "Unfeature" : "Feature"}
                                </Button>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-gray-900 mb-2">
                                    Delete Post
                                </h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    Permanently remove this blog post
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
                                                Delete Blog Post
                                            </AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Are you sure you want to delete
                                                this blog post? This action
                                                cannot be undone.
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
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
