import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import tr from './locales/tr.json';
import en from './locales/en.json';

/**
 * i18n Configuration for MPDevelopers Portfolio
 * 
 * This configuration supports Turkish (tr) and English (en) languages.
 * Turkish is set as the default language (fallbackLng).
 * 
 * Language detection order:
 * 1. localStorage - User's previously selected language
 * 2. navigator - Browser's language preference
 * 3. htmlTag - HTML lang attribute
 * 
 * To add a new language:
 * 1. Create a new JSON file in src/locales/ (e.g., fr.json for French)
 * 2. Import it above
 * 3. Add it to the resources object
 * 4. Add it to supportedLngs array
 */

const resources = {
  tr: {
    translation: tr
  },
  en: {
    translation: en
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'tr', // Default language is Turkish
    debug: false, // Set to true for debugging
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false, // React already does escaping
    },

    // Language switching configuration
    supportedLngs: ['tr', 'en'],
    nonExplicitSupportedLngs: false,
  });

export default i18n;
