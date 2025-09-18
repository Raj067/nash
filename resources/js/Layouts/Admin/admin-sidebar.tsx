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
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/Components/ui/sidebar";
import { TeamSwitcher } from "./team-switcher";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-users";

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
        {
            title: "Users",
            url: "/admin/users",
            icon: Users,
        },
        {
            title: "Resources",
            url: "#",
            icon: BookOpen,
            items: [
                {
                    title: "Strategic Framework & Policies",
                    url: "/admin/resources/strategic-framework",
                },
                {
                    title: "Guidelines",
                    url: "/admin/resources/guidelines",
                },
                {
                    title: "Databases",
                    url: "/admin/resources/databases",
                },
                {
                    title: "SOP & Manuals",
                    url: "/admin/resources/sop-manuals",
                },
            ],
        },
        {
            title: "News & Media",
            url: "#",
            icon: Newspaper,
            items: [
                {
                    title: "Blogs",
                    url: "/admin/news/blogs",
                },
                {
                    title: "Press Releases",
                    url: "/admin/news/press-releases",
                },
                {
                    title: "Speeches",
                    url: "/admin/news/speeches",
                },
                {
                    title: "Photo Gallery",
                    url: "/admin/media/photos",
                },
                {
                    title: "Video Library",
                    url: "/admin/media/videos",
                },
            ],
        },
        {
            title: "Content Management",
            url: "#",
            icon: FileText,
            items: [
                {
                    title: "Pages",
                    url: "/admin/pages",
                },
                {
                    title: "Services",
                    url: "/admin/services",
                },
                {
                    title: "Interventions",
                    url: "/admin/interventions",
                },
                {
                    title: "About Sections",
                    url: "/admin/about",
                },
            ],
        },
        {
            title: "Statistics & Reports",
            url: "#",
            icon: Database,
            items: [
                {
                    title: "HIV Statistics",
                    url: "/admin/statistics/hiv",
                },
                {
                    title: "Program Reports",
                    url: "/admin/reports",
                },
                {
                    title: "Data Analytics",
                    url: "/admin/analytics",
                },
                {
                    title: "Export Data",
                    url: "/admin/export",
                },
            ],
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "General Settings",
                    url: "/admin/settings/general",
                },
                {
                    title: "User Management",
                    url: "/admin/settings/users",
                },
                {
                    title: "System Configuration",
                    url: "/admin/settings/system",
                },
                {
                    title: "Backup & Security",
                    url: "/admin/settings/backup",
                },
            ],
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                {/* <NavProjects projects={data.projects} /> */}
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            {/* <SidebarRail /> */}
        </Sidebar>
    );
}
