// Next Imports
import { cookies } from 'next/headers'

// Type Imports
import type { ChildrenType } from '@menu-package/types'

// Component Imports
import Providers from '@components/Providers'
import { HorizontalNavProvider } from '@/@menu-package/contexts/horizontalNavContext'

const Layout = ({ children }: ChildrenType) => {
  const cookieStore = cookies()

  const settingsCookie = JSON.parse(cookieStore.get('settings')?.value || '{}')

  return (
    <Providers settingsCookie={settingsCookie} direction='ltr'>
      <HorizontalNavProvider>{children}</HorizontalNavProvider>
    </Providers>
  )
}

export default Layout
