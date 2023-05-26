// React Imports
import type { ReactNode } from 'react'
import { useState } from 'react'

// Component Imports

import Footer from './components/Footer'
import PageContent from './components/PageContent'
import Navbar from './components/navbar-horizontal/Navbar'
import { VerticalNavProvider } from '../@menu-package/contexts/verticalNavContext'

const HorizontalLayout = ({ children }: { children: ReactNode }) => {
  const [isBreakpointReached, setIsBreakpointReached] = useState(false)

  return (
    <VerticalNavProvider>
      <PageContent>
        <Navbar isBreakpointReached={isBreakpointReached} setIsBreakpointReached={setIsBreakpointReached} />
        {/* Content */}
        <div>{children}</div>
        <Footer />
      </PageContent>
    </VerticalNavProvider>
  )
}

export default HorizontalLayout
