import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import { 
    BookOpen, 
    Plus, 
    FileText,
    Database,
    Shield,
    Download,
    Eye,
    Edit,
    Calendar,
    User
} from 'lucide-react';

interface Resource {
    id: number;
    title: string;
    type: 'strategic-framework' | 'guidelines' | 'databases' | 'sop-manuals';
    description: string;
    file_size: string;
    updated_at: string;
    author: string;
    downloads: number;
}

interface Props {
    resources: Resource[];
}

export default function ResourcesIndex({ resources }: Props) {
    const breadcrumbs = [
        { label: "Admin", href: "/dashboard" },
        { label: "Resources" }
    ];

    const mockResources: Resource[] = [
        {
            id: 1,
            title: "National HIV/AIDS Strategic Framework 2024-2029",
            type: "strategic-framework",
            description: "Comprehensive strategic framework for HIV/AIDS control in Tanzania",
            file_size: "2.5 MB",
            updated_at: "2024-01-15",
            author: "Dr. John Mwamba",
            downloads: 245
        },
        {
            id: 2,
            title: "HIV Testing and Counseling Guidelines",
            type: "guidelines",
            description: "Updated guidelines for HIV testing and counseling services",
            file_size: "1.8 MB",
            updated_at: "2024-01-10",
            author: "Sarah Kimani",
            downloads: 189
        },
        {
            id: 3,
            title: "National HIV Database System",
            type: "databases",
            description: "Centralized database for HIV surveillance and monitoring",
            file_size: "Database",
            updated_at: "2024-01-20",
            author: "Michael Ndovu",
            downloads: 67
        },
        {
            id: 4,
            title: "Standard Operating Procedures - Prevention Programs",
            type: "sop-manuals",
            description: "SOPs for implementing HIV prevention programs",
            file_size: "3.2 MB",
            updated_at: "2024-01-18",
            author: "Dr. Amina Hassan",
            downloads: 156
        }
    ];

    const displayResources = resources || mockResources;

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'strategic-framework':
                return <Shield className="h-4 w-4" />;
            case 'guidelines':
                return <BookOpen className="h-4 w-4" />;
            case 'databases':
                return <Database className="h-4 w-4" />;
            case 'sop-manuals':
                return <FileText className="h-4 w-4" />;
            default:
                return <FileText className="h-4 w-4" />;
        }
    };

    const getTypeBadgeColor = (type: string) => {
        switch (type) {
            case 'strategic-framework':
                return 'bg-purple-100 text-purple-800';
            case 'guidelines':
                return 'bg-blue-100 text-blue-800';
            case 'databases':
                return 'bg-green-100 text-green-800';
            case 'sop-manuals':
                return 'bg-orange-100 text-orange-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const formatType = (type: string) => {
        return type.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    };

    const resourceStats = {
        total: displayResources.length,
        strategic: displayResources.filter(r => r.type === 'strategic-framework').length,
        guidelines: displayResources.filter(r => r.type === 'guidelines').length,
        databases: displayResources.filter(r => r.type === 'databases').length,
        manuals: displayResources.filter(r => r.type === 'sop-manuals').length,
    };

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Resources Management - NACP Admin" />

            <div className="space-y-6">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Resources Management</h2>
                        <p className="text-muted-foreground">
                            Manage strategic frameworks, guidelines, databases, and manuals
                        </p>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <Plus className="mr-2 h-4 w-4" />
                        Add New Resource
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Resources</CardTitle>
                            <BookOpen className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{resourceStats.total}</div>
                        </CardContent>
                    </Card>
                    
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Strategic Framework</CardTitle>
                            <Shield className="h-4 w-4 text-purple-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{resourceStats.strategic}</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Guidelines</CardTitle>
                            <BookOpen className="h-4 w-4 text-blue-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{resourceStats.guidelines}</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Databases</CardTitle>
                            <Database className="h-4 w-4 text-green-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{resourceStats.databases}</div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">SOP & Manuals</CardTitle>
                            <FileText className="h-4 w-4 text-orange-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{resourceStats.manuals}</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Resources Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayResources.map((resource) => (
                        <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="flex items-start justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="p-2 bg-gray-100 rounded-lg">
                                            {getTypeIcon(resource.type)}
                                        </div>
                                        <Badge className={getTypeBadgeColor(resource.type)}>
                                            {formatType(resource.type)}
                                        </Badge>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Button variant="ghost" size="sm">
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="sm">
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                                <CardTitle className="text-lg leading-tight">
                                    {resource.title}
                                </CardTitle>
                                <CardDescription>
                                    {resource.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                                        <div className="flex items-center space-x-1">
                                            <User className="h-3 w-3" />
                                            <span>{resource.author}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Calendar className="h-3 w-3" />
                                            <span>{new Date(resource.updated_at).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-between">
                                        <div className="text-sm text-muted-foreground">
                                            {resource.file_size} • {resource.downloads} downloads
                                        </div>
                                        <Button size="sm" variant="outline">
                                            <Download className="mr-2 h-3 w-3" />
                                            Download
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Quick Actions */}
                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>
                            Common resource management tasks
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <Button variant="outline" className="h-20 flex-col">
                                <Shield className="h-6 w-6 mb-2 text-purple-600" />
                                <span>Add Strategic Framework</span>
                            </Button>
                            <Button variant="outline" className="h-20 flex-col">
                                <BookOpen className="h-6 w-6 mb-2 text-blue-600" />
                                <span>Upload Guidelines</span>
                            </Button>
                            <Button variant="outline" className="h-20 flex-col">
                                <Database className="h-6 w-6 mb-2 text-green-600" />
                                <span>Manage Databases</span>
                            </Button>
                            <Button variant="outline" className="h-20 flex-col">
                                <FileText className="h-6 w-6 mb-2 text-orange-600" />
                                <span>Create SOP Manual</span>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
