import { Head } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import { Search as SearchIcon, FileText, Users, Heart } from "lucide-react";
import { useState, useEffect } from "react";

interface SearchProps {
    query?: string;
}

export default function Search({ query = "" }: SearchProps) {
    const [searchQuery, setSearchQuery] = useState(query);
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    // Mock search results - in a real app, this would be an API call
    const mockResults = [
        {
            id: 1,
            title: "HIV Testing Services",
            description: "Comprehensive HIV testing services available across Tanzania including rapid testing and counseling.",
            url: "/services/hiv-testing",
            type: "Service"
        },
        {
            id: 2,
            title: "Prevention of Infection",
            description: "HIV prevention programs and interventions to reduce new infections in Tanzania.",
            url: "/interventions/prevention-infection",
            type: "Intervention"
        },
        {
            id: 3,
            title: "Care, Treatment & Support",
            description: "Comprehensive HIV care, treatment and support services for all age groups.",
            url: "/services/care-support",
            type: "Service"
        },
        {
            id: 4,
            title: "About NACP",
            description: "Learn about the National AIDS Control Programme and our mission to end HIV/AIDS in Tanzania.",
            url: "/about/about-us",
            type: "About"
        },
        {
            id: 5,
            title: "HIV/AIDS in Tanzania",
            description: "Current statistics and trends of HIV/AIDS epidemic in Tanzania mainland.",
            url: "/about/hiv-aids-tanzania",
            type: "Information"
        }
    ];

    useEffect(() => {
        if (searchQuery.trim()) {
            setIsLoading(true);
            // Simulate API call delay
            setTimeout(() => {
                const filtered = mockResults.filter(result =>
                    result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    result.description.toLowerCase().includes(searchQuery.toLowerCase())
                );
                setSearchResults(filtered);
                setIsLoading(false);
            }, 500);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        // Update URL without page reload
        window.history.pushState({}, '', `/search?q=${encodeURIComponent(searchQuery)}`);
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'Service':
                return <Heart className="h-5 w-5 text-blue-600" />;
            case 'Intervention':
                return <Users className="h-5 w-5 text-green-600" />;
            default:
                return <FileText className="h-5 w-5 text-gray-600" />;
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'Service':
                return 'bg-blue-100 text-blue-800';
            case 'Intervention':
                return 'bg-green-100 text-green-800';
            case 'Information':
                return 'bg-purple-100 text-purple-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <PublicLayout title="Search Results">
            <Head title={`Search Results${searchQuery ? ` - ${searchQuery}` : ''}`} />
            
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                <SearchIcon className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Search NACP
                            </h1>
                            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                                Find information about HIV/AIDS services, programs, and resources
                            </p>
                        </div>

                        {/* Search Form */}
                        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
                            <div className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden">
                                <input
                                    type="text"
                                    placeholder="Search for services, programs, information..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="flex-1 px-6 py-4 text-gray-900 text-lg focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 transition-colors duration-200"
                                >
                                    <SearchIcon className="h-6 w-6" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Search Results */}
                <div className="container mx-auto px-4 py-12">
                    {searchQuery && (
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">
                                Search Results
                            </h2>
                            <p className="text-gray-600">
                                {isLoading 
                                    ? 'Searching...' 
                                    : `${searchResults.length} result${searchResults.length !== 1 ? 's' : ''} found for "${searchQuery}"`
                                }
                            </p>
                        </div>
                    )}

                    {isLoading ? (
                        <div className="flex justify-center items-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                        </div>
                    ) : searchResults.length > 0 ? (
                        <div className="space-y-6">
                            {searchResults.map((result) => (
                                <div
                                    key={result.id}
                                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-6"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 mt-1">
                                            {getTypeIcon(result.type)}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-3 mb-2">
                                                <a
                                                    href={result.url}
                                                    className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200"
                                                >
                                                    {result.title}
                                                </a>
                                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(result.type)}`}>
                                                    {result.type}
                                                </span>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed mb-3">
                                                {result.description}
                                            </p>
                                            <a
                                                href={result.url}
                                                className="text-sm text-green-600 hover:text-green-800 font-medium"
                                            >
                                                {window.location.origin}{result.url}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : searchQuery && !isLoading ? (
                        <div className="text-center py-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                                <SearchIcon className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                No results found
                            </h3>
                            <p className="text-gray-600 mb-6">
                                We couldn't find any results for "{searchQuery}". Try different keywords or browse our main sections.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="/services"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                                >
                                    Browse Services
                                </a>
                                <a
                                    href="/interventions"
                                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                                >
                                    View Interventions
                                </a>
                                <a
                                    href="/about"
                                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                                >
                                    About NACP
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                <SearchIcon className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                Start your search
                            </h3>
                            <p className="text-gray-600">
                                Enter keywords above to search for NACP services, programs, and information.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}
