// MUI Imports
import type { Theme } from '@mui/material'

// Theme Options Imports
import overrides from './overrides'
import spacing from './spacing'

const theme = (direction: Theme['direction']): Theme => {
  return {
    direction,
    components: overrides(),
    ...spacing
  } as Theme
}

export default theme
