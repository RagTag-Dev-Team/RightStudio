// Import types
import type { ReactNode } from 'react'

// Import blank layout
import BlankLayout from '../../@layouts/BlankLayout'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <BlankLayout>{children}</BlankLayout>
}

export default Layout
