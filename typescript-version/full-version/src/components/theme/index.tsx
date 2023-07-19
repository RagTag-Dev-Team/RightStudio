'use client'

// React Imports
import type { ReactNode } from 'react'

// MUI Imports
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import type { Direction } from '@mui/material/styles'

// Component Imports
import EmotionCacheProvider from './EmotionCache'

// Config Imports
import { getPrimaryColorScheme } from '@/configs/primaryColorConfig'

// Hook Imports
import useSettings from '@/@core/hooks/useSettings'

// Core Theme Imports
import defaultCoreTheme from '../../@core/theme'

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Hooks
  const { settings } = useSettings()

  if (Object.keys(settings).length === 0) {
    return
  }

  // Merge the primary color scheme override with the core theme
  const coreTheme = { ...defaultCoreTheme(settings), ...getPrimaryColorScheme(settings) }
  const theme = extendTheme(coreTheme)

  return (
    <EmotionCacheProvider options={{ key: 'mui' }} direction={settings.direction as Direction}>
      <CssVarsProvider theme={theme} defaultMode={settings.mode}>
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </EmotionCacheProvider>
  )
}

export default ThemeProvider
