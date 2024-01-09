'use client'

// Next Imports
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Config Imports
import { i18n } from '@configs/i18n'

const getLocalePath = (pathName: string, locale: string) => {
  if (!pathName) return '/'
  const segments = pathName.split('/')

  segments[1] = locale

  return segments.join('/')
}

const LanguageDropdown = () => {
  // Hooks
  const pathName = usePathname()

  return (
    <div className='flex'>
      <ul>
        {i18n.locales.map(locale => {
          return (
            <li key={locale}>
              <Link href={getLocalePath(pathName, locale)}>{locale}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LanguageDropdown
