// CSRF Token Utility
export const getCsrfToken = (): string | null => {
    // Try multiple sources for CSRF token
    
    // 1. From meta tag (most reliable)
    const metaTag = document.querySelector('meta[name="csrf-token"]');
    if (metaTag) {
        const token = metaTag.getAttribute('content');
        if (token) return token;
    }
    
    // 2. From cookie (XSRF-TOKEN)
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'XSRF-TOKEN' && value) {
            return decodeURIComponent(value);
        }
    }
    
    return null;
};

export const addCsrfToFormData = (formData: any): any => {
    const token = getCsrfToken();
    if (token) {
        return {
            ...formData,
            _token: token
        };
    }
    return formData;
};
