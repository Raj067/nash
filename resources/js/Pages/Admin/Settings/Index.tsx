import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Textarea } from '@/Components/ui/textarea';
import { Switch } from '@/Components/ui/switch';
import { 
    Settings, 
    Save,
    Shield,
    Database,
    Bell,
    Mail,
    Globe,
    Lock,
    Users,
    Palette,
    Server
} from 'lucide-react';
import { Separator } from '@/Components/ui/separator';

export default function SettingsIndex() {
    const breadcrumbs = [
        { label: "Admin", href: "/dashboard" },
        { label: "Settings" }
    ];

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="System Settings - NACP Admin" />

            <div className="space-y-6">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">System Settings</h2>
                        <p className="text-muted-foreground">
                            Configure system preferences and administrative settings
                        </p>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <Save className="mr-2 h-4 w-4" />
                        Save All Changes
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Settings Navigation */}
                    <div className="space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Settings Categories</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Button variant="ghost" className="w-full justify-start">
                                    <Globe className="mr-2 h-4 w-4" />
                                    General Settings
                                </Button>
                                <Button variant="ghost" className="w-full justify-start">
                                    <Users className="mr-2 h-4 w-4" />
                                    User Management
                                </Button>
                                <Button variant="ghost" className="w-full justify-start">
                                    <Shield className="mr-2 h-4 w-4" />
                                    Security & Privacy
                                </Button>
                                <Button variant="ghost" className="w-full justify-start">
                                    <Bell className="mr-2 h-4 w-4" />
                                    Notifications
                                </Button>
                                <Button variant="ghost" className="w-full justify-start">
                                    <Mail className="mr-2 h-4 w-4" />
                                    Email Configuration
                                </Button>
                                <Button variant="ghost" className="w-full justify-start">
                                    <Database className="mr-2 h-4 w-4" />
                                    Backup & Maintenance
                                </Button>
                                <Button variant="ghost" className="w-full justify-start">
                                    <Palette className="mr-2 h-4 w-4" />
                                    Appearance
                                </Button>
                                <Button variant="ghost" className="w-full justify-start">
                                    <Server className="mr-2 h-4 w-4" />
                                    System Information
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Settings Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* General Settings */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Globe className="mr-2 h-5 w-5" />
                                    General Settings
                                </CardTitle>
                                <CardDescription>
                                    Basic website and system configuration
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="site-name">Site Name</Label>
                                        <Input 
                                            id="site-name" 
                                            defaultValue="NACP Tanzania" 
                                            placeholder="Enter site name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="site-url">Site URL</Label>
                                        <Input 
                                            id="site-url" 
                                            defaultValue="https://nacp.go.tz" 
                                            placeholder="Enter site URL"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="site-description">Site Description</Label>
                                    <Textarea 
                                        id="site-description"
                                        defaultValue="National AIDS Control Programme - Tanzania"
                                        placeholder="Enter site description"
                                        rows={3}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="admin-email">Admin Email</Label>
                                        <Input 
                                            id="admin-email" 
                                            type="email"
                                            defaultValue="admin@nacp.go.tz" 
                                            placeholder="Enter admin email"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="timezone">Timezone</Label>
                                        <Input 
                                            id="timezone" 
                                            defaultValue="Africa/Dar_es_Salaam" 
                                            placeholder="Enter timezone"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Security Settings */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Shield className="mr-2 h-5 w-5" />
                                    Security & Privacy
                                </CardTitle>
                                <CardDescription>
                                    Configure security policies and privacy settings
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label>Two-Factor Authentication</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Require 2FA for all admin accounts
                                        </p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label>Session Timeout</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Auto-logout inactive users after 30 minutes
                                        </p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label>Login Attempt Monitoring</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Monitor and log failed login attempts
                                        </p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="max-login-attempts">Max Login Attempts</Label>
                                        <Input 
                                            id="max-login-attempts" 
                                            type="number"
                                            defaultValue="5" 
                                            placeholder="Enter max attempts"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lockout-duration">Lockout Duration (minutes)</Label>
                                        <Input 
                                            id="lockout-duration" 
                                            type="number"
                                            defaultValue="15" 
                                            placeholder="Enter lockout duration"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Notification Settings */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Bell className="mr-2 h-5 w-5" />
                                    Notification Settings
                                </CardTitle>
                                <CardDescription>
                                    Configure system notifications and alerts
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label>Email Notifications</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Send email alerts for system events
                                        </p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label>User Registration Alerts</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Notify admins of new user registrations
                                        </p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label>System Maintenance Alerts</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Send alerts for scheduled maintenance
                                        </p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label>Security Alerts</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Immediate alerts for security incidents
                                        </p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                            </CardContent>
                        </Card>

                        {/* Backup Settings */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Database className="mr-2 h-5 w-5" />
                                    Backup & Maintenance
                                </CardTitle>
                                <CardDescription>
                                    Configure automated backups and maintenance schedules
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div className="space-y-0.5">
                                        <Label>Automatic Backups</Label>
                                        <p className="text-sm text-muted-foreground">
                                            Enable daily automated database backups
                                        </p>
                                    </div>
                                    <Switch defaultChecked />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="backup-time">Backup Time</Label>
                                        <Input 
                                            id="backup-time" 
                                            type="time"
                                            defaultValue="02:00" 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="backup-retention">Retention Period (days)</Label>
                                        <Input 
                                            id="backup-retention" 
                                            type="number"
                                            defaultValue="30" 
                                        />
                                    </div>
                                </div>
                                <Separator />
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium">Last Backup</span>
                                        <span className="text-sm text-muted-foreground">
                                            Today at 2:00 AM
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-medium">Next Backup</span>
                                        <span className="text-sm text-muted-foreground">
                                            Tomorrow at 2:00 AM
                                        </span>
                                    </div>
                                    <Button variant="outline" className="w-full">
                                        <Database className="mr-2 h-4 w-4" />
                                        Run Backup Now
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
