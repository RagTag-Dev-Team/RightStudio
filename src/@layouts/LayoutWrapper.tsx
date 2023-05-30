'use client'

// Type Imports
import type { ChildrenType } from '../@menu-package/types'

// Hook Imports
import useLayout from './hooks/useLayout'

// Layout Imports
import VerticalLayout from './VerticalLayout'
import HorizontalLayout from './HorizontalLayout'

const LayoutWrapper = ({ children }: ChildrenType) => {
  const { layout } = useLayout()

  if (layout === 'horizontal') {
    return <HorizontalLayout>{children}</HorizontalLayout>
  } else {
    return <VerticalLayout>{children}</VerticalLayout>
  }
}

export default LayoutWrapper
