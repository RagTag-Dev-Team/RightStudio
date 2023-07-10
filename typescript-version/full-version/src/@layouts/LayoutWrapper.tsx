'use client'

// React Imports
import type { ReactElement } from 'react'

// Hook Imports
import useSettings from '../@core/hooks/useSettings'

// Type
type LayoutWrapperProps = {
  verticalLayout: ReactElement
  horizontalLayout: ReactElement
}

const LayoutWrapper = (props: LayoutWrapperProps) => {
  const { verticalLayout, horizontalLayout } = props
  const { settings } = useSettings()

  // Return the layout based on the layout context
  return settings.layout === 'horizontal' ? horizontalLayout : verticalLayout
}

export default LayoutWrapper
