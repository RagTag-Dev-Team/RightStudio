// Type Imports
import type { ChildrenType } from '../../@core/types'

// Blank Layout Import
import BlankLayout from '../../@layouts/BlankLayout'

const Layout = ({ children }: ChildrenType) => {
  return <BlankLayout>{children}</BlankLayout>
}

export default Layout
