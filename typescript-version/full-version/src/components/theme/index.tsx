'use client'

// React Imports
import type { ReactNode } from 'react'

// MUI Imports
import { deepmerge } from '@mui/utils'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  responsiveFontSizes
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import type {} from '@mui/material/themeCssVarsAugmentation' //! Do not remove this import otherwise you will get type errors while making a production build
import type {} from '@mui/lab/themeAugmentation' //! Do not remove this import otherwise you will get type errors while making a production build

// Type Imports
import type { Direction } from '@core/types'

// Component Imports
import EmotionCacheProvider from './EmotionCache'

// Config Imports
import { getPrimaryColorScheme } from '@configs/primaryColorConfig'
import themeConfig from '@configs/themeConfig'

// Hook Imports
import useSettings from '@core/hooks/useSettings'

// Core Theme Imports
import defaultCoreTheme from '@core/theme'

const ThemeProvider = ({ children, direction }: { children: ReactNode; direction: Direction }) => {
  // Hooks
  const { settings } = useSettings()

  if (Object.keys(settings).length === 0) {
    return
  }

  // Merge the primary color scheme override with the core theme
  const coreTheme = deepmerge(defaultCoreTheme(direction), getPrimaryColorScheme(settings))
  let theme = extendTheme(coreTheme)

  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme)
  }

  return (
    <EmotionCacheProvider options={{ key: 'mui' }} direction={theme.direction}>
      <CssVarsProvider theme={theme} defaultMode={settings.mode}>
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </EmotionCacheProvider>
  )
}

export default ThemeProvider
