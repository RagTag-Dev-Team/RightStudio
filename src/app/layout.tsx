// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

import { SettingsProvider } from '@core/contexts/settingsContext'

import { getMode, getSettingsFromCookie } from '@core/utils/serverHelpers'

// Type Imports
import type { ChildrenType } from '@core/types'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

export const metadata = {
  title: 'Vuexy - MUI Next.js Admin Dashboard Template',
  description:
    'Vuexy - MUI Next.js Admin Dashboard Template - is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.'
}

const RootLayout = ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'
  const mode = getMode()
  const settingsCookie = getSettingsFromCookie()

  return (
    <html id='__next' lang='en' dir={direction}>
      <body className='flex is-full min-bs-full flex-auto flex-col'>
        <SettingsProvider settingsCookie={settingsCookie} mode={mode}>
          {children}
        </SettingsProvider>
      </body>
    </html>
  )
}

export default RootLayout
