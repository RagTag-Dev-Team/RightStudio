// Type Imports
import type { ChildrenType } from '@menu-package/types'

// Context Imports
import { VerticalNavProvider } from '@menu-package/contexts/verticalNavContext'

const Layout = ({ children }: ChildrenType) => {
  return <VerticalNavProvider>{children}</VerticalNavProvider>
}

export default Layout
