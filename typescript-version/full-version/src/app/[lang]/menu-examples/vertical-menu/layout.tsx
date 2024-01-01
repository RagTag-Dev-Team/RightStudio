// Type Imports
import type { ChildrenType } from '@menu-package/types'

// Component Imports
import Providers from '@components/Providers'

const Layout = async ({ children }: ChildrenType) => {
  return <Providers>{children}</Providers>
}

export default Layout
