import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['pt-BR', 'en-US', 'es', 'fr', 'de', 'it'],
    fallbackLng: 'pt-BR',
    detection: {
      order: ['navigator', 'querystring'],
      lookupQuerystring: 'lang',
      caches: ['localStorage', 'cookie']
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;
