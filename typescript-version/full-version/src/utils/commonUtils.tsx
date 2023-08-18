// Next Imports
import { cookies } from 'next/headers'

// Data Imports
import { langDirection } from '../data/translation/langDirection'

export const getLanguage = () => {
  const lang = cookies().get('lang')

  return lang
}

export const getDirection = () => {
  const lang = getLanguage()
  const direction = langDirection[lang?.value || 'en']

  return direction
}
