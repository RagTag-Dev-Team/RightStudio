// Type Imports
import type { ChildrenType, Direction } from '@core/types'
import type { Settings } from '@core/contexts/settingsContext'

// Context Imports
import { NextAuthProvider } from '@/contexts/nextAuthProvider'
import { VerticalNavProvider } from '@menu-package/contexts/verticalNavContext'
import { SettingsProvider } from '@core/contexts/settingsContext'
import ThemeProvider from '@components/theme'

// Component Imports
import AppReactToastify from '@core/styles/libs/AppReactToastify'

// Config Imports
import themeConfig from '@configs/themeConfig'

type Props = ChildrenType & {
  settingsCookie: Settings
  direction: Direction
}

const Providers = (props: Props) => {
  // Props
  const { children, settingsCookie, direction } = props

  return (
    <NextAuthProvider basePath={process.env.BASEPATH}>
      <VerticalNavProvider>
        <SettingsProvider settingsCookie={settingsCookie}>
          <ThemeProvider direction={direction}>
            {children}
            <AppReactToastify position={themeConfig.toastPosition} hideProgressBar />
          </ThemeProvider>
        </SettingsProvider>
      </VerticalNavProvider>
    </NextAuthProvider>
  )
}

export default Providers
