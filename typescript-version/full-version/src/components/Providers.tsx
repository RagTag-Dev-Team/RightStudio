// Type Imports
import type { ChildrenType } from '@core/types'

// Context Imports
import { NextAuthProvider } from '@/contexts/nextAuthProvider'
import { VerticalNavProvider } from '@menu-package/contexts/verticalNavContext'
import { SettingsProvider } from '@core/contexts/settingsContext'

// Util Imports
import { getMode, getSettingsFromCookie } from '@core/server/actions'

type Props = ChildrenType

const Providers = (props: Props) => {
  // Props
  const { children } = props

  const mode = getMode()
  const settingsCookie = getSettingsFromCookie()

  return (
    <NextAuthProvider basePath={process.env.BASEPATH}>
      <VerticalNavProvider>
        <SettingsProvider settingsCookie={settingsCookie} mode={mode}>
          {children}
        </SettingsProvider>
      </VerticalNavProvider>
    </NextAuthProvider>
  )
}

export default Providers
