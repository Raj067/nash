import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Badge } from '@/Components/ui/badge';
import { 
    Users, 
    Plus, 
    Search, 
    Filter,
    MoreHorizontal,
    Edit,
    Trash2,
    UserCheck,
    UserX
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

interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'active' | 'inactive';
    created_at: string;
    last_login?: string;
}

interface Props {
    users: User[];
}

export default function UsersIndex({ users }: Props) {
    const breadcrumbs = [
        { label: "Admin", href: "/dashboard" },
        { label: "Users" }
    ];

    const mockUsers: User[] = [
        {
            id: 1,
            name: "Dr. John Mwamba",
            email: "john.mwamba@nacp.go.tz",
            role: "Super Admin",
            status: "active",
            created_at: "2024-01-15",
            last_login: "2024-01-20"
        },
        {
            id: 2,
            name: "Sarah Kimani",
            email: "sarah.kimani@nacp.go.tz",
            role: "Content Manager",
            status: "active",
            created_at: "2024-01-10",
            last_login: "2024-01-19"
        },
        {
            id: 3,
            name: "Michael Ndovu",
            email: "michael.ndovu@nacp.go.tz",
            role: "Data Analyst",
            status: "inactive",
            created_at: "2024-01-05",
            last_login: "2024-01-15"
        }
    ];

    const displayUsers = users || mockUsers;

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="User Management - NACP Admin" />

            <div className="space-y-6">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">User Management</h2>
                        <p className="text-muted-foreground">
                            Manage admin users and their permissions
                        </p>
                    </div>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <Plus className="mr-2 h-4 w-4" />
                        Add New User
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{displayUsers.length}</div>
                            <p className="text-xs text-muted-foreground">
                                +2 from last month
                            </p>
                        </CardContent>
                    </Card>
                    
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                            <UserCheck className="h-4 w-4 text-green-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {displayUsers.filter(u => u.status === 'active').length}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Currently online
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Inactive Users</CardTitle>
                            <UserX className="h-4 w-4 text-red-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">
                                {displayUsers.filter(u => u.status === 'inactive').length}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                Need attention
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Admin Roles</CardTitle>
                            <Filter className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">5</div>
                            <p className="text-xs text-muted-foreground">
                                Different roles
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Users Table */}
                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle>All Users</CardTitle>
                                <CardDescription>
                                    Manage user accounts and permissions
                                </CardDescription>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="relative">
                                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Search users..."
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
                                    <TableHead>Name</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Last Login</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {displayUsers.map((user) => (
                                    <TableRow key={user.id}>
                                        <TableCell className="font-medium">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                                    <span className="text-white text-sm font-medium">
                                                        {user.name.charAt(0)}
                                                    </span>
                                                </div>
                                                <span>{user.name}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline">{user.role}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Badge 
                                                variant={user.status === 'active' ? 'default' : 'secondary'}
                                                className={user.status === 'active' ? 'bg-green-100 text-green-800' : ''}
                                            >
                                                {user.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            {user.last_login ? new Date(user.last_login).toLocaleDateString() : 'Never'}
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
                                                        <Edit className="mr-2 h-4 w-4" />
                                                        Edit User
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <UserCheck className="mr-2 h-4 w-4" />
                                                        Change Role
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem className="text-red-600">
                                                        <Trash2 className="mr-2 h-4 w-4" />
                                                        Delete User
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
