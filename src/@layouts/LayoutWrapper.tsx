'use client'

// Import types
import type { ReactNode } from 'react'

// Import hooks
import useLayout from './hooks/useLayout'

// Import Layouts
import VerticalLayout from './VerticalLayout'
import HorizontalLayout from './HorizontalLayout'

type LayoutWrapperProps = {
  children: ReactNode
}

const LayoutWrapper = ({ children }: LayoutWrapperProps) => {
  const { layout } = useLayout()

  if (layout === 'horizontal') {
    return <HorizontalLayout>{children}</HorizontalLayout>
  } else {
    return <VerticalLayout>{children}</VerticalLayout>
  }
}

export default LayoutWrapper
