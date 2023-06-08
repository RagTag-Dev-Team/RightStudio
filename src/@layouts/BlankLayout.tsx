// Type Imports
import type { ChildrenType } from '../@menu-package/types'

// Component Imports
import PageContent from './components/PageContent'

const BlankLayout = ({ children }: ChildrenType) => {
  return (
    <PageContent>
      {/* Content */}
      <div>{children}</div>
    </PageContent>
  )
}

export default BlankLayout
