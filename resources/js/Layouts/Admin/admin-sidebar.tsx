"use client";

import * as React from "react";
import {
    LayoutDashboard,
    Users,
    Settings2,
    BookOpen,
    FileText,
    Database,
    Shield,
    Newspaper,
    MessageSquare,
    Camera,
    Video,
    Mic,
    FolderOpen,
    Heart,
    Activity,
    HelpCircle,
    Mail,
    File,
    PenTool,
    MessageCircle,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/Components/ui/sidebar";
import { NavMain } from "./nav-main";

// NACP Admin Navigation Data
const data = {
    user: {
        name: "NACP Admin",
        email: "admin@nacp.go.tz",
        avatar: "/images/nacp-logo.png",
    },
    teams: [
        {
            name: "NACP Tanzania",
            logo: Heart,
            plan: "Admin Panel",
        },
        {
            name: "HIV/AIDS Control",
            logo: Shield,
            plan: "Management",
        },
        {
            name: "Public Health",
            logo: Activity,
            plan: "System",
        },
    ],
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: LayoutDashboard,
            isActive: true,
        },
        // {
        //     title: "Users",
        //     url: "/admin/users",
        //     icon: Users,
        // },
        {
            title: "FAQs",
            url: "/admin/faqs",
            icon: HelpCircle,
        },
        {
            title: "Videos",
            url: "/admin/videos",
            icon: Video,
        },
        {
            title: "Newsletter",
            url: "/admin/newsletter-subscribers",
            icon: Mail,
        },
        {
            title: "Documents",
            url: "/admin/documents",
            icon: File,
        },
        {
            title: "Blog Posts",
            url: "/admin/blogs",
            icon: PenTool,
        },
        {
            title: "Feedback",
            url: "/admin/feedback",
            icon: MessageCircle,
        },
        {
            title: "Users",
            url: "/admin/users",
            icon: Users,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <img
                                src="/images/nashcop.jpeg"
                                alt="NASHCOP Logo"
                                className="size-8"
                            />
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium">
                                    NASHCOP
                                </span>
                                <span className="truncate text-xs">
                                    Admin Panel
                                </span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            {/* <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter> */}
            {/* <SidebarRail /> */}
        </Sidebar>
    );
}
