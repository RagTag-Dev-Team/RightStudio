'use client'

import { use } from 'i18next'

import { initReactI18next } from 'react-i18next'

import en from '../data/locales/en.json'
import fr from '../data/locales/fr.json'
import ar from '../data/locales/ar.json'

use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    ar: { translation: ar }
  },
  lng: 'en',
  fallbackLng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false
  }
})
