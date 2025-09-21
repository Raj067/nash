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
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { ArrowLeft, Save, Star, User, Mail, Phone, MessageCircle } from "lucide-react";

interface Props {
    types: { [key: string]: string };
}

export default function Create({ types }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        type: "",
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        rating: "",
        ip_address: "",
    });

    const [selectedRating, setSelectedRating] = useState<number>(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("admin.feedback.store"));
    };

    const handleRatingClick = (rating: number) => {
        setSelectedRating(rating);
        setData('rating', rating.toString());
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

    const getTypeDescription = (type: string) => {
        const descriptions: { [key: string]: string } = {
            complaint: "Report issues, problems, or dissatisfaction",
            compliment: "Share positive feedback and appreciation",
            suggestion: "Provide ideas for improvement or new features",
            general: "General inquiries or other feedback",
        };
        return descriptions[type] || "";
    };

    return (
        <AdminLayout>
            <Head title="Create New Feedback" />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href={route("admin.feedback.index")}>
                        <Button variant="outline" size="sm">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Feedback
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Create New Feedback
                        </h1>
                        <p className="text-gray-600">
                            Add a new feedback entry to the system
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Feedback Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Feedback Type */}
                                    <div className="space-y-2">
                                        <Label htmlFor="type">
                                            Feedback Type <span className="text-red-500">*</span>
                                        </Label>
                                        <Select
                                            value={data.type}
                                            onValueChange={(value) => setData("type", value)}
                                        >
                                            <SelectTrigger className={errors.type ? "border-red-500" : ""}>
                                                <SelectValue placeholder="Select feedback type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Object.entries(types).map(([key, label]) => (
                                                    <SelectItem key={key} value={key}>
                                                        <div className="flex items-center gap-2">
                                                            <span>{getTypeIcon(key)}</span>
                                                            <div>
                                                                <div className="font-medium">{label}</div>
                                                                <div className="text-xs text-gray-500">
                                                                    {getTypeDescription(key)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        {errors.type && (
                                            <p className="text-sm text-red-600">{errors.type}</p>
                                        )}
                                    </div>

                                    {/* Contact Information */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">
                                                Full Name <span className="text-red-500">*</span>
                                            </Label>
                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                                <Input
                                                    id="name"
                                                    type="text"
                                                    value={data.name}
                                                    onChange={(e) => setData("name", e.target.value)}
                                                    placeholder="Enter full name"
                                                    className={`pl-10 ${errors.name ? "border-red-500" : ""}`}
                                                />
                                            </div>
                                            {errors.name && (
                                                <p className="text-sm text-red-600">{errors.name}</p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">
                                                Email Address <span className="text-red-500">*</span>
                                            </Label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={data.email}
                                                    onChange={(e) => setData("email", e.target.value)}
                                                    placeholder="Enter email address"
                                                    className={`pl-10 ${errors.email ? "border-red-500" : ""}`}
                                                />
                                            </div>
                                            {errors.email && (
                                                <p className="text-sm text-red-600">{errors.email}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Phone Number */}
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                            <Input
                                                id="phone"
                                                type="tel"
                                                value={data.phone}
                                                onChange={(e) => setData("phone", e.target.value)}
                                                placeholder="Enter phone number"
                                                className={`pl-10 ${errors.phone ? "border-red-500" : ""}`}
                                            />
                                        </div>
                                        {errors.phone && (
                                            <p className="text-sm text-red-600">{errors.phone}</p>
                                        )}
                                    </div>

                                    {/* Subject */}
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">
                                            Subject <span className="text-red-500">*</span>
                                        </Label>
                                        <div className="relative">
                                            <MessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                            <Input
                                                id="subject"
                                                type="text"
                                                value={data.subject}
                                                onChange={(e) => setData("subject", e.target.value)}
                                                placeholder="Enter feedback subject"
                                                className={`pl-10 ${errors.subject ? "border-red-500" : ""}`}
                                            />
                                        </div>
                                        {errors.subject && (
                                            <p className="text-sm text-red-600">{errors.subject}</p>
                                        )}
                                    </div>

                                    {/* Message */}
                                    <div className="space-y-2">
                                        <Label htmlFor="message">
                                            Message <span className="text-red-500">*</span>
                                        </Label>
                                        <Textarea
                                            id="message"
                                            value={data.message}
                                            onChange={(e) => setData("message", e.target.value)}
                                            placeholder="Enter detailed feedback message..."
                                            rows={6}
                                            className={errors.message ? "border-red-500" : ""}
                                        />
                                        {errors.message && (
                                            <p className="text-sm text-red-600">{errors.message}</p>
                                        )}
                                        <p className="text-sm text-gray-500">
                                            {data.message.length} characters
                                        </p>
                                    </div>

                                    {/* Rating */}
                                    <div className="space-y-2">
                                        <Label>Rating (Optional)</Label>
                                        <div className="flex items-center gap-2">
                                            <div className="flex items-center gap-1">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <button
                                                        key={star}
                                                        type="button"
                                                        onClick={() => handleRatingClick(star)}
                                                        className="focus:outline-none"
                                                    >
                                                        <Star
                                                            className={`h-6 w-6 transition-colors ${
                                                                star <= selectedRating
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
                                                        {selectedRating} star{selectedRating !== 1 ? 's' : ''}
                                                    </span>
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setSelectedRating(0);
                                                            setData('rating', '');
                                                        }}
                                                        className="text-xs text-gray-500 hover:text-gray-700"
                                                    >
                                                        Clear
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                        {errors.rating && (
                                            <p className="text-sm text-red-600">{errors.rating}</p>
                                        )}
                                    </div>

                                    {/* IP Address */}
                                    <div className="space-y-2">
                                        <Label htmlFor="ip_address">IP Address (Optional)</Label>
                                        <Input
                                            id="ip_address"
                                            type="text"
                                            value={data.ip_address}
                                            onChange={(e) => setData("ip_address", e.target.value)}
                                            placeholder="Will be auto-detected if not provided"
                                            className={errors.ip_address ? "border-red-500" : ""}
                                        />
                                        {errors.ip_address && (
                                            <p className="text-sm text-red-600">{errors.ip_address}</p>
                                        )}
                                        <p className="text-sm text-gray-500">
                                            Leave empty to auto-detect from request
                                        </p>
                                    </div>
                                </form>
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
                                    {processing ? "Creating..." : "Create Feedback"}
                                </Button>
                                <Link href={route("admin.feedback.index")}>
                                    <Button type="button" variant="outline" className="w-full">
                                        Cancel
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Feedback Types Guide */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Feedback Types Guide</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {Object.entries(types).map(([key, label]) => (
                                    <div key={key} className="border-l-4 border-gray-200 pl-4">
                                        <div className="flex items-center gap-2 font-medium">
                                            <span>{getTypeIcon(key)}</span>
                                            <span>{label}</span>
                                        </div>
                                        <p className="text-sm text-gray-600 mt-1">
                                            {getTypeDescription(key)}
                                        </p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Rating Guide */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Rating Guide</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="h-3 w-3 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                        <span>Excellent</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex">
                                            {[1, 2, 3, 4].map((star) => (
                                                <Star key={star} className="h-3 w-3 text-yellow-400 fill-current" />
                                            ))}
                                            <Star className="h-3 w-3 text-gray-300" />
                                        </div>
                                        <span>Good</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex">
                                            {[1, 2, 3].map((star) => (
                                                <Star key={star} className="h-3 w-3 text-yellow-400 fill-current" />
                                            ))}
                                            {[4, 5].map((star) => (
                                                <Star key={star} className="h-3 w-3 text-gray-300" />
                                            ))}
                                        </div>
                                        <span>Average</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex">
                                            {[1, 2].map((star) => (
                                                <Star key={star} className="h-3 w-3 text-yellow-400 fill-current" />
                                            ))}
                                            {[3, 4, 5].map((star) => (
                                                <Star key={star} className="h-3 w-3 text-gray-300" />
                                            ))}
                                        </div>
                                        <span>Poor</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="flex">
                                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                                            {[2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="h-3 w-3 text-gray-300" />
                                            ))}
                                        </div>
                                        <span>Very Poor</span>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500 mt-3">
                                    Rating is optional and helps us understand customer satisfaction levels.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Status Info */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Status Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2 text-sm">
                                    <p>New feedback will be created with:</p>
                                    <div className="bg-yellow-50 border border-yellow-200 rounded p-2">
                                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                            Pending
                                        </span>
                                    </div>
                                    <p className="text-gray-600">
                                        Status can be updated after creation to track progress and resolution.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Preview */}
                {(data.subject || data.message) && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Preview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="border rounded-lg p-4 bg-gray-50">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        {data.type && (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                {getTypeIcon(data.type)} {types[data.type] || data.type}
                                            </span>
                                        )}
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                            Pending
                                        </span>
                                    </div>
                                    {selectedRating > 0 && (
                                        <div className="flex items-center gap-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    className={`h-3 w-3 ${
                                                        star <= selectedRating
                                                            ? "text-yellow-400 fill-current"
                                                            : "text-gray-300"
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <h3 className="font-medium text-lg mb-2">
                                    {data.subject || "Feedback Subject"}
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    {data.message || "Feedback message will appear here..."}
                                </p>
                                <div className="text-sm text-gray-500 space-y-1">
                                    <div><strong>From:</strong> {data.name || "Customer Name"}</div>
                                    <div><strong>Email:</strong> {data.email || "customer@example.com"}</div>
                                    {data.phone && <div><strong>Phone:</strong> {data.phone}</div>}
                                    <div><strong>Submitted:</strong> {new Date().toLocaleDateString()}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AdminLayout>
    );
}
