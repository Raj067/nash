import React from "react";
import { Head } from "@inertiajs/react";

interface SeoMeta {
    title: string;
    description: string;
    keywords: string;
    image: string;
    url: string;
    type: string;
    site_name: string;
    locale: string;
    author: string;
    robots: string;
    canonical: string;
}

interface StructuredData {
    organization?: object;
    website?: object;
    article?: object;
    document?: object;
    faq?: object;
    breadcrumb?: object;
}

interface SeoHeadProps {
    meta: SeoMeta;
    structuredData?: StructuredData;
    additionalMeta?: Array<{
        name?: string;
        property?: string;
        content: string;
    }>;
}

export default function SeoHead({ meta, structuredData, additionalMeta }: SeoHeadProps) {
    return (
        <Head>
            {/* Basic Meta Tags */}
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />
            <meta name="author" content={meta.author} />
            <meta name="robots" content={meta.robots} />
            <link rel="canonical" href={meta.canonical} />

            {/* Open Graph Meta Tags */}
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:image" content={meta.image} />
            <meta property="og:url" content={meta.url} />
            <meta property="og:type" content={meta.type} />
            <meta property="og:site_name" content={meta.site_name} />
            <meta property="og:locale" content={meta.locale} />

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={meta.title} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={meta.image} />
            <meta name="twitter:site" content="@nashcop_tz" />
            <meta name="twitter:creator" content="@nashcop_tz" />

            {/* Additional Meta Tags */}
            <meta name="theme-color" content="#1e40af" />
            <meta name="msapplication-TileColor" content="#1e40af" />
            <meta name="application-name" content="NASHCOP Tanzania" />
            <meta name="apple-mobile-web-app-title" content="NASHCOP" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="format-detection" content="telephone=no" />

            {/* Geo Tags for Tanzania */}
            <meta name="geo.region" content="TZ" />
            <meta name="geo.country" content="Tanzania" />
            <meta name="geo.placename" content="Dar es Salaam" />
            <meta name="ICBM" content="-6.7924,39.2083" />

            {/* Language and Content Tags */}
            <meta httpEquiv="content-language" content="en" />
            <meta name="language" content="English" />
            <meta name="coverage" content="Worldwide" />
            <meta name="distribution" content="Global" />
            <meta name="rating" content="General" />

            {/* Additional Custom Meta Tags */}
            {additionalMeta?.map((meta, index) => (
                <meta
                    key={index}
                    {...(meta.name ? { name: meta.name } : {})}
                    {...(meta.property ? { property: meta.property } : {})}
                    content={meta.content}
                />
            ))}

            {/* Structured Data (JSON-LD) */}
            {structuredData?.organization && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData.organization),
                    }}
                />
            )}

            {structuredData?.website && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData.website),
                    }}
                />
            )}

            {structuredData?.article && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData.article),
                    }}
                />
            )}

            {structuredData?.document && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData.document),
                    }}
                />
            )}

            {structuredData?.faq && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData.faq),
                    }}
                />
            )}

            {structuredData?.breadcrumb && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData.breadcrumb),
                    }}
                />
            )}
        </Head>
    );
}
