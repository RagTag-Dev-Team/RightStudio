// MUI Imports
import type { Theme } from '@mui/material/styles'

const globalStyles = (theme: Theme) => ({
  "html[data-theme='dark']": {
    '--ifm-background-color': theme.vars.palette.background.default,
    '--ifm-background-surface-color': theme.vars.palette.background.paper
  }
})

export default globalStyles
