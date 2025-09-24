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

// NASHCOP Admin Navigation Data
const data = {
    navMain: [
        {
            title: "Dashboard",
            url: "/admin/dashboard",
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
        <Sidebar
            collapsible="icon"
            {...props}
            className="border-r border-sidebar-border"
        >
            <SidebarHeader className="border-b border-sidebar-border">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:bg-sidebar-accent/50 transition-colors"
                        >
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg ">
                                <img
                                    src="/images/NASHCOP LOGO.png"
                                    alt="NASHCOP Logo"
                                    className="size-8 rounded"
                                />
                            </div>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold text-sidebar-foreground">
                                    NASHCOP
                                </span>
                                <span className="truncate text-xs text-sidebar-foreground/70">
                                    Admin Panel
                                </span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent className="px-2 py-4">
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter className="border-t border-sidebar-border p-4">
                <div className="flex items-center gap-2 text-xs text-sidebar-foreground/60">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span>System Online</span>
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}
