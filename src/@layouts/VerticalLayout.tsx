// React Imports
import type { ReactNode } from 'react'

// Context Imports
import { VerticalNavProvider } from '../@menu-package/contexts/verticalNavContext'

// Component Imports
import Navigation from '../components/layout/vertical/Navigation'
import Footer from './components/Footer'
import Navbar from '../components/layout/vertical/Navbar'
import PageContent from './components/PageContent'

const VerticalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <VerticalNavProvider>
      <Navigation />
      <PageContent>
        <Navbar />
        {/* Content */}
        <div>{children}</div>
        <Footer />
      </PageContent>
    </VerticalNavProvider>
  )
}

export default VerticalLayout
