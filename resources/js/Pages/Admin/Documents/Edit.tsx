import React, { useState } from "react";
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
import { ArrowLeft, Save, Upload, Link as LinkIcon, Eye } from "lucide-react";

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
}

interface Props {
    document: Document;
    categories: { [key: string]: string };
}

export default function Edit({ document, categories }: Props) {
    const [uploadType, setUploadType] = useState<"file" | "url">(
        document.file_path ? "file" : "url"
    );

    const { data, setData, patch, processing, errors } = useForm({
        title: document.title,
        description: document.description,
        category: document.category,
        file: null as File | null,
        file_url: document.file_url || "",
        published_date: document.published_date,
        author: document.author,
        version: document.version || "",
        tags: document.tags ? document.tags.join(", ") : "",
        is_featured: document.is_featured,
        is_active: document.is_active,
        sort_order: document.sort_order.toString(),
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(route("admin.documents.update", document.id));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setData("file", file);
    };

    const getFileTypeIcon = (fileType: string) => {
        switch (fileType.toLowerCase()) {
            case "pdf":
                return "📄";
            case "doc":
            case "docx":
                return "📝";
            case "xls":
            case "xlsx":
                return "📊";
            case "ppt":
            case "pptx":
                return "📋";
            case "zip":
            case "rar":
                return "📦";
            case "jpg":
            case "jpeg":
            case "png":
            case "gif":
                return "🖼️";
            case "url":
                return "🔗";
            default:
                return "📁";
        }
    };

    const formatFileSize = (bytes: number) => {
        const units = ["B", "KB", "MB", "GB"];
        let size = bytes;
        let unitIndex = 0;

        while (size > 1024 && unitIndex < units.length - 1) {
            size /= 1024;
            unitIndex++;
        }

        return `${size.toFixed(2)} ${units[unitIndex]}`;
    };

    return (
        <AdminLayout>
            <Head title={`Edit Document - ${document.title}`} />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href={route("admin.documents.index")}>
                        <Button variant="outline" size="sm">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Documents
                        </Button>
                    </Link>
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-gray-900">
                            Edit Document
                        </h1>
                        <p className="text-gray-600">
                            Update document information and file
                        </p>
                    </div>
                    <Link href={route("admin.documents.show", document.id)}>
                        <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                        </Button>
                    </Link>
                </div>

                {/* Current File Info */}
                <Card>
                    <CardHeader>
                        <CardTitle>Current Document</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">
                                {getFileTypeIcon(document.file_type)}
                            </span>
                            <div>
                                <div className="font-medium">
                                    {document.title}
                                </div>
                                <div className="text-sm text-gray-500">
                                    {document.file_path
                                        ? "Uploaded file"
                                        : "External URL"}{" "}
                                    •
                                    {document.file_size
                                        ? ` ${formatFileSize(
                                              document.file_size
                                          )} • `
                                        : " "}
                                    {document.download_count} downloads
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Upload Type Selector */}
                <Card>
                    <CardHeader>
                        <CardTitle>Update Document Source</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-4">
                            <Button
                                type="button"
                                variant={
                                    uploadType === "file"
                                        ? "default"
                                        : "outline"
                                }
                                onClick={() => setUploadType("file")}
                                className="flex-1"
                            >
                                <Upload className="h-4 w-4 mr-2" />
                                Upload New File
                            </Button>
                            <Button
                                type="button"
                                variant={
                                    uploadType === "url" ? "default" : "outline"
                                }
                                onClick={() => setUploadType("url")}
                                className="flex-1"
                            >
                                <LinkIcon className="h-4 w-4 mr-2" />
                                External URL
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Form */}
                <Card>
                    <CardHeader>
                        <CardTitle>Document Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* File Upload or URL */}
                            {uploadType === "file" ? (
                                <div className="space-y-2">
                                    <Label htmlFor="file">
                                        Replace Document File (Optional)
                                    </Label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                                        <input
                                            id="file"
                                            type="file"
                                            onChange={handleFileChange}
                                            accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip,.rar,.jpg,.jpeg,.png,.gif"
                                            className="hidden"
                                        />
                                        <label
                                            htmlFor="file"
                                            className="cursor-pointer"
                                        >
                                            {data.file ? (
                                                <div className="space-y-2">
                                                    <div className="text-4xl">
                                                        📄
                                                    </div>
                                                    <div className="font-medium">
                                                        {data.file.name}
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        {formatFileSize(
                                                            data.file.size
                                                        )}
                                                    </div>
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        size="sm"
                                                    >
                                                        Change File
                                                    </Button>
                                                </div>
                                            ) : (
                                                <div className="space-y-2">
                                                    <Upload className="h-12 w-12 mx-auto text-gray-400" />
                                                    <div className="font-medium">
                                                        Click to upload a new
                                                        file
                                                    </div>
                                                    <div className="text-sm text-gray-500">
                                                        Leave empty to keep
                                                        current file
                                                    </div>
                                                </div>
                                            )}
                                        </label>
                                    </div>
                                    {errors.file && (
                                        <p className="text-sm text-red-600">
                                            {errors.file}
                                        </p>
                                    )}
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    <Label htmlFor="file_url">
                                        Document URL
                                    </Label>
                                    <div className="relative">
                                        <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                        <Input
                                            id="file_url"
                                            type="url"
                                            value={data.file_url}
                                            onChange={(e) =>
                                                setData(
                                                    "file_url",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="https://example.com/document.pdf"
                                            className={`pl-10 ${
                                                errors.file_url
                                                    ? "border-red-500"
                                                    : ""
                                            }`}
                                        />
                                    </div>
                                    {errors.file_url && (
                                        <p className="text-sm text-red-600">
                                            {errors.file_url}
                                        </p>
                                    )}
                                </div>
                            )}

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
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.entries(categories).map(
                                                ([key, label]) => (
                                                    <SelectItem
                                                        key={key}
                                                        value={key}
                                                    >
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
                                    <Input
                                        id="author"
                                        type="text"
                                        value={data.author}
                                        onChange={(e) =>
                                            setData("author", e.target.value)
                                        }
                                        className={
                                            errors.author
                                                ? "border-red-500"
                                                : ""
                                        }
                                    />
                                    {errors.author && (
                                        <p className="text-sm text-red-600">
                                            {errors.author}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Published Date */}
                                <div className="space-y-2">
                                    <Label htmlFor="published_date">
                                        Published Date{" "}
                                        <span className="text-red-500">*</span>
                                    </Label>
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
                                        className={
                                            errors.published_date
                                                ? "border-red-500"
                                                : ""
                                        }
                                    />
                                    {errors.published_date && (
                                        <p className="text-sm text-red-600">
                                            {errors.published_date}
                                        </p>
                                    )}
                                </div>

                                {/* Version */}
                                <div className="space-y-2">
                                    <Label htmlFor="version">Version</Label>
                                    <Input
                                        id="version"
                                        type="text"
                                        value={data.version}
                                        onChange={(e) =>
                                            setData("version", e.target.value)
                                        }
                                        placeholder="e.g., 1.0, 2.1"
                                    />
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
                            </div>

                            {/* Tags */}
                            <div className="space-y-2">
                                <Label htmlFor="tags">Tags</Label>
                                <Input
                                    id="tags"
                                    type="text"
                                    value={data.tags}
                                    onChange={(e) =>
                                        setData("tags", e.target.value)
                                    }
                                    placeholder="Enter tags separated by commas"
                                />
                                <p className="text-sm text-gray-500">
                                    Separate multiple tags with commas
                                </p>
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
                                            ? "Document is visible to users"
                                            : "Document is hidden from users"}
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
                                            ? "Document appears in featured sections"
                                            : "Document appears in regular listings"}
                                    </p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-4 pt-6 border-t">
                                <Button type="submit" disabled={processing}>
                                    <Save className="h-4 w-4 mr-2" />
                                    {processing
                                        ? "Updating..."
                                        : "Update Document"}
                                </Button>
                                <Link href={route("admin.documents.index")}>
                                    <Button type="button" variant="outline">
                                        Cancel
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
