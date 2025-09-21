"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";
import { usePage } from "@inertiajs/react";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/Components/ui/collapsible";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/Components/ui/sidebar";
import { Link } from "@inertiajs/react";
import { cn } from "@/lib/utils";

export function NavMain({
    items,
}: {
    items: {
        title: string;
        url: string;
        icon?: LucideIcon;
        isActive?: boolean;
        badge?: string | number;
        items?: {
            title: string;
            url: string;
            isActive?: boolean;
        }[];
    }[];
}) {
    const { url } = usePage();

    const isActiveLink = (itemUrl: string) => {
        // Handle exact matches for dashboard
        if (itemUrl === "/dashboard" && url === "/dashboard") {
            return true;
        }

        // Handle admin routes
        if (itemUrl.startsWith("/admin/") && url.startsWith("/admin/")) {
            const itemPath = itemUrl.replace("/admin/", "");
            const currentPath = url.replace("/admin/", "");

            // Extract the base path (first segment)
            const itemBase = itemPath.split("/")[0];
            const currentBase = currentPath.split("/")[0];

            return itemBase === currentBase;
        }

        return url === itemUrl;
    };

    return (
        <SidebarGroup>
            <SidebarGroupLabel className="text-xs font-medium text-sidebar-foreground/70 uppercase tracking-wider">
                Navigation
            </SidebarGroupLabel>
            <SidebarMenu className="space-y-1">
                {items.map((item) => {
                    const isActive = isActiveLink(item.url);

                    return (
                        <SidebarMenuItem key={item.title}>
                            {item.items ? (
                                <Collapsible defaultOpen={isActive}>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton
                                            tooltip={item.title}
                                            className={cn(
                                                "w-full justify-between hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors",
                                                isActive &&
                                                    "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                                            )}
                                        >
                                            <div className="flex items-center gap-2">
                                                {item.icon && (
                                                    <item.icon
                                                        className={cn(
                                                            "h-4 w-4 shrink-0",
                                                            isActive
                                                                ? "text-sidebar-primary-foreground"
                                                                : "text-sidebar-foreground/70"
                                                        )}
                                                    />
                                                )}
                                                <span className="truncate">
                                                    {item.title}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                {item.badge && (
                                                    <span
                                                        className={cn(
                                                            "px-1.5 py-0.5 text-xs rounded-full font-medium",
                                                            isActive
                                                                ? "bg-sidebar-primary-foreground/20 text-sidebar-primary-foreground"
                                                                : "bg-sidebar-accent text-sidebar-accent-foreground"
                                                        )}
                                                    >
                                                        {item.badge}
                                                    </span>
                                                )}
                                                <ChevronRight className="h-3 w-3 transition-transform group-data-[state=open]:rotate-90" />
                                            </div>
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub className="ml-4 border-l border-sidebar-border">
                                            {item.items.map((subItem) => {
                                                const isSubActive =
                                                    isActiveLink(subItem.url);
                                                return (
                                                    <SidebarMenuSubItem
                                                        key={subItem.title}
                                                    >
                                                        <SidebarMenuSubButton
                                                            asChild
                                                            className={cn(
                                                                "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors",
                                                                isSubActive &&
                                                                    "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                                                            )}
                                                        >
                                                            <Link
                                                                href={
                                                                    subItem.url
                                                                }
                                                            >
                                                                <span className="truncate">
                                                                    {
                                                                        subItem.title
                                                                    }
                                                                </span>
                                                            </Link>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                );
                                            })}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </Collapsible>
                            ) : (
                                <SidebarMenuButton
                                    tooltip={item.title}
                                    asChild
                                    className={cn(
                                        "w-full hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors",
                                        isActive &&
                                            "bg-sidebar-primary text-sidebar-primary-foreground font-medium shadow-sm"
                                    )}
                                >
                                    <Link
                                        href={item.url}
                                        className="flex items-center gap-2"
                                    >
                                        {item.icon && (
                                            <item.icon
                                                className={cn(
                                                    "h-4 w-4 shrink-0",
                                                    isActive
                                                        ? "text-sidebar-primary-foreground"
                                                        : "text-sidebar-foreground/70"
                                                )}
                                            />
                                        )}
                                        <span className="truncate">
                                            {item.title}
                                        </span>
                                        {item.badge && (
                                            <span
                                                className={cn(
                                                    "ml-auto px-1.5 py-0.5 text-xs rounded-full font-medium",
                                                    isActive
                                                        ? "bg-sidebar-primary-foreground/20 text-sidebar-primary-foreground"
                                                        : "bg-sidebar-accent text-sidebar-accent-foreground"
                                                )}
                                            >
                                                {item.badge}
                                            </span>
                                        )}
                                    </Link>
                                </SidebarMenuButton>
                            )}
                        </SidebarMenuItem>
                    );
                })}
            </SidebarMenu>
        </SidebarGroup>
    );
}
