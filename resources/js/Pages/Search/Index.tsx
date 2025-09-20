import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Search, Calendar, User, Eye, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import { Card, CardContent } from '@/Components/ui/card';
import { useState, useEffect } from 'react';

interface Blog {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    category_display: string;
    category_icon: string;
    featured_image: string | null;
    author: string;
    published_date: string;
    reading_time: string;
    tags: string[];
    is_featured: boolean;
    views_count: number;
}

interface SearchProps {
    blogs: {
        data: Blog[];
        links: any[];
        meta: any;
    };
    query: string;
}

export default function SearchIndex({ blogs, query }: SearchProps) {
    const [searchTerm, setSearchTerm] = useState(query || '');

    // Provide default values if blogs is undefined
    const blogData = blogs?.data || [];
    const blogLinks = blogs?.links || [];
    const blogMeta = blogs?.meta || { total: 0 };

    useEffect(() => {
        setSearchTerm(query || '');
    }, [query]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            window.location.href = `/search?q=${encodeURIComponent(searchTerm.trim())}`;
        }
    };

    return (
        <PublicLayout title="Search Results">
            <Head title={`Search Results${query ? ` - ${query}` : ''}`} />

            <div className="min-h-screen">
                {/* Hero Section */}
                <div className="relative h-[400px] overflow-hidden">
                    <div
                        className="h-full bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(/images/about.png)`,
                        }}
                    >
                        <div className="h-full bg-gradient-to-r from-black/80 to-black/60 flex items-center">
                            <div className="container mx-auto px-4 text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                    <Search className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    Search Results
                                </h1>
                                {query && (
                                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                        Results for "{query}"
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <section className="py-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
                    <div className="container mx-auto px-4">
                        {/* Back Button */}
                        <div className="mb-8">
                            <Button asChild variant="outline">
                                <Link href="/" className="flex items-center">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Home
                                </Link>
                            </Button>
                        </div>

                        {/* Search Bar */}
                        <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
                            <form onSubmit={handleSearch} className="flex gap-4 items-center">
                                <div className="relative flex-1 max-w-2xl mx-auto">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        type="text"
                                        placeholder="Search blogs, news, and articles..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                                >
                                    Search
                                </Button>
                            </form>
                            
                            {/* Results Count */}
                            <div className="mt-4 text-center text-sm text-gray-600">
                                {blogMeta.total} result{blogMeta.total !== 1 ? 's' : ''} found
                                {query && ` for "${query}"`}
                            </div>
                        </div>

                        {/* Search Results */}
                        {blogData.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {blogData.map((blog) => (
                                    <Card key={blog.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                                        {/* Featured Image */}
                                        {blog.featured_image && (
                                            <div className="relative h-48 overflow-hidden">
                                                <img
                                                    src={blog.featured_image}
                                                    alt={blog.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                />
                                                {blog.is_featured && (
                                                    <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                                                        Featured
                                                    </div>
                                                )}
                                                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                                                    <span className="mr-1">{blog.category_icon}</span>
                                                    {blog.category_display}
                                                </div>
                                            </div>
                                        )}

                                        <CardContent className="p-6">
                                            {/* Blog Title */}
                                            <h3 className="font-bold text-xl mb-3 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                <Link href={`/news/${blog.slug}`}>
                                                    {blog.title}
                                                </Link>
                                            </h3>

                                            {/* Blog Excerpt */}
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                                {blog.excerpt}
                                            </p>

                                            {/* Blog Meta */}
                                            <div className="space-y-2 mb-4">
                                                <div className="flex items-center text-xs text-gray-500">
                                                    <Calendar className="w-3 h-3 mr-1" />
                                                    <span>{blog.published_date}</span>
                                                    <span className="mx-2">•</span>
                                                    <Clock className="w-3 h-3 mr-1" />
                                                    <span>{blog.reading_time}</span>
                                                </div>
                                                {blog.author && (
                                                    <div className="flex items-center text-xs text-gray-500">
                                                        <User className="w-3 h-3 mr-1" />
                                                        <span>{blog.author}</span>
                                                        <span className="mx-2">•</span>
                                                        <Eye className="w-3 h-3 mr-1" />
                                                        <span>{blog.views_count} views</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Tags */}
                                            {blog.tags && blog.tags.length > 0 && (
                                                <div className="flex flex-wrap gap-1 mb-4">
                                                    {blog.tags.slice(0, 3).map((tag, index) => (
                                                        <span key={index} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                    {blog.tags.length > 3 && (
                                                        <span className="text-xs text-gray-500">+{blog.tags.length - 3} more</span>
                                                    )}
                                                </div>
                                            )}

                                            {/* Read More Button */}
                                            <Button
                                                asChild
                                                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                                            >
                                                <Link href={`/news/${blog.slug}`}>
                                                    Read More
                                                </Link>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    No Results Found
                                </h3>
                                <p className="text-lg text-gray-600 mb-2">
                                    {query ? `No results found for "${query}"` : 'No search results available'}
                                </p>
                                <p className="text-gray-500">
                                    Try different keywords or browse our categories
                                </p>
                                <div className="mt-6">
                                    <Button asChild>
                                        <Link href="/news">Browse All News</Link>
                                    </Button>
                                </div>
                            </div>
                        )}

                        {/* Pagination */}
                        {blogLinks && blogLinks.length > 3 && (
                            <div className="mt-12 flex justify-center">
                                <div className="flex space-x-2">
                                    {blogLinks.map((link, index) => (
                                        <Button
                                            key={index}
                                            asChild={link.url !== null}
                                            variant={link.active ? "default" : "outline"}
                                            disabled={link.url === null}
                                            className="min-w-[40px]"
                                        >
                                            {link.url ? (
                                                <Link
                                                    href={link.url}
                                                    dangerouslySetInnerHTML={{ __html: link.label }}
                                                />
                                            ) : (
                                                <span dangerouslySetInnerHTML={{ __html: link.label }} />
                                            )}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
