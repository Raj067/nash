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
