// Type Imports
import type { ChildrenType } from '@/@core/types'

// Context Imports
import { VerticalNavProvider } from '../@menu-package/contexts/verticalNavContext'
import { SettingsProvider } from '../@core/contexts/settingsContext'

const Providers = ({ children }: ChildrenType) => {
  return (
    <VerticalNavProvider>
      <SettingsProvider>{children}</SettingsProvider>
    </VerticalNavProvider>
  )
}

export default Providers
