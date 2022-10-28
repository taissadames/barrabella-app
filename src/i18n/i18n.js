import i18n from "i18next"
import {initReactI18next} from "react-i18next"

import enJson from './translations/en.json'
import esJson from './translations/es.json'
import ptJson from './translations/pt.json'

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: enJson,
    es: esJson,
    pt: ptJson,
  },
})

export default i18n;