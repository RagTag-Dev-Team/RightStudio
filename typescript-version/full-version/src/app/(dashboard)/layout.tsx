// Type Imports
import type { ChildrenType } from '../../@menu-package/types'

// Context Imports
import { LayoutProvider } from '../../@layouts/contexts/layoutContext'

// Component Imports
import LayoutWrapper from '../../@layouts/LayoutWrapper'

// Layout Imports
import VerticalLayout from '../../@layouts/VerticalLayout'
import HorizontalLayout from '../../@layouts/HorizontalLayout'
import Header from '../../components/layout/horizontal/Header'
import Navbar from '../../components/layout/vertical/Navbar'
import Footer from '../../components/layout/shared/Footer'

const Layout = ({ children }: ChildrenType) => {
  return (
    <LayoutProvider>
      <LayoutWrapper
        verticalLayout={
          <VerticalLayout navbar={<Navbar />} footer={<Footer />}>
            {children}
          </VerticalLayout>
        }
        horizontalLayout={
          <HorizontalLayout header={<Header />} footer={<Footer />}>
            {children}
          </HorizontalLayout>
        }
      />
    </LayoutProvider>
  )
}

export default Layout
