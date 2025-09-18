import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import { Input } from '@/Components/ui/input';
import { 
    Newspaper, 
    Plus, 
    Search,
    Filter,
    Eye,
    Edit,
    Trash2,
    Calendar,
    User,
    MessageSquare,
    Camera,
    Video,
    Mic,
    MoreHorizontal
} from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/Components/ui/table';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';

interface NewsItem {
    id: number;
    title: string;
    type: 'blog' | 'press-release' | 'speech' | 'photo' | 'video';
    status: 'published' | 'draft' | 'scheduled';
    author: string;
    created_at: string;
    published_at?: string;
    views: number;
    excerpt: string;
}

interface Props {
    news: NewsItem[];
}

export default function NewsIndex({ news }: Props) {
    const breadcrumbs = [
        { label: "Admin", href: "/dashboard" },
        { label: "News & Media" }
    ];

    const mockNews: NewsItem[] = [
        {
            id: 1,
            title: "Tanzania Achieves 95-95-95 HIV Treatment Targets",
            type: "press-release",
            status: "published",
            author: "Dr. John Mwamba",
            created_at: "2024-01-20",
            published_at: "2024-01-20",
            views: 1250,
            excerpt: "Tanzania has successfully achieved the UNAIDS 95-95-95 targets for HIV treatment and care..."
        },
        {
            id: 2,
            title: "World AIDS Day 2024: Community Leadership",
            type: "blog",
            status: "published",
            author: "Sarah Kimani",
            created_at: "2024-01-18",
            published_at: "2024-01-18",
            views: 890,
            excerpt: "This year's World AIDS Day theme emphasizes the crucial role of community leadership..."
        },
        {
            id: 3,
            title: "Minister's Speech at HIV Prevention Conference",
            type: "speech",
            status: "draft",
            author: "Communications Team",
            created_at: "2024-01-15",
            views: 0,
            excerpt: "Key address by the Minister of Health on new HIV prevention strategies..."
        },
        {
            id: 4,
            title: "HIV Testing Campaign Photo Gallery",
            type: "photo",
            status: "published",
            author: "Media Team",
            created_at: "2024-01-12",
            published_at: "2024-01-12",
            views: 456,
            excerpt: "Photos from the national HIV testing campaign across Tanzania..."
        },
        {
            id: 5,
            title: "Documentary: Living with HIV in Tanzania",
            type: "video",
            status: "scheduled",
            author: "Video Production",
            created_at: "2024-01-10",
            published_at: "2024-01-25",
            views: 0,
            excerpt: "A powerful documentary showcasing stories of hope and resilience..."
        }
    ];

    const displayNews = news || mockNews;

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'blog':
                return <MessageSquare className="h-4 w-4" />;
            case 'press-release':
                return <Newspaper className="h-4 w-4" />;
            case 'speech':
                return <Mic className="h-4 w-4" />;
            case 'photo':
                return <Camera className="h-4 w-4" />;
            case 'video':
                return <Video className="h-4 w-4" />;
            default:
                return <Newspaper className="h-4 w-4" />;
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'published':
                return <Badge className="bg-green-100 text-green-800">Published</Badge>;
            case 'draft':
                return <Badge variant="secondary">Draft</Badge>;
            case 'scheduled':
                return <Badge className="bg-blue-100 text-blue-800">Scheduled</Badge>;
            default:
                return <Badge variant="outline">{status}</Badge>;
        }
    };

    const formatType = (type: string) => {
        return type.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    };

    const newsStats = {
        total: displayNews.length,
        published: displayNews.filter(n => n.status === 'published').length,
        draft: displayNews.filter(n => n.status === 'draft').length,
        scheduled: displayNews.filter(n => n.status === 'scheduled').length,
        totalViews: displayNews.reduce((sum, n) => sum + n.views, 0)
    };

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="News & Media Management - NACP Admin" />

            <div className="space-y-6">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">News & Media Management</h2>
                        <p className="text-muted-foreground">
                            Manage blogs, press releases, speeches, photos, and videos
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                    <Plus className="mr-2 h-4 w-4" />
                                    Create New
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Content Type</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    Blog Post
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Newspaper className="mr-2 h-4 w-4" />
                                    Press Release
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Mic className="mr-2 h-4 w-4" />
                                    Speech
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Camera className="mr-2 h-4 w-4" />
                                    Photo Gallery
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Video className="mr-2 h-4 w-4" />
                                    Video Content
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Content</CardTitle>
                            <Newspaper className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{newsStats.total}</div>
                        </CardContent>
                    </Card>
                    
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Published</CardTitle>
                            <Eye className="h-4 w-4 text-green-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{newsStats.published}</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Drafts</CardTitle>
                            <Edit className="h-4 w-4 text-yellow-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{newsStats.draft}</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Scheduled</CardTitle>
                            <Calendar className="h-4 w-4 text-blue-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{newsStats.scheduled}</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
                            <Eye className="h-4 w-4 text-purple-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{newsStats.totalViews.toLocaleString()}</div>
                        </CardContent>
                    </Card>
                </div>

                {/* News Table */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle>All Content</CardTitle>
                                <CardDescription>
                                    Manage news articles, media, and publications
                                </CardDescription>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="relative">
                                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Search content..."
                                        className="pl-8 w-64"
                                    />
                                </div>
                                <Button variant="outline" size="sm">
                                    <Filter className="mr-2 h-4 w-4" />
                                    Filter
                                </Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Author</TableHead>
                                    <TableHead>Views</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {displayNews.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>
                                            <div>
                                                <div className="font-medium">{item.title}</div>
                                                <div className="text-sm text-muted-foreground line-clamp-1">
                                                    {item.excerpt}
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center space-x-2">
                                                {getTypeIcon(item.type)}
                                                <span className="capitalize">{formatType(item.type)}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            {getStatusBadge(item.status)}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center space-x-2">
                                                <User className="h-4 w-4 text-muted-foreground" />
                                                <span>{item.author}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center space-x-1">
                                                <Eye className="h-3 w-3 text-muted-foreground" />
                                                <span>{item.views.toLocaleString()}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="text-sm">
                                                <div>{new Date(item.created_at).toLocaleDateString()}</div>
                                                {item.published_at && (
                                                    <div className="text-muted-foreground">
                                                        Pub: {new Date(item.published_at).toLocaleDateString()}
                                                    </div>
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="h-8 w-8 p-0">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent align="end">
                                                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                                    <DropdownMenuItem>
                                                        <Eye className="mr-2 h-4 w-4" />
                                                        View
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <Edit className="mr-2 h-4 w-4" />
                                                        Edit
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="text-red-600">
                                                        <Trash2 className="mr-2 h-4 w-4" />
                                                        Delete
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
