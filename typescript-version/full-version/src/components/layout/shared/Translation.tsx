'use client'

// React Imports
import { useCallback } from 'react'

// Third-party Imports
import { useTranslation } from 'react-i18next'
import { useEffectOnce } from 'react-use'

// Type Imports
// import type { Direction } from '../../../@core/types'

// Hook Imports
// import useSettings from '../../../@core/hooks/useSettings'

// const getDirection: { [key: string]: Direction } = {
//   en: 'ltr',
//   fr: 'ltr',
//   ar: 'rtl'
// }

const Translation = () => {
  // Hooks
  const { i18n } = useTranslation()

  // const { saveSettings } = useSettings()

  const handleLangItemClick = useCallback(
    async (language: 'en' | 'fr' | 'ar'): Promise<void> => {
      await i18n.changeLanguage(language)
    },
    [i18n]
  )

  useEffectOnce(() => {
    i18n.changeLanguage(
      localStorage.getItem('i18nextLng') === 'en-GB' ? 'en' : localStorage.getItem('i18nextLng') || 'en'
    )
  })

  // Change html `lang` attribute when changing locale
  /* useEffect(() => {
    document.documentElement.setAttribute('lang', i18n.language)
    saveSettings({ direction: getDirection[i18n.language] })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]) */

  return (
    <div className='flex'>
      <a onClick={() => handleLangItemClick('en')}>English</a>
      <a onClick={() => handleLangItemClick('fr')}>French</a>
      <a onClick={() => handleLangItemClick('ar')}>Arabic</a>
    </div>
  )
}

export default Translation
