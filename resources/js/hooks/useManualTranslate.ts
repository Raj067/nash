import { useEffect } from 'react';

export const useManualTranslate = (dependencies: any[] = []) => {
    useEffect(() => {
        const triggerTranslation = () => {
            const currentLang = localStorage.getItem("nacp_language") || "sw";
            
            if (currentLang === "sw") {
                // Multiple aggressive approaches to force translation
                setTimeout(() => {
                    // Method 1: Toggle Google Translate
                    const combo = document.querySelector(".goog-te-combo") as HTMLSelectElement;
                    if (combo) {
                        combo.value = "en";
                        combo.dispatchEvent(new Event("change"));
                        
                        setTimeout(() => {
                            combo.value = "sw";
                            combo.dispatchEvent(new Event("change"));
                        }, 800);
                    }
                    
                    // Method 2: Try to trigger Google Translate API directly
                    if (window.google?.translate) {
                        try {
                            // Force Google Translate to re-initialize
                            setTimeout(() => {
                                const translateElement = document.getElementById('google_translate_element');
                                if (translateElement && window.google?.translate) {
                                    // Clear and re-create the translate element
                                    translateElement.innerHTML = '';
                                    new window.google.translate.TranslateElement(
                                        { pageLanguage: "en", includedLanguages: "en,sw" },
                                        "google_translate_element"
                                    );
                                    
                                    // Then trigger translation again
                                    setTimeout(() => {
                                        const newCombo = document.querySelector(".goog-te-combo") as HTMLSelectElement;
                                        if (newCombo) {
                                            newCombo.value = "sw";
                                            newCombo.dispatchEvent(new Event("change"));
                                        }
                                    }, 1000);
                                }
                            }, 1500);
                        } catch (error) {
                            console.log('Google Translate re-init failed:', error);
                        }
                    }
                    
                    // Method 3: Add translate class to elements that need translation
                    setTimeout(() => {
                        const elementsToTranslate = document.querySelectorAll('[data-translate="true"]');
                        elementsToTranslate.forEach(element => {
                            element.classList.add('translate');
                        });
                    }, 2000);
                }, 1000);
            }
        };

        triggerTranslation();
    }, dependencies);
};
