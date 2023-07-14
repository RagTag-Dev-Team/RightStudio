// Type Imports
import type { ChildrenType } from '../../@core/types'

// Context Imports
import { VerticalNavProvider } from '../../@menu-package/contexts/verticalNavContext'
import { SettingsProvider } from '../../@core/contexts/settingsContext'

// Layout Imports
import LayoutWrapper from '../../@layouts/LayoutWrapper'
import VerticalLayout from '../../@layouts/VerticalLayout'
import HorizontalLayout from '../../@layouts/HorizontalLayout'

// Component Imports
import Navigation from '../../components/layout/vertical/Navigation'
import Header from '../../components/layout/horizontal/Header'
import Navbar from '../../components/layout/vertical/Navbar'
import VerticalFooter from '../../components/layout/vertical/Footer'
import HorizontalFooter from '../../components/layout/horizontal/Footer'
import Customizer from '../../@core/components/customizer'

const Layout = ({ children }: ChildrenType) => {
  return (
    <VerticalNavProvider>
      <SettingsProvider>
        <LayoutWrapper
          verticalLayout={
            <VerticalLayout navigation={<Navigation />} navbar={<Navbar />} footer={<VerticalFooter />}>
              {children}
            </VerticalLayout>
          }
          horizontalLayout={
            <HorizontalLayout header={<Header />} footer={<HorizontalFooter />}>
              {children}
            </HorizontalLayout>
          }
        />
        <Customizer breakpoint='1200px' />
      </SettingsProvider>
    </VerticalNavProvider>
  )
}

export default Layout
