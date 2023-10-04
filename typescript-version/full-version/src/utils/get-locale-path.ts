// Type Imports
import type { Locale } from '@configs/i18n'

export const getLocalePath = (pathName: string, locale: Locale) => {
  if (!pathName) return '/'
  const segments = pathName.split('/')

  segments[1] = locale

  return segments.join('/')
}
