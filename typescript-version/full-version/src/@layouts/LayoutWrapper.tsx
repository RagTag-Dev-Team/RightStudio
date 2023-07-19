'use client'

// React Imports
import { useEffect } from 'react'
import type { ReactElement } from 'react'

// MUI Imports
import { useColorScheme } from '@mui/material/styles'

// Type Imports
import type { Mode } from '@/@core/types'

// Hook Imports
import useSettings from '../@core/hooks/useSettings'

// Type
type LayoutWrapperProps = {
  verticalLayout: ReactElement
  horizontalLayout: ReactElement
}

const LayoutWrapper = (props: LayoutWrapperProps) => {
  // Props
  const { verticalLayout, horizontalLayout } = props

  // Hooks
  const { settings } = useSettings()
  const { mode, setMode } = useColorScheme()

  useEffect(() => {
    if (settings.mode !== mode) {
      setMode(settings.mode as Mode)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.mode])

  // Return the layout based on the layout context
  return settings.layout === 'horizontal' ? horizontalLayout : verticalLayout
}

export default LayoutWrapper
