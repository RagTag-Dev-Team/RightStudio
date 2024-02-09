// React Imports
import type { ReactNode } from 'react'

// Docusaurus Imports
import { useColorMode } from '@docusaurus/theme-common/internal'

// MUI Imports
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  StyledEngineProvider
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import type {} from '@mui/material/themeCssVarsAugmentation'
import type {} from '@mui/lab/themeAugmentation'

// Component Imports
import ChangeMuiMode from './ChangeMuiMode'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Theme Overrides Imports
import overrides from '@core/theme/overrides'
import colorSchemes from '@core/theme/colorSchemes'
import spacing from '@core/theme/spacing'
import shadows from '@core/theme/shadows'
import customShadows from '@core/theme/customShadows'
import typography from '@core/theme/typography'

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Hooks
  const { colorMode } = useColorMode()

  const theme = extendTheme({
    components: overrides('default'),
    colorSchemes: colorSchemes('default'),
    ...spacing,
    shape: {
      borderRadius: 6,
      customBorderRadius: {
        xs: 2,
        sm: 4,
        md: 6,
        lg: 8,
        xl: 10
      }
    },
    shadows: shadows(colorMode),
    typography: typography(''),
    customShadows: customShadows(colorMode),
    mainColorChannels: {
      light: '47 43 61',
      dark: '225 222 245',
      lightShadow: '47 43 61',
      darkShadow: '19 17 32'
    }
  })

  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider
        theme={theme}
        modeStorageKey={`${themeConfig.templateName.toLowerCase().split(' ').join('-')}-mui-docs-mode`}
      >
        <CssBaseline />
        <ChangeMuiMode />
        {children}
      </CssVarsProvider>
    </StyledEngineProvider>
  )
}

export default ThemeProvider
