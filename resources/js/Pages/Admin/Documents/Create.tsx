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
import { ArrowLeft, Save, Upload, Link as LinkIcon } from "lucide-react";

interface Props {
    categories: { [key: string]: string };
}

export default function Create({ categories }: Props) {
    const [uploadType, setUploadType] = useState<'file' | 'url'>('file');
    
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        description: "",
        category: "",
        file: null as File | null,
        file_url: "",
        published_date: new Date().toISOString().split('T')[0],
        author: "",
        version: "1.0",
        tags: "",
        is_featured: false,
        is_active: true,
        sort_order: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("admin.documents.store"));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setData('file', file);
        
        // Auto-fill title if empty
        if (file && !data.title) {
            const fileName = file.name.replace(/\.[^/.]+$/, ""); // Remove extension
            setData('title', fileName);
        }
    };

    const getFileTypeIcon = (file: File | null) => {
        if (!file) return '📁';
        const extension = file.name.split('.').pop()?.toLowerCase();
        switch (extension) {
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
            default: return '📁';
        }
    };

    const formatFileSize = (bytes: number) => {
        const units = ['B', 'KB', 'MB', 'GB'];
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
            <Head title="Add New Document" />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href={route("admin.documents.index")}>
                        <Button variant="outline" size="sm">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Documents
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Add New Document
                        </h1>
                        <p className="text-gray-600">
                            Upload a file or link to an external document
                        </p>
                    </div>
                </div>

                {/* Upload Type Selector */}
                <Card>
                    <CardHeader>
                        <CardTitle>Document Source</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-4">
                            <Button
                                type="button"
                                variant={uploadType === 'file' ? 'default' : 'outline'}
                                onClick={() => setUploadType('file')}
                                className="flex-1"
                            >
                                <Upload className="h-4 w-4 mr-2" />
                                Upload File
                            </Button>
                            <Button
                                type="button"
                                variant={uploadType === 'url' ? 'default' : 'outline'}
                                onClick={() => setUploadType('url')}
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
                            {uploadType === 'file' ? (
                                <div className="space-y-2">
                                    <Label htmlFor="file">
                                        Document File <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                                        <input
                                            id="file"
                                            type="file"
                                            onChange={handleFileChange}
                                            accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.zip,.rar,.jpg,.jpeg,.png,.gif"
                                            className="hidden"
                                        />
                                        <label htmlFor="file" className="cursor-pointer">
                                            {data.file ? (
                                                <div className="space-y-2">
                                                    <div className="text-4xl">
                                                        {getFileTypeIcon(data.file)}
                                                    </div>
                                                    <div className="font-medium">{data.file.name}</div>
                                                    <div className="text-sm text-gray-500">
                                                        {formatFileSize(data.file.size)}
                                                    </div>
                                                    <Button type="button" variant="outline" size="sm">
                                                        Change File
                                                    </Button>
                                                </div>
                                            ) : (
                                                <div className="space-y-2">
                                                    <Upload className="h-12 w-12 mx-auto text-gray-400" />
                                                    <div className="font-medium">Click to upload a file</div>
                                                    <div className="text-sm text-gray-500">
                                                        PDF, DOC, XLS, PPT, ZIP, Images (Max 10MB)
                                                    </div>
                                                </div>
                                            )}
                                        </label>
                                    </div>
                                    {errors.file && (
                                        <p className="text-sm text-red-600">{errors.file}</p>
                                    )}
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    <Label htmlFor="file_url">
                                        Document URL <span className="text-red-500">*</span>
                                    </Label>
                                    <div className="relative">
                                        <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                        <Input
                                            id="file_url"
                                            type="url"
                                            value={data.file_url}
                                            onChange={(e) => setData("file_url", e.target.value)}
                                            placeholder="https://example.com/document.pdf"
                                            className={`pl-10 ${errors.file_url ? "border-red-500" : ""}`}
                                        />
                                    </div>
                                    {errors.file_url && (
                                        <p className="text-sm text-red-600">{errors.file_url}</p>
                                    )}
                                    <p className="text-sm text-gray-500">
                                        Enter the URL of the document hosted elsewhere
                                    </p>
                                </div>
                            )}

                            {/* Title */}
                            <div className="space-y-2">
                                <Label htmlFor="title">
                                    Title <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="title"
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData("title", e.target.value)}
                                    placeholder="Enter document title..."
                                    className={errors.title ? "border-red-500" : ""}
                                />
                                {errors.title && (
                                    <p className="text-sm text-red-600">{errors.title}</p>
                                )}
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <Label htmlFor="description">
                                    Description <span className="text-red-500">*</span>
                                </Label>
                                <Textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) => setData("description", e.target.value)}
                                    placeholder="Enter document description..."
                                    rows={4}
                                    className={errors.description ? "border-red-500" : ""}
                                />
                                {errors.description && (
                                    <p className="text-sm text-red-600">{errors.description}</p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Category */}
                                <div className="space-y-2">
                                    <Label htmlFor="category">
                                        Category <span className="text-red-500">*</span>
                                    </Label>
                                    <Select
                                        value={data.category}
                                        onValueChange={(value) => setData("category", value)}
                                    >
                                        <SelectTrigger className={errors.category ? "border-red-500" : ""}>
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.entries(categories).map(([key, label]) => (
                                                <SelectItem key={key} value={key}>
                                                    {label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    {errors.category && (
                                        <p className="text-sm text-red-600">{errors.category}</p>
                                    )}
                                </div>

                                {/* Author */}
                                <div className="space-y-2">
                                    <Label htmlFor="author">
                                        Author <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="author"
                                        type="text"
                                        value={data.author}
                                        onChange={(e) => setData("author", e.target.value)}
                                        placeholder="Enter author name..."
                                        className={errors.author ? "border-red-500" : ""}
                                    />
                                    {errors.author && (
                                        <p className="text-sm text-red-600">{errors.author}</p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Published Date */}
                                <div className="space-y-2">
                                    <Label htmlFor="published_date">
                                        Published Date <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="published_date"
                                        type="date"
                                        value={data.published_date}
                                        onChange={(e) => setData("published_date", e.target.value)}
                                        className={errors.published_date ? "border-red-500" : ""}
                                    />
                                    {errors.published_date && (
                                        <p className="text-sm text-red-600">{errors.published_date}</p>
                                    )}
                                </div>

                                {/* Version */}
                                <div className="space-y-2">
                                    <Label htmlFor="version">Version</Label>
                                    <Input
                                        id="version"
                                        type="text"
                                        value={data.version}
                                        onChange={(e) => setData("version", e.target.value)}
                                        placeholder="e.g., 1.0, 2.1"
                                        className={errors.version ? "border-red-500" : ""}
                                    />
                                    {errors.version && (
                                        <p className="text-sm text-red-600">{errors.version}</p>
                                    )}
                                </div>

                                {/* Sort Order */}
                                <div className="space-y-2">
                                    <Label htmlFor="sort_order">Sort Order</Label>
                                    <Input
                                        id="sort_order"
                                        type="number"
                                        value={data.sort_order}
                                        onChange={(e) => setData("sort_order", e.target.value)}
                                        placeholder="Enter sort order"
                                        min="0"
                                        className={errors.sort_order ? "border-red-500" : ""}
                                    />
                                    {errors.sort_order && (
                                        <p className="text-sm text-red-600">{errors.sort_order}</p>
                                    )}
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="space-y-2">
                                <Label htmlFor="tags">Tags</Label>
                                <Input
                                    id="tags"
                                    type="text"
                                    value={data.tags}
                                    onChange={(e) => setData("tags", e.target.value)}
                                    placeholder="Enter tags separated by commas (e.g., HIV, policy, guidelines)"
                                    className={errors.tags ? "border-red-500" : ""}
                                />
                                {errors.tags && (
                                    <p className="text-sm text-red-600">{errors.tags}</p>
                                )}
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
                                        onCheckedChange={(checked) => setData("is_active", checked)}
                                    />
                                    <Label htmlFor="is_active">Active</Label>
                                    <p className="text-sm text-gray-500 ml-2">
                                        {data.is_active
                                            ? "Document will be visible to users"
                                            : "Document will be hidden from users"}
                                    </p>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Switch
                                        id="is_featured"
                                        checked={data.is_featured}
                                        onCheckedChange={(checked) => setData("is_featured", checked)}
                                    />
                                    <Label htmlFor="is_featured">Featured</Label>
                                    <p className="text-sm text-gray-500 ml-2">
                                        {data.is_featured
                                            ? "Document will appear in featured sections"
                                            : "Document will appear in regular listings"}
                                    </p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-4 pt-6 border-t">
                                <Button type="submit" disabled={processing}>
                                    <Save className="h-4 w-4 mr-2" />
                                    {processing ? "Creating..." : "Create Document"}
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

                {/* Preview */}
                {(data.title || data.description) && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Preview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">
                                        {data.file ? getFileTypeIcon(data.file) : (uploadType === 'url' ? '🔗' : '📁')}
                                    </span>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg text-gray-900">
                                            {data.title || "Document Title"}
                                        </h3>
                                        <p className="text-gray-700 mt-1">
                                            {data.description || "Document description will appear here..."}
                                        </p>
                                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                                            {data.category && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                    {categories[data.category]}
                                                </span>
                                            )}
                                            {data.author && <span>By {data.author}</span>}
                                            {data.version && <span>v{data.version}</span>}
                                            {data.file && (
                                                <span>{formatFileSize(data.file.size)}</span>
                                            )}
                                            {data.is_featured && (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                                    Featured
                                                </span>
                                            )}
                                        </div>
                                        {data.tags && (
                                            <div className="flex flex-wrap gap-1 mt-2">
                                                {data.tags.split(',').map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="inline-flex items-center px-2 py-1 rounded text-xs bg-gray-100 text-gray-700"
                                                    >
                                                        {tag.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}

                {/* Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3 text-sm text-gray-600">
                            <p>
                                • <strong>File Upload:</strong> Supports PDF, DOC, XLS, PPT, ZIP, and image files up to 10MB
                            </p>
                            <p>
                                • <strong>External URL:</strong> Link to documents hosted on other platforms or websites
                            </p>
                            <p>
                                • <strong>Categories:</strong> Organize documents by HIV/AIDS program areas for easy navigation
                            </p>
                            <p>
                                • <strong>Tags:</strong> Add searchable keywords to help users find relevant documents
                            </p>
                            <p>
                                • <strong>Featured:</strong> Featured documents appear prominently in listings and search results
                            </p>
                            <p>
                                • <strong>Sort Order:</strong> Lower numbers appear first in category listings
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
