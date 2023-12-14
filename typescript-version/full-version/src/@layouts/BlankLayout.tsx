'use client'

// React Imports
import { useEffect } from 'react'

// MUI Imports
import { useColorScheme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'
import { useCookie } from 'react-use'

// Type Imports
import type { Mode, ChildrenType } from '@core/types'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Type Imports

// Util Imports
import { blankLayoutClasses } from './utils/layoutClasses'

const BlankLayout = ({ children }: ChildrenType) => {
  // Hooks
  const { settings } = useSettings()

  const { mode, systemMode, setMode } = useColorScheme()

  // Cookies
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, updateCookie] = useCookie('colorPref')

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

  return (
    <div className={classnames(blankLayoutClasses.root, 'is-full bs-full')} data-skin={settings.skin}>
      {children}
    </div>
  )
}

export default BlankLayout
