import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Badge } from '@/Components/ui/badge';
import { 
    Users, 
    FileText, 
    Activity, 
    TrendingUp, 
    Heart,
    Shield,
    BarChart3,
    AlertCircle,
    CheckCircle,
    Clock,
    Eye,
    Download,
    Plus,
    UserPlus,
    MessageCircle,
    File,
    HelpCircle,
    Video,
    Tag,
    FolderOpen,
    BookOpen,
    Play,
    ArrowUpRight,
    Calendar,
    Settings,
    Zap
} from 'lucide-react';

interface Stat {
    name: string;
    value: string;
    change: string;
    changeType: 'increase' | 'decrease' | 'neutral';
    icon: string;
    color: string;
    description: string;
}

interface Activity {
    id: string;
    type: string;
    title: string;
    description: string;
    time: string;
    icon: string;
    color: string;
    link?: string;
}

interface SystemHealth {
    name: string;
    status: string;
    description: string;
    color: string;
}

interface ContentOverview {
    name: string;
    count: number;
    icon: string;
    color: string;
}

interface UserAnalytics {
    roleDistribution: { [key: string]: number };
    statusDistribution: { [key: string]: number };
    registrationTrend: { date: string; count: number }[];
}

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

interface Props {
    stats: Stat[];
    recentActivities: Activity[];
    systemHealth: SystemHealth[];
    contentOverview: ContentOverview[];
    userAnalytics: UserAnalytics;
    user: User;
}

