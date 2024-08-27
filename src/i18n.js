import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import tłumaczeń
import translationEN from './locales/en/translation.json';
import translationPL from './locales/pl/translation.json';
import translationDE from './locales/de/translation.json';
import translationUK from './locales/uk/translation.json'; // Import ukraińskich tłumaczeń

const resources = {
  en: {
    translation: translationEN
  },
  pl: {
    translation: translationPL
  },
  de: {
    translation: translationDE
  },
  uk: {
    translation: translationUK // Dodaj ukraińskie tłumaczenia
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pl', // język domyślny
    interpolation: {
      escapeValue: false // React już domyślnie chroni przed XSS
    }
  });

export default i18n;
