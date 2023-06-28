'use client'

// React Imports
import type { ReactNode } from 'react'

// MUI Imports
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

// Component Imports
import EmotionCacheProvider from './EmotionCache'

// Core Theme Imports
//* To use your own theme or teh merged theme, comment out the below line
import coreTheme from '../../@core/theme'

// Merged Theme Imports
//* To use the merged theme, uncomment the below line and comment out the coreTheme import above
// import mergedTheme from './MergedTheme'

// User Theme Imports
//* To use your own theme, uncomment the below line and comment out the coreTheme import above
// import userTheme from './Theme'

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  //* To use your own theme or the merged theme, comment out the below line
  const theme = createTheme(coreTheme())

  /*
   * We recommend using the merged theme if you want to override our core theme.
   * This means you can use our core theme and override it with your own customizations.
   * You can override our core theme by adding your own customizations in the `MergedTheme.ts` file.
   * Uncomment below line if you want to use the merged theme.
   * Make sure you have commented out the `const theme = createTheme(coreTheme())` line above in order to make it work.
   */
  // const theme = createTheme(mergedTheme())

  /*
   * We do not recommend using your own custom theme built from scratch. Instead, we recommend using the merged theme and customizing it as per your needs.
   * Uncomment below line only if you want to use your own theme and you do not want to use our core theme at all. Also you must be aware about the MUI theme structure.
   * You can read more about MUI theme structure here: https://mui.com/material-ui/customization/theming
   * You can write your own theme in the `Theme.ts` file.
   * Make sure you have commented out the `const theme = createTheme(coreTheme())` and `const theme = createTheme(mergedTheme())` lines above in order to make it work.
   */
  // const theme = createTheme(userTheme())

  return (
    <EmotionCacheProvider options={{ key: 'mui' }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </EmotionCacheProvider>
  )
}

export default ThemeProvider
