import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Badge } from "@/Components/ui/badge";
import { Checkbox } from "@/Components/ui/checkbox";
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
    Plus,
    Search,
    MoreHorizontal,
    Edit,
    Trash2,
    Eye,
    ToggleLeft,
    ToggleRight,
    Filter,
} from "lucide-react";

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

interface PaginatedFAQs {
    data: FAQ[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    from: number;
    to: number;
}

interface Props {
    faqs: PaginatedFAQs;
    categories: string[];
    filters: {
        search?: string;
        category?: string;
        status?: string;
    };
}

export default function Index({ faqs, categories, filters }: Props) {
    const [selectedFaqs, setSelectedFaqs] = useState<number[]>([]);
    const [searchTerm, setSearchTerm] = useState(filters.search || "");
    const [selectedCategory, setSelectedCategory] = useState(
        filters.category || ""
    );
    const [selectedStatus, setSelectedStatus] = useState(filters.status || "");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(route("admin.faqs.index"), {
            search: searchTerm,
            category: selectedCategory,
            status: selectedStatus,
        });
    };

    const handleFilterChange = (type: string, value: string) => {
        const params: any = { search: searchTerm };

        if (type === "category") {
            const categoryValue = value === "all" ? "" : value;
            setSelectedCategory(categoryValue);
            if (categoryValue) params.category = categoryValue;
        } else if (type === "status") {
            const statusValue = value === "all" ? "" : value;
            setSelectedStatus(statusValue);
            if (statusValue) params.status = statusValue;
        }

        if (selectedCategory && type !== "category")
            params.category = selectedCategory;
        if (selectedStatus && type !== "status") params.status = selectedStatus;

        router.get(route("admin.faqs.index"), params);
    };

