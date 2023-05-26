// Import types
import type { ReactNode } from 'react'

// Context Imports
import { LayoutProvider } from '../../@layouts/contexts/layoutContext'

// Component Imports
import LayoutWrapper from '../../@layouts/LayoutWrapper'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutProvider>
      <LayoutWrapper>{children}</LayoutWrapper>
    </LayoutProvider>
  )
}

export default Layout
