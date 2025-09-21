import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Switch } from "@/Components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { ArrowLeft, Save, Mail, Globe, Eye } from "lucide-react";

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

export default function Edit({ subscriber }: Props) {
    const { data, setData, patch, processing, errors } = useForm({
        email: subscriber.email,
        ip_address: subscriber.ip_address || "",
        is_active: subscriber.is_active,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(route("admin.newsletter-subscribers.update", subscriber.id));
    };

    return (
        <AdminLayout>
            <Head title={`Edit Subscriber - ${subscriber.email}`} />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href={route("admin.newsletter-subscribers.index")}>
                        <Button variant="outline" size="sm">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Subscribers
                        </Button>
                    </Link>
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-gray-900">
                            Edit Newsletter Subscriber
                        </h1>
                        <p className="text-gray-600">
                            Update subscriber information and status
                        </p>
                    </div>
                    <Link href={route("admin.newsletter-subscribers.show", subscriber.id)}>
                        <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                        </Button>
                    </Link>
                </div>

                {/* Form */}
                <Card>
                    <CardHeader>
                        <CardTitle>Subscriber Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email */}
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
                                        placeholder="Enter email address..."
                                        className={`pl-10 ${errors.email ? "border-red-500" : ""}`}
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-sm text-red-600">{errors.email}</p>
                                )}
                                <p className="text-sm text-gray-500">
                                    The email address must be unique and valid
                                </p>
                            </div>

                            {/* IP Address */}
                            <div className="space-y-2">
                                <Label htmlFor="ip_address">IP Address</Label>
                                <div className="relative">
                                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                    <Input
                                        id="ip_address"
                                        type="text"
                                        value={data.ip_address}
                                        onChange={(e) => setData("ip_address", e.target.value)}
                                        placeholder="Enter IP address..."
                                        className={`pl-10 ${errors.ip_address ? "border-red-500" : ""}`}
                                    />
                                </div>
                                {errors.ip_address && (
                                    <p className="text-sm text-red-600">{errors.ip_address}</p>
                                )}
                                <p className="text-sm text-gray-500">
                                    The IP address from which the subscription was made
                                </p>
                            </div>

                            {/* Status */}
                            <div className="flex items-center space-x-2">
                                <Switch
                                    id="is_active"
                                    checked={data.is_active}
                                    onCheckedChange={(checked) => setData("is_active", checked)}
                                />
                                <Label htmlFor="is_active">Active Subscription</Label>
                                <p className="text-sm text-gray-500 ml-2">
                                    {data.is_active
                                        ? "Subscriber will receive newsletters"
                                        : "Subscriber will not receive newsletters"}
                                </p>
                            </div>

                            {/* Status Change Warning */}
                            {data.is_active !== subscriber.is_active && (
                                <div className={`p-4 rounded-lg border ${
                                    data.is_active 
                                        ? "bg-green-50 border-green-200" 
                                        : "bg-yellow-50 border-yellow-200"
                                }`}>
                                    <p className={`text-sm font-medium ${
                                        data.is_active ? "text-green-800" : "text-yellow-800"
                                    }`}>
                                        {data.is_active 
                                            ? "⚠️ This will reactivate the subscription and update the subscription date"
                                            : "⚠️ This will deactivate the subscription and set the unsubscription date"
                                        }
                                    </p>
                                </div>
                            )}

                            {/* Actions */}
                            <div className="flex items-center gap-4 pt-6 border-t">
                                <Button type="submit" disabled={processing}>
                                    <Save className="h-4 w-4 mr-2" />
                                    {processing ? "Updating..." : "Update Subscriber"}
                                </Button>
                                <Link href={route("admin.newsletter-subscribers.index")}>
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
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-gray-500" />
                                <span className="font-medium">{data.email}</span>
                            </div>
                            {data.ip_address && (
                                <div className="flex items-center gap-2">
                                    <Globe className="h-4 w-4 text-gray-500" />
                                    <span className="font-mono text-sm">{data.ip_address}</span>
                                </div>
                            )}
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-gray-500">Status:</span>
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
                        </div>
                    </CardContent>
                </Card>

                {/* Metadata */}
                <Card>
                    <CardHeader>
                        <CardTitle>Subscription History</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Originally Subscribed
                                    </h4>
                                    <p className="text-gray-600">
                                        {new Date(subscriber.subscribed_at).toLocaleString("en-US", {
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
                                        Record Created
                                    </h4>
                                    <p className="text-gray-600">
                                        {new Date(subscriber.created_at).toLocaleString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Unsubscribed At
                                    </h4>
                                    <p className="text-gray-600">
                                        {subscriber.unsubscribed_at
                                            ? new Date(subscriber.unsubscribed_at).toLocaleString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })
                                            : "Never unsubscribed"}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">
                                        Last Updated
                                    </h4>
                                    <p className="text-gray-600">
                                        {new Date(subscriber.updated_at).toLocaleString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
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
