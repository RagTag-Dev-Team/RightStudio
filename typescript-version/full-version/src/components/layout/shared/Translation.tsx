'use client'

// React Imports
import { useCallback, useEffect } from 'react'

// Third-party Imports
import { useCookie } from 'react-use'
import { useTranslation } from 'react-i18next'

// Data Imports
import { langDirection } from '../../../data/translation/langDirection'

const Translation = () => {
  // Hooks
  const { i18n } = useTranslation()
  const [value, updateCookie] = useCookie('lang')

  const direction = langDirection[i18n.language]

  const handleLangItemClick = useCallback(
    async (language: 'en' | 'fr' | 'ar'): Promise<void> => {
      await i18n.changeLanguage(language)
    },
    [i18n]
  )

  // Change html `lang` attribute when changing locale
  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language)
    document.documentElement.setAttribute('dir', direction || 'ltr')
    updateCookie(i18n.language)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language])

  return (
    <div className='flex'>
      <a onClick={() => handleLangItemClick('en')}>English</a>
      <a onClick={() => handleLangItemClick('fr')}>French</a>
      <a onClick={() => handleLangItemClick('ar')}>Arabic</a>
    </div>
  )
}

export default Translation
