// Third-party Imports
import 'react-toastify/dist/ReactToastify.css'

// Type Imports
import type { ChildrenType } from '@core/types'
import type { Settings } from '@core/contexts/settingsContext'

// Context Imports
import { NextAuthProvider } from '@/contexts/nextAuthProvider'
import { VerticalNavProvider } from '@menu-package/contexts/verticalNavContext'
import { SettingsProvider } from '@core/contexts/settingsContext'
import ThemeProvider from '@components/theme'

type Props = ChildrenType & {
  settingsCookie: Settings
}

const Providers = (props: Props) => {
  // Props
  const { children, settingsCookie } = props

  return (
    <NextAuthProvider basePath={process.env.BASEPATH}>
      <VerticalNavProvider>
        <SettingsProvider settingsCookie={settingsCookie}>
          <ThemeProvider>{children}</ThemeProvider>
        </SettingsProvider>
      </VerticalNavProvider>
    </NextAuthProvider>
  )
}

export default Providers