export default function Dashboard({ 
    stats, 
    recentActivities, 
    systemHealth, 
    contentOverview, 
    userAnalytics, 
    user 
}: Props) {
    // Icon mapping for dynamic icons
    const iconMap: { [key: string]: any } = {
        Users,
        FileText,
        File,
        MessageCircle,
        HelpCircle,
        Video,
        UserPlus,
        Tag,
        FolderOpen,
        BookOpen,
        Play,
        BarChart3,
        Plus,
        CheckCircle,
        Activity,
        TrendingUp,
        Shield,
        Settings,
        Zap
    };

    const getIcon = (iconName: string) => {
        return iconMap[iconName] || Activity;
    };

    const getStatusColor = (status: string) => {
        const colors: { [key: string]: string } = {
            operational: 'bg-green-500',
            warning: 'bg-yellow-500',
            error: 'bg-red-500',
            green: 'bg-green-500',
            yellow: 'bg-yellow-500',
            red: 'bg-red-500',
        };
        return colors[status] || 'bg-gray-500';
    };

    const quickActions = [
        {
            name: 'Manage Users',
            description: 'View and manage user accounts',
            href: route('admin.users.index'),
            icon: Users,
            color: 'bg-blue-500 hover:bg-blue-600',
        },
        {
            name: 'Create Blog Post',
            description: 'Write and publish new blog content',
            href: route('admin.blogs.create'),
            icon: FileText,
            color: 'bg-green-500 hover:bg-green-600',
        },
        {
            name: 'Upload Document',
            description: 'Add new documents to library',
            href: route('admin.documents.create'),
            icon: File,
            color: 'bg-purple-500 hover:bg-purple-600',
        },
        {
            name: 'View Feedback',
            description: 'Review user feedback and responses',
            href: route('admin.feedback.index'),
            icon: MessageCircle,
            color: 'bg-orange-500 hover:bg-orange-600',
        },
    ];

    return (
        <AdminLayout header="Dashboard Overview">
            <Head title="Admin Dashboard - NACP" />

            <div className="space-y-8">
                {/* Welcome Section */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">
                                Welcome back, {user.name}!
                            </h1>
                            <p className="text-blue-100 text-lg">
                                Here's what's happening with NASHCOP today.
                            </p>
                            <div className="mt-4 flex items-center gap-4">
                                <Badge className="bg-white/20 text-white border-white/30">
                                    <Shield className="w-3 h-3 mr-1" />
                                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                                </Badge>
                                <span className="text-blue-100 text-sm">
                                    <Calendar className="w-4 h-4 inline mr-1" />
                                    {new Date().toLocaleDateString('en-US', { 
                                        weekday: 'long', 
                                        year: 'numeric', 
                                        month: 'long', 
                                        day: 'numeric' 
                                    })}
                                </span>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                                <Shield className="w-12 h-12 text-white" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stats.map((stat) => {
                        const IconComponent = getIcon(stat.icon);
                        return (
                            <Card key={stat.name} className="overflow-hidden hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-600">
                                                {stat.name}
                                            </p>
                                            <p className="text-3xl font-bold text-gray-900 mt-1">
                                                {stat.value}
                                            </p>
                                            <div className="flex items-center justify-between mt-2">
                                                <p className={`text-sm flex items-center ${
                                                    stat.changeType === 'increase' ? 'text-green-600' : 
                                                    stat.changeType === 'decrease' ? 'text-red-600' : 'text-gray-600'
                                                }`}>
                                                    {stat.changeType === 'increase' && <TrendingUp className="w-4 h-4 mr-1" />}
                                                    {stat.changeType === 'decrease' && <TrendingUp className="w-4 h-4 mr-1 rotate-180" />}
                                                    {stat.change} this month
                                                </p>
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">
                                                {stat.description}
                                            </p>
                                        </div>
                                        <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center ml-4`}>
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Recent Activities */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Activity className="w-5 h-5 mr-2" />
                                Recent Activities
                            </CardTitle>
                            <CardDescription>
                                Latest updates and system activities
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {recentActivities.length > 0 ? (
                                <>
                                    {recentActivities.map((activity) => {
                                        const ActivityIcon = getIcon(activity.icon);
                                        return (
                                            <div key={activity.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                                <div className={`p-2 rounded-lg bg-white ${activity.color}`}>
                                                    <ActivityIcon className="w-4 h-4" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center justify-between">
                                                        <p className="font-medium text-gray-900">
                                                            {activity.title}
                                                        </p>
                                                        {activity.link && (
                                                            <Link href={activity.link}>
                                                                <Button variant="ghost" size="sm">
                                                                    <ArrowUpRight className="w-3 h-3" />
                                                                </Button>
                                                            </Link>
                                                        )}
                                                    </div>
                                                    <p className="text-sm text-gray-600">
                                                        {activity.description}
                                                    </p>
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        {activity.time}
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </>
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <Activity className="w-8 h-8 mx-auto mb-2 opacity-50" />
                                    <p>No recent activities</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* Quick Actions */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Zap className="w-5 h-5 mr-2" />
                                Quick Actions
                            </CardTitle>
                            <CardDescription>
                                Common administrative tasks
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            {quickActions.map((action) => (
                                <Link key={action.name} href={action.href}>
                                    <Button
                                        variant="outline"
                                        className="w-full justify-start h-auto p-4 hover:bg-gray-50"
                                    >
                                        <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mr-4`}>
                                            <action.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="text-left">
                                            <div className="font-medium">{action.name}</div>
                                            <div className="text-sm text-gray-600">{action.description}</div>
                                        </div>
                                    </Button>
                                </Link>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Content Overview */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <BarChart3 className="w-5 h-5 mr-2" />
                            Content Overview
                        </CardTitle>
                        <CardDescription>
                            Content distribution across categories
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {contentOverview.map((item) => {
                                const ItemIcon = getIcon(item.icon);
                                return (
                                    <div key={item.name} className="text-center">
                                        <div className={`w-12 h-12 mx-auto mb-2 rounded-lg bg-gray-100 flex items-center justify-center ${item.color}`}>
                                            <ItemIcon className="w-6 h-6" />
                                        </div>
                                        <p className="text-2xl font-bold text-gray-900">{item.count}</p>
                                        <p className="text-sm text-gray-600">{item.name}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </CardContent>
                </Card>

                {/* System Status */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                            System Status
                        </CardTitle>
                        <CardDescription>
                            Current system health and performance
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {systemHealth.map((system) => (
                                <div key={system.name} className="flex items-center space-x-3">
                                    <div className={`w-3 h-3 ${getStatusColor(system.color)} rounded-full`}></div>
                                    <div>
                                        <p className="font-medium">{system.name}</p>
                                        <p className="text-sm text-gray-600">{system.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* User Analytics */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Users className="w-5 h-5 mr-2" />
                                User Distribution
                            </CardTitle>
                            <CardDescription>
                                User roles and status breakdown
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-medium mb-2">By Role</h4>
                                    <div className="space-y-2">
                                        {Object.entries(userAnalytics.roleDistribution).map(([role, count]) => (
                                            <div key={role} className="flex items-center justify-between">
                                                <span className="text-sm text-gray-600 capitalize">{role}</span>
                                                <Badge variant="secondary">{count}</Badge>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-medium mb-2">By Status</h4>
                                    <div className="space-y-2">
                                        {Object.entries(userAnalytics.statusDistribution).map(([status, count]) => (
                                            <div key={status} className="flex items-center justify-between">
                                                <span className="text-sm text-gray-600 capitalize">{status}</span>
                                                <Badge variant={status === 'active' ? 'default' : 'secondary'}>{count}</Badge>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <TrendingUp className="w-5 h-5 mr-2" />
                                Registration Trend
                            </CardTitle>
                            <CardDescription>
                                New user registrations (Last 7 days)
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {userAnalytics.registrationTrend.map((day, index) => (
                                    <div key={index} className="flex items-center justify-between">
                                        <span className="text-sm text-gray-600">{day.date}</span>
                                        <div className="flex items-center gap-2">
                                            <div className="w-20 bg-gray-200 rounded-full h-2">
                                                <div 
                                                    className="bg-blue-500 h-2 rounded-full" 
                                                    style={{ 
                                                        width: `${Math.max((day.count / Math.max(...userAnalytics.registrationTrend.map(d => d.count))) * 100, 5)}%` 
                                                    }}
                                                ></div>
                                            </div>
                                            <Badge variant="outline">{day.count}</Badge>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
