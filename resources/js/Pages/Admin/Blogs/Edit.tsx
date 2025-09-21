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
import { RichTextEditor } from "@/Components/ui/rich-text-editor";
import { ArrowLeft, Save, Eye, Calendar, User, Tag, Image } from "lucide-react";

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
    meta_data: {
        seo_title?: string;
        seo_description?: string;
        seo_keywords?: string;
    } | null;
}

interface Props {
    blog: Blog;
    categories: { [key: string]: string };
}

export default function Edit({ blog, categories }: Props) {
    const { data, setData, patch, processing, errors } = useForm({
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt || "",
        content: blog.content,
        category: blog.category,
        featured_image: null as File | null,
        author: blog.author,
        published_date: blog.published_date,
        tags: blog.tags ? blog.tags.join(", ") : "",
        is_featured: blog.is_featured,
        is_published: blog.is_published,
        sort_order: blog.sort_order.toString(),
        meta_data: {
            seo_title: blog.meta_data?.seo_title || "",
            seo_description: blog.meta_data?.seo_description || "",
            seo_keywords: blog.meta_data?.seo_keywords || "",
        },
    });

    const [previewImage, setPreviewImage] = useState<string | null>(
        blog.featured_image
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(route("admin.blogs.update", blog.id));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setData("featured_image", file);

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setPreviewImage(e.target?.result as string);
            reader.readAsDataURL(file);
        }
    };

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .trim();
    };

    const handleTitleChange = (title: string) => {
        setData("title", title);
        // Only auto-generate slug if it matches the current title's slug
        if (data.slug === generateSlug(blog.title) || !data.slug) {
            setData("slug", generateSlug(title));
        }
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

    const getWordCount = (text: string) => {
        return stripHtml(text)
            .split(/\s+/)
            .filter((word) => word.length > 0).length;
    };

    const getReadingTime = (text: string) => {
        const wordCount = getWordCount(text);
        const readingTime = Math.ceil(wordCount / 200);
        return readingTime;
    };

    return (
        <AdminLayout>
            <Head title={`Edit Blog Post - ${blog.title}`} />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href={route("admin.blogs.index")}>
                        <Button variant="outline" size="sm">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Blog Posts
                        </Button>
                    </Link>
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-gray-900">
                            Edit Blog Post
                        </h1>
                        <p className="text-gray-600">
                            Update blog post content and settings
                        </p>
                    </div>
                    <Link href={route("admin.blogs.show", blog.id)}>
                        <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                        </Button>
                    </Link>
                </div>

                {/* Current Post Info */}
                <Card>
                    <CardHeader>
                        <CardTitle>Current Post Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                            <div>
                                <span className="font-medium text-gray-700">
                                    Status:
                                </span>
                                <div className="mt-1">
                                    <span
                                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                                            blog.is_published
                                                ? "bg-green-100 text-green-800"
                                                : "bg-yellow-100 text-yellow-800"
                                        }`}
                                    >
                                        {blog.is_published
                                            ? "Published"
                                            : "Draft"}
                                    </span>
                                </div>
                            </div>
                            <div>
                                <span className="font-medium text-gray-700">
                                    Views:
                                </span>
                                <div className="mt-1">
                                    {blog.views_count} views
                                </div>
                            </div>
                            <div>
                                <span className="font-medium text-gray-700">
                                    Category:
                                </span>
                                <div className="mt-1">
                                    {getCategoryIcon(blog.category)}{" "}
                                    {categories[blog.category]}
                                </div>
                            </div>
                            <div>
                                <span className="font-medium text-gray-700">
                                    Featured:
                                </span>
                                <div className="mt-1">
                                    {blog.is_featured ? "Yes" : "No"}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Post Content</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    {/* Title */}
                                    <div className="space-y-2">
                                        <Label htmlFor="title">
                                            Title{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </Label>
                                        <Input
                                            id="title"
                                            type="text"
                                            value={data.title}
                                            onChange={(e) =>
                                                handleTitleChange(
                                                    e.target.value
                                                )
                                            }
                                            className={
                                                errors.title
                                                    ? "border-red-500"
                                                    : ""
                                            }
                                        />
                                        {errors.title && (
                                            <p className="text-sm text-red-600">
                                                {errors.title}
                                            </p>
                                        )}
                                    </div>

                                    {/* Slug */}
                                    <div className="space-y-2">
                                        <Label htmlFor="slug">URL Slug</Label>
                                        <Input
                                            id="slug"
                                            type="text"
                                            value={data.slug}
                                            onChange={(e) =>
                                                setData("slug", e.target.value)
                                            }
                                            className={
                                                errors.slug
                                                    ? "border-red-500"
                                                    : ""
                                            }
                                        />
                                        {errors.slug && (
                                            <p className="text-sm text-red-600">
                                                {errors.slug}
                                            </p>
                                        )}
                                        <p className="text-sm text-gray-500">
                                            URL: /blog/{data.slug}
                                        </p>
                                    </div>

                                    {/* Excerpt */}
                                    <div className="space-y-2">
                                        <Label htmlFor="excerpt">Excerpt</Label>
                                        <Textarea
                                            id="excerpt"
                                            value={data.excerpt}
                                            onChange={(e) =>
                                                setData(
                                                    "excerpt",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Brief summary of the post"
                                            rows={3}
                                            className={
                                                errors.excerpt
                                                    ? "border-red-500"
                                                    : ""
                                            }
                                        />
                                        {errors.excerpt && (
                                            <p className="text-sm text-red-600">
                                                {errors.excerpt}
                                            </p>
                                        )}
                                        <p className="text-sm text-gray-500">
                                            {data.excerpt.length}/500 characters
                                        </p>
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-2">
                                        <Label htmlFor="content">
                                            Content{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </Label>
                                        <RichTextEditor
                                            value={data.content}
                                            onChange={(content) =>
                                                setData("content", content)
                                            }
                                            height={500}
                                        />
                                        {errors.content && (
                                            <p className="text-sm text-red-600">
                                                {errors.content}
                                            </p>
                                        )}
                                        <div className="flex justify-between text-sm text-gray-500">
                                            <span>
                                                {getWordCount(data.content)}{" "}
                                                words
                                            </span>
                                            <span>
                                                {getReadingTime(data.content)}{" "}
                                                min read
                                            </span>
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>

                        {/* SEO Settings */}
                        <Card>
                            <CardHeader>
                                <CardTitle>SEO Settings</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="seo_title">SEO Title</Label>
                                    <Input
                                        id="seo_title"
                                        type="text"
                                        value={data.meta_data.seo_title}
                                        onChange={(e) =>
                                            setData("meta_data", {
                                                ...data.meta_data,
                                                seo_title: e.target.value,
                                            })
                                        }
                                        placeholder="SEO optimized title (60 characters max)"
                                        maxLength={60}
                                    />
                                    <p className="text-sm text-gray-500">
                                        {data.meta_data.seo_title.length}/60
                                        characters
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="seo_description">
                                        SEO Description
                                    </Label>
                                    <Textarea
                                        id="seo_description"
                                        value={data.meta_data.seo_description}
                                        onChange={(e) =>
                                            setData("meta_data", {
                                                ...data.meta_data,
                                                seo_description: e.target.value,
                                            })
                                        }
                                        placeholder="SEO meta description (160 characters max)"
                                        rows={3}
                                        maxLength={160}
                                    />
                                    <p className="text-sm text-gray-500">
                                        {data.meta_data.seo_description.length}
                                        /160 characters
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="seo_keywords">
                                        SEO Keywords
                                    </Label>
                                    <Input
                                        id="seo_keywords"
                                        type="text"
                                        value={data.meta_data.seo_keywords}
                                        onChange={(e) =>
                                            setData("meta_data", {
                                                ...data.meta_data,
                                                seo_keywords: e.target.value,
                                            })
                                        }
                                        placeholder="keyword1, keyword2, keyword3"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Publish Settings */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Publish Settings</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
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
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.entries(categories).map(
                                                ([key, label]) => (
                                                    <SelectItem
                                                        key={key}
                                                        value={key}
                                                    >
                                                        {getCategoryIcon(key)}{" "}
                                                        {label}
                                                    </SelectItem>
                                                )
                                            )}
                                        </SelectContent>
                                    </Select>
                                    {errors.category && (
                                        <p className="text-sm text-red-600">
                                            {errors.category}
                                        </p>
                                    )}
                                </div>

                                {/* Author */}
                                <div className="space-y-2">
                                    <Label htmlFor="author">
                                        Author{" "}
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                        <Input
                                            id="author"
                                            type="text"
                                            value={data.author}
                                            onChange={(e) =>
                                                setData(
                                                    "author",
                                                    e.target.value
                                                )
                                            }
                                            className={`pl-10 ${
                                                errors.author
                                                    ? "border-red-500"
                                                    : ""
                                            }`}
                                        />
                                    </div>
                                    {errors.author && (
                                        <p className="text-sm text-red-600">
                                            {errors.author}
                                        </p>
                                    )}
                                </div>

                                {/* Published Date */}
                                <div className="space-y-2">
                                    <Label htmlFor="published_date">
                                        Published Date{" "}
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                        <Input
                                            id="published_date"
                                            type="date"
                                            value={data.published_date}
                                            onChange={(e) =>
                                                setData(
                                                    "published_date",
                                                    e.target.value
                                                )
                                            }
                                            className={`pl-10 ${
                                                errors.published_date
                                                    ? "border-red-500"
                                                    : ""
                                            }`}
                                        />
                                    </div>
                                    {errors.published_date && (
                                        <p className="text-sm text-red-600">
                                            {errors.published_date}
                                        </p>
                                    )}
                                </div>

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
                                        min="0"
                                    />
                                </div>

                                {/* Status Toggles */}
                                <div className="space-y-4 pt-4 border-t">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <Label
                                                htmlFor="is_published"
                                                className="font-medium"
                                            >
                                                Published
                                            </Label>
                                            <p className="text-sm text-gray-500">
                                                Make post visible to public
                                            </p>
                                        </div>
                                        <Switch
                                            id="is_published"
                                            checked={data.is_published}
                                            onCheckedChange={(checked) =>
                                                setData("is_published", checked)
                                            }
                                        />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div>
                                            <Label
                                                htmlFor="is_featured"
                                                className="font-medium"
                                            >
                                                Featured
                                            </Label>
                                            <p className="text-sm text-gray-500">
                                                Highlight in featured sections
                                            </p>
                                        </div>
                                        <Switch
                                            id="is_featured"
                                            checked={data.is_featured}
                                            onCheckedChange={(checked) =>
                                                setData("is_featured", checked)
                                            }
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Featured Image */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Featured Image</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                                        <input
                                            id="featured_image"
                                            type="file"
                                            onChange={handleImageChange}
                                            accept="image/*"
                                            className="hidden"
                                        />
                                        <label
                                            htmlFor="featured_image"
                                            className="cursor-pointer"
                                        >
                                            {previewImage ? (
                                                <div className="space-y-2">
                                                    <img
                                                        src={previewImage}
                                                        alt="Preview"
                                                        className="w-full h-32 object-cover rounded"
                                                    />
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        size="sm"
                                                    >
                                                        Change Image
                                                    </Button>
                                                </div>
                                            ) : (
                                                <div className="space-y-2">
                                                    <Image className="h-12 w-12 mx-auto text-gray-400" />
                                                    <div className="font-medium">
                                                        Upload featured image
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        JPG, PNG, GIF up to 5MB
                                                    </div>
                                                </div>
                                            )}
                                        </label>
                                    </div>
                                    {errors.featured_image && (
                                        <p className="text-sm text-red-600">
                                            {errors.featured_image}
                                        </p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Tags */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Tags</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="relative">
                                        <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                        <Input
                                            id="tags"
                                            type="text"
                                            value={data.tags}
                                            onChange={(e) =>
                                                setData("tags", e.target.value)
                                            }
                                            placeholder="tag1, tag2, tag3"
                                            className="pl-10"
                                        />
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        Separate tags with commas
                                    </p>
                                    {data.tags && (
                                        <div className="flex flex-wrap gap-1 mt-2">
                                            {data.tags
                                                .split(",")
                                                .map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="inline-flex items-center px-2 py-1 rounded text-xs bg-blue-100 text-blue-800"
                                                    >
                                                        {tag.trim()}
                                                    </span>
                                                ))}
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Actions */}
                        <Card>
                            <CardContent className="pt-6">
                                <div className="space-y-3">
                                    <Button
                                        onClick={handleSubmit}
                                        disabled={processing}
                                        className="w-full"
                                    >
                                        <Save className="h-4 w-4 mr-2" />
                                        {processing
                                            ? "Updating..."
                                            : "Update Blog Post"}
                                    </Button>
                                    <Link href={route("admin.blogs.index")}>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="w-full"
                                        >
                                            Cancel
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
