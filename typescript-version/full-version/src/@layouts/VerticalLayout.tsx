// React Imports
import type { ReactNode } from 'react'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ChildrenType } from '../@core/types'

// Component Imports
import LayoutContent from './components/vertical/LayoutContent'

// Util Imports
import { verticalLayoutClasses } from './utils/layoutClasses'

type VerticalLayoutProps = ChildrenType & {
  navigation?: ReactNode
  navbar?: ReactNode
  footer?: ReactNode
}

const VerticalLayout = (props: VerticalLayoutProps) => {
  // Props
  const { navbar, footer, navigation, children } = props

  return (
    <div className={classnames(verticalLayoutClasses.root, 'd-flex flex-auto')}>
      {navigation || null}
      <div className={classnames(verticalLayoutClasses.contentWrapper, 'd-flex flex-column width-100')}>
        {navbar || null}
        {/* Content */}
        <LayoutContent>{children}</LayoutContent>
        {footer || null}
      </div>
    </div>
  )
}

export default VerticalLayout
