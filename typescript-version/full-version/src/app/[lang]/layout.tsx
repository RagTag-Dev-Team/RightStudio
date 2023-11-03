// Next Imports
import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'

// Third-party Imports
import classnames from 'classnames'
import 'react-perfect-scrollbar/dist/css/styles.css'

// Type Imports
import type { ChildrenType } from '@core/types'

// Component Imports
import type { Locale } from '@configs/i18n'
import { i18n } from '@configs/i18n'

// Util Imports
import { getDirection } from '@/utils/get-direction'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

// Generated Icon Imports
import '@assets/iconify-icons/generated-icons'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Master Next.js Framework Independent ',
  description: 'Master Next.js Framework Independent'
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

const RootLayout = ({ children, params }: ChildrenType & { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)

  const cookieStore = cookies()

  const settingsCookie = JSON.parse(cookieStore.get('settings')?.value || '{}')
  const colorPrefCookie = cookieStore.get('colorPref')?.value || 'light'

  let mode = 'light'

  if (settingsCookie.mode === 'system') {
    if (colorPrefCookie === 'dark') {
      mode = 'dark'
    }
  } else {
    mode = settingsCookie.mode
  }

  return (
    <html lang={params.lang} dir={direction} className='flex is-full min-bs-full' data-mui-color-scheme={mode}>
      <body className={classnames(inter.className, 'flex is-full min-bs-full flex-auto flex-col')}>{children}</body>
    </html>
  )
}

export default RootLayout
