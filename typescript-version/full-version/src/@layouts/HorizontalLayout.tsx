// React Imports
import type { ReactNode } from 'react'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ChildrenType } from '../@core/types'

// Context Imports
import { HorizontalNavProvider } from '../@menu-package/contexts/horizontalNavContext'

// Component Imports
import LayoutContentWrapper from './components/horizontal/LayoutContentWrapper'
import LayoutContent from './components/horizontal/LayoutContent'

// Util Imports
import { horizontalLayoutClasses } from './utils/layoutClasses'

type HorizontalLayoutProps = ChildrenType & {
  header?: ReactNode
  footer?: ReactNode
}

const HorizontalLayout = (props: HorizontalLayoutProps) => {
  // Props
  const { header, footer, children } = props

  return (
    <div className={classnames(horizontalLayoutClasses.root, 'd-flex flex-auto')}>
      <HorizontalNavProvider>
        <LayoutContentWrapper>
          {header || null}
          <LayoutContent>{children}</LayoutContent>
          {footer || null}
        </LayoutContentWrapper>
      </HorizontalNavProvider>
    </div>
  )
}

export default HorizontalLayout
