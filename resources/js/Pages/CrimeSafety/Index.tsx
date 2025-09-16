import { Head } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Link } from '@inertiajs/react';
import { TrendingDown, TrendingUp, FileText, Shield, AlertTriangle, Users } from 'lucide-react';

interface CrimeSafetyProps {
    title: string;
    recentStats: Array<{
        crime: string;
        count: number;
        change: number;
    }>;
}

export default function CrimeSafety({ title, recentStats }: CrimeSafetyProps) {
    return (
        <PublicLayout title={title}>
            <Head title="Crime & Safety" />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            {title}
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
                            Stay informed about crime statistics, safety tips, and prevention measures
                        </p>
                    </div>
                </div>
            </section>

            {/* Crime Statistics */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Recent Crime Statistics</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Monthly crime data for our community
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {recentStats.map((stat, index) => (
                            <Card key={index}>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        {stat.crime}
                                    </CardTitle>
                                    {stat.change < 0 ? (
                                        <TrendingDown className="h-4 w-4 text-green-600" />
                                    ) : (
                                        <TrendingUp className="h-4 w-4 text-red-600" />
                                    )}
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">{stat.count}</div>
                                    <p className={`text-xs ${stat.change < 0 ? 'text-green-600' : 'text-red-600'}`}>
                                        {stat.change > 0 ? '+' : ''}{stat.change}% from last month
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Actions */}
            <section className="py-16 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Take Action</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Report crimes, get safety tips, and stay protected
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
                            <Link href="/crime-safety/report">
                                <CardHeader className="text-center">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 group-hover:bg-red-200 transition-colors">
                                        <FileText className="h-6 w-6 text-red-600" />
                                    </div>
                                    <CardTitle className="text-lg">Report a Crime</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-gray-600 text-sm">
                                        File a police report online or get information on how to report crimes
                                    </p>
                                </CardContent>
                            </Link>
                        </Card>

                        <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
                            <Link href="/crime-safety/tips">
                                <CardHeader className="text-center">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 group-hover:bg-green-200 transition-colors">
                                        <Shield className="h-6 w-6 text-green-600" />
                                    </div>
                                    <CardTitle className="text-lg">Safety Tips</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-gray-600 text-sm">
                                        Learn how to protect yourself, your family, and your property
                                    </p>
                                </CardContent>
                            </Link>
                        </Card>

                        <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
                            <Link href="/crime-safety/wanted">
                                <CardHeader className="text-center">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 group-hover:bg-orange-200 transition-colors">
                                        <AlertTriangle className="h-6 w-6 text-orange-600" />
                                    </div>
                                    <CardTitle className="text-lg">Most Wanted</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-gray-600 text-sm">
                                        Help us locate individuals wanted by law enforcement
                                    </p>
                                </CardContent>
                            </Link>
                        </Card>

                        <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
                            <Link href="/crime-safety/statistics">
                                <CardHeader className="text-center">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
                                        <Users className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-lg">Crime Statistics</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-gray-600 text-sm">
                                        View detailed crime statistics and trends in our community
                                    </p>
                                </CardContent>
                            </Link>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Safety Tips Preview */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">Safety Tips</h2>
                            <p className="mt-2 text-gray-600">Essential safety information for everyone</p>
                        </div>
                        <Button asChild variant="outline">
                            <Link href="/crime-safety/tips">
                                View All Tips
                            </Link>
                        </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>Home Security</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Lock all doors and windows</li>
                                    <li>• Install security lighting</li>
                                    <li>• Use a security system</li>
                                    <li>• Don't hide spare keys outside</li>
                                </ul>
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardHeader>
                                <CardTitle>Personal Safety</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Stay aware of surroundings</li>
                                    <li>• Trust your instincts</li>
                                    <li>• Avoid walking alone at night</li>
                                    <li>• Keep emergency contacts handy</li>
                                </ul>
                            </CardContent>
                        </Card>
                        
                        <Card>
                            <CardHeader>
                                <CardTitle>Vehicle Safety</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Lock your vehicle</li>
                                    <li>• Don't leave valuables visible</li>
                                    <li>• Park in well-lit areas</li>
                                    <li>• Keep doors locked while driving</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
