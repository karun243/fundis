import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import fi from './fi.json';

const resources = {
    en: {
        translation: en,
    },
    fi: {
        translation: fi,
    },
};

i18n.use(initReactI18next).init({
    resources,
    // lng: 'fi', // set the default language to be used in the app
    fallbackLng: 'en', // specifies the fallback language if the value in lng is not available
    compatibilityJSON: 'v3',
    interpolation: {
        escapeValue: false // not needed for react!!
    }
});