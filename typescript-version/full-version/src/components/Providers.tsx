// Third-party Imports
import 'react-toastify/dist/ReactToastify.css'

// Type Imports
import type { ChildrenType } from '../@core/types'

// Context Imports
import { NextAuthProvider } from '../contexts/nextAuthProvider'
import { VerticalNavProvider } from '../@menu-package/contexts/verticalNavContext'
import { SettingsProvider } from '../@core/contexts/settingsContext'
import ThemeProvider from '../components/theme'

const Providers = ({ children }: ChildrenType) => {
  return (
    <NextAuthProvider basePath={process.env.BASEPATH}>
      <VerticalNavProvider>
        <SettingsProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </SettingsProvider>
      </VerticalNavProvider>
    </NextAuthProvider>
  )
}

export default Providers
