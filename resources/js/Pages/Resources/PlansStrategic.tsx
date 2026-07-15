import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import { Card, CardContent } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import {
    Search,
    Download,
    FileText,
    Calendar,
    User,
    Tag,
    Star,
    Filter,
} from "lucide-react";

interface Document {
    id: number;
    title: string;
    description: string;
    category: string;
    category_display: string;
    file_type: string;
    file_path: string;
    file_url: string;
    formatted_file_size: string;
    file_icon: string;
    published_date: string;
    author: string;
    version: string;
    tags: string[];
    is_featured: boolean;
}

interface PlansStrategicProps {
    documents: Document[];
}

const PlansStrategic: React.FC<PlansStrategicProps> = ({ documents }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredDocuments, setFilteredDocuments] = useState(documents);

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        if (term.trim() === "") {
            setFilteredDocuments(documents);
        } else {
            const filtered = documents.filter(
                (doc) =>
                    doc.title.toLowerCase().includes(term.toLowerCase()) ||
                    doc.description.toLowerCase().includes(term.toLowerCase()) ||
                    doc.author.toLowerCase().includes(term.toLowerCase()) ||
                    doc.tags.some((tag) =>
                        tag.toLowerCase().includes(term.toLowerCase())
                    )
            );
            setFilteredDocuments(filtered);
        }
    };

    const documentHref = (document: Document) =>
        document.file_url || `/documents/download/${document.id}`;

    const featuredDocuments = filteredDocuments.filter((doc) => doc.is_featured);
    const regularDocuments = filteredDocuments.filter((doc) => !doc.is_featured);

    return (
        <PublicLayout>
            <Head title="Plans & Strategic Documents - NASHCOP Tanzania" />

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
                                Plans & Strategic Documents
                            </h1>
                            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                Access comprehensive strategic plans, frameworks, and policy documents 
                                that guide Tanzania's national response to HIV/AIDS, STIs, and Viral Hepatitis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Search and Filter Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                    <Input
                                        type="text"
                                        placeholder="Search plans and strategic documents..."
                                        value={searchTerm}
                                        onChange={(e) => handleSearch(e.target.value)}
                                        className="pl-10 pr-4 py-3 w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <Button
                                    variant="outline"
                                    className="flex items-center gap-2 px-6 py-3"
                                >
                                    <Filter className="h-4 w-4" />
                                    Filter
                                </Button>
                            </div>
                            {searchTerm && (
                                <div className="mt-4 text-sm text-gray-600">
                                    Found {filteredDocuments.length} document(s) matching "{searchTerm}"
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Documents */}
            {featuredDocuments.length > 0 && (
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex items-center gap-3 mb-8">
                                <Star className="h-6 w-6 text-yellow-500" />
                                <h2 className="text-3xl font-bold text-gray-900">
                                    Featured Strategic Documents
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {featuredDocuments.map((document) => (
                                    <Card
                                        key={document.id}
                                        className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-yellow-500"
                                    >
                                        <CardContent className="p-6">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="text-2xl">{document.file_icon}</div>
                                                <div className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                                                    <Star className="h-3 w-3" />
                                                    Featured
                                                </div>
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                                {document.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                                {document.description}
                                            </p>
                                            <div className="space-y-2 mb-4">
                                                <div className="flex items-center text-xs text-gray-500">
                                                    <User className="h-3 w-3 mr-1" />
                                                    {document.author}
                                                </div>
                                                <div className="flex items-center text-xs text-gray-500">
                                                    <Calendar className="h-3 w-3 mr-1" />
                                                    {document.published_date}
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-gray-500">
                                                    {document.file_type.toUpperCase()} • {document.formatted_file_size}
                                                </span>
                                                <Button
                                                    asChild
                                                    size="sm"
                                                    className="bg-blue-600 hover:bg-blue-700"
                                                >
                                                    <a href={documentHref(document)} target="_blank" rel="noopener noreferrer">
                                                        <Download className="h-4 w-4 mr-1" />
                                                        Preview / Download
                                                    </a>
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* All Documents */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">
                            All Plans & Strategic Documents
                        </h2>
                        {regularDocuments.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {regularDocuments.map((document) => (
                                    <Card
                                        key={document.id}
                                        className="group hover:shadow-lg transition-all duration-300"
                                    >
                                        <CardContent className="p-6">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="text-2xl">{document.file_icon}</div>
                                                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                                    {document.file_type.toUpperCase()}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                                {document.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                                {document.description}
                                            </p>
                                            <div className="space-y-2 mb-4">
                                                <div className="flex items-center text-xs text-gray-500">
                                                    <User className="h-3 w-3 mr-1" />
                                                    {document.author}
                                                </div>
                                                <div className="flex items-center text-xs text-gray-500">
                                                    <Calendar className="h-3 w-3 mr-1" />
                                                    {document.published_date}
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-xs text-gray-500">
                                                    {document.formatted_file_size}
                                                </span>
                                                <Button
                                                    asChild
                                                    size="sm"
                                                    variant="outline"
                                                >
                                                    <a href={documentHref(document)} target="_blank" rel="noopener noreferrer">
                                                        <Download className="h-4 w-4 mr-1" />
                                                        Preview / Download
                                                    </a>
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    No documents found
                                </h3>
                                <p className="text-gray-600">
                                    {searchTerm
                                        ? `No documents match your search for "${searchTerm}"`
                                        : "No strategic documents are currently available."}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-blue-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">
                            Need More Information?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8">
                            Contact NASHCOP for additional strategic documents or technical assistance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                size="lg"
                                className="bg-white text-blue-900 hover:bg-gray-100"
                            >
                                Contact NASHCOP
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-blue-900"
                            >
                                View All Resources
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
};

export default PlansStrategic;
