import React from "react";
import { Head } from "@inertiajs/react";

interface GoogleAnalyticsProps {
    trackingId?: string;
    debug?: boolean;
}

export default function GoogleAnalytics({ 
    trackingId = "G-YGTFBTY44B", // Your actual GA4 tracking ID
    debug = false 
}: GoogleAnalyticsProps) {
    if (!trackingId) {
        if (debug) {
            console.warn("Google Analytics tracking ID not configured");
        }
        return null;
    }

    return (
        <Head>
            {/* Google tag (gtag.js) */}
            <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${trackingId}', {
                            page_title: document.title,
                            page_location: window.location.href,
                            send_page_view: true,
                            custom_map: {
                                'custom_parameter_1': 'organization_type',
                                'custom_parameter_2': 'content_category'
                            }
                        });
                        
                        // Enhanced ecommerce for document downloads
                        function trackDownload(documentTitle, documentType, documentCategory) {
                            gtag('event', 'file_download', {
                                'file_name': documentTitle,
                                'file_extension': documentType,
                                'content_category': documentCategory,
                                'custom_parameter_1': 'government_health',
                                'custom_parameter_2': documentCategory
                            });
                        }
                        
                        // Track search queries
                        function trackSearch(searchTerm, searchCategory) {
                            gtag('event', 'search', {
                                'search_term': searchTerm,
                                'content_category': searchCategory || 'general'
                            });
                        }
                        
                        // Track form submissions
                        function trackFormSubmission(formName, formCategory) {
                            gtag('event', 'form_submit', {
                                'form_name': formName,
                                'content_category': formCategory || 'contact'
                            });
                        }
                        
                        // Track video plays
                        function trackVideoPlay(videoTitle, videoCategory) {
                            gtag('event', 'video_play', {
                                'video_title': videoTitle,
                                'content_category': videoCategory || 'education'
                            });
                        }
                        
                        // Track scroll depth
                        let scrollTracked = false;
                        window.addEventListener('scroll', function() {
                            if (!scrollTracked && (window.scrollY / document.body.scrollHeight) > 0.75) {
                                gtag('event', 'scroll', {
                                    'event_category': 'engagement',
                                    'event_label': '75_percent'
                                });
                                scrollTracked = true;
                            }
                        });
                        
                        // Make tracking functions available globally
                        window.trackDownload = trackDownload;
                        window.trackSearch = trackSearch;
                        window.trackFormSubmission = trackFormSubmission;
                        window.trackVideoPlay = trackVideoPlay;
                    `,
                }}
            />
        </Head>
    );
}

// Hook for tracking events
export function useGoogleAnalytics() {
    const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', eventName, parameters);
        }
    };

    const trackPageView = (pageTitle: string, pagePath: string) => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('config', 'GA_TRACKING_ID', {
                page_title: pageTitle,
                page_path: pagePath,
            });
        }
    };

    const trackDownload = (documentTitle: string, documentType: string, documentCategory: string) => {
        if (typeof window !== 'undefined' && (window as any).trackDownload) {
            (window as any).trackDownload(documentTitle, documentType, documentCategory);
        }
    };

    const trackSearch = (searchTerm: string, searchCategory?: string) => {
        if (typeof window !== 'undefined' && (window as any).trackSearch) {
            (window as any).trackSearch(searchTerm, searchCategory);
        }
    };

    const trackFormSubmission = (formName: string, formCategory?: string) => {
        if (typeof window !== 'undefined' && (window as any).trackFormSubmission) {
            (window as any).trackFormSubmission(formName, formCategory);
        }
    };

    const trackVideoPlay = (videoTitle: string, videoCategory?: string) => {
        if (typeof window !== 'undefined' && (window as any).trackVideoPlay) {
            (window as any).trackVideoPlay(videoTitle, videoCategory);
        }
    };

    return {
        trackEvent,
        trackPageView,
        trackDownload,
        trackSearch,
        trackFormSubmission,
        trackVideoPlay,
    };
}

// Extend window interface for TypeScript
declare global {
    interface Window {
        gtag: (...args: any[]) => void;
        dataLayer: any[];
        trackDownload: (title: string, type: string, category: string) => void;
        trackSearch: (term: string, category?: string) => void;
        trackFormSubmission: (name: string, category?: string) => void;
        trackVideoPlay: (title: string, category?: string) => void;
    }
}
