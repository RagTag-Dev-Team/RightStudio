// React Imports
import type { ReactNode } from 'react'

// Component Imports
import PageContent from './components/PageContent'

const BlankLayout = ({ children }: { children: ReactNode }) => {
  return (
    <PageContent>
      {/* Content */}
      <div>{children}</div>
    </PageContent>
  )
}

export default BlankLayout
