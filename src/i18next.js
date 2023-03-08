import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import english from './Translate/english.json'
import Danish from './Translate/Danish/Danish.json'
i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: english
    },
    de: {
      translation: Danish
    },
  },
  lng: "en",
});
export default i18next;
