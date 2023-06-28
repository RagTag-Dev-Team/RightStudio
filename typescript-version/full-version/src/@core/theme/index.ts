// MUI Imports
import type { ThemeOptions } from '@mui/material'

// Theme Options Imports
import spacing from './spacing'
import overrides from './overrides'

const theme = (): ThemeOptions => {
  return {
    components: overrides(),
    ...spacing
  }
}

export default theme
