// React Imports
import type { CSSProperties, ReactNode } from 'react'

// Type Imports
import type { ChildrenType } from '../@menu-package/types'

// Context Imports
import { VerticalNavProvider } from '../@menu-package/contexts/verticalNavContext'
import { HorizontalNavProvider } from '../@menu-package/contexts/horizontalNavContext'

// Component Imports
import LayoutContentWrapper from './components/horizontal/LayoutContentWrapper'
import LayoutContent from './components/horizontal/LayoutContent'

// Util Imports
import { horizontalLayoutClasses } from './utils/utilityClasses'

type HorizontalLayoutProps = ChildrenType & {
  header?: ReactNode
  footer?: ReactNode
}

// Styles
const horizontalLayoutStyles: CSSProperties = {
  display: 'flex',
  flex: '1 1 auto'
}

const HorizontalLayout = (props: HorizontalLayoutProps) => {
  // Props
  const { header, footer, children } = props

  return (
    <div className={horizontalLayoutClasses.root} style={horizontalLayoutStyles}>
      <HorizontalNavProvider>
        <VerticalNavProvider>
          <LayoutContentWrapper>
            {header || null}
            <LayoutContent>{children}</LayoutContent>
            {footer || null}
          </LayoutContentWrapper>
        </VerticalNavProvider>
      </HorizontalNavProvider>
    </div>
  )
}

export default HorizontalLayout
