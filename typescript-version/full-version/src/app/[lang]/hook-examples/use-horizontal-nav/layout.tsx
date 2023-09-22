// Type Imports
import type { ChildrenType } from '@menu-package/types'

// Context Imports
import { VerticalNavProvider } from '@menu-package/contexts/verticalNavContext'
import { HorizontalNavProvider } from '@menu-package/contexts/horizontalNavContext'

const Layout = ({ children }: ChildrenType) => {
  return (
    <VerticalNavProvider>
      <HorizontalNavProvider>{children}</HorizontalNavProvider>
    </VerticalNavProvider>
  )
}

export default Layout
