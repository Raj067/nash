import React, { useState } from "react";
import { Head, Link, router, useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Button } from "@/Components/ui/button";
import { Badge } from "@/Components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@/Components/ui/label";
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
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import {
    ArrowLeft,
    Edit,
    Trash2,
    Star,
    User,
    Mail,
    Phone,
    Calendar,
    Clock,
    MessageCircle,
    CheckCircle,
    AlertCircle,
    Send,
    Globe,
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
}

export default function Show({ feedback }: Props) {
    const [isResponseDialogOpen, setIsResponseDialogOpen] = useState(false);
    
    const { data, setData, patch, processing } = useForm({
        admin_response: "",
    });

    const handleDelete = () => {
        router.delete(route("admin.feedback.destroy", feedback.id));
    };

    const handleStatusUpdate = (status: string) => {
        router.patch(route("admin.feedback.update-status", feedback.id), {
            status: status,
        });
    };

    const handleRespond = () => {
        patch(route("admin.feedback.respond", feedback.id), {
            onSuccess: () => {
                setIsResponseDialogOpen(false);
                setData('admin_response', '');
            },
        });
    };

    const getTypeDisplayName = (type: string) => {
        const types: { [key: string]: string } = {
            complaint: 'Complaint',
            compliment: 'Compliment',
            suggestion: 'Suggestion',
            general: 'General Inquiry',
        };
        return types[type] || type;
    };

    const getStatusDisplayName = (status: string) => {
        const statuses: { [key: string]: string } = {
            pending: 'Pending',
            in_progress: 'In Progress',
            resolved: 'Resolved',
        };
        return statuses[status] || status;
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

    const getTypeBadgeColor = (type: string) => {
        const colors: { [key: string]: string } = {
            complaint: "bg-red-100 text-red-800",
            compliment: "bg-green-100 text-green-800",
            suggestion: "bg-blue-100 text-blue-800",
            general: "bg-gray-100 text-gray-800",
        };
        return colors[type] || "bg-gray-100 text-gray-800";
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
        return new Date(dateString).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const renderStars = (rating: number | null) => {
        if (!rating) return null;
        return (
            <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                        key={star}
                        className={`h-4 w-4 ${
                            star <= rating
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                        }`}
                    />
                ))}
                <span className="ml-1 text-sm font-medium">({rating}/5)</span>
            </div>
        );
    };

    const getResponseTime = () => {
        if (!feedback.responded_at) return null;
        
        const submitted = new Date(feedback.created_at);
        const responded = new Date(feedback.responded_at);
        const diffHours = Math.round((responded.getTime() - submitted.getTime()) / (1000 * 60 * 60));
        
        if (diffHours < 24) {
            return `${diffHours} hour${diffHours !== 1 ? 's' : ''}`;
        } else {
            const diffDays = Math.round(diffHours / 24);
            return `${diffDays} day${diffDays !== 1 ? 's' : ''}`;
        }
    };

    return (
        <AdminLayout>
            <Head title={`Feedback - ${feedback.subject}`} />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href={route("admin.feedback.index")}>
                            <Button variant="outline" size="sm">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Feedback
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                Feedback Details
                            </h1>
                            <p className="text-gray-600">
                                View and manage feedback information
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href={route("admin.feedback.edit", feedback.id)}>
                            <Button>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                            </Button>
                        </Link>
                        {feedback.status !== 'in_progress' && (
                            <Button 
                                variant="outline" 
                                onClick={() => handleStatusUpdate('in_progress')}
                            >
                                <Clock className="h-4 w-4 mr-2" />
                                Mark In Progress
                            </Button>
                        )}
                        {feedback.status !== 'resolved' && (
                            <Dialog open={isResponseDialogOpen} onOpenChange={setIsResponseDialogOpen}>
                                <DialogTrigger asChild>
                                    <Button variant="outline">
                                        <Send className="h-4 w-4 mr-2" />
                                        Respond & Resolve
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Respond to Feedback</DialogTitle>
                                        <DialogDescription>
                                            Provide a response to resolve this feedback. The feedback will be marked as resolved.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="admin_response">Admin Response</Label>
                                            <Textarea
                                                id="admin_response"
                                                value={data.admin_response}
                                                onChange={(e) => setData('admin_response', e.target.value)}
                                                placeholder="Enter your response to this feedback..."
                                                rows={4}
                                            />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button variant="outline" onClick={() => setIsResponseDialogOpen(false)}>
                                            Cancel
                                        </Button>
                                        <Button 
                                            onClick={handleRespond} 
                                            disabled={processing || !data.admin_response.trim()}
                                        >
                                            <Send className="h-4 w-4 mr-2" />
                                            {processing ? "Sending..." : "Send Response"}
                                        </Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        )}
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <Button variant="destructive">
                                    <Trash2 className="h-4 w-4 mr-2" />
                                    Delete
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Delete Feedback</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Are you sure you want to delete this feedback?
                                        This action cannot be undone.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
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
                                        feedback.status === 'resolved' 
                                            ? "bg-green-500" 
                                            : feedback.status === 'in_progress'
                                            ? "bg-blue-500"
                                            : "bg-yellow-500"
                                    }`}
                                />
                                <span className="text-sm font-medium">
                                    {getStatusDisplayName(feedback.status)}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <MessageCircle className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">ID: #{feedback.id}</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">
                                    {new Date(feedback.created_at).toLocaleDateString()}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Star className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">
                                    {feedback.rating ? `${feedback.rating}/5` : 'No rating'}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">
                                    {feedback.responded_at ? getResponseTime() : 'No response'}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Feedback Content */}
                <Card>
                    <CardHeader>
                        <CardTitle>Feedback Content</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div>
                                <div className="flex items-center gap-4 mb-4">
                                    <h2 className="text-2xl font-bold text-gray-900">
                                        {feedback.subject}
                                    </h2>
                                    <Badge className={getTypeBadgeColor(feedback.type)}>
                                        {getTypeIcon(feedback.type)} {getTypeDisplayName(feedback.type)}
                                    </Badge>
                                    <Badge className={getStatusBadgeColor(feedback.status)}>
                                        {getStatusDisplayName(feedback.status)}
                                    </Badge>
                                </div>

                                <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                                    <span className="flex items-center gap-1">
                                        <User className="h-4 w-4" />
                                        {feedback.name}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Mail className="h-4 w-4" />
                                        {feedback.email}
                                    </span>
                                    {feedback.phone && (
                                        <span className="flex items-center gap-1">
                                            <Phone className="h-4 w-4" />
                                            {feedback.phone}
                                        </span>
                                    )}
                                    <span className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" />
                                        {formatDate(feedback.created_at)}
                                    </span>
                                    {feedback.rating && (
                                        <div className="flex items-center gap-1">
                                            {renderStars(feedback.rating)}
                                        </div>
                                    )}
                                </div>

                                <div className="prose max-w-none">
                                    <h4 className="font-medium text-gray-900 mb-4">Message</h4>
                                    <div className="bg-gray-50 border-l-4 border-blue-500 p-4 rounded">
                                        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                                            {feedback.message}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Admin Response */}
                            {feedback.admin_response && (
                                <div className="border-t pt-6">
                                    <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        Admin Response
                                    </h4>
                                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                                        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                                            {feedback.admin_response}
                                        </p>
                                        {feedback.responded_at && (
                                            <div className="mt-3 text-sm text-gray-600">
                                                <span className="flex items-center gap-1">
                                                    <Clock className="h-3 w-3" />
                                                    Responded on {formatDate(feedback.responded_at)}
                                                    {getResponseTime() && (
                                                        <span className="ml-2 text-gray-500">
                                                            (Response time: {getResponseTime()})
                                                        </span>
                                                    )}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
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
                                    <h4 className="font-medium text-gray-900 mb-1">Feedback ID</h4>
                                    <p className="text-gray-600 font-mono">#{feedback.id}</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">Type</h4>
                                    <Badge className={getTypeBadgeColor(feedback.type)}>
                                        {getTypeIcon(feedback.type)} {getTypeDisplayName(feedback.type)}
                                    </Badge>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">Status</h4>
                                    <Badge className={getStatusBadgeColor(feedback.status)}>
                                        {getStatusDisplayName(feedback.status)}
                                    </Badge>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">Rating</h4>
                                    <div className="text-gray-600">
                                        {feedback.rating ? renderStars(feedback.rating) : 'No rating provided'}
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">IP Address</h4>
                                    <p className="text-gray-600 font-mono">
                                        {feedback.ip_address || 'Not recorded'}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">Submitted</h4>
                                    <p className="text-gray-600">{formatDate(feedback.created_at)}</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">Last Updated</h4>
                                    <p className="text-gray-600">{formatDate(feedback.updated_at)}</p>
                                </div>
                                {feedback.responded_at && (
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-1">Responded</h4>
                                        <p className="text-gray-600">{formatDate(feedback.responded_at)}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Contact Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                                    <User className="h-4 w-4" />
                                    Full Name
                                </h4>
                                <p className="text-gray-700">{feedback.name}</p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                                    <Mail className="h-4 w-4" />
                                    Email Address
                                </h4>
                                <p className="text-gray-700">
                                    <a 
                                        href={`mailto:${feedback.email}`}
                                        className="text-blue-600 hover:underline"
                                    >
                                        {feedback.email}
                                    </a>
                                </p>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                                    <Phone className="h-4 w-4" />
                                    Phone Number
                                </h4>
                                <p className="text-gray-700">
                                    {feedback.phone ? (
                                        <a 
                                            href={`tel:${feedback.phone}`}
                                            className="text-blue-600 hover:underline"
                                        >
                                            {feedback.phone}
                                        </a>
                                    ) : (
                                        'Not provided'
                                    )}
                                </p>
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
                                <h4 className="font-medium text-gray-900 mb-2">Edit Feedback</h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    Update feedback details, status, and add admin response
                                </p>
                                <Link href={route("admin.feedback.edit", feedback.id)}>
                                    <Button size="sm" className="w-full">
                                        <Edit className="h-4 w-4 mr-2" />
                                        Edit
                                    </Button>
                                </Link>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-gray-900 mb-2">Update Status</h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    Change feedback status to track progress
                                </p>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => handleStatusUpdate(
                                        feedback.status === 'pending' ? 'in_progress' : 
                                        feedback.status === 'in_progress' ? 'resolved' : 'pending'
                                    )}
                                >
                                    <Clock className="h-4 w-4 mr-2" />
                                    {feedback.status === 'pending' ? 'Start Progress' : 
                                     feedback.status === 'in_progress' ? 'Mark Resolved' : 'Reset Status'}
                                </Button>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-gray-900 mb-2">Send Response</h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    Respond to customer and mark as resolved
                                </p>
                                <Dialog open={isResponseDialogOpen} onOpenChange={setIsResponseDialogOpen}>
                                    <DialogTrigger asChild>
                                        <Button size="sm" variant="outline" className="w-full">
                                            <Send className="h-4 w-4 mr-2" />
                                            Respond
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Respond to Feedback</DialogTitle>
                                            <DialogDescription>
                                                Provide a response to resolve this feedback.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="admin_response">Admin Response</Label>
                                                <Textarea
                                                    id="admin_response"
                                                    value={data.admin_response}
                                                    onChange={(e) => setData('admin_response', e.target.value)}
                                                    placeholder="Enter your response..."
                                                    rows={4}
                                                />
                                            </div>
                                        </div>
                                        <DialogFooter>
                                            <Button variant="outline" onClick={() => setIsResponseDialogOpen(false)}>
                                                Cancel
                                            </Button>
                                            <Button 
                                                onClick={handleRespond} 
                                                disabled={processing || !data.admin_response.trim()}
                                            >
                                                Send Response
                                            </Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-gray-900 mb-2">Delete Feedback</h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    Permanently remove this feedback entry
                                </p>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button size="sm" variant="destructive" className="w-full">
                                            <Trash2 className="h-4 w-4 mr-2" />
                                            Delete
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Delete Feedback</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Are you sure you want to delete this feedback?
                                                This action cannot be undone.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction onClick={handleDelete}>
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
