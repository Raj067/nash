import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Switch } from "@/Components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { ArrowLeft, Save, Mail, Globe } from "lucide-react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        ip_address: "",
        is_active: true,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route("admin.newsletter-subscribers.store"));
    };

    return (
        <AdminLayout>
            <Head title="Add Newsletter Subscriber" />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href={route("admin.newsletter-subscribers.index")}>
                        <Button variant="outline" size="sm">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Subscribers
                        </Button>
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Add New Newsletter Subscriber
                        </h1>
                        <p className="text-gray-600">
                            Manually add a new email to the newsletter list
                        </p>
                    </div>
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
                                    Email Address{" "}
                                    <span className="text-red-500">*</span>
                                </Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                    <Input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        placeholder="Enter email address..."
                                        className={`pl-10 ${
                                            errors.email ? "border-red-500" : ""
                                        }`}
                                    />
                                </div>
                                {errors.email && (
                                    <p className="text-sm text-red-600">
                                        {errors.email}
                                    </p>
                                )}
                                <p className="text-sm text-gray-500">
                                    The email address must be unique and valid
                                </p>
                            </div>

                            {/* IP Address */}
                            <div className="space-y-2">
                                <Label htmlFor="ip_address">
                                    IP Address (Optional)
                                </Label>
                                <div className="relative">
                                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                    <Input
                                        id="ip_address"
                                        type="text"
                                        value={data.ip_address}
                                        onChange={(e) =>
                                            setData(
                                                "ip_address",
                                                e.target.value
                                            )
                                        }
                                        placeholder="Enter IP address (optional)..."
                                        className={`pl-10 ${
                                            errors.ip_address
                                                ? "border-red-500"
                                                : ""
                                        }`}
                                    />
                                </div>
                                {errors.ip_address && (
                                    <p className="text-sm text-red-600">
                                        {errors.ip_address}
                                    </p>
                                )}
                                <p className="text-sm text-gray-500">
                                    Leave empty to use the current request IP
                                    address
                                </p>
                            </div>

                            {/* Status */}
                            <div className="flex items-center space-x-2">
                                <Switch
                                    id="is_active"
                                    checked={data.is_active}
                                    onCheckedChange={(checked) =>
                                        setData("is_active", checked)
                                    }
                                />
                                <Label htmlFor="is_active">
                                    Active Subscription
                                </Label>
                                <p className="text-sm text-gray-500 ml-2">
                                    {data.is_active
                                        ? "Subscriber will receive newsletters"
                                        : "Subscriber will not receive newsletters"}
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-4 pt-6 border-t">
                                <Button type="submit" disabled={processing}>
                                    <Save className="h-4 w-4 mr-2" />
                                    {processing
                                        ? "Adding..."
                                        : "Add Subscriber"}
                                </Button>
                                <Link
                                    href={route(
                                        "admin.newsletter-subscribers.index"
                                    )}
                                >
                                    <Button type="button" variant="outline">
                                        Cancel
                                    </Button>
                                </Link>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {/* Preview */}
                {data.email && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Preview</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <Mail className="h-4 w-4 text-gray-500" />
                                    <span className="font-medium">
                                        {data.email}
                                    </span>
                                </div>
                                {data.ip_address && (
                                    <div className="flex items-center gap-2">
                                        <Globe className="h-4 w-4 text-gray-500" />
                                        <span className="font-mono text-sm">
                                            {data.ip_address}
                                        </span>
                                    </div>
                                )}
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-500">
                                        Status:
                                    </span>
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
                )}

                {/* Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3 text-sm text-gray-600">
                            <p>
                                • <strong>Email Validation:</strong> The email
                                address will be validated for proper format and
                                uniqueness
                            </p>
                            <p>
                                • <strong>IP Address:</strong> If not provided,
                                the current request IP will be used
                                automatically
                            </p>
                            <p>
                                • <strong>Subscription Date:</strong> Will be
                                set to the current date and time when created
                            </p>
                            <p>
                                • <strong>Status:</strong> Active subscribers
                                will receive newsletters, inactive ones will not
                            </p>
                            <p>
                                • <strong>Duplicate Check:</strong> The system
                                will prevent adding duplicate email addresses
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
