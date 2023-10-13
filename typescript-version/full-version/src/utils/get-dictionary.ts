import 'server-only'
import type { Locale } from '@configs/i18n'

const dictionaries = {
  en: () => import('@/data/translation/dictionaries/en.json').then(module => module.default),
  fr: () => import('@/data/translation/dictionaries/fr.json').then(module => module.default),
  ar: () => import('@/data/translation/dictionaries/ar.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
