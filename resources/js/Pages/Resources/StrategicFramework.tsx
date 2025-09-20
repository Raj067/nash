import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    FileText,
    Download,
    Calendar,
    User,
    Tag,
    Search,
    Filter,
} from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import { useState, useMemo } from "react";

interface Document {
    id: number;
    title: string;
    description: string;
    category: string;
    category_display: string;
    file_type: string;
    file_path: string;
    file_url: string | null;
    formatted_file_size: string;
    file_icon: string;
    published_date: string;
    author: string;
    version: string;
    tags: string[];
    is_featured: boolean;
}

interface StrategicFrameworkProps {
    documents: Document[];
}

export default function StrategicFramework({
    documents,
}: StrategicFrameworkProps) {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    // Get unique categories from documents
    const categories = useMemo(() => {
        const uniqueCategories = Array.from(
            new Set(documents.map((doc) => doc.category))
        );
        return ["all", ...uniqueCategories];
    }, [documents]);

    // Filter documents based on search and category
    const filteredDocuments = useMemo(() => {
        return documents.filter((doc) => {
            const matchesSearch =
                doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                doc.description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            const matchesCategory =
                selectedCategory === "all" || doc.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [documents, searchTerm, selectedCategory]);

    const getCategoryDisplayName = (category: string) => {
        switch (category) {
            case "all":
                return "All Categories";
            case "plans_strategic":
                return "Plans & Strategic Documents";
            case "frameworks":
                return "Frameworks";
            default:
                return category.charAt(0).toUpperCase() + category.slice(1);
        }
    };

    return (
        <PublicLayout title="Strategic Framework & Policies">
            <Head title="Strategic Framework & Policies" />

            <div className="min-h-screen">
                {/* Hero Section */}
                <div className="relative h-[500px] overflow-hidden">
                    <div
                        className="h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(/images/about.png)`,
                        }}
                    >
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4 text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                    <FileText className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    Strategic Framework & Policies
                                </h1>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    Comprehensive strategic frameworks and
                                    policies guiding our HIV/AIDS control
                                    initiatives
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        {/* Search and Filter Controls */}
                        <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
                            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                                {/* Search */}
                                <div className="relative flex-1 max-w-md">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        type="text"
                                        placeholder="Tafuta hati... / Search documents..."
                                        value={searchTerm}
                                        onChange={(e) =>
                                            setSearchTerm(e.target.value)
                                        }
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                {/* Category Filter */}
                                <div className="flex items-center space-x-2">
                                    <Filter className="w-4 h-4 text-gray-500" />
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) =>
                                            setSelectedCategory(e.target.value)
                                        }
                                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        {categories.map((category) => (
                                            <option
                                                key={category}
                                                value={category}
                                            >
                                                {getCategoryDisplayName(
                                                    category
                                                )}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Results Count */}
                            <div className="mt-4 text-sm text-gray-600">
                                {filteredDocuments.length} document
                                {filteredDocuments.length !== 1 ? "s" : ""}{" "}
                                found
                                {selectedCategory !== "all" &&
                                    ` in ${getCategoryDisplayName(
                                        selectedCategory
                                    )}`}
                            </div>
                        </div>

                        {/* Documents Grid */}
                        {filteredDocuments.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredDocuments.map((document) => (
                                    <Card
                                        key={document.id}
                                        className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <CardContent className="p-6">
                                            {/* Document Header */}
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center space-x-3">
                                                    <span className="text-2xl">
                                                        {document.file_icon}
                                                    </span>
                                                    <div>
                                                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">
                                                            {document.file_type.toUpperCase()}
                                                        </span>
                                                        {document.is_featured && (
                                                            <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
                                                                ⭐ Featured
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                                <span className="text-xs text-gray-500">
                                                    {
                                                        document.formatted_file_size
                                                    }
                                                </span>
                                            </div>

                                            {/* Document Title */}
                                            <h3 className="font-bold text-lg mb-3 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                {document.title}
                                            </h3>

                                            {/* Document Description */}
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                                {document.description}
                                            </p>

                                            {/* Document Meta */}
                                            <div className="space-y-2 mb-4">
                                                {document.published_date && (
                                                    <div className="flex items-center text-xs text-gray-500">
                                                        <Calendar className="w-3 h-3 mr-1" />
                                                        <span>
                                                            {
                                                                document.published_date
                                                            }
                                                        </span>
                                                    </div>
                                                )}
                                                {document.author && (
                                                    <div className="flex items-center text-xs text-gray-500">
                                                        <User className="w-3 h-3 mr-1" />
                                                        <span>
                                                            {document.author}
                                                        </span>
                                                    </div>
                                                )}
                                                {document.version && (
                                                    <div className="text-xs text-gray-500">
                                                        Version:{" "}
                                                        {document.version}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Tags */}
                                            {document.tags &&
                                                document.tags.length > 0 && (
                                                    <div className="flex flex-wrap gap-1 mb-4">
                                                        {document.tags
                                                            .slice(0, 3)
                                                            .map(
                                                                (
                                                                    tag,
                                                                    index
                                                                ) => (
                                                                    <span
                                                                        key={
                                                                            index
                                                                        }
                                                                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                                                                    >
                                                                        <Tag className="w-2 h-2 inline mr-1" />
                                                                        {tag}
                                                                    </span>
                                                                )
                                                            )}
                                                        {document.tags.length >
                                                            3 && (
                                                            <span className="text-xs text-gray-500">
                                                                +
                                                                {document.tags
                                                                    .length -
                                                                    3}{" "}
                                                                more
                                                            </span>
                                                        )}
                                                    </div>
                                                )}

                                            {/* Download Button */}
                                            <Button
                                                asChild
                                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                                            >
                                                <a
                                                    href={`/documents/download/${document.id}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center space-x-2"
                                                >
                                                    <Download className="w-4 h-4" />
                                                    <span>
                                                        Pakua - Download
                                                    </span>
                                                </a>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Hakuna Hati Zilizopatikana
                                </h3>
                                <p className="text-lg text-gray-600 mb-2">
                                    No documents found matching your search
                                    criteria
                                </p>
                                <p className="text-gray-500">
                                    Jaribu kutafuta kwa maneno mengine au chagua
                                    category nyingine
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
