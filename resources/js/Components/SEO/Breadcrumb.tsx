import React from "react";
import { Link } from "@inertiajs/react";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
    name: string;
    url: string;
    current?: boolean;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
    // Add home as first item if not present
    const breadcrumbItems = items[0]?.name !== "Home" 
        ? [{ name: "Home", url: "/" }, ...items]
        : items;

    return (
        <nav
            className={`flex items-center space-x-1 text-sm text-gray-600 ${className}`}
            aria-label="Breadcrumb"
        >
            <ol className="flex items-center space-x-1">
                {breadcrumbItems.map((item, index) => (
                    <li key={index} className="flex items-center">
                        {index > 0 && (
                            <ChevronRight className="h-4 w-4 text-gray-400 mx-1" />
                        )}
                        
                        {item.current || index === breadcrumbItems.length - 1 ? (
                            <span className="font-medium text-gray-900 flex items-center">
                                {index === 0 && <Home className="h-4 w-4 mr-1" />}
                                {item.name}
                            </span>
                        ) : (
                            <Link
                                href={item.url}
                                className="text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                            >
                                {index === 0 && <Home className="h-4 w-4 mr-1" />}
                                {item.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}

// Hook to generate breadcrumb structured data
export function useBreadcrumbStructuredData(items: BreadcrumbItem[]) {
    const breadcrumbItems = items[0]?.name !== "Home" 
        ? [{ name: "Home", url: "/" }, ...items]
        : items;

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url,
        })),
    };
}
