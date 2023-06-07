'use client'

// React Imports
import type { ReactElement } from 'react'

// Hook Imports
import useLayout from './hooks/useLayout'

// Type
type LayoutWrapperProps = {
  verticalLayout: ReactElement
  horizontalLayout: ReactElement
}

const LayoutWrapper = (props: LayoutWrapperProps) => {
  const { verticalLayout, horizontalLayout } = props
  const { layout } = useLayout()

  // Return the layout based on the layout context
  return layout === 'horizontal' ? horizontalLayout : verticalLayout
}

export default LayoutWrapper
