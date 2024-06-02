import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import dataEn from "./locale/En.json"
import dataAr from "./locale/Ar.json"
const resources = {
    en: {
        translation: dataEn
    },
    ar: {
        translation: dataAr
    }
};
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false 
        }
    });

export default i18n;