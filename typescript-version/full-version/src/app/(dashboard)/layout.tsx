// Type Imports
import type { ChildrenType } from '../../@core/types'

// Context Imports
import { VerticalNavProvider } from '../../@menu-package/contexts/verticalNavContext'
import { SettingsProvider } from '../../@core/contexts/settingsContext'

// Component Imports
import LayoutWrapper from '../../@layouts/LayoutWrapper'

// Layout Imports
import VerticalLayout from '../../@layouts/VerticalLayout'
import HorizontalLayout from '../../@layouts/HorizontalLayout'
import Navigation from '../../components/layout/vertical/Navigation'
import Navbar from '../../components/layout/vertical/Navbar'
import Footer from '../../components/layout/shared/Footer'
import Header from '../../components/layout/horizontal/Header'
import TempCustomizer from '../../components/TempCustomizer'

const Layout = ({ children }: ChildrenType) => {
  return (
    <VerticalNavProvider>
      <SettingsProvider>
        <LayoutWrapper
          verticalLayout={
            <VerticalLayout navigation={<Navigation />} navbar={<Navbar />} footer={<Footer />}>
              <TempCustomizer />
              {children}
            </VerticalLayout>
          }
          horizontalLayout={
            <HorizontalLayout header={<Header />} footer={<Footer />}>
              <TempCustomizer />
              {children}
            </HorizontalLayout>
          }
        />
      </SettingsProvider>
    </VerticalNavProvider>
  )
}

export default Layout
