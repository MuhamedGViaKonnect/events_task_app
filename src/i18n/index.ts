// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ar from './ar.json';
import { store } from '@store/index';

// load diffrences language 
const savedLanguage = store.getState().setting.language;
const resources = {
  en: {translation: en },
  ar: { translation: ar },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: savedLanguage,
  fallbackLng: 'en',
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
