import React from "react";
import {
    Calendar,
    Clock,
    ArrowRight,
    Users,
    Award,
    TrendingUp,
    Newspaper,
    ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

interface NewsItem {
    id: number;
    title: string;
    summary: string;
    date: string;
    category: string;
    image: string;
    featured: boolean;
    readTime: string;
    author: string;
    slug: string;
}

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

interface RecentNewsProps {
    featuredBlogs: Blog[];
}

const RecentNews: React.FC<RecentNewsProps> = ({ featuredBlogs }) => {
    const { t } = useTranslation("common");
    
    // Return early if no featured blogs
    if (!featuredBlogs || featuredBlogs.length === 0) {
        return null;
    }

    // Use only featured blogs from database
    const newsData = featuredBlogs.slice(0, 4).map((blog) => ({
        id: blog.id,
        title: blog.title,
        summary: blog.excerpt,
        date: blog.published_date,
        category: blog.category_display,
        image: blog.featured_image || "/images/arvsImages.jpeg",
        featured: blog.is_featured,
        readTime: blog.reading_time,
        author: blog.author,
        slug: blog.slug,
    }));

    const getCategoryIcon = (category: string) => {
        switch (category.toLowerCase()) {
            case "mafanikio":
                return Award;
            case "takwimu":
                return TrendingUp;
            case "programu":
                return Users;
            default:
                return Newspaper;
        }
    };

    const getCategoryColor = (category: string) => {
        switch (category.toLowerCase()) {
            case "mafanikio":
                return "from-green-400 to-emerald-500";
            case "takwimu":
                return "from-blue-400 to-cyan-500";
            case "programu":
                return "from-purple-400 to-pink-500";
            default:
                return "from-gray-400 to-slate-500";
        }
    };

    const featuredNews = newsData.find((news) => news.featured);
    const regularNews = newsData.filter((news) => news.id !== featuredNews?.id);

    return (
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
            {/* Background Graphics */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                </div>
                <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
                <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-400 rounded-full blur-3xl opacity-10"></div>
                <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-green-400 rounded-full blur-2xl opacity-10"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mb-6">
                        <Newspaper className="h-12 w-12 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-6">
                        {t("recent_news.title")}
                    </h2>
                    <p className="text-blue-100 max-w-3xl mx-auto text-lg mb-8">
                        {t("recent_news.subtitle")}
                    </p>
                    <Button
                        className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                        asChild
                    >
                        <Link href="/news">
                            {t("recent_news.view_all")} <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                    </Button>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Featured News - Large Card */}
                    {featuredNews && (
                        <div className="lg:col-span-8">
                            <Card className="group overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-[1.02] shadow-2xl">
                                <div className="relative">
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={featuredNews.image}
                                            alt={featuredNews.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                    {/* Category Badge */}
                                    <div className="absolute top-6 left-6">
                                        <span
                                            className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${getCategoryColor(
                                                featuredNews.category
                                            )} text-white shadow-xl backdrop-blur-sm`}
                                        >
                                            {React.createElement(
                                                getCategoryIcon(
                                                    featuredNews.category
                                                ),
                                                { className: "h-4 w-4 mr-2" }
                                            )}
                                            {featuredNews.category}
                                        </span>
                                    </div>

                                    {/* Featured Badge */}
                                    <div className="absolute top-6 right-6">
                                        <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl backdrop-blur-sm">
                                            {t("recent_news.featured_badge")}
                                        </span>
                                    </div>

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8">
                                        <div className="flex items-center text-sm text-blue-200 mb-4">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            <span className="mr-4">
                                                {new Date(
                                                    featuredNews.date
                                                ).toLocaleDateString("sw-TZ")}
                                            </span>
                                            <Clock className="h-4 w-4 mr-2" />
                                            <span className="mr-4">
                                                {featuredNews.readTime}
                                            </span>
                                            <span>
                                                {t("recent_news.by_author", { author: featuredNews.author })}
                                            </span>
                                        </div>
                                        <Link
                                            href={`/news/${featuredNews.slug}`}
                                        >
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-yellow-300 cursor-pointer transition-colors leading-tight">
                                                {featuredNews.title}
                                            </h3>
                                        </Link>
                                        <p className="text-gray-200 text-base md:text-lg mb-6 line-clamp-2 leading-relaxed">
                                            {featuredNews.summary}
                                        </p>
                                        <Button
                                            asChild
                                            className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white border-0 shadow-lg"
                                        >
                                            <Link
                                                href={`/news/${featuredNews.slug}`}
                                            >
                                                {t("recent_news.read_more")}{" "}
                                                <ArrowRight className="h-4 w-4 ml-2" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    )}

                    {/* Regular News - Smaller Cards */}
                    <div className="lg:col-span-4 space-y-6 lg:items-center lg:justify-between lg:flex lg:flex-col">
                        {regularNews.slice(0, 3).map((news) => (
                            <Card
                                key={news.id}
                                className="group overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] shadow-xl"
                            >
                                <div className="flex h-32">
                                    <div className="relative w-32 flex-shrink-0 overflow-hidden">
                                        <img
                                            src={news.image}
                                            alt={news.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
                                    </div>
                                    <div className="flex-1 p-4 flex flex-col justify-between">
                                        <div>
                                            <div className="mb-2">
                                                <span
                                                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(
                                                        news.category
                                                    )} text-white shadow-md`}
                                                >
                                                    {React.createElement(
                                                        getCategoryIcon(
                                                            news.category
                                                        ),
                                                        {
                                                            className:
                                                                "h-3 w-3 mr-1",
                                                        }
                                                    )}
                                                    {news.category}
                                                </span>
                                            </div>
                                            <Link href={`/news/${news.slug}`}>
                                                <h4 className="font-semibold text-white text-sm mb-2 group-hover:text-yellow-300 cursor-pointer transition-colors line-clamp-2 leading-tight">
                                                    {news.title}
                                                </h4>
                                            </Link>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center text-xs text-blue-200">
                                                <Calendar className="h-3 w-3 mr-1" />
                                                <span>
                                                    {new Date(
                                                        news.date
                                                    ).toLocaleDateString(
                                                        "sw-TZ"
                                                    )}
                                                </span>
                                            </div>
                                            <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-4">
                            {t("recent_news.follow_progress")}
                        </h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            {t("recent_news.follow_description")}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <div className="flex flex-wrap gap-3 justify-center">
                                <Button
                                    asChild
                                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 shadow-lg"
                                >
                                    <a
                                        href="https://www.facebook.com/share/p/16uuGAn8UL/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Facebook
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white border-0 shadow-lg"
                                >
                                    <a
                                        href="https://www.instagram.com/nashcoptanzania?igsh=MTN6OXg4NHRrcG95cA=="
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Instagram
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white border-0 shadow-lg"
                                >
                                    <a
                                        href="https://x.com/nashcoptanzania"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        X (Twitter)
                                    </a>
                                </Button>
                                <Button
                                    asChild
                                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border-0 shadow-lg"
                                >
                                    <a
                                        href="https://youtube.com/@nacptanzania2010?si=1Uv-p3UBBhjBow0a"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        YouTube
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentNews;
