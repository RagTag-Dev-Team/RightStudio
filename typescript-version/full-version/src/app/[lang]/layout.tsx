// Next Imports
import { Inter } from 'next/font/google'

// Third-party Imports
import classnames from 'classnames'
import 'react-perfect-scrollbar/dist/css/styles.css'

// Type Imports
import type { ChildrenType } from '@core/types'
import type { Locale } from '@configs/i18n'

// Component Imports
import BuyNowButton from '@components/buy-now-button'

// Config Imports
import { i18n } from '@configs/i18n'

// Style Imports
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Master Next.js Framework Independent ',
  description: 'Master Next.js Framework Independent'
}

const RootLayout = ({ children, params }: ChildrenType & { params: { lang: Locale } }) => {
  const direction = i18n.langDirection[params.lang]

  return (
    <html id='__next' lang={params.lang} dir={direction}>
      <body className={classnames(inter.className, 'flex is-full min-bs-full flex-auto flex-col')}>
        {children}
        <BuyNowButton />
      </body>
    </html>
  )
}

export default RootLayout
