import { useEffect } from "react";
import { useGoogleAnalytics } from "./GoogleAnalytics";

interface AnalyticsTrackerProps {
    eventName: string;
    eventData?: Record<string, any>;
    triggerOnMount?: boolean;
}

/**
 * Component to track analytics events
 * Usage: <AnalyticsTracker eventName="page_view" eventData={{page: "home"}} triggerOnMount />
 */
export function AnalyticsTracker({ 
    eventName, 
    eventData = {}, 
    triggerOnMount = false 
}: AnalyticsTrackerProps) {
    const { trackEvent } = useGoogleAnalytics();

    useEffect(() => {
        if (triggerOnMount) {
            trackEvent(eventName, eventData);
        }
    }, [eventName, eventData, triggerOnMount, trackEvent]);

    return null; // This component doesn't render anything
}

/**
 * Hook to track document downloads
 */
export function useDocumentTracking() {
    const { trackDownload } = useGoogleAnalytics();

    const trackDocumentDownload = (document: {
        title: string;
        file_type: string;
        category: string;
        id: number;
    }) => {
        trackDownload(document.title, document.file_type, document.category);
        
        // Also track as a custom event
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'document_download', {
                'document_id': document.id,
                'document_title': document.title,
                'document_type': document.file_type,
                'document_category': document.category,
                'content_category': 'resources'
            });
        }
    };

    return { trackDocumentDownload };
}

/**
 * Hook to track blog interactions
 */
export function useBlogTracking() {
    const { trackEvent } = useGoogleAnalytics();

    const trackBlogView = (blog: {
        title: string;
        category: string;
        id: number;
        author: string;
    }) => {
        trackEvent('blog_view', {
            'blog_id': blog.id,
            'blog_title': blog.title,
            'blog_category': blog.category,
            'blog_author': blog.author,
            'content_category': 'news'
        });
    };

    const trackBlogShare = (blog: { title: string; id: number }, platform: string) => {
        trackEvent('share', {
            'method': platform,
            'content_type': 'blog',
            'content_id': blog.id,
            'content_title': blog.title
        });
    };

    return { trackBlogView, trackBlogShare };
}

/**
 * Hook to track search interactions
 */
export function useSearchTracking() {
    const { trackSearch } = useGoogleAnalytics();

    const trackSiteSearch = (query: string, category?: string, resultsCount?: number) => {
        trackSearch(query, category);
        
        // Enhanced search tracking
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'search', {
                'search_term': query,
                'content_category': category || 'general',
                'search_results_count': resultsCount || 0
            });
        }
    };

    return { trackSiteSearch };
}

/**
 * Hook to track form interactions
 */
export function useFormTracking() {
    const { trackFormSubmission } = useGoogleAnalytics();

    const trackFormStart = (formName: string) => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'form_start', {
                'form_name': formName,
                'content_category': 'engagement'
            });
        }
    };

    const trackFormComplete = (formName: string, formCategory?: string) => {
        trackFormSubmission(formName, formCategory);
    };

    const trackFormError = (formName: string, errorField: string) => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'form_error', {
                'form_name': formName,
                'error_field': errorField,
                'content_category': 'engagement'
            });
        }
    };

    return { trackFormStart, trackFormComplete, trackFormError };
}

/**
 * Hook to track video interactions
 */
export function useVideoTracking() {
    const { trackVideoPlay } = useGoogleAnalytics();

    const trackVideoStart = (video: { title: string; category: string; id: number }) => {
        trackVideoPlay(video.title, video.category);
    };

    const trackVideoProgress = (video: { title: string; id: number }, progress: number) => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'video_progress', {
                'video_id': video.id,
                'video_title': video.title,
                'video_progress': progress,
                'content_category': 'education'
            });
        }
    };

    const trackVideoComplete = (video: { title: string; id: number }) => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'video_complete', {
                'video_id': video.id,
                'video_title': video.title,
                'content_category': 'education'
            });
        }
    };

    return { trackVideoStart, trackVideoProgress, trackVideoComplete };
}
