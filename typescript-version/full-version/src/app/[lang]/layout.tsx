// Next Imports
import { Inter } from 'next/font/google'

// Third-party Imports
import classnames from 'classnames'
import 'react-perfect-scrollbar/dist/css/styles.css'

// Type Imports
import type { ChildrenType } from '@core/types'

// Component Imports
import type { Locale } from '@configs/i18n'

// Util Imports
import { getDirection } from '@/utils/get-direction'

// Style Imports
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Master Next.js Framework Independent ',
  description: 'Master Next.js Framework Independent'
}

const RootLayout = ({ children, params }: ChildrenType & { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)

  return (
    <html lang={params.lang} dir={direction} className='flex is-full min-bs-full'>
      <body className={classnames(inter.className, 'flex is-full min-bs-full flex-auto flex-col')}>{children}</body>
    </html>
  )
}

export default RootLayout
