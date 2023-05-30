// React Imports
import type { ReactNode } from 'react'

// import { useState } from 'react'

// Component Imports

import Footer from './components/Footer'
import PageContent from './components/PageContent'
import Navbar from '../components/layout/horizontal/Navbar'
import { VerticalNavProvider } from '../@menu-package/contexts/verticalNavContext'
import Header from './components/horizontal/Header'
import Navigation from '../components/layout/horizontal/Navigation'
import { HorizontalNavProvider } from '../@menu-package/contexts/horizontalNavContext'

const HorizontalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <HorizontalNavProvider>
      <VerticalNavProvider>
        <PageContent>
          <Header>
            <Navbar />
            <Navigation />
          </Header>
          {/* Content */}
          <div>{children}</div>
          <Footer />
        </PageContent>
      </VerticalNavProvider>
    </HorizontalNavProvider>
  )
}

export default HorizontalLayout
