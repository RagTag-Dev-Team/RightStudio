'use client'

// React Imports
import { useEffect } from 'react'
import type { ReactElement } from 'react'

// MUI Imports
import { useColorScheme } from '@mui/material/styles'

// Third-party Imports
import { useCookie } from 'react-use'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'
import type { Mode } from '@core/types'

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

  const { mode, systemMode, setMode } = useColorScheme()

  // Cookies
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, updateCookie] = useCookie('colorPref')

  let layout = themeConfig.layout

  if (settings.layout === undefined) {
    if (JSON.stringify(settingsCookie) !== '{}' && settingsCookie.layout !== undefined) {
      layout = settingsCookie.layout
    }
  } else {
    layout = settings.layout
  }

  useEffect(() => {
    if (settings.mode !== mode) {
      setMode(settings.mode as Mode)
    }
    if (settings.mode === 'system' && systemMode !== undefined) {
      updateCookie(systemMode)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.mode])

  useEffect(() => {
    if (systemMode !== undefined) {
      updateCookie(systemMode)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [systemMode])

  // Return the layout based on the layout context
  return layout === 'horizontal' ? horizontalLayout : verticalLayout
}

export default LayoutWrapper
