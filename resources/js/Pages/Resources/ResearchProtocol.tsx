import { Head } from "@inertiajs/react";
import { useMemo, useState } from "react";
import {
    Calendar,
    Download,
    FileSearch,
    Search,
    Tag,
    User,
} from "lucide-react";
import PublicLayout from "@/Layouts/PublicLayout";
import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";

interface Document {
    id: number;
    title: string;
    description: string;
    file_type: string;
    formatted_file_size: string;
    file_icon: string;
    published_date: string | null;
    author: string | null;
    version: string | null;
    tags: string[] | null;
    is_featured: boolean;
}

interface ResearchProtocolProps {
    documents: Document[];
}

export default function ResearchProtocol({
    documents,
}: ResearchProtocolProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredDocuments = useMemo(() => {
        const term = searchTerm.trim().toLowerCase();

        if (!term) {
            return documents;
        }

        return documents.filter(
            (document) =>
                document.title.toLowerCase().includes(term) ||
                document.description?.toLowerCase().includes(term),
        );
    }, [documents, searchTerm]);

    return (
        <PublicLayout title="Research and Protocol">
            <Head title="Research and Protocol - Utafiti na Itifaki" />

            <div className="min-h-screen">
                <div className="relative h-[500px] overflow-hidden">
                    <div
                        className="h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url(/images/about.png)" }}
                    >
                        <div className="flex h-full items-center bg-gradient-to-r from-black/80 to-black/60">
                            <div className="container mx-auto px-4 text-center">
                                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                                    <FileSearch className="h-10 w-10 text-white" />
                                </div>
                                <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
                                    Research and Protocol
                                </h1>
                                <p className="mx-auto max-w-3xl text-xl leading-relaxed text-blue-100 md:text-2xl">
                                    Research publications and protocols for HIV,
                                    STI and viral hepatitis programmes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
                    <div className="container mx-auto px-4">
                        <div className="mb-8 rounded-lg bg-white p-6 shadow-sm">
                            <div className="relative max-w-md">
                                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="search"
                                    placeholder="Tafuta utafiti... / Search research..."
                                    value={searchTerm}
                                    onChange={(event) =>
                                        setSearchTerm(event.target.value)
                                    }
                                    className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div className="mt-4 text-sm text-gray-600">
                                {filteredDocuments.length} document
                                {filteredDocuments.length === 1 ? "" : "s"}{" "}
                                found
                            </div>
                        </div>

                        {filteredDocuments.length > 0 ? (
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {filteredDocuments.map((document) => (
                                    <Card
                                        key={document.id}
                                        className="group bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                                    >
                                        <CardContent className="p-6">
                                            <div className="mb-4 flex items-start justify-between">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-2xl">
                                                        {document.file_icon}
                                                    </span>
                                                    <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                                                        {document.file_type.toUpperCase()}
                                                    </span>
                                                    {document.is_featured && (
                                                        <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                                                            Featured
                                                        </span>
                                                    )}
                                                </div>
                                                <span className="text-xs text-gray-500">
                                                    {
                                                        document.formatted_file_size
                                                    }
                                                </span>
                                            </div>

                                            <h2 className="mb-3 line-clamp-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                                                {document.title}
                                            </h2>
                                            <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                                                {document.description}
                                            </p>

                                            <div className="mb-4 space-y-2 text-xs text-gray-500">
                                                {document.published_date && (
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="h-3 w-3" />
                                                        {
                                                            document.published_date
                                                        }
                                                    </div>
                                                )}
                                                {document.author && (
                                                    <div className="flex items-center gap-1">
                                                        <User className="h-3 w-3" />
                                                        {document.author}
                                                    </div>
                                                )}
                                                {document.version && (
                                                    <div>
                                                        Version:{" "}
                                                        {document.version}
                                                    </div>
                                                )}
                                            </div>

                                            {document.tags &&
                                                document.tags.length > 0 && (
                                                    <div className="mb-4 flex flex-wrap gap-1">
                                                        {document.tags
                                                            .slice(0, 3)
                                                            .map((tag) => (
                                                                <span
                                                                    key={tag}
                                                                    className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
                                                                >
                                                                    <Tag className="mr-1 inline h-2 w-2" />
                                                                    {tag}
                                                                </span>
                                                            ))}
                                                    </div>
                                                )}

                                            <Button
                                                asChild
                                                className="w-full bg-blue-600 font-semibold text-white hover:bg-blue-700"
                                            >
                                                <a
                                                    href={`/documents/download/${document.id}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Download className="mr-2 h-4 w-4" />
                                                    Pakua - Download
                                                </a>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="py-16 text-center">
                                <FileSearch className="mx-auto mb-4 h-16 w-16 text-gray-400" />
                                <h2 className="mb-3 text-2xl font-bold text-gray-900">
                                    No research or protocol documents found
                                </h2>
                                <p className="text-gray-600">
                                    Hakuna nyaraka za utafiti au itifaki
                                    zilizopatikana.
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
