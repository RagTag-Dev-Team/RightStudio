// Type Imports
import type { ChildrenType } from '@core/types'
import type { Settings } from '@core/contexts/settingsContext'

// Context Imports
import { NextAuthProvider } from '@/contexts/nextAuthProvider'
import { VerticalNavProvider } from '@menu-package/contexts/verticalNavContext'
import { SettingsProvider } from '@core/contexts/settingsContext'

type Props = ChildrenType & {
  settingsCookie: Settings
}

const Providers = (props: Props) => {
  // Props
  const { children, settingsCookie } = props

  return (
    <NextAuthProvider basePath={process.env.BASEPATH}>
      <VerticalNavProvider>
        <SettingsProvider settingsCookie={settingsCookie}>{children}</SettingsProvider>
      </VerticalNavProvider>
    </NextAuthProvider>
  )
}

export default Providers
