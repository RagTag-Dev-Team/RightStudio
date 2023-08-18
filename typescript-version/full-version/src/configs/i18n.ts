'use client'

// Next Imports
import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

// Third-party Imports
import { use } from 'i18next'
import { initReactI18next } from 'react-i18next'

// Data Imports
import en from '../data/translation/locales/en.json'
import fr from '../data/translation/locales/fr.json'
import ar from '../data/translation/locales/ar.json'

const Config = ({ lang }: { lang: RequestCookie | undefined }) => {
  use(initReactI18next).init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      ar: { translation: ar }
    },
    lng: lang?.value || 'en',
    fallbackLng: 'en',
    debug: false,
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false
    }
  })

  return null
}

export default Config
