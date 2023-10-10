// Third-party Imports
import { ToastContainer } from 'react-toastify'

// Type Imports
import type { ChildrenType } from '@core/types'
import type { Settings } from '@core/contexts/settingsContext'

// Context Imports
import { NextAuthProvider } from '@/contexts/nextAuthProvider'
import { VerticalNavProvider } from '@menu-package/contexts/verticalNavContext'
import { SettingsProvider } from '@core/contexts/settingsContext'
import ThemeProvider from '@components/theme'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Styled Component Imports
import ToastifyWrapper from '@core/styles/libs/react-toastify'

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
          <ThemeProvider>
            {children}
            <ToastifyWrapper>
              <ToastContainer position={themeConfig.toastPosition} hideProgressBar />
            </ToastifyWrapper>
          </ThemeProvider>
        </SettingsProvider>
      </VerticalNavProvider>
    </NextAuthProvider>
  )
}

export default Providers
