import { ReactNode } from "react";
import { usePage, Link, router } from "@inertiajs/react";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/Components/ui/sidebar";
import { AppSidebar } from "./Admin/admin-sidebar";
import { Separator } from "@/Components/ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Button } from "@/Components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Shield, User, Settings, LogOut, ChevronDown } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface AdminLayoutProps {
    children: ReactNode;
    header?: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function AdminLayout({
    children,
    header,
    breadcrumbs,
}: AdminLayoutProps) {
    const { url, props } = usePage();
    const auth = props.auth as any;

    // Generate breadcrumbs from URL if not provided
    const generateBreadcrumbs = (): BreadcrumbItem[] => {
        if (breadcrumbs) return breadcrumbs;

        const pathSegments = url.split("/").filter(Boolean);
        const crumbs: BreadcrumbItem[] = [
            { label: "Dashboard", href: "/dashboard" },
        ];

        if (pathSegments.length > 1) {
            // Handle admin routes
            if (pathSegments[0] === "admin") {
                for (let i = 1; i < pathSegments.length; i++) {
                    const segment = pathSegments[i];
                    const isLast = i === pathSegments.length - 1;

                    // Skip numeric IDs and action segments
                    if (
                        /^\d+$/.test(segment) ||
                        ["create", "edit"].includes(segment)
                    ) {
                        continue;
                    }

                    let label = segment
                        .split("-")
                        .map(
                            (word) =>
                                word.charAt(0).toUpperCase() + word.slice(1)
                        )
                        .join(" ");

                    // Custom labels for specific routes
                    const routeLabels: { [key: string]: string } = {
                        users: "User Management",
                        feedback: "Feedback Management",
                        blogs: "Blog Management",
                        documents: "Document Management",
                        faqs: "FAQ Management",
                        videos: "Video Management",
                        "newsletter-subscribers": "Newsletter Subscribers",
                    };

                    if (routeLabels[segment]) {
                        label = routeLabels[segment];
                    }

                    const href = isLast
                        ? undefined
                        : `/admin/${pathSegments.slice(1, i + 1).join("/")}`;
                    crumbs.push({ label, href });
                }

                // Add action-specific breadcrumbs
                if (pathSegments.includes("create")) {
                    crumbs.push({ label: "Create New" });
                } else if (pathSegments.includes("edit")) {
                    crumbs.push({ label: "Edit" });
                } else if (
                    /^\d+$/.test(pathSegments[pathSegments.length - 1])
                ) {
                    crumbs.push({ label: "View Details" });
                }
            }
        }

        return crumbs;
    };

    const currentBreadcrumbs = generateBreadcrumbs();

    const handleLogout = () => {
        router.post("/logout");
    };

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                {/* Sticky Header */}
                <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4 w-full">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />

                        {/* Breadcrumbs */}
                        <Breadcrumb>
                            <BreadcrumbList>
                                {currentBreadcrumbs.map(
                                    (crumb: BreadcrumbItem, index: number) => (
                                        <div
                                            key={index}
                                            className="flex items-center"
                                        >
                                            {index > 0 && (
                                                <BreadcrumbSeparator className="mx-2" />
                                            )}
                                            <BreadcrumbItem>
                                                {crumb.href ? (
                                                    <BreadcrumbLink
                                                        href={crumb.href}
                                                        className="text-muted-foreground hover:text-foreground"
                                                    >
                                                        {crumb.label}
                                                    </BreadcrumbLink>
                                                ) : (
                                                    <BreadcrumbPage className="font-medium">
                                                        {crumb.label}
                                                    </BreadcrumbPage>
                                                )}
                                            </BreadcrumbItem>
                                        </div>
                                    )
                                )}
                            </BreadcrumbList>
                        </Breadcrumb>

                        {/* User Profile Dropdown */}
                        <div className="ml-auto">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="relative h-8 w-8 rounded-full p-0"
                                    >
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage
                                                src={
                                                    auth?.user?.avatar ||
                                                    undefined
                                                }
                                                alt={auth?.user?.name || "User"}
                                            />
                                            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium">
                                                {auth?.user?.name
                                                    ?.charAt(0)
                                                    ?.toUpperCase() || "U"}
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    className="w-56"
                                    align="end"
                                    forceMount
                                >
                                    <DropdownMenuLabel className="font-normal">
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-sm font-medium leading-none">
                                                {auth?.user?.name || "User"}
                                            </p>
                                            <p className="text-xs leading-none text-muted-foreground">
                                                {auth?.user?.email ||
                                                    "user@example.com"}
                                            </p>
                                            {auth?.user?.role && (
                                                <p className="text-xs leading-none text-muted-foreground">
                                                    Role:{" "}
                                                    {auth.user.role
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                        auth.user.role.slice(1)}
                                                </p>
                                            )}
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link
                                            href="/profile"
                                            className="cursor-pointer"
                                        >
                                            <User className="mr-2 h-4 w-4" />
                                            <span>Profile</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link
                                            href="/profile/settings"
                                            className="cursor-pointer"
                                        >
                                            <Settings className="mr-2 h-4 w-4" />
                                            <span>Settings</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        className="cursor-pointer text-red-600 focus:text-red-600"
                                        onClick={handleLogout}
                                    >
                                        <LogOut className="mr-2 h-4 w-4" />
                                        <span>Log out</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <div className="flex flex-1 flex-col gap-4 p-6">
                    <div className="min-h-[calc(100vh-5rem)]">{children}</div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
