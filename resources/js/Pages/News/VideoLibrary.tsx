import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Video, Play, Clock, Filter, Search } from 'lucide-react';
import { Button } from '@/Components/ui/button';
import { Card, CardContent } from '@/Components/ui/card';
import { useState, useMemo } from 'react';

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
    is_featured: boolean;
}

interface VideoLibraryProps {
    videos: Video[];
}

export default function VideoLibrary({ videos }: VideoLibraryProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState<string>('');

    // Get unique categories
    const categories = useMemo(() => {
        const uniqueCategories = Array.from(new Set(videos.map(video => video.category)));
        return ['all', ...uniqueCategories];
    }, [videos]);

    // Filter videos based on category and search term
    const filteredVideos = useMemo(() => {
        return videos.filter(video => {
            const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
            const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                video.description.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [videos, selectedCategory, searchTerm]);

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

    const getCategoryDisplayName = (category: string) => {
        switch (category) {
            case 'all':
                return 'Zote - All';
            case 'prevention':
                return 'Kuzuia - Prevention';
            case 'awareness':
                return 'Uelewa - Awareness';
            case 'treatment':
                return 'Matibabu - Treatment';
            case 'community':
                return 'Jamii - Community';
            case 'education':
                return 'Elimu - Education';
            case 'training':
                return 'Mafunzo - Training';
            default:
                return category.charAt(0).toUpperCase() + category.slice(1);
        }
    };

    return (
        <PublicLayout title="Video Library">
            <Head title="Video Library - Maktaba ya Video" />

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
                                    <Video className="w-10 h-10 text-white" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                                    Maktaba ya Video
                                </h1>
                                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-100">
                                    Video Library
                                </h2>
                                <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                                    Mafunzo na elimu kuhusu VVU, afya ya jamii na huduma za kijamii
                                </p>
                                <p className="text-lg text-blue-200 max-w-3xl mx-auto mt-2">
                                    Educational content about HIV/AIDS, community health and social services
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
                                        placeholder="Tafuta video... / Search videos..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                {/* Category Filter */}
                                <div className="flex items-center space-x-2">
                                    <Filter className="w-4 h-4 text-gray-500" />
                                    <select
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        {categories.map((category) => (
                                            <option key={category} value={category}>
                                                {getCategoryDisplayName(category)}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Results Count */}
                            <div className="mt-4 text-sm text-gray-600">
                                {filteredVideos.length} video{filteredVideos.length !== 1 ? 's' : ''} found
                                {selectedCategory !== 'all' && ` in ${getCategoryDisplayName(selectedCategory)}`}
                            </div>
                        </div>

                        {/* Videos Grid */}
                        {filteredVideos.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredVideos.map((video) => (
                                    <Card key={video.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                                        <div className="relative aspect-video overflow-hidden">
                                            <img
                                                src={video.thumbnail}
                                                alt={video.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <Play className="w-16 h-16 text-white" />
                                            </div>
                                            
                                            {/* Category Badge */}
                                            <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                                                <span>{getCategoryIcon(video.category)}</span>
                                                <span className="capitalize">{video.category}</span>
                                            </div>
                                            
                                            {/* Featured Badge */}
                                            {video.is_featured && (
                                                <div className="absolute top-3 right-3 bg-yellow-500 text-blue-900 px-2 py-1 rounded-full text-xs font-bold">
                                                    ⭐ Featured
                                                </div>
                                            )}
                                            
                                            {/* Duration */}
                                            {video.duration && (
                                                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center space-x-1">
                                                    <Clock className="w-3 h-3" />
                                                    <span>{formatDuration(video.duration)}</span>
                                                </div>
                                            )}
                                        </div>
                                        
                                        <CardContent className="p-6">
                                            <h3 className="font-bold text-xl mb-3 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                {video.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                                {video.description}
                                            </p>
                                            <Button
                                                asChild
                                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                                            >
                                                <a
                                                    href={video.youtube_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center space-x-2"
                                                >
                                                    <Play className="w-4 h-4" />
                                                    <span>Tazama Video - Watch Video</span>
                                                </a>
                                            </Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    Hakuna Video Zilizopatikana
                                </h3>
                                <p className="text-lg text-gray-600 mb-2">
                                    No videos found matching your search criteria
                                </p>
                                <p className="text-gray-500">
                                    Jaribu kutafuta kwa maneno mengine au chagua category nyingine
                                </p>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </PublicLayout>
    );
}
