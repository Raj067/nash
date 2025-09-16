import React from "react";
import {
    Calendar,
    Clock,
    ArrowRight,
    Users,
    Award,
    TrendingUp,
    Newspaper,
} from "lucide-react";
import { Card, CardContent } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";

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
}

const RecentNews: React.FC = () => {
    const newsData: NewsItem[] = [
        {
            id: 1,
            title: "Mafanikio ya Lengo la 95-95-95 ya UNAIDS Tanzania",
            summary: "Tanzania imefanikiwa kufikia 88% ya watu wenye VVU kujua hali yao, 97% wanapata matibabu, na 95% wamepunguza virusi mwilini. Hii ni hatua kubwa katika kupambana na VVU nchini.",
            date: "2024-01-15",
            category: "Mafanikio",
            image: "/images/arvsImages.jpeg",
            featured: true,
            readTime: "5 min",
            author: "NACP Tanzania",
        },
        {
            id: 2,
            title: "Kupungua kwa Vifo vya VVU kwa Asilimia 50",
            summary: "Vifo vya VVU vimepungua kutoka 64,000 mnamo 2010 hadi 32,000 mnamo 2023, ikiwa ni kupungua kwa asilimia 50. Mafanikio haya yanatolewa na uboreshaji wa huduma za matibabu.",
            date: "2024-01-12",
            category: "Takwimu",
            image: "/images/arvsImages.jpeg",
            featured: false,
            readTime: "4 min",
            author: "Idara ya Takwimu",
        },
        {
            id: 3,
            title: "Programu Mpya za Kuzuia VVU kwa Vijana",
            summary: "Kuanzishwa kwa programu maalum za kuzuia VVU kwa vijana wa umri wa miaka 10-24, hasa wasichana. Programu hizi zinalenga kupunguza maambukizi mapya kwa kundi hili muhimu.",
            date: "2024-01-10",
            category: "Programu",
            image: "/images/arvsImages.jpeg",
            featured: false,
            readTime: "3 min",
            author: "Idara ya Vijana",
        },
        {
            id: 4,
            title: "Uongezaji wa Vituo vya Upimaji vya VVU",
            summary: "Kuongezwa kwa vituo 150 vya upimaji vya VVU nchini kote ili kufikia watu zaidi. Vituo hivi vitapatikana katika maeneo ya vijijini na mijini.",
            date: "2024-01-08",
            category: "Huduma",
            image: "/images/arvsImages.jpeg",
            featured: false,
            readTime: "4 min",
            author: "Idara ya Huduma",
        },
    ];

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
    const regularNews = newsData.filter((news) => !news.featured);

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
                        Habari za Hivi Karibuni
                    </h2>
                    <p className="text-blue-100 max-w-3xl mx-auto text-lg mb-8">
                        Mafanikio na maendeleo ya programu za VVU nchini Tanzania
                    </p>
                    <Button className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                        Habari Zote <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Featured News - Large Card */}
                    {featuredNews && (
                        <div className="lg:col-span-2">
                            <Card className="group overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
                                <div className="relative">
                                    <img
                                        src={featuredNews.image}
                                        alt={featuredNews.title}
                                        className="w-full h-64 md:h-80 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute top-4 left-4">
                                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getCategoryColor(featuredNews.category)} text-white shadow-lg`}>
                                            {React.createElement(
                                                getCategoryIcon(featuredNews.category),
                                                { className: "h-4 w-4 mr-1" }
                                            )}
                                            {featuredNews.category}
                                        </span>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                        MUHIMU
                                    </div>
                                </div>
                                <CardContent className="p-6 text-white">
                                    <div className="flex items-center text-sm text-blue-200 mb-3">
                                        <Calendar className="h-4 w-4 mr-1" />
                                        <span className="mr-4">
                                            {new Date(featuredNews.date).toLocaleDateString("sw-TZ")}
                                        </span>
                                        <Clock className="h-4 w-4 mr-1" />
                                        <span className="mr-4">{featuredNews.readTime}</span>
                                        <span>Na {featuredNews.author}</span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 cursor-pointer transition-colors">
                                        {featuredNews.title}
                                    </h3>
                                    <p className="text-blue-100 mb-4 leading-relaxed">
                                        {featuredNews.summary}
                                    </p>
                                    <Button className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white border-0 shadow-lg">
                                        Soma Zaidi <ArrowRight className="h-4 w-4 ml-2" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    )}

                    {/* Regular News - Smaller Cards */}
                    <div className="space-y-6">
                        {regularNews.slice(0, 3).map((news) => (
                            <Card
                                key={news.id}
                                className="group overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105"
                            >
                                <div className="flex">
                                    <div className="w-24 h-24 flex-shrink-0 relative">
                                        <img
                                            src={news.image}
                                            alt={news.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                                    </div>
                                    <CardContent className="flex-1 p-4 text-white">
                                        <div className="flex items-center mb-2">
                                            <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gradient-to-r ${getCategoryColor(news.category)} text-white shadow-md`}>
                                                {React.createElement(
                                                    getCategoryIcon(news.category),
                                                    { className: "h-3 w-3 mr-1" }
                                                )}
                                                {news.category}
                                            </span>
                                        </div>
                                        <h4 className="font-semibold text-white mb-2 group-hover:text-yellow-300 cursor-pointer transition-colors line-clamp-2">
                                            {news.title}
                                        </h4>
                                        <p className="text-sm text-blue-100 mb-2 line-clamp-2">
                                            {news.summary}
                                        </p>
                                        <div className="flex items-center text-xs text-blue-200">
                                            <Calendar className="h-3 w-3 mr-1" />
                                            <span className="mr-3">
                                                {new Date(news.date).toLocaleDateString("sw-TZ")}
                                            </span>
                                            <Clock className="h-3 w-3 mr-1" />
                                            <span>{news.readTime}</span>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-4">Fuata Maendeleo Yetu</h3>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Pata habari za hivi karibuni kuhusu mafanikio ya programu za VVU na jinsi unavyoweza kushiriki katika vita dhidi ya VVU
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg">
                                Tufuate Mitandao ya Kijamii
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecentNews;
