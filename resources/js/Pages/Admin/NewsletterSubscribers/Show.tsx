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
    Mail,
    Globe,
    Calendar,
    Hash,
    UserCheck,
    UserX,
    Clock,
} from "lucide-react";

interface NewsletterSubscriber {
    id: number;
    email: string;
    ip_address: string;
    is_active: boolean;
    subscribed_at: string;
    unsubscribed_at: string | null;
    created_at: string;
    updated_at: string;
}

interface Props {
    subscriber: NewsletterSubscriber;
}

export default function Show({ subscriber }: Props) {
    const handleDelete = () => {
        router.delete(
            route("admin.newsletter-subscribers.destroy", subscriber.id)
        );
    };

    const handleToggleStatus = () => {
        router.patch(
            route("admin.newsletter-subscribers.toggle-status", subscriber.id)
        );
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            timeZoneName: "short",
        });
    };

    const getSubscriptionDuration = () => {
        const subscribed = new Date(subscriber.subscribed_at);
        const end = subscriber.unsubscribed_at
            ? new Date(subscriber.unsubscribed_at)
            : new Date();

        const diffTime = Math.abs(end.getTime() - subscribed.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 30) {
            return `${diffDays} day${diffDays !== 1 ? "s" : ""}`;
        } else if (diffDays < 365) {
            const months = Math.floor(diffDays / 30);
            return `${months} month${months !== 1 ? "s" : ""}`;
        } else {
            const years = Math.floor(diffDays / 365);
            const remainingMonths = Math.floor((diffDays % 365) / 30);
            return `${years} year${years !== 1 ? "s" : ""}${
                remainingMonths > 0
                    ? `, ${remainingMonths} month${
                          remainingMonths !== 1 ? "s" : ""
                      }`
                    : ""
            }`;
        }
    };

    return (
        <AdminLayout>
            <Head title={`Subscriber - ${subscriber.email}`} />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link
                            href={route("admin.newsletter-subscribers.index")}
                        >
                            <Button variant="outline" size="sm">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Subscribers
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                Newsletter Subscriber Details
                            </h1>
                            <p className="text-gray-600">
                                View and manage subscriber information
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link
                            href={route(
                                "admin.newsletter-subscribers.edit",
                                subscriber.id
                            )}
                        >
                            <Button>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                            </Button>
                        </Link>
                        <Button variant="outline" onClick={handleToggleStatus}>
                            {subscriber.is_active ? (
                                <ToggleLeft className="h-4 w-4 mr-2" />
                            ) : (
                                <ToggleRight className="h-4 w-4 mr-2" />
                            )}
                            {subscriber.is_active ? "Deactivate" : "Activate"}
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
                                        Delete Subscriber
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Are you sure you want to delete this
                                        newsletter subscriber? This action
                                        cannot be undone.
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

                {/* Status and Quick Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <div
                                    className={`w-3 h-3 rounded-full ${
                                        subscriber.is_active
                                            ? "bg-green-500"
                                            : "bg-red-500"
                                    }`}
                                />
                                <span className="text-sm font-medium">
                                    {subscriber.is_active
                                        ? "Active"
                                        : "Inactive"}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Hash className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">
                                    ID: {subscriber.id}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">
                                    Duration: {getSubscriptionDuration()}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">
                                    {new Date(
                                        subscriber.subscribed_at
                                    ).toLocaleDateString()}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Subscriber Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>Subscriber Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <Mail className="h-5 w-5 text-blue-500" />
                                    <span className="text-lg font-medium">
                                        {subscriber.email}
                                    </span>
                                </div>
                                {subscriber.is_active ? (
                                    <Badge className="bg-green-100 text-green-800">
                                        <UserCheck className="h-3 w-3 mr-1" />
                                        Active Subscriber
                                    </Badge>
                                ) : (
                                    <Badge className="bg-red-100 text-red-800">
                                        <UserX className="h-3 w-3 mr-1" />
                                        Inactive Subscriber
                                    </Badge>
                                )}
                            </div>

                            {subscriber.ip_address && (
                                <div className="flex items-center gap-2">
                                    <Globe className="h-4 w-4 text-gray-500" />
                                    <span className="text-sm text-gray-600">
                                        IP Address:
                                    </span>
                                    <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                                        {subscriber.ip_address}
                                    </span>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>

                {/* Subscription Timeline */}
                <Card>
                    <CardHeader>
                        <CardTitle>Subscription Timeline</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {/* Subscribed */}
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                    <UserCheck className="h-4 w-4 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900">
                                        Subscribed
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        {formatDate(subscriber.subscribed_at)}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        User joined the newsletter
                                    </p>
                                </div>
                            </div>

                            {/* Unsubscribed (if applicable) */}
                            {subscriber.unsubscribed_at && (
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                        <UserX className="h-4 w-4 text-red-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">
                                            Unsubscribed
                                        </h4>
                                        <p className="text-sm text-gray-600">
                                            {formatDate(
                                                subscriber.unsubscribed_at
                                            )}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            User left the newsletter
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Current Status */}
                            {subscriber.is_active &&
                                !subscriber.unsubscribed_at && (
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                            <Mail className="h-4 w-4 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-gray-900">
                                                Currently Active
                                            </h4>
                                            <p className="text-sm text-gray-600">
                                                Receiving newsletters
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">
                                                Subscribed for{" "}
                                                {getSubscriptionDuration()}
                                            </p>
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
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Subscriber ID
                                    </h4>
                                    <p className="text-gray-600 font-mono">
                                        #{subscriber.id}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Email Address
                                    </h4>
                                    <p className="text-gray-600 break-all">
                                        {subscriber.email}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        IP Address
                                    </h4>
                                    <p className="text-gray-600 font-mono">
                                        {subscriber.ip_address ||
                                            "Not recorded"}
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Record Created
                                    </h4>
                                    <p className="text-gray-600">
                                        {formatDate(subscriber.created_at)}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Last Updated
                                    </h4>
                                    <p className="text-gray-600">
                                        {formatDate(subscriber.updated_at)}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Subscription Status
                                    </h4>
                                    <Badge
                                        className={
                                            subscriber.is_active
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                        }
                                    >
                                        {subscriber.is_active
                                            ? "Active"
                                            : "Inactive"}
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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-gray-900 mb-2">
                                    Edit Subscriber
                                </h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    Update email address, IP address, or
                                    subscription status
                                </p>
                                <Link
                                    href={route(
                                        "admin.newsletter-subscribers.edit",
                                        subscriber.id
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
                                    {subscriber.is_active
                                        ? "Deactivate"
                                        : "Activate"}{" "}
                                    Subscription
                                </h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    {subscriber.is_active
                                        ? "Stop sending newsletters to this subscriber"
                                        : "Resume sending newsletters to this subscriber"}
                                </p>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    className="w-full"
                                    onClick={handleToggleStatus}
                                >
                                    {subscriber.is_active ? (
                                        <ToggleLeft className="h-4 w-4 mr-2" />
                                    ) : (
                                        <ToggleRight className="h-4 w-4 mr-2" />
                                    )}
                                    {subscriber.is_active
                                        ? "Deactivate"
                                        : "Activate"}
                                </Button>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <h4 className="font-medium text-gray-900 mb-2">
                                    Delete Subscriber
                                </h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    Permanently remove this subscriber from the
                                    system
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
                                                Delete Subscriber
                                            </AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Are you sure you want to delete
                                                this newsletter subscriber? This
                                                action cannot be undone.
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
