// MUI Imports
import type { Theme } from '@mui/material'

// Type Imports
import type { Settings } from '../contexts/settingsContext'

// Theme Options Imports
import overrides from './overrides'
import spacing from './spacing'

const theme = (settings: Settings): Theme => {
  const { direction } = settings

  return {
    direction: direction as Theme['direction'],
    components: overrides(),
    ...spacing
  } as Theme
}

export default theme
