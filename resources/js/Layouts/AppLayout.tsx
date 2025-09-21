import React from "react";
import { usePage } from "@inertiajs/react";
import SeoHead from "@/Components/SEO/SeoHead";
import GoogleAnalytics from "@/Components/SEO/GoogleAnalytics";
import Breadcrumb, { useBreadcrumbStructuredData } from "@/Components/SEO/Breadcrumb";

interface AppLayoutProps {
    children: React.ReactNode;
    breadcrumbs?: Array<{
        name: string;
        url: string;
        current?: boolean;
    }>;
    additionalMeta?: Array<{
        name?: string;
        property?: string;
        content: string;
    }>;
    className?: string;
    showBreadcrumbs?: boolean;
}

export default function AppLayout({ 
    children, 
    breadcrumbs = [], 
    additionalMeta = [],
    className = "",
    showBreadcrumbs = true
}: AppLayoutProps) {
    const { props } = usePage();
    const seoData = (props as any).seo;

    // Generate breadcrumb structured data if breadcrumbs are provided
    const breadcrumbStructuredData = breadcrumbs.length > 0 
        ? useBreadcrumbStructuredData(breadcrumbs)
        : null;

    // Merge structured data
    const structuredData = {
        ...seoData?.structuredData,
        ...(breadcrumbStructuredData ? { breadcrumb: breadcrumbStructuredData } : {}),
    };

    return (
        <>
            {/* Google Analytics - Load first for better tracking */}
            <GoogleAnalytics trackingId="G-YGTFBTY44B" />
            
            {/* SEO Meta Tags and Structured Data */}
            {seoData && (
                <SeoHead
                    meta={seoData.meta}
                    structuredData={structuredData}
                    additionalMeta={additionalMeta}
                />
            )}
            
            <div className={className}>
                {/* Breadcrumbs */}
                {showBreadcrumbs && breadcrumbs.length > 0 && (
                    <div className="bg-gray-50 border-b">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                            <Breadcrumb items={breadcrumbs} />
                        </div>
                    </div>
                )}
                
                {/* Main Content */}
                {children}
            </div>
        </>
    );
}
