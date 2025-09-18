# Google Translate Integration Guide

## Overview
This document describes the comprehensive Google Translate integration for the NACP website that provides full-page translation capabilities.

## Features
- ✅ Full page translation (not partial)
- ✅ Multiple language support (English, Swahili, French, Arabic, Spanish, Portuguese, Chinese, Hindi, Urdu, German, Italian, Japanese, Korean, Russian)
- ✅ Persistent language preference storage
- ✅ Clean UI without Google Translate branding
- ✅ Multiple fallback methods for translation
- ✅ Loading indicators during translation
- ✅ Automatic retry mechanisms

## Implementation Details

### 1. Google Translate Script Loading
The integration loads the Google Translate script dynamically and initializes it with custom configuration:

```javascript
// Initialize Google Translate
window.googleTranslateElementInit = () => {
    if (window.google?.translate) {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: "en",
                includedLanguages: "en,sw,fr,ar,es,pt,zh,hi,ur,de,it,ja,ko,ru",
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false,
                multilanguagePage: true,
                gaTrack: true,
                gaId: 'UA-XXXXX-X' // Replace with your Google Analytics ID
            },
            "google_translate_element"
        );
    }
};
```

### 2. CSS Customization
Custom CSS hides Google Translate UI elements while preserving functionality:

```css
.goog-te-banner-frame.skiptranslate { 
    display: none !important; 
}
body { 
    top: 0px !important; 
}
.goog-te-balloon-frame { 
    display: none !important; 
}
.goog-te-ftab { 
    display: none !important; 
}
#google_translate_element { 
    display: none !important; 
}
.goog-te-combo { 
    display: none !important; 
}
/* Ensure translated content is visible */
.goog-te-spinner-pos {
    display: none !important;
}
/* Style for translated elements */
.goog-text-highlight {
    background: none !important;
    box-shadow: none !important;
}
/* Hide the Google Translate toolbar */
.goog-te-banner-frame {
    display: none !important;
}
/* Prevent layout shift */
body.goog-te-compat-mode {
    margin-top: 0 !important;
}
```

### 3. Translation Triggering Methods

#### Method 1: Combo Box Approach
```javascript
const translateElement = document.querySelector(".goog-te-combo") as HTMLSelectElement;
if (translateElement) {
    translateElement.value = targetLang;
    translateElement.dispatchEvent(new Event("change"));
    return;
}
```

#### Method 2: URL Hash Method
```javascript
if (targetLang === "en") {
    // Restore original text
    window.location.hash = "";
    window.location.reload();
} else {
    // Set the target language in the URL hash for Google Translate
    window.location.hash = `#googtrans(en|${targetLang})`;
    window.location.reload();
}
```

#### Method 3: iframe Method (Fallback)
```javascript
const translateFrame = document.querySelector('iframe.goog-te-menu-frame');
if (translateFrame) {
    const frameDoc = (translateFrame as HTMLIFrameElement).contentDocument;
    if (frameDoc) {
        const langOption = frameDoc.querySelector(`a[data-value="${targetLang}"]`);
        if (langOption) {
            (langOption as HTMLElement).click();
        }
    }
}
```

### 4. Language Persistence
User language preferences are stored in localStorage:

```javascript
const handleLanguageChange = (lang: "en" | "sw") => {
    setCurrentLanguage(lang);
    localStorage.setItem("nacp_language", lang);
    
    // Show loading indicator
    document.body.style.cursor = 'wait';
    
    // Trigger Google Translate
    triggerGoogleTranslate(lang);
    
    // Remove loading indicator after translation
    setTimeout(() => {
        document.body.style.cursor = 'default';
    }, 2000);
};
```

### 5. Automatic Language Application
On page load, the system automatically applies the saved language preference:

```javascript
useEffect(() => {
    const checkAndApplyLanguage = () => {
        if (currentLanguage === "sw") {
            triggerGoogleTranslate("sw");
        }
    };

    // Check multiple times to ensure Google Translate is ready
    setTimeout(checkAndApplyLanguage, 2000);
    setTimeout(checkAndApplyLanguage, 4000);
    setTimeout(checkAndApplyLanguage, 6000);
}, []);
```

## Supported Languages

| Language | Code | Flag |
|----------|------|------|
| English | en | 🇺🇸 |
| Kiswahili | sw | 🇹🇿 |
| French | fr | 🇫🇷 |
| Arabic | ar | 🇸🇦 |
| Spanish | es | 🇪🇸 |
| Portuguese | pt | 🇵🇹 |
| Chinese | zh | 🇨🇳 |
| Hindi | hi | 🇮🇳 |
| Urdu | ur | 🇵🇰 |
| German | de | 🇩🇪 |
| Italian | it | 🇮🇹 |
| Japanese | ja | 🇯🇵 |
| Korean | ko | 🇰🇷 |
| Russian | ru | 🇷🇺 |

## User Experience Features

### Loading Indicators
- Cursor changes to 'wait' during translation
- Visual feedback for users during language switching

### Error Handling
- Multiple retry attempts if translation fails
- Fallback methods ensure translation works
- Console logging for debugging

### Clean Interface
- No Google Translate branding visible
- Custom language selector in header
- Seamless integration with site design

## Technical Considerations

### Performance
- Script loads asynchronously to avoid blocking page load
- Multiple initialization attempts ensure reliability
- Cleanup on component unmount

### SEO Considerations
- Original page language is English for SEO
- Meta tags remain in original language
- URL structure preserved

### Accessibility
- Language selector is keyboard accessible
- Screen reader friendly
- ARIA labels for language options

## Troubleshooting

### Common Issues

1. **Translation not working immediately**
   - Solution: Multiple retry attempts with delays
   - Google Translate needs time to initialize

2. **Layout shifts during translation**
   - Solution: CSS prevents margin-top changes
   - Hidden elements don't affect layout

3. **Partial translations**
   - Solution: Full page reload ensures complete translation
   - URL hash method forces complete retranslation

### Debugging
Enable console logging to see translation attempts:
```javascript
console.log("Translation not ready yet, will retry...");
```

## Future Enhancements

1. **Additional Languages**: Easy to add more languages to `includedLanguages`
2. **Translation Quality**: Could implement custom translation for key terms
3. **Offline Support**: Could cache translations for offline use
4. **Analytics**: Track language usage patterns
5. **A/B Testing**: Test different translation methods

## Best Practices

1. **Always provide fallbacks** - Multiple methods ensure reliability
2. **Hide Google branding** - Maintain consistent site design
3. **Store preferences** - Remember user language choice
4. **Show loading states** - Provide feedback during translation
5. **Test thoroughly** - Verify translation works across all browsers

## Browser Compatibility
- Chrome: Full support
- Firefox: Full support
- Safari: Full support
- Edge: Full support
- Mobile browsers: Full support

## Security Considerations
- Google Translate script loaded from official CDN
- No sensitive data exposed to translation service
- HTTPS enforced for all translation requests
