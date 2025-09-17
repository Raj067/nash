import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
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
    Plus
} from 'lucide-react';

export default function Dashboard() {
    const stats = [
        {
            name: 'Total Users',
            value: '2,847',
            change: '+12%',
            changeType: 'increase',
            icon: Users,
            color: 'from-blue-500 to-blue-600',
        },
        {
            name: 'Active Programs',
            value: '24',
            change: '+3',
            changeType: 'increase',
            icon: Activity,
            color: 'from-green-500 to-green-600',
        },
        {
            name: 'HIV Testing Centers',
            value: '156',
            change: '+8',
            changeType: 'increase',
            icon: Heart,
            color: 'from-red-500 to-red-600',
        },
        {
            name: 'Monthly Reports',
            value: '89',
            change: '+15%',
            changeType: 'increase',
            icon: FileText,
            color: 'from-purple-500 to-purple-600',
        },
    ];

    const recentActivities = [
        {
            id: 1,
            type: 'update',
            title: 'HIV Statistics Updated',
            description: 'Monthly HIV statistics for October 2024 have been published',
            time: '2 hours ago',
            icon: BarChart3,
            color: 'text-blue-600',
        },
        {
            id: 2,
            type: 'new',
            title: 'New Testing Center Added',
            description: 'Mwanza Regional HIV Testing Center has been registered',
            time: '4 hours ago',
            icon: Plus,
            color: 'text-green-600',
        },
        {
            id: 3,
            type: 'alert',
            title: 'System Maintenance',
            description: 'Scheduled maintenance completed successfully',
            time: '1 day ago',
            icon: CheckCircle,
            color: 'text-green-600',
        },
        {
            id: 4,
            type: 'report',
            title: 'Weekly Report Generated',
            description: 'Prevention programs weekly report is ready for review',
            time: '2 days ago',
            icon: FileText,
            color: 'text-purple-600',
        },
    ];

    const quickActions = [
        {
            name: 'Add New User',
            description: 'Create a new admin user account',
            href: '/admin/users/create',
            icon: Users,
            color: 'bg-blue-500 hover:bg-blue-600',
        },
        {
            name: 'Update Statistics',
            description: 'Upload latest HIV/AIDS statistics',
            href: '/admin/statistics/upload',
            icon: TrendingUp,
            color: 'bg-green-500 hover:bg-green-600',
        },
        {
            name: 'Publish News',
            description: 'Create and publish news article',
            href: '/admin/news/create',
            icon: FileText,
            color: 'bg-purple-500 hover:bg-purple-600',
        },
        {
            name: 'System Settings',
            description: 'Configure system preferences',
            href: '/admin/settings',
            icon: Shield,
            color: 'bg-gray-500 hover:bg-gray-600',
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
                                Welcome back, Admin!
                            </h1>
                            <p className="text-blue-100 text-lg">
                                Here's what's happening with NACP today.
                            </p>
                        </div>
                        <div className="hidden md:block">
                            <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
                                <Shield className="w-12 h-12 text-white" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <Card key={stat.name} className="overflow-hidden">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium text-gray-600">
                                            {stat.name}
                                        </p>
                                        <p className="text-3xl font-bold text-gray-900">
                                            {stat.value}
                                        </p>
                                        <p className={`text-sm flex items-center ${
                                            stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                                        }`}>
                                            <TrendingUp className="w-4 h-4 mr-1" />
                                            {stat.change} from last month
                                        </p>
                                    </div>
                                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
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
                            {recentActivities.map((activity) => (
                                <div key={activity.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                                    <div className={`p-2 rounded-lg bg-white ${activity.color}`}>
                                        <activity.icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-gray-900">
                                            {activity.title}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {activity.description}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            {activity.time}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            <Button variant="outline" className="w-full">
                                <Eye className="w-4 h-4 mr-2" />
                                View All Activities
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Quick Actions */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Shield className="w-5 h-5 mr-2" />
                                Quick Actions
                            </CardTitle>
                            <CardDescription>
                                Common administrative tasks
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {quickActions.map((action) => (
                                <Button
                                    key={action.name}
                                    variant="outline"
                                    className="w-full justify-start h-auto p-4"
                                    asChild
                                >
                                    <a href={action.href}>
                                        <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center mr-4`}>
                                            <action.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="text-left">
                                            <div className="font-medium">{action.name}</div>
                                            <div className="text-sm text-gray-600">{action.description}</div>
                                        </div>
                                    </a>
                                </Button>
                            ))}
                        </CardContent>
                    </Card>
                </div>

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
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <div>
                                    <p className="font-medium">Website Status</p>
                                    <p className="text-sm text-gray-600">All systems operational</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <div>
                                    <p className="font-medium">Database</p>
                                    <p className="text-sm text-gray-600">Connected and healthy</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div>
                                    <p className="font-medium">Backup System</p>
                                    <p className="text-sm text-gray-600">Last backup: 2 hours ago</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
