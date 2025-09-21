import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
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
} from '@/Components/ui/alert-dialog';
import {
    ArrowLeft,
    Edit,
    Trash2,
    ToggleLeft,
    ToggleRight,
    Calendar,
    Hash,
    Tag,
} from 'lucide-react';

interface FAQ {
    id: number;
    question: string;
    answer: string;
    category: string;
    is_active: boolean;
    sort_order: number;
    created_at: string;
    updated_at: string;
}

interface Props {
    faq: FAQ;
}

export default function Show({ faq }: Props) {
    const handleDelete = () => {
        router.delete(route('admin.faqs.destroy', faq.id));
    };

    const handleToggleStatus = () => {
        router.patch(route('admin.faqs.toggle-status', faq.id));
    };

    const getCategoryBadgeColor = (category: string) => {
        const colors: { [key: string]: string } = {
            general: 'bg-blue-100 text-blue-800',
            testing: 'bg-green-100 text-green-800',
            treatment: 'bg-purple-100 text-purple-800',
            prevention: 'bg-orange-100 text-orange-800',
            pregnancy: 'bg-pink-100 text-pink-800',
            services: 'bg-gray-100 text-gray-800',
        };
        return colors[category] || 'bg-gray-100 text-gray-800';
    };

    return (
        <AdminLayout>
            <Head title={`FAQ - ${faq.question.substring(0, 50)}...`} />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href={route('admin.faqs.index')}>
                            <Button variant="outline" size="sm">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to FAQs
                            </Button>
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">FAQ Details</h1>
                            <p className="text-gray-600">View and manage FAQ information</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href={route('admin.faqs.edit', faq.id)}>
                            <Button>
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            onClick={handleToggleStatus}
                        >
                            {faq.is_active ? (
                                <ToggleLeft className="h-4 w-4 mr-2" />
                            ) : (
                                <ToggleRight className="h-4 w-4 mr-2" />
                            )}
                            {faq.is_active ? 'Deactivate' : 'Activate'}
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
                                    <AlertDialogTitle>Delete FAQ</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Are you sure you want to delete this FAQ? This action cannot be undone.
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

                {/* Status and Metadata */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full ${
                                    faq.is_active ? 'bg-green-500' : 'bg-red-500'
                                }`} />
                                <span className="text-sm font-medium">
                                    {faq.is_active ? 'Active' : 'Inactive'}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Tag className="h-4 w-4 text-gray-500" />
                                <Badge className={getCategoryBadgeColor(faq.category)}>
                                    {faq.category.charAt(0).toUpperCase() + faq.category.slice(1)}
                                </Badge>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Hash className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">Sort Order: {faq.sort_order}</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-4">
                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">ID: {faq.id}</span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* FAQ Content */}
                <Card>
                    <CardHeader>
                        <CardTitle>Question</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <h2 className="text-xl font-semibold text-gray-900 leading-relaxed">
                            {faq.question}
                        </h2>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Answer</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="prose max-w-none">
                            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                {faq.answer}
                            </p>
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
                                    <h4 className="font-medium text-gray-900 mb-1">Created</h4>
                                    <p className="text-gray-600">
                                        {new Date(faq.created_at).toLocaleString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">Category</h4>
                                    <Badge className={getCategoryBadgeColor(faq.category)}>
                                        {faq.category.charAt(0).toUpperCase() + faq.category.slice(1)}
                                    </Badge>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">Last Updated</h4>
                                    <p className="text-gray-600">
                                        {new Date(faq.updated_at).toLocaleString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-900 mb-1">Sort Order</h4>
                                    <p className="text-gray-600">{faq.sort_order}</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Preview as User Would See */}
                <Card>
                    <CardHeader>
                        <CardTitle>User Preview</CardTitle>
                        <p className="text-sm text-gray-600">
                            This is how the FAQ will appear to users on the website
                        </p>
                    </CardHeader>
                    <CardContent>
                        <div className="border rounded-lg p-6 bg-gray-50">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                                        {faq.answer}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                    <Badge variant="secondary" className="text-xs">
                                        {faq.category.charAt(0).toUpperCase() + faq.category.slice(1)}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
