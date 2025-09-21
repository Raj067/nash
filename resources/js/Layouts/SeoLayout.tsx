import React from "react";
import { usePage } from "@inertiajs/react";
import SeoHead from "@/Components/SEO/SeoHead";
import Breadcrumb, { useBreadcrumbStructuredData } from "@/Components/SEO/Breadcrumb";

interface SeoLayoutProps {
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
}

export default function SeoLayout({ 
    children, 
    breadcrumbs = [], 
    additionalMeta = [],
    className = ""
}: SeoLayoutProps) {
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
            {seoData && (
                <SeoHead
                    meta={seoData.meta}
                    structuredData={structuredData}
                    additionalMeta={additionalMeta}
                />
            )}
            
            <div className={className}>
                {breadcrumbs.length > 0 && (
                    <div className="bg-gray-50 border-b">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                            <Breadcrumb items={breadcrumbs} />
                        </div>
                    </div>
                )}
                
                {children}
            </div>
        </>
    );
}
