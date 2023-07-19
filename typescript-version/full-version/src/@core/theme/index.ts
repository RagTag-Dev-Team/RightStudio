// MUI Imports
import type { CssVarsTheme, Theme } from '@mui/material'

// Type Imports
import type { Settings } from '../contexts/settingsContext'

// Theme Options Imports
import overrides from './overrides'
import spacing from './spacing'

const theme = (settings: Settings): Omit<Theme, 'palette'> & CssVarsTheme => {
  const { direction } = settings

  return {
    direction: direction as Theme['direction'],
    components: overrides(),
    ...spacing
  } as Omit<Theme, 'palette'> & CssVarsTheme
}

export default theme
