import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Play, Clock, ExternalLink } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";

interface Video {
    id: number;
    title: string;
    description: string;
    youtube_url: string;
    youtube_id: string;
    thumbnail: string;
    embed_url: string;
    category: string;
    duration: number;
}

function QuickActionWidget() {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFeaturedVideos();
    }, []);

    const fetchFeaturedVideos = async () => {
        try {
            const response = await fetch('/api/videos/featured');
            const data = await response.json();
            setVideos(data);
        } catch (error) {
            console.error('Error fetching videos:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatDuration = (seconds: number) => {
        if (!seconds) return '';
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'prevention':
                return '🛡️';
            case 'awareness':
                return '💡';
            case 'treatment':
                return '💊';
            case 'community':
                return '👥';
            case 'education':
                return '📚';
            case 'training':
                return '🎓';
            default:
                return '📹';
        }
    };

    if (loading) {
        return (
            <section className="py-16 bg-blue-900 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Maktaba ya Video - Video Library
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <Card key={i} className="bg-white/10 border-white/20 text-white animate-pulse">
                                <div className="aspect-video bg-white/20 rounded-t-lg"></div>
                                <CardContent className="p-4">
                                    <div className="h-4 bg-white/20 rounded mb-2"></div>
                                    <div className="h-3 bg-white/20 rounded mb-4"></div>
                                    <div className="h-8 bg-white/20 rounded"></div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-16 bg-blue-900 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                        Maktaba ya Video - Video Library
                    </h2>
                    <p className="text-blue-100 text-lg">
                        Mafunzo na elimu kuhusu VVU na afya ya jamii
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {videos.map((video) => (
                        <Card key={video.id} className="bg-white/10 border-white/20 text-white hover:bg-white/15 transition-all duration-300 group">
                            <div className="relative aspect-video overflow-hidden rounded-t-lg">
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Play className="w-12 h-12 text-white" />
                                </div>
                                <div className="absolute top-2 left-2 bg-black/70 px-2 py-1 rounded text-xs flex items-center space-x-1">
                                    <span>{getCategoryIcon(video.category)}</span>
                                    <span className="capitalize">{video.category}</span>
                                </div>
                                {video.duration && (
                                    <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs flex items-center space-x-1">
                                        <Clock className="w-3 h-3" />
                                        <span>{formatDuration(video.duration)}</span>
                                    </div>
                                )}
                            </div>
                            <CardContent className="p-4">
                                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                                    {video.title}
                                </h3>
                                <p className="text-blue-100 text-sm mb-4 line-clamp-2">
                                    {video.description}
                                </p>
                                <div className="flex space-x-2">
                                    <Button
                                        asChild
                                        className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold"
                                    >
                                        <a
                                            href={video.youtube_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center space-x-2"
                                        >
                                            <Play className="w-4 h-4" />
                                            <span>Tazama</span>
                                        </a>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Button
                        asChild
                        className="bg-white/20 hover:bg-white/30 text-white border border-white/30"
                    >
                        <Link href="/news/video-library" className="flex items-center space-x-2">
                            <ExternalLink className="w-4 h-4" />
                            <span>Tazama Video Zote - View All Videos</span>
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default QuickActionWidget;
