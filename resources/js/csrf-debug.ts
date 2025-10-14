// CSRF Debug Helper - Remove after fixing the issue
export const debugCSRF = () => {
    console.log('CSRF Debug Info:');
    console.log('Current URL:', window.location.href);
    console.log('Document cookies:', document.cookie);
    
    // Check if CSRF token exists in meta tag
    const csrfMeta = document.querySelector('meta[name="csrf-token"]');
    console.log('CSRF meta tag:', csrfMeta?.getAttribute('content'));
    
    // Check if CSRF token exists in page props (Inertia)
    const pageElement = document.getElementById('app');
    if (pageElement) {
        const pageData = pageElement.getAttribute('data-page');
        if (pageData) {
            try {
                const parsed = JSON.parse(pageData);
                console.log('CSRF token in props:', parsed.props?.csrf_token);
            } catch (e) {
                console.log('Could not parse page data');
            }
        }
    }
};

// Call this in browser console to debug
if (typeof window !== 'undefined') {
    (window as any).debugCSRF = debugCSRF;
}
