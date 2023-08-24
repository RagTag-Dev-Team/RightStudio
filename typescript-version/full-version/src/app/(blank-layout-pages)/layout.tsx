// Type Imports
import type { ChildrenType } from '@core/types'

// Component Imports
import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'

const Layout = ({ children }: ChildrenType) => {
  return (
    <Providers>
      <BlankLayout>{children}</BlankLayout>
    </Providers>
  )
}

export default Layout
