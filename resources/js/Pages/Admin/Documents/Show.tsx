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
    Download,
    ExternalLink,
    Calendar,
    User,
    Hash,
    FileText,
    Tag,
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
}

interface Props {
    document: Document;
}

export default function Show({ document }: Props) {
    const handleDelete = () => {
        router.delete(route("admin.documents.destroy", document.id));
    };

    const handleToggleStatus = () => {
        router.patch(route("admin.documents.toggle-status", document.id));
    };

    const handleToggleFeatured = () => {
        router.patch(route("admin.documents.toggle-featured", document.id));
    };

    const handleDownload = () => {
        if (document.file_path) {
            window.open(route("admin.documents.download", document.id));
        } else if (document.file_url) {
            window.open(document.file_url, "_blank");
        }
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

    const getCategoryDisplayName = (category: string) => {
        const categories: { [key: string]: string } = {
            plans_strategic: "Plans & Strategic Documents",
            policy: "Policy Documents",
            guidelines: "Guidelines",
            reports: "Reports (Semi Annual and Annual Reports etc)",
            manuals_sops: "Manuals, Forms, Tools and SOPs",
            frameworks: "Frameworks",
            iec_sbc: "IEC/SBC Materials",
            databases: "Databases",
        };
        return categories[category] || category;
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

    return (
        <AdminLayout>
            <Head title={`Document - ${document.title}`} />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href={route("admin.documents.index")}>
                            <Button variant="outline" size="sm">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Documents
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                Document Details
                            </h1>
                            <p className="text-gray-600">
                                View and manage document information
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button onClick={handleDownload}>
                            {document.file_path ? (
                                <Download className="h-4 w-4 mr-2" />
                            ) : (
                                <ExternalLink className="h-4 w-4 mr-2" />
                            )}
                            {document.file_path ? "Download" : "Open URL"}
                        </Button>
                        <Link href={route("admin.documents.edit", document.id)}>
                            <Button>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                            </Button>
                        </Link>
                        <Button variant="outline" onClick={handleToggleStatus}>
                            {document.is_active ? (
                                <ToggleLeft className="h-4 w-4 mr-2" />
                            ) : (
                                <ToggleRight className="h-4 w-4 mr-2" />
                            )}
                            {document.is_active ? "Deactivate" : "Activate"}
                        </Button>
                        <Button
                            variant="outline"
                            onClick={handleToggleFeatured}
                        >
                            {document.is_featured ? (
                                <StarOff className="h-4 w-4 mr-2" />
                            ) : (
                                <Star className="h-4 w-4 mr-2" />
                            )}
                            {document.is_featured ? "Unfeature" : "Feature"}
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
                                        Delete Document
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Are you sure you want to delete this
                                        document? This action cannot be undone.
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
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <div
                                    className={`w-3 h-3 rounded-full ${
                                        document.is_active
                                            ? "bg-green-500"
                                            : "bg-red-500"
                                    }`}
                                />
                                <span className="text-sm font-medium">
                                    {document.is_active ? "Active" : "Inactive"}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Hash className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">
                                    ID: {document.id}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Download className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">
                                    {document.download_count} downloads
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <FileText className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">
                                    {document.file_type.toUpperCase()}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Document Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>Document Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <span className="text-4xl">
                                    {getFileTypeIcon(document.file_type)}
                                </span>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            {document.title}
                                        </h2>
                                        {document.is_featured && (
                                            <Badge className="bg-yellow-100 text-yellow-800">
                                                <Star className="h-3 w-3 mr-1" />
                                                Featured
                                            </Badge>
                                        )}
                                        <Badge
                                            className={
                                                document.is_active
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-red-100 text-red-800"
                                            }
                                        >
                                            {document.is_active
                                                ? "Active"
                                                : "Inactive"}
                                        </Badge>
                                    </div>
                                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                                        {document.description}
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-gray-600">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                            {getCategoryDisplayName(
                                                document.category
                                            )}
                                        </span>
                                        {document.formatted_file_size && (
                                            <span>
                                                {document.formatted_file_size}
                                            </span>
                                        )}
                                        {document.version && (
                                            <span>
                                                Version {document.version}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Tags */}
                            {document.tags && document.tags.length > 0 && (
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                                        <Tag className="h-4 w-4" />
                                        Tags
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {document.tags.map((tag, index) => (
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

                {/* File Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>File Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        File Type
                                    </h4>
                                    <p className="text-gray-600 font-mono">
                                        {document.file_type.toUpperCase()}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        File Size
                                    </h4>
                                    <p className="text-gray-600">
                                        {document.formatted_file_size ||
                                            "Unknown"}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Download Count
                                    </h4>
                                    <p className="text-gray-600 font-semibold">
                                        {document.download_count} downloads
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Source
                                    </h4>
                                    <p className="text-gray-600">
                                        {document.file_path
                                            ? "Uploaded file"
                                            : "External URL"}
                                    </p>
                                </div>
                                {document.file_url && (
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-1">
                                            External URL
                                        </h4>
                                        <a
                                            href={document.file_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline break-all"
                                        >
                                            {document.file_url}
                                        </a>
                                    </div>
                                )}
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Sort Order
                                    </h4>
                                    <p className="text-gray-600">
                                        {document.sort_order}
                                    </p>
                                </div>
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
                                    <h4 className="font-medium text-gray-900 mb-1 flex items-center gap-2">
                                        <User className="h-4 w-4" />
                                        Author
                                    </h4>
                                    <p className="text-gray-600">
                                        {document.author}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1 flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        Published Date
                                    </h4>
                                    <p className="text-gray-600">
                                        {new Date(
                                            document.published_date
                                        ).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Version
                                    </h4>
                                    <p className="text-gray-600">
                                        {document.version || "Not specified"}
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Created
                                    </h4>
                                    <p className="text-gray-600">
                                        {formatDate(document.created_at)}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Last Updated
                                    </h4>
                                    <p className="text-gray-600">
                                        {formatDate(document.updated_at)}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Category
                                    </h4>
                                    <Badge className="bg-blue-100 text-blue-800">
                                        {getCategoryDisplayName(
                                            document.category
                                        )}
                                    </Badge>
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
                                    Edit Document
                                </h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    Update document details, file, or metadata
                                </p>
                                <Link
                                    href={route(
                                        "admin.documents.edit",
                                        document.id
                                    )}
                                >
                                    <Button size="sm" className="w-full">
                                        <Edit className="h-4 w-4 mr-2" />
                                        Edit
                                    </Button>
                                </Link>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-gray-900 mb-2">
                                    {document.is_active
                                        ? "Deactivate"
                                        : "Activate"}
                                </h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    {document.is_active
                                        ? "Hide document from public view"
                                        : "Make document visible to users"}
                                </p>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="w-full"
                                    onClick={handleToggleStatus}
                                >
                                    {document.is_active ? (
                                        <ToggleLeft className="h-4 w-4 mr-2" />
                                    ) : (
                                        <ToggleRight className="h-4 w-4 mr-2" />
                                    )}
                                    {document.is_active
                                        ? "Deactivate"
                                        : "Activate"}
                                </Button>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-gray-900 mb-2">
                                    {document.is_featured
                                        ? "Unfeature"
                                        : "Feature"}
                                </h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    {document.is_featured
                                        ? "Remove from featured sections"
                                        : "Highlight in featured sections"}
                                </p>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="w-full"
                                    onClick={handleToggleFeatured}
                                >
                                    {document.is_featured ? (
                                        <StarOff className="h-4 w-4 mr-2" />
                                    ) : (
                                        <Star className="h-4 w-4 mr-2" />
                                    )}
                                    {document.is_featured
                                        ? "Unfeature"
                                        : "Feature"}
                                </Button>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-gray-900 mb-2">
                                    Delete Document
                                </h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    Permanently remove document and file
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
                                                Delete Document
                                            </AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Are you sure you want to delete
                                                this document? This action
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
