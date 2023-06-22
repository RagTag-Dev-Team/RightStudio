// React Imports
import type { CSSProperties } from 'react'

// Type Imports
import type { ChildrenType } from '../@menu-package/types'

// Component Imports
import LayoutContentWrapper from './components/horizontal/LayoutContentWrapper'
import Header from './components/horizontal/Header'
import Navbar from './components/horizontal/Navbar'
import NavbarContent from '../components/layout/horizontal/NavbarContent'
import Navigation from '../components/layout/horizontal/Navigation'
import LayoutContent from './components/horizontal/LayoutContent'
import Footer from './components/Footer'
import FooterContent from '../components/layout/shared/FooterContent'

// Context Imports
import { VerticalNavProvider } from '../@menu-package/contexts/verticalNavContext'
import { HorizontalNavProvider } from '../@menu-package/contexts/horizontalNavContext'

// Util Imports
import { horizontalLayoutClasses } from './utils/utilityClasses'

// Styles
const horizontalLayoutStyles: CSSProperties = {
  display: 'flex',
  flex: '1 1 auto'
}

const HorizontalLayout = ({ children }: ChildrenType) => {
  return (
    <div className={horizontalLayoutClasses.root} style={horizontalLayoutStyles}>
      <HorizontalNavProvider>
        <VerticalNavProvider>
          <LayoutContentWrapper>
            <Header>
              <Navbar>
                <NavbarContent />
              </Navbar>
              <Navigation />
            </Header>
            {/* Content */}
            <LayoutContent>{children}</LayoutContent>
            <Footer>
              <FooterContent />
            </Footer>
          </LayoutContentWrapper>
        </VerticalNavProvider>
      </HorizontalNavProvider>
    </div>
  )
}

export default HorizontalLayout
