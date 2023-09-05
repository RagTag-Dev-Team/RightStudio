// Type Imports
import type { Locale } from '@configs/i18n'

// Data Imports
import { langDirection } from '@/data/translation/langDirection'

export const getDirection = (lang: Locale = 'en') => {
  const direction = langDirection[lang]

  return direction
}
