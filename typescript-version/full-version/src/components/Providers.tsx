// Type Imports
import type { ChildrenType } from '../@core/types'

// Context Imports
import { NextAuthProvider } from '../contexts/nextAuthProvider'
import { VerticalNavProvider } from '../@menu-package/contexts/verticalNavContext'
import { SettingsProvider } from '../@core/contexts/settingsContext'

const Providers = ({ children }: ChildrenType) => {
  return (
    <NextAuthProvider basePath={process.env.BASEPATH}>
      <VerticalNavProvider>
        <SettingsProvider>{children}</SettingsProvider>
      </VerticalNavProvider>
    </NextAuthProvider>
  )
}

export default Providers
