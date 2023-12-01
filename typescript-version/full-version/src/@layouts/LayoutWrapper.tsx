'use client'

// React Imports
import type { ReactElement } from 'react'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Type
type LayoutWrapperProps = {
  verticalLayout: ReactElement
  horizontalLayout: ReactElement
  settingsCookie: Settings
}

const LayoutWrapper = (props: LayoutWrapperProps) => {
  // Props
  const { verticalLayout, horizontalLayout, settingsCookie } = props

  // Hooks
  const { settings } = useSettings()

  let layout = themeConfig.layout

  if (settings.layout === undefined) {
    if (JSON.stringify(settingsCookie) !== '{}' && settingsCookie.layout !== undefined) {
      layout = settingsCookie.layout
    }
  } else {
    layout = settings.layout
  }

  // Return the layout based on the layout context
  return layout === 'horizontal' ? horizontalLayout : verticalLayout
}

export default LayoutWrapper
