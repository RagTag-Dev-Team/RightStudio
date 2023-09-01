'use client'

// Next Imports
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Config Imports
import { i18n } from '@configs/i18n'

const Translation = () => {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')

    segments[1] = locale

    return segments.join('/')
  }

  return (
    <div className='flex'>
      <ul>
        {i18n.locales.map(locale => {
          return (
            <li key={locale}>
              <Link href={redirectedPathName(locale)}>{locale}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Translation
