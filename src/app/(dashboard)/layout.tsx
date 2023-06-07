// Type Imports
import type { ChildrenType } from '../../@menu-package/types'

// Context Imports
import { LayoutProvider } from '../../@layouts/contexts/layoutContext'

// Component Imports
import LayoutWrapper from '../../@layouts/LayoutWrapper'

// Layout Imports
import VerticalLayout from '../../@layouts/VerticalLayout'
import HorizontalLayout from '../../@layouts/HorizontalLayout'

const Layout = ({ children }: ChildrenType) => {
  return (
    <LayoutProvider>
      <LayoutWrapper
        verticalLayout={<VerticalLayout>{children}</VerticalLayout>}
        horizontalLayout={<HorizontalLayout>{children}</HorizontalLayout>}
      />
    </LayoutProvider>
  )
}

export default Layout
