import { ReactNode } from "react";
import { usePage } from "@inertiajs/react";
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
import { Shield } from "lucide-react";

interface AdminLayoutProps {
    children: ReactNode;
    header?: ReactNode;
    breadcrumbs?: Array<{
        label: string;
        href?: string;
    }>;
}

export default function AdminLayout({
    children,
    header,
    breadcrumbs,
}: AdminLayoutProps) {
    const { url } = usePage();

    // Generate breadcrumbs from URL if not provided
    const defaultBreadcrumbs = breadcrumbs || [
        { label: "Admin", href: "/dashboard" },
        { label: "Dashboard" },
    ];

    // Get current page title from URL or header
    const getPageTitle = () => {
        if (header) return header;

        const pathSegments = url.split("/").filter(Boolean);
        const lastSegment = pathSegments[pathSegments.length - 1];

        if (!lastSegment || lastSegment === "dashboard") return "Dashboard";

        return lastSegment
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
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

                        {/* NACP Branding */}
                        <div className="flex items-center gap-2 mr-4">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <Shield className="w-4 h-4 text-white" />
                            </div>
                            <span className="font-semibold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                NACP Admin
                            </span>
                        </div>

                        {/* Breadcrumbs */}
                        <Breadcrumb>
                            <BreadcrumbList>
                                {defaultBreadcrumbs.map((crumb, index) => (
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
                                ))}
                            </BreadcrumbList>
                        </Breadcrumb>

                        {/* Page Title */}
                        <div className="ml-auto">
                            <h1 className="text-xl font-semibold text-foreground">
                                {getPageTitle()}
                            </h1>
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
