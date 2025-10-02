import { Navigation } from "@/Components/Navigation";
import NASHCOPFooter from "@/Components/nashcop/NASHCOPFooter";
import NASHCOPHeader from "@/Components/nashcop/NASHCOPHeader";
import ElectionBanner from "@/Components/ElectionBanner";
import { Head, Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, ReactNode } from "react";
import GoogleAnalytics from "@/Components/SEO/GoogleAnalytics";
import SeoHead from "@/Components/SEO/SeoHead";

interface PublicLayoutProps {
    title?: string;
    header?: ReactNode;
}

export default function PublicLayout({
    title = "Nash COP",
    header,
    children,
}: PropsWithChildren<PublicLayoutProps>) {
    const { props } = usePage();
    const seoData = (props as any).seo;

    return (
        <div className="bg-background">
            {/* Google Analytics - Load first for better tracking */}
            <GoogleAnalytics trackingId="G-YGTFBTY44B" />
            
            {/* SEO Meta Tags and Structured Data */}
            {seoData ? (
                <SeoHead
                    meta={seoData.meta}
                    structuredData={seoData.structuredData}
                />
            ) : (
                <Head title={title} />
            )}

            <NASHCOPHeader />

            {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main className="flex-1">{children}</main>

            <NASHCOPFooter />
            
            {/* Government Election Banner - Fixed position */}
            <ElectionBanner />
        </div>
    );
}
