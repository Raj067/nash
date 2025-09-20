import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Calendar, User, Eye, Clock, ArrowLeft, Share2, Tag } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import { Card, CardContent } from '@/Components/ui/card';

interface Blog {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    category: string;
    category_display: string;
    category_icon: string;
    featured_image: string | null;
    author: string;
    published_date: string;
    reading_time: string;
    tags: string[];
    views_count: number;
    meta_data: any;
}

interface RelatedBlog {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    featured_image: string | null;
    published_date: string;
    reading_time: string;
}

interface BlogDetailProps {
    blog: Blog;
    relatedBlogs: RelatedBlog[];
}

export default function BlogDetail({ blog, relatedBlogs }: BlogDetailProps) {
    return (
        <PublicLayout title={blog.title}>
            <Head title={blog.title} />

            <div className="min-h-screen bg-gray-50">
                {/* Hero Section with Featured Image */}
                <div className="relative h-[600px] overflow-hidden">
                    {blog.featured_image ? (
                        <div
                            className="h-full bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url(${blog.featured_image})`,
                            }}
                        >
                            <div className="h-full bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                                <div className="container mx-auto px-4 pb-16">
                                    <div className="max-w-4xl">
                                        {/* Category Badge */}
                                        <div className="mb-4">
                                            <span className="inline-flex items-center bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                <span className="mr-2">{blog.category_icon}</span>
                                                {blog.category_display}
                                            </span>
                                        </div>
                                        
                                        {/* Title */}
                                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                                            {blog.title}
                                        </h1>
                                        
                                        {/* Meta Information */}
                                        <div className="flex flex-wrap items-center gap-6 text-white/90">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                <span>{blog.published_date}</span>
                                            </div>
                                            {blog.author && (
                                                <div className="flex items-center">
                                                    <User className="w-4 h-4 mr-2" />
                                                    <span>{blog.author}</span>
                                                </div>
                                            )}
                                            <div className="flex items-center">
                                                <Clock className="w-4 h-4 mr-2" />
                                                <span>{blog.reading_time}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Eye className="w-4 h-4 mr-2" />
                                                <span>{blog.views_count} views</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="h-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center">
                            <div className="container mx-auto px-4 text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                    <span className="text-3xl">{blog.category_icon}</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    {blog.title}
                                </h1>
                            </div>
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            {/* Back Button */}
                            <div className="mb-8">
                                <Button asChild variant="outline">
                                    <Link href="/news" className="flex items-center">
                                        <ArrowLeft className="w-4 h-4 mr-2" />
                                        Back to News
                                    </Link>
                                </Button>
                            </div>

                            {/* Article Content */}
                            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                                {/* Excerpt */}
                                {blog.excerpt && (
                                    <div className="text-xl text-gray-600 leading-relaxed mb-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                                        {blog.excerpt}
                                    </div>
                                )}

                                {/* Main Content */}
                                <div 
                                    className="prose prose-lg max-w-none"
                                    dangerouslySetInnerHTML={{ __html: blog.content }}
                                />

                                {/* Tags */}
                                {blog.tags && blog.tags.length > 0 && (
                                    <div className="mt-8 pt-8 border-t border-gray-200">
                                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                                            <Tag className="w-5 h-5 mr-2" />
                                            Tags
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {blog.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Share Section */}
                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold flex items-center">
                                            <Share2 className="w-5 h-5 mr-2" />
                                            Share this article
                                        </h3>
                                        <div className="flex space-x-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => {
                                                    if (navigator.share) {
                                                        navigator.share({
                                                            title: blog.title,
                                                            text: blog.excerpt,
                                                            url: window.location.href,
                                                        });
                                                    } else {
                                                        navigator.clipboard.writeText(window.location.href);
                                                        alert('Link copied to clipboard!');
                                                    }
                                                }}
                                            >
                                                Copy Link
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Related Articles */}
                            {relatedBlogs.length > 0 && (
                                <div className="bg-white rounded-lg shadow-sm p-8">
                                    <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {relatedBlogs.map((relatedBlog) => (
                                            <Card key={relatedBlog.id} className="hover:shadow-lg transition-shadow duration-300">
                                                {relatedBlog.featured_image && (
                                                    <div className="h-32 overflow-hidden rounded-t-lg">
                                                        <img
                                                            src={relatedBlog.featured_image}
                                                            alt={relatedBlog.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                )}
                                                <CardContent className="p-4">
                                                    <h4 className="font-semibold mb-2 line-clamp-2">
                                                        <Link
                                                            href={`/news/${relatedBlog.slug}`}
                                                            className="hover:text-blue-600 transition-colors"
                                                        >
                                                            {relatedBlog.title}
                                                        </Link>
                                                    </h4>
                                                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                                        {relatedBlog.excerpt}
                                                    </p>
                                                    <div className="flex items-center text-xs text-gray-500">
                                                        <Calendar className="w-3 h-3 mr-1" />
                                                        <span>{relatedBlog.published_date}</span>
                                                        <span className="mx-2">•</span>
                                                        <Clock className="w-3 h-3 mr-1" />
                                                        <span>{relatedBlog.reading_time}</span>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
