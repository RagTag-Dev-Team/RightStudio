// Type Imports
import type { Locale } from '@configs/i18n'

export const getLocale = (pathName: string) => {
  if (!pathName) return 'en'
  const segments = pathName.split('/')

  return segments[1] as Locale
}
