'use client'

// Third-party Imports
import { use } from 'i18next'
import { initReactI18next } from 'react-i18next'
import languageDetector from 'i18next-browser-languagedetector'

// Data Imports
import en from '../data/locales/en.json'
import fr from '../data/locales/fr.json'
import ar from '../data/locales/ar.json'

// const lng = localStorageGetItem('i18nextLng', 'en')

use(initReactI18next)
  .use(languageDetector)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      ar: { translation: ar }
    },
    fallbackLng: 'en',
    debug: false,
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false
    }
  })
