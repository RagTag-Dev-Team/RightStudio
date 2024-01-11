// Next Imports
import { cookies } from 'next/headers'

// Type Imports
import type { ChildrenType } from '@core/types'

// Context Imports
import { VerticalNavProvider } from '@menu/contexts/verticalNavContext'
import { SettingsProvider } from '@core/contexts/settingsContext'

const Layout = ({ children }: ChildrenType) => {
  const cookieStore = cookies()

  const settingsCookie = JSON.parse(cookieStore.get('settings')?.value || '{}')

  return (
    <VerticalNavProvider>
      <SettingsProvider settingsCookie={settingsCookie}>{children}</SettingsProvider>
    </VerticalNavProvider>
  )
}

export default Layout
