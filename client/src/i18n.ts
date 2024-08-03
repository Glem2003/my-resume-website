import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import {
    en,
    zh_TW
} from './locales';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: { translation: en },
            zh_TW: { translation: zh_TW }
        },
    });

export default i18n;