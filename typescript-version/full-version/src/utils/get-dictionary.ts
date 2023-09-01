// Config Imports
import type { Locale } from '@configs/i18n'

import en from '@/data/translation/dictionaries/en.json'
import fr from '@/data/translation/dictionaries/fr.json'
import ar from '@/data/translation/dictionaries/ar.json'

// We enumerate all dictionaries here for better linting and typescript support
const dictionaries = { en, fr, ar }

export const getDictionary = (locale: Locale) => dictionaries[locale] ?? dictionaries.en
