import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { Button } from '@/Components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/Components/ui/navigation-menu';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';
import { Menu, X, Shield, Phone, FileText, Users, Award, Calendar } from 'lucide-react';

const navigationItems = [
    {
        title: 'About',
        href: '/about',
        description: 'Learn about our department and mission',
        icon: Shield,
        children: [
            { title: 'Our Mission', href: '/about/mission' },
            { title: 'Leadership', href: '/about/leadership' },
            { title: 'History', href: '/about/history' },
            { title: 'Community Programs', href: '/about/programs' },
        ]
    },
    {
        title: 'Services',
        href: '/services',
        description: 'Police services and community programs',
        icon: Users,
        children: [
            { title: 'Emergency Services', href: '/services/emergency' },
            { title: 'Crime Prevention', href: '/services/prevention' },
            { title: 'Community Policing', href: '/services/community-policing' },
            { title: 'Traffic Safety', href: '/services/traffic' },
        ]
    },
    {
        title: 'Crime & Safety',
        href: '/crime-safety',
        description: 'Crime reports, safety tips, and prevention',
        icon: FileText,
        children: [
            { title: 'Crime Statistics', href: '/crime-safety/statistics' },
            { title: 'Safety Tips', href: '/crime-safety/tips' },
            { title: 'Report a Crime', href: '/crime-safety/report' },
            { title: 'Most Wanted', href: '/crime-safety/wanted' },
        ]
    },
    {
        title: 'News & Events',
        href: '/news',
        description: 'Latest news, events, and announcements',
        icon: Calendar,
        children: [
            { title: 'Latest News', href: '/news/latest' },
            { title: 'Events Calendar', href: '/news/events' },
            { title: 'Press Releases', href: '/news/press' },
            { title: 'Community Meetings', href: '/news/meetings' },
        ]
    },
    {
        title: 'Contact',
        href: '/contact',
        description: 'Get in touch with our department',
        icon: Phone,
    }
];

export function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { url } = usePage();

    return (
        <nav className="bg-white shadow-lg border-b">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo and Brand */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-3">
                            <Shield className="h-8 w-8 text-blue-600" />
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-gray-900">Nash COP</span>
                                <span className="text-xs text-gray-600 hidden sm:block">Community Oriented Policing</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {navigationItems.map((item) => (
                                    <NavigationMenuItem key={item.title}>
                                        {item.children ? (
                                            <>
                                                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600">
                                                    {item.title}
                                                </NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <div className="grid gap-3 p-6 w-[400px]">
                                                        <div className="row-span-3">
                                                            <NavigationMenuLink asChild>
                                                                <Link
                                                                    href={item.href}
                                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500 to-blue-600 p-6 no-underline outline-none focus:shadow-md"
                                                                >
                                                                    <item.icon className="h-6 w-6 text-white" />
                                                                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                                                                        {item.title}
                                                                    </div>
                                                                    <p className="text-sm leading-tight text-blue-100">
                                                                        {item.description}
                                                                    </p>
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </div>
                                                        <div className="grid gap-2">
                                                            {item.children.map((child) => (
                                                                <NavigationMenuLink key={child.title} asChild>
                                                                    <Link
                                                                        href={child.href}
                                                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                                                                    >
                                                                        <div className="text-sm font-medium leading-none">
                                                                            {child.title}
                                                                        </div>
                                                                    </Link>
                                                                </NavigationMenuLink>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </NavigationMenuContent>
                                            </>
                                        ) : (
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    href={item.href}
                                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                                        url === item.href
                                                            ? 'text-blue-600 bg-blue-50'
                                                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                                    }`}
                                                >
                                                    {item.title}
                                                </Link>
                                            </NavigationMenuLink>
                                        )}
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>

                        {/* Emergency Button */}
                        <Button
                            asChild
                            variant="destructive"
                            className="ml-4 bg-red-600 hover:bg-red-700"
                        >
                            <Link href="/emergency">
                                <Phone className="h-4 w-4 mr-2" />
                                Emergency: 911
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-200">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    {item.children ? (
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="ghost"
                                                    className="w-full justify-start text-gray-700 hover:text-blue-600"
                                                >
                                                    <item.icon className="h-4 w-4 mr-2" />
                                                    {item.title}
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-56">
                                                <DropdownMenuItem asChild>
                                                    <Link href={item.href} className="w-full">
                                                        {item.title} Overview
                                                    </Link>
                                                </DropdownMenuItem>
                                                {item.children.map((child) => (
                                                    <DropdownMenuItem key={child.title} asChild>
                                                        <Link href={child.href} className="w-full">
                                                            {child.title}
                                                        </Link>
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                                url === item.href
                                                    ? 'text-blue-600 bg-blue-50'
                                                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                            }`}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <item.icon className="h-4 w-4 mr-2" />
                                            {item.title}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            
                            {/* Mobile Emergency Button */}
                            <Button
                                asChild
                                variant="destructive"
                                className="w-full mt-4 bg-red-600 hover:bg-red-700"
                            >
                                <Link href="/emergency">
                                    <Phone className="h-4 w-4 mr-2" />
                                    Emergency: 911
                                </Link>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
