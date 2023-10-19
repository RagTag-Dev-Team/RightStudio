// MUI Imports
import type { Theme } from '@mui/material'

// Theme Options Imports
import overrides from './overrides'
import spacing from './spacing'

const theme = (direction: Theme['direction']): Theme => {
  return {
    direction,
    components: overrides(),
    ...spacing,
    shape: {
      customBorderRadius: {
        xs: 2,
        sm: 4,
        md: 6,
        lg: 8,
        xl: 10
      }
    }
  } as Theme
}

export default theme
