// React Imports
import type { CSSProperties, ReactNode } from 'react'

// Type Imports
import type { ChildrenType } from '../@menu-package/types'

// Context Imports
import { VerticalNavProvider } from '../@menu-package/contexts/verticalNavContext'

// Component Imports
import LayoutContentWrapper from './components/vertical/LayoutContentWrapper'
import LayoutContent from './components/vertical/LayoutContent'

// Util Imports
import { verticalLayoutClasses } from './utils/utilityClasses'

type VerticalLayoutProps = ChildrenType & {
  navigation?: ReactNode
  navbar?: ReactNode
  footer?: ReactNode
}

// Styles
const verticalLayoutStyles: CSSProperties = {
  display: 'flex',
  flex: '1 1 auto'
}

const VerticalLayout = (props: VerticalLayoutProps) => {
  // Props
  const { navbar, footer, navigation, children } = props

  return (
    <VerticalNavProvider>
      <div className={verticalLayoutClasses.root} style={verticalLayoutStyles}>
        {navigation || null}
        <LayoutContentWrapper>
          {navbar || null}
          {/* Content */}
          <LayoutContent>{children}</LayoutContent>
          {footer || null}
        </LayoutContentWrapper>
      </div>
    </VerticalNavProvider>
  )
}

export default VerticalLayout
