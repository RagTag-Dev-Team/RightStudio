// Next Imports
import { Inter } from 'next/font/google'

// MUI Imports
import type { Theme } from '@mui/material'

// Theme Options Imports
import overrides from './overrides'
import spacing from './spacing'
import typography from './typography'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] })

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
    },
    typography: typography(inter.style.fontFamily)
  } as Theme
}

export default theme
