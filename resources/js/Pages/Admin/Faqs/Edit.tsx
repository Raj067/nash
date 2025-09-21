import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Textarea } from '@/Components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/Components/ui/select';
import { Switch } from '@/Components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { ArrowLeft, Save, Eye } from 'lucide-react';

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
    categories: string[];
}

export default function Edit({ faq, categories }: Props) {
    const { data, setData, patch, processing, errors } = useForm({
        question: faq.question,
        answer: faq.answer,
        category: faq.category,
        is_active: faq.is_active,
        sort_order: faq.sort_order.toString(),
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        patch(route('admin.faqs.update', faq.id));
    };

    const predefinedCategories = [
        { value: 'general', label: 'General' },
        { value: 'testing', label: 'Testing' },
        { value: 'treatment', label: 'Treatment' },
        { value: 'prevention', label: 'Prevention' },
        { value: 'pregnancy', label: 'Pregnancy' },
        { value: 'services', label: 'Services' },
    ];

    return (
        <AdminLayout>
            <Head title={`Edit FAQ - ${faq.question.substring(0, 50)}...`} />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                    <Link href={route('admin.faqs.index')}>
                        <Button variant="outline" size="sm">
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to FAQs
                        </Button>
                    </Link>
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-gray-900">Edit FAQ</h1>
                        <p className="text-gray-600">Update the frequently asked question</p>
                    </div>
                    <Link href={route('admin.faqs.show', faq.id)}>
                        <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                        </Button>
                    </Link>
                </div>

                {/* Form */}
                <Card>
                    <CardHeader>
                        <CardTitle>FAQ Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Question */}
                            <div className="space-y-2">
                                <Label htmlFor="question">
                                    Question <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="question"
                                    type="text"
                                    value={data.question}
                                    onChange={(e) => setData('question', e.target.value)}
                                    placeholder="Enter the frequently asked question..."
                                    className={errors.question ? 'border-red-500' : ''}
                                />
                                {errors.question && (
                                    <p className="text-sm text-red-600">{errors.question}</p>
                                )}
                            </div>

                            {/* Answer */}
                            <div className="space-y-2">
                                <Label htmlFor="answer">
                                    Answer <span className="text-red-500">*</span>
                                </Label>
                                <Textarea
                                    id="answer"
                                    value={data.answer}
                                    onChange={(e) => setData('answer', e.target.value)}
                                    placeholder="Enter the detailed answer..."
                                    rows={6}
                                    className={errors.answer ? 'border-red-500' : ''}
                                />
                                {errors.answer && (
                                    <p className="text-sm text-red-600">{errors.answer}</p>
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
                                        onValueChange={(value) => setData('category', value)}
                                    >
                                        <SelectTrigger className={errors.category ? 'border-red-500' : ''}>
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {predefinedCategories.map((category) => (
                                                <SelectItem key={category.value} value={category.value}>
                                                    {category.label}
                                                </SelectItem>
                                            ))}
                                            {/* Show existing categories that aren't in predefined list */}
                                            {categories
                                                .filter(cat => !predefinedCategories.some(pred => pred.value === cat))
                                                .map((category) => (
                                                    <SelectItem key={category} value={category}>
                                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                                    </SelectItem>
                                                ))
                                            }
                                        </SelectContent>
                                    </Select>
                                    {errors.category && (
                                        <p className="text-sm text-red-600">{errors.category}</p>
                                    )}
                                </div>

                                {/* Sort Order */}
                                <div className="space-y-2">
                                    <Label htmlFor="sort_order">Sort Order</Label>
                                    <Input
                                        id="sort_order"
                                        type="number"
                                        value={data.sort_order}
                                        onChange={(e) => setData('sort_order', e.target.value)}
                                        placeholder="Enter sort order"
                                        min="0"
                                        className={errors.sort_order ? 'border-red-500' : ''}
                                    />
                                    {errors.sort_order && (
                                        <p className="text-sm text-red-600">{errors.sort_order}</p>
                                    )}
                                </div>
                            </div>

                            {/* Status */}
                            <div className="flex items-center space-x-2">
                                <Switch
                                    id="is_active"
                                    checked={data.is_active}
                                    onCheckedChange={(checked) => setData('is_active', checked)}
                                />
                                <Label htmlFor="is_active">Active</Label>
                                <p className="text-sm text-gray-500 ml-2">
                                    {data.is_active ? 'FAQ will be visible to users' : 'FAQ will be hidden from users'}
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-4 pt-6 border-t">
                                <Button type="submit" disabled={processing}>
                                    <Save className="h-4 w-4 mr-2" />
                                    {processing ? 'Updating...' : 'Update FAQ'}
                                </Button>
                                <Link href={route('admin.faqs.index')}>
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
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900">
                                    {data.question}
                                </h3>
                            </div>
                            <div>
                                <p className="text-gray-700 whitespace-pre-wrap">
                                    {data.answer}
                                </p>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <span>Category:</span>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                        {data.category.charAt(0).toUpperCase() + data.category.slice(1)}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>Status:</span>
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                        data.is_active 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'bg-red-100 text-red-800'
                                    }`}>
                                        {data.is_active ? 'Active' : 'Inactive'}
                                    </span>
                                </div>
                                <div>Sort Order: {data.sort_order}</div>
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
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="font-medium text-gray-700">Created:</span>
                                <p className="text-gray-600">
                                    {new Date(faq.created_at).toLocaleString()}
                                </p>
                            </div>
                            <div>
                                <span className="font-medium text-gray-700">Last Updated:</span>
                                <p className="text-gray-600">
                                    {new Date(faq.updated_at).toLocaleString()}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
