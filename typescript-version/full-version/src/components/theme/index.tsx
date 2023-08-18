'use client'

// React Imports
import type { ReactNode } from 'react'

// MUI Imports
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import type {} from '@mui/material/themeCssVarsAugmentation' //! Do not remove this import otherwise you will get type errors while making a production build

// Third-party Imports
import { useCookie } from 'react-use'

// Component Imports
import EmotionCacheProvider from './EmotionCache'

// Config Imports
import { getPrimaryColorScheme } from '@/configs/primaryColorConfig'

// Hook Imports
import useSettings from '@/@core/hooks/useSettings'

// Core Theme Imports
import defaultCoreTheme from '../../@core/theme'

// Data Imports
import { langDirection } from '../../data/translation/langDirection'

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Hooks
  const [lang] = useCookie('lang')
  const { settings } = useSettings()

  const direction = langDirection[lang || 'en']

  if (Object.keys(settings).length === 0) {
    return
  }

  // Merge the primary color scheme override with the core theme
  const coreTheme = { ...defaultCoreTheme(direction), ...getPrimaryColorScheme(settings) }
  const theme = extendTheme(coreTheme)

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
