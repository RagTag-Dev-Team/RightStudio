'use client'

// React Imports
import { useMemo, type ReactNode } from 'react'

// MUI Imports
import { deepmerge } from '@mui/utils'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  lighten,
  darken
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import type {} from '@mui/material/themeCssVarsAugmentation' //! Do not remove this import otherwise you will get type errors while making a production build
import type {} from '@mui/lab/themeAugmentation' //! Do not remove this import otherwise you will get type errors while making a production build

// Type Imports
import type { Direction } from '@core/types'

// Component Imports
import EmotionCacheProvider from './EmotionCache'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

// Util Imports
import hexToUniqueString from '@/utils/get-hexToString'

// Core Theme Imports
import defaultCoreTheme from '@core/theme'
import { primaryColorConfig } from '@core/components/customizer'

const ThemeProvider = ({ children, direction }: { children: ReactNode; direction: Direction }) => {
  // Hooks
  const { settings } = useSettings()

  // Merge the primary color scheme override with the core theme
  const theme = useMemo(() => {
    const newColorScheme = {
      colorSchemes: {
        light: {
          palette: {
            primary: {
              main: settings.primaryColor,
              light: lighten(settings.primaryColor as string, 0.2),
              dark: darken(settings.primaryColor as string, 0.1)
            }
          }
        },
        dark: {
          palette: {
            primary: {
              main: settings.primaryColor,
              light: lighten(settings.primaryColor as string, 0.2),
              dark: darken(settings.primaryColor as string, 0.1)
            }
          }
        }
      }
    }

    const coreTheme = deepmerge(defaultCoreTheme(direction), newColorScheme)

    return extendTheme(coreTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings])

  const cacheKey = useMemo(() => {
    const generateColorFrom = settings.primaryColor ? settings.primaryColor : primaryColorConfig[0].main

    // Create string that persists between hydration and SSR but changes when the primary color changes
    return hexToUniqueString(generateColorFrom.replace('#', ''))
  }, [settings.primaryColor])

  return (
    <EmotionCacheProvider options={{ key: cacheKey }} direction={direction}>
      <CssVarsProvider theme={theme} defaultMode={settings.mode}>
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </EmotionCacheProvider>
  )
}

export default ThemeProvider
