// Type Imports
import type { ChildrenType } from '@/@core/types'

// Context Imports
import { VerticalNavProvider } from '../@menu-package/contexts/verticalNavContext'
import { SettingsProvider } from '../@core/contexts/settingsContext'
import ThemeProvider from '../components/theme'

const Providers = ({ children }: ChildrenType) => {
  return (
    <VerticalNavProvider>
      <SettingsProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </SettingsProvider>
    </VerticalNavProvider>
  )
}

export default Providers
