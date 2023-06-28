/*
 * We recommend using the merged theme if you want to override our core theme.
 * This means you can use our core theme and override it with your own customizations.
 * Write your overrides in the userTheme object in this file.
 * The userTheme object is merged with the coreTheme object within this file.
 * Export this file and import it in the `ThemeComponent.tsx` file to use the merged theme.
 */

// MUI Imports
import { deepmerge } from '@mui/utils'
import type { ThemeOptions } from '@mui/material'

// Core Theme Imports
import coreTheme from '../../@core/theme'

const MergedTheme = () => {
  const userTheme: ThemeOptions = {}

  return deepmerge(coreTheme(), userTheme)
}

export default MergedTheme
