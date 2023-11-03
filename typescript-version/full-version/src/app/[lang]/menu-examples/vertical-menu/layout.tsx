// Next Imports
import { cookies } from 'next/headers'

// Type Imports
import type { ChildrenType } from '@menu-package/types'

// Component Imports
import Providers from '@components/Providers'

const Layout = async ({ children }: ChildrenType) => {
  const cookieStore = cookies()

  const settingsCookie = JSON.parse(cookieStore.get('settings')?.value || '{}')

  return <Providers settingsCookie={settingsCookie}>{children}</Providers>
}

export default Layout
