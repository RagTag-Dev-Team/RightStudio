'use client'

// React Imports
import type { ReactElement } from 'react'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

type LayoutWrapperProps = {
  verticalLayout: ReactElement
  horizontalLayout: ReactElement
}

const LayoutWrapper = (props: LayoutWrapperProps) => {
  // Props
  const { verticalLayout, horizontalLayout } = props

  // Hooks
  const { settings } = useSettings()

  // Return the layout based on the layout context
  return (
    <div className='flex flex-col flex-auto' data-skin={settings.skin}>
      {settings.layout === 'horizontal' ? horizontalLayout : verticalLayout}
    </div>
  )
}

export default LayoutWrapper
