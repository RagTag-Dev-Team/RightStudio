// Type Imports
import type { ChildrenType } from '@core/types'

// HOC Imports
import GuestOnlyRoute from '@/hocs/GuestOnlyRoute'

const Layout = ({ children}: ChildrenType ) => {
  return <GuestOnlyRoute >{children}</GuestOnlyRoute>
}

export default Layout
