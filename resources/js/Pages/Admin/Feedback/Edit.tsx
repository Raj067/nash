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
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import {
    ArrowLeft,
    Save,
    Star,
    User,
    Mail,
    Phone,
    MessageCircle,
    Eye,
    Clock,
} from "lucide-react";

interface Feedback {
    id: number;
    type: string;
    name: string;
    email: string;
    phone: string | null;
    subject: string;
    message: string;
    rating: number | null;
    ip_address: string | null;
    status: string;
    admin_response: string | null;
    responded_at: string | null;
    created_at: string;
    updated_at: string;
}

interface Props {
    feedback: Feedback;
    types: { [key: string]: string };
    statuses: { [key: string]: string };
}

export default function Edit({ feedback, types, statuses }: Props) {
    const { data, setData, patch, processing, errors } = useForm({
        type: feedback.type,
        name: feedback.name,
        email: feedback.email,
        phone: feedback.phone || "",
        subject: feedback.subject,
        message: feedback.message,
        rating: feedback.rating?.toString() || "",
        status: feedback.status,
        admin_response: feedback.admin_response || "",
    });

    const [selectedRating, setSelectedRating] = useState<number>(
        feedback.rating || 0
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(route("admin.feedback.update", feedback.id));
    };

    const handleRatingClick = (rating: number) => {
        setSelectedRating(rating);
        setData("rating", rating.toString());
    };

    const getTypeIcon = (type: string) => {
        const icons: { [key: string]: string } = {
            complaint: "😞",
            compliment: "😊",
            suggestion: "💡",
            general: "💬",
        };
        return icons[type] || "💬";
    };

    const getStatusBadgeColor = (status: string) => {
        const colors: { [key: string]: string } = {
            pending: "bg-yellow-100 text-yellow-800",
            in_progress: "bg-blue-100 text-blue-800",
            resolved: "bg-green-100 text-green-800",
        };
        return colors[status] || "bg-gray-100 text-gray-800";
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    return (
        <AdminLayout>
            <Head title={`Edit Feedback - ${feedback.subject}`} />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href={route("admin.feedback.index")}>
                        <Button variant="outline" size="sm">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Feedback
                        </Button>
                    </Link>
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-gray-900">
                            Edit Feedback
                        </h1>
                        <p className="text-gray-600">
                            Update feedback details and status
                        </p>
                    </div>
                    <Link href={route("admin.feedback.show", feedback.id)}>
                        <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                        </Button>
                    </Link>
                </div>

                {/* Current Feedback Info */}
                <Card>
                    <CardHeader>
                        <CardTitle>Current Feedback Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                            <div>
                                <span className="font-medium text-gray-700">
                                    Status:
                                </span>
                                <div className="mt-1">
                                    <Badge
                                        className={getStatusBadgeColor(
                                            feedback.status
                                        )}
                                    >
                                        {statuses[feedback.status]}
                                    </Badge>
                                </div>
                            </div>
                            <div>
                                <span className="font-medium text-gray-700">
                                    Type:
                                </span>
                                <div className="mt-1">
                                    {getTypeIcon(feedback.type)}{" "}
                                    {types[feedback.type]}
                                </div>
                            </div>
                            <div>
                                <span className="font-medium text-gray-700">
                                    Submitted:
                                </span>
                                <div className="mt-1">
                                    {formatDate(feedback.created_at)}
                                </div>
                            </div>
                            <div>
                                <span className="font-medium text-gray-700">
                                    Last Updated:
                                </span>
                                <div className="mt-1">
                                    {formatDate(feedback.updated_at)}
                                </div>
                            </div>
                        </div>
                        {feedback.responded_at && (
                            <div className="mt-4 pt-4 border-t">
                                <span className="font-medium text-gray-700">
                                    Responded:
                                </span>
                                <span className="ml-2 text-sm text-gray-600">
                                    {formatDate(feedback.responded_at)}
                                </span>
                            </div>
                        )}
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Feedback Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    {/* Feedback Type */}
                                    <div className="space-y-2">
                                        <Label htmlFor="type">
                                            Feedback Type{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </Label>
                                        <Select
                                            value={data.type}
                                            onValueChange={(value) =>
                                                setData("type", value)
                                            }
                                        >
                                            <SelectTrigger
                                                className={
                                                    errors.type
                                                        ? "border-red-500"
                                                        : ""
                                                }
                                            >
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Object.entries(types).map(
                                                    ([key, label]) => (
                                                        <SelectItem
                                                            key={key}
                                                            value={key}
                                                        >
                                                            {getTypeIcon(key)}{" "}
                                                            {label}
                                                        </SelectItem>
                                                    )
                                                )}
                                            </SelectContent>
                                        </Select>
                                        {errors.type && (
                                            <p className="text-sm text-red-600">
                                                {errors.type}
                                            </p>
                                        )}
                                    </div>

                                    {/* Contact Information */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">
                                                Full Name{" "}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </Label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                                <Input
                                                    id="name"
                                                    type="text"
                                                    value={data.name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                    className={`pl-10 ${
                                                        errors.name
                                                            ? "border-red-500"
                                                            : ""
                                                    }`}
                                                />
                                            </div>
                                            {errors.name && (
                                                <p className="text-sm text-red-600">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">
                                                Email Address{" "}
                                                <span className="text-red-500">
                                                    *
                                                </span>
                                            </Label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={data.email}
                                                    onChange={(e) =>
                                                        setData(
                                                            "email",
                                                            e.target.value
                                                        )
                                                    }
                                                    className={`pl-10 ${
                                                        errors.email
                                                            ? "border-red-500"
                                                            : ""
                                                    }`}
                                                />
                                            </div>
                                            {errors.email && (
                                                <p className="text-sm text-red-600">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Phone Number */}
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">
                                            Phone Number
                                        </Label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                            <Input
                                                id="phone"
                                                type="tel"
                                                value={data.phone}
                                                onChange={(e) =>
                                                    setData(
                                                        "phone",
                                                        e.target.value
                                                    )
                                                }
                                                className={`pl-10 ${
                                                    errors.phone
                                                        ? "border-red-500"
                                                        : ""
                                                }`}
                                            />
                                        </div>
                                        {errors.phone && (
                                            <p className="text-sm text-red-600">
                                                {errors.phone}
                                            </p>
                                        )}
                                    </div>

                                    {/* Subject */}
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">
                                            Subject{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </Label>
                                        <div className="relative">
                                            <MessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                            <Input
                                                id="subject"
                                                type="text"
                                                value={data.subject}
                                                onChange={(e) =>
                                                    setData(
                                                        "subject",
                                                        e.target.value
                                                    )
                                                }
                                                className={`pl-10 ${
                                                    errors.subject
                                                        ? "border-red-500"
                                                        : ""
                                                }`}
                                            />
                                        </div>
                                        {errors.subject && (
                                            <p className="text-sm text-red-600">
                                                {errors.subject}
                                            </p>
                                        )}
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <Label htmlFor="message">
                                            Message{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </Label>
                                        <Textarea
                                            id="message"
                                            value={data.message}
                                            onChange={(e) =>
                                                setData(
                                                    "message",
                                                    e.target.value
                                                )
                                            }
                                            rows={6}
                                            className={
                                                errors.message
                                                    ? "border-red-500"
                                                    : ""
                                            }
                                        />
                                        {errors.message && (
                                            <p className="text-sm text-red-600">
                                                {errors.message}
                                            </p>
                                        )}
                                        <p className="text-sm text-gray-500">
                                            {data.message.length} characters
                                        </p>
                                    </div>

                                    {/* Rating */}
                                    <div className="space-y-2">
                                        <Label>Rating</Label>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <button
                                                        key={star}
                                                        type="button"
                                                        onClick={() =>
                                                            handleRatingClick(
                                                                star
                                                            )
                                                        }
                                                        className="focus:outline-none"
                                                    >
                                                        <Star
                                                            className={`h-6 w-6 transition-colors ${
                                                                star <=
                                                                selectedRating
                                                                    ? "text-yellow-400 fill-current"
                                                                    : "text-gray-300 hover:text-yellow-200"
                                                            }`}
                                                        />
                                                    </button>
                                                ))}
                                            </div>
                                            {selectedRating > 0 && (
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm font-medium">
                                                        {selectedRating} star
                                                        {selectedRating !== 1
                                                            ? "s"
                                                            : ""}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setSelectedRating(
                                                                0
                                                            );
                                                            setData(
                                                                "rating",
                                                                ""
                                                            );
                                                        }}
                                                        className="text-xs text-gray-500 hover:text-gray-700"
                                                    >
                                                        Clear
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                        {errors.rating && (
                                            <p className="text-sm text-red-600">
                                                {errors.rating}
                                            </p>
                                        )}
                                    </div>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Admin Response */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Admin Response</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="status">
                                            Status{" "}
                                            <span className="text-red-500">
                                                *
                                            </span>
                                        </Label>
                                        <Select
                                            value={data.status}
                                            onValueChange={(value) =>
                                                setData("status", value)
                                            }
                                        >
                                            <SelectTrigger
                                                className={
                                                    errors.status
                                                        ? "border-red-500"
                                                        : ""
                                                }
                                            >
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Object.entries(statuses).map(
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
                                        {errors.status && (
                                            <p className="text-sm text-red-600">
                                                {errors.status}
                                            </p>
                                        )}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="admin_response">
                                            Admin Response
                                        </Label>
                                        <Textarea
                                            id="admin_response"
                                            value={data.admin_response}
                                            onChange={(e) =>
                                                setData(
                                                    "admin_response",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Enter admin response to this feedback..."
                                            rows={4}
                                            className={
                                                errors.admin_response
                                                    ? "border-red-500"
                                                    : ""
                                            }
                                        />
                                        {errors.admin_response && (
                                            <p className="text-sm text-red-600">
                                                {errors.admin_response}
                                            </p>
                                        )}
                                        <p className="text-sm text-gray-500">
                                            Response will be recorded when
                                            status is set to "Resolved"
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Actions */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Actions</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Button
                                    onClick={handleSubmit}
                                    disabled={processing}
                                    className="w-full"
                                >
                                    <Save className="h-4 w-4 mr-2" />
                                    {processing
                                        ? "Updating..."
                                        : "Update Feedback"}
                                </Button>
                                <Link href={route("admin.feedback.index")}>
                                    <Button
                                        type="button"
                                        variant="outline"
                                        className="w-full"
                                    >
                                        Cancel
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Original Info */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Original Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm">
                                <div>
                                    <span className="font-medium text-gray-700">
                                        Feedback ID:
                                    </span>
                                    <div className="text-gray-600">
                                        #{feedback.id}
                                    </div>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-700">
                                        IP Address:
                                    </span>
                                    <div className="text-gray-600 font-mono">
                                        {feedback.ip_address || "Not recorded"}
                                    </div>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-700">
                                        Original Rating:
                                    </span>
                                    <div className="text-gray-600">
                                        {feedback.rating ? (
                                            <div className="flex items-center gap-1">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star
                                                        key={star}
                                                        className={`h-3 w-3 ${
                                                            star <=
                                                            feedback.rating!
                                                                ? "text-yellow-400 fill-current"
                                                                : "text-gray-300"
                                                        }`}
                                                    />
                                                ))}
                                                <span className="ml-1">
                                                    ({feedback.rating})
                                                </span>
                                            </div>
                                        ) : (
                                            "No rating provided"
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-700">
                                        Submitted:
                                    </span>
                                    <div className="text-gray-600">
                                        {formatDate(feedback.created_at)}
                                    </div>
                                </div>
                                {feedback.responded_at && (
                                    <div>
                                        <span className="font-medium text-gray-700">
                                            Responded:
                                        </span>
                                        <div className="text-gray-600">
                                            {formatDate(feedback.responded_at)}
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Status Guide */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Status Guide</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Badge className="bg-yellow-100 text-yellow-800">
                                            Pending
                                        </Badge>
                                        <span>New, unprocessed</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge className="bg-blue-100 text-blue-800">
                                            In Progress
                                        </Badge>
                                        <span>Being handled</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge className="bg-green-100 text-green-800">
                                            Resolved
                                        </Badge>
                                        <span>Completed</span>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-3">
                                    Setting status to "Resolved" will
                                    automatically record the response timestamp.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Quick Actions */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Quick Actions</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full"
                                    onClick={() => {
                                        setData("status", "in_progress");
                                    }}
                                >
                                    <Clock className="h-4 w-4 mr-2" />
                                    Mark In Progress
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full"
                                    onClick={() => {
                                        setData("status", "resolved");
                                    }}
                                >
                                    <Star className="h-4 w-4 mr-2" />
                                    Mark Resolved
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