    const clearFilters = () => {
        setSearchTerm("");
        setSelectedCategory("");
        setSelectedStatus("");
        router.get(route("admin.faqs.index"));
    };

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedFaqs(faqs.data.map((faq) => faq.id));
        } else {
            setSelectedFaqs([]);
        }
    };

    const handleSelectFaq = (faqId: number, checked: boolean) => {
        if (checked) {
            setSelectedFaqs([...selectedFaqs, faqId]);
        } else {
            setSelectedFaqs(selectedFaqs.filter((id) => id !== faqId));
        }
    };

    const handleBulkAction = (action: string) => {
        if (selectedFaqs.length === 0) return;

        router.post(
            route("admin.faqs.bulk-action"),
            {
                action,
                ids: selectedFaqs,
            },
            {
                onSuccess: () => setSelectedFaqs([]),
            }
        );
    };

    const handleDelete = (faqId: number) => {
        router.delete(route("admin.faqs.destroy", faqId));
    };

    const handleToggleStatus = (faqId: number) => {
        router.patch(route("admin.faqs.toggle-status", faqId));
    };

    const truncateText = (text: string, length: number = 100) => {
        return text.length > length ? text.substring(0, length) + "..." : text;
    };

    const getCategoryBadgeColor = (category: string) => {
        const colors: { [key: string]: string } = {
            general: "bg-blue-100 text-blue-800",
            testing: "bg-green-100 text-green-800",
            treatment: "bg-purple-100 text-purple-800",
            prevention: "bg-orange-100 text-orange-800",
            pregnancy: "bg-pink-100 text-pink-800",
            services: "bg-gray-100 text-gray-800",
        };
        return colors[category] || "bg-gray-100 text-gray-800";
    };

    return (
        <AdminLayout>
            <Head title="FAQ Management" />

            <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            FAQ Management
                        </h1>
                        <p className="text-gray-600">
                            Manage frequently asked questions
                        </p>
                    </div>
                    <Link href={route("admin.faqs.create")}>
                        <Button>
                            <Plus className="h-4 w-4 mr-2" />
                            Add FAQ
                        </Button>
                    </Link>
                </div>

                {/* Filters */}
                <div className="bg-white p-4 rounded-lg border space-y-4">
                    <form
                        onSubmit={handleSearch}
                        className="flex gap-4 items-end"
                    >
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Search
                            </label>
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                                <Input
                                    type="text"
                                    placeholder="Search questions, answers, or categories..."
                                    value={searchTerm}
                                    onChange={(e) =>
                                        setSearchTerm(e.target.value)
                                    }
                                    className="pl-10"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Category
                            </label>
                            <Select
                                value={selectedCategory || "all"}
                                onValueChange={(value) =>
                                    handleFilterChange("category", value)
                                }
                            >
                                <SelectTrigger className="w-40">
                                    <SelectValue placeholder="All Categories" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">
                                        All Categories
                                    </SelectItem>
                                    {categories.map((category) => (
                                        <SelectItem
                                            key={category}
                                            value={category}
                                        >
                                            {category.charAt(0).toUpperCase() +
                                                category.slice(1)}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Status
                            </label>
                            <Select
                                value={selectedStatus || "all"}
                                onValueChange={(value) =>
                                    handleFilterChange("status", value)
                                }
                            >
                                <SelectTrigger className="w-32">
                                    <SelectValue placeholder="All Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">
                                        All Status
                                    </SelectItem>
                                    <SelectItem value="active">
                                        Active
                                    </SelectItem>
                                    <SelectItem value="inactive">
                                        Inactive
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button type="submit">
                            <Filter className="h-4 w-4 mr-2" />
                            Filter
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={clearFilters}
                        >
                            Clear
                        </Button>
                    </form>
                </div>

                {/* Bulk Actions */}
                {selectedFaqs.length > 0 && (
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-blue-800">
                                {selectedFaqs.length} FAQ(s) selected
                            </span>
                            <div className="flex gap-2">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleBulkAction("activate")}
                                >
                                    Activate
                                </Button>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() =>
                                        handleBulkAction("deactivate")
                                    }
                                >
                                    Deactivate
                                </Button>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button size="sm" variant="destructive">
                                            Delete
                                        </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>
                                                Delete FAQs
                                            </AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Are you sure you want to delete{" "}
                                                {selectedFaqs.length} FAQ(s)?
                                                This action cannot be undone.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>
                                                Cancel
                                            </AlertDialogCancel>
                                            <AlertDialogAction
                                                onClick={() =>
                                                    handleBulkAction("delete")
                                                }
                                            >
                                                Delete
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </div>
                        </div>
                    </div>
                )}

                {/* Table */}
                <div className="bg-white rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-12">
                                    <Checkbox
                                        checked={
                                            selectedFaqs.length ===
                                                faqs.data.length &&
                                            faqs.data.length > 0
                                        }
                                        onCheckedChange={handleSelectAll}
                                    />
                                </TableHead>
                                <TableHead>Question</TableHead>
                                <TableHead>Answer</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Sort Order</TableHead>
                                <TableHead className="w-24">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {faqs.data.length === 0 ? (
                                <TableRow>
                                    <TableCell
                                        colSpan={7}
                                        className="text-center py-8 text-gray-500"
                                    >
                                        No FAQs found.{" "}
                                        <Link
                                            href={route("admin.faqs.create")}
                                            className="text-blue-600 hover:underline"
                                        >
                                            Create your first FAQ
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ) : (
                                faqs.data.map((faq) => (
                                    <TableRow key={faq.id}>
                                        <TableCell>
                                            <Checkbox
                                                checked={selectedFaqs.includes(
                                                    faq.id
                                                )}
                                                onCheckedChange={(checked) =>
                                                    handleSelectFaq(
                                                        faq.id,
                                                        checked as boolean
                                                    )
                                                }
                                            />
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            {truncateText(faq.question, 80)}
                                        </TableCell>
                                        <TableCell>
                                            {truncateText(faq.answer, 100)}
                                        </TableCell>
                                        <TableCell>
                                            <Badge
                                                className={getCategoryBadgeColor(
                                                    faq.category
                                                )}
                                            >
                                                {faq.category
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    faq.category.slice(1)}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <button
                                                onClick={() =>
                                                    handleToggleStatus(faq.id)
                                                }
                                                className="flex items-center"
                                            >
                                                {faq.is_active ? (
                                                    <Badge className="bg-green-100 text-green-800">
                                                        Active
                                                    </Badge>
                                                ) : (
                                                    <Badge className="bg-red-100 text-red-800">
                                                        Inactive
                                                    </Badge>
                                                )}
                                            </button>
                                        </TableCell>
                                        <TableCell>{faq.sort_order}</TableCell>
                                        <TableCell>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                    >
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuItem asChild>
                                                        <Link
                                                            href={route(
                                                                "admin.faqs.show",
                                                                faq.id
                                                            )}
                                                        >
                                                            <Eye className="h-4 w-4 mr-2" />
                                                            View
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem asChild>
                                                        <Link
                                                            href={route(
                                                                "admin.faqs.edit",
                                                                faq.id
                                                            )}
                                                        >
                                                            <Edit className="h-4 w-4 mr-2" />
                                                            Edit
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        onClick={() =>
                                                            handleToggleStatus(
                                                                faq.id
                                                            )
                                                        }
                                                    >
                                                        {faq.is_active ? (
                                                            <ToggleLeft className="h-4 w-4 mr-2" />
                                                        ) : (
                                                            <ToggleRight className="h-4 w-4 mr-2" />
                                                        )}
                                                        {faq.is_active
                                                            ? "Deactivate"
                                                            : "Activate"}
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        onSelect={(e) =>
                                                            e.preventDefault()
                                                        }
                                                    >
                                                        <AlertDialog>
                                                            <AlertDialogTrigger
                                                                asChild
                                                            >
                                                                <button className="flex items-center w-full">
                                                                    <Trash2 className="h-4 w-4 mr-2" />
                                                                    Delete
                                                                </button>
                                                            </AlertDialogTrigger>
                                                            <AlertDialogContent>
                                                                <AlertDialogHeader>
                                                                    <AlertDialogTitle>
                                                                        Delete
                                                                        FAQ
                                                                    </AlertDialogTitle>
                                                                    <AlertDialogDescription>
                                                                        Are you
                                                                        sure you
                                                                        want to
                                                                        delete
                                                                        this
                                                                        FAQ?
                                                                        This
                                                                        action
                                                                        cannot
                                                                        be
                                                                        undone.
                                                                    </AlertDialogDescription>
                                                                </AlertDialogHeader>
                                                                <AlertDialogFooter>
                                                                    <AlertDialogCancel>
                                                                        Cancel
                                                                    </AlertDialogCancel>
                                                                    <AlertDialogAction
                                                                        onClick={() =>
                                                                            handleDelete(
                                                                                faq.id
                                                                            )
                                                                        }
                                                                    >
                                                                        Delete
                                                                    </AlertDialogAction>
                                                                </AlertDialogFooter>
                                                            </AlertDialogContent>
                                                        </AlertDialog>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>

                {/* Pagination */}
                {faqs.last_page > 1 && (
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-700">
                            Showing {faqs.from} to {faqs.to} of {faqs.total}{" "}
                            results
                        </div>
                        <div className="flex gap-2">
                            {Array.from(
                                { length: faqs.last_page },
                                (_, i) => i + 1
                            ).map((page) => (
                                <Link
                                    key={page}
                                    href={route("admin.faqs.index", {
                                        page,
                                        search: searchTerm,
                                        category: selectedCategory,
                                        status: selectedStatus,
                                    })}
                                    className={`px-3 py-2 text-sm rounded-md ${
                                        page === faqs.current_page
                                            ? "bg-blue-600 text-white"
                                            : "bg-white text-gray-700 border hover:bg-gray-50"
                                    }`}
                                >
                                    {page}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}
