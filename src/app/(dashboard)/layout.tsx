// Type Imports
import type { ChildrenType } from '../../@menu-package/types'

// Context Imports
import { LayoutProvider } from '../../@layouts/contexts/layoutContext'

// Component Imports
import LayoutWrapper from '../../@layouts/LayoutWrapper'

const Layout = ({ children }: ChildrenType) => {
  return (
    <LayoutProvider>
      <LayoutWrapper>{children}</LayoutWrapper>
    </LayoutProvider>
  )
}

export default Layout
