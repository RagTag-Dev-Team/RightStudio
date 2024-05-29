// Component Imports
import FrontLayout from '@components/layout/front-pages'

// Context Imports
import { IntersectionProvider } from '@/contexts/intersectionContext'

// Type Imports
import type { ChildrenType } from '@core/types'

const Layout = ({ children }: ChildrenType) => {
  return (
    <IntersectionProvider>
      <FrontLayout>{children}</FrontLayout>
    </IntersectionProvider>
  )
}

export default Layout
