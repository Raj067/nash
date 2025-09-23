import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enCommon from './locales/en/common.json';
import swCommon from './locales/sw/common.json';

const resources = {
  en: {
    common: enCommon,
  },
  sw: {
    common: swCommon,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: typeof window !== 'undefined' 
      ? (localStorage.getItem('nacp_language') as string) || 'sw' 
      : 'sw', // Default to Swahili
    fallbackLng: 'en',
    debug: false,
    
    ns: ['common'],
    defaultNS: 'common',
    
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    
    react: {
      useSuspense: false,
    },
  });

// Listen for language changes and sync with localStorage
i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('nacp_language', lng);
    document.documentElement.lang = lng;
  }
});

export default i18n;
