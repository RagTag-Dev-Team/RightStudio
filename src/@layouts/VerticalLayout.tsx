// React Imports
import type { CSSProperties } from 'react'

// Type Imports
import type { ChildrenType } from '../@menu-package/types'

// Context Imports
import { VerticalNavProvider } from '../@menu-package/contexts/verticalNavContext'

// Component Imports
import Navigation from '../components/layout/vertical/Navigation'
import LayoutContentWrapper from './components/vertical/LayoutContentWrapper'
import Navbar from './components/vertical/Navbar'
import NavbarContent from '../components/layout/vertical/NavbarContent'
import LayoutContent from './components/vertical/LayoutContent'
import Footer from './components/Footer'
import FooterContent from '../components/layout/shared/FooterContent'

// Util Imports
import { verticalLayoutClasses } from './utils/utilityClasses'

type VerticalLayoutProps = ChildrenType & {
  renderNavbar?: boolean
  renderFooter?: boolean
}

// Styles
const verticalLayoutStyles: CSSProperties = {
  display: 'flex',
  flex: '1 1 auto'
}

const VerticalLayout = (props: VerticalLayoutProps) => {
  // Props
  const { renderNavbar = true, renderFooter = true, children } = props

  return (
    <VerticalNavProvider>
      <div className={verticalLayoutClasses.root} style={verticalLayoutStyles}>
        <Navigation />
        <LayoutContentWrapper>
          {renderNavbar && (
            <Navbar>
              <NavbarContent />
            </Navbar>
          )}
          {/* Content */}
          <LayoutContent>{children}</LayoutContent>
          {renderFooter && (
            <Footer>
              <FooterContent />
            </Footer>
          )}
        </LayoutContentWrapper>
      </div>
    </VerticalNavProvider>
  )
}

export default VerticalLayout
