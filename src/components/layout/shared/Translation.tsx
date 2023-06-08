'use client'

// React Imports
import { useCallback, useEffect } from 'react'

// Third-party Imports
import { useTranslation } from 'react-i18next'

const Translation = () => {
  // Hooks
  const { i18n } = useTranslation()

  const handleLangItemClick = useCallback(
    async (language: 'en' | 'fr' | 'ar'): Promise<void> => {
      await i18n.changeLanguage(language)
    },
    [i18n]
  )

  // Change html `lang` attribute when changing locale
  useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language)
    document.documentElement.setAttribute('dir', i18n.language === 'ar' ? 'rtl' : 'ltr')
  }, [i18n.language])

  return (
    <div style={{ marginInlineEnd: '10px', display: 'flex' }}>
      <a onClick={() => handleLangItemClick('en')}>English</a>
      <a onClick={() => handleLangItemClick('fr')}>French</a>
      <a onClick={() => handleLangItemClick('ar')}>Arabic</a>
    </div>
  )
}

export default Translation
