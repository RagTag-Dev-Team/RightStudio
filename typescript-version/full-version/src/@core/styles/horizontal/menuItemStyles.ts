// MUI Imports
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { MenuItemStyles } from '@menu/types'
import type { Settings } from '@core/contexts/settingsContext'

// Util Imports
import { menuClasses } from '@menu/utils/menuClasses'

const menuItemStyles = (settings: Settings, theme: Theme): MenuItemStyles => ({
  root: {
    [`&.${menuClasses.open} > .${menuClasses.button}`]: {
      backgroundColor: theme.vars.palette.action.hover
    },
    [`&.${menuClasses.disabled} > .${menuClasses.button}`]: {
      color: theme.vars.palette.text.disabled
    }
  },
  button: {
    paddingBlock: '10px',
    [`&:not(.${menuClasses.active}):hover, &:not(.${menuClasses.active})[aria-expanded="true"]`]: {
      backgroundColor: theme.vars.palette.action.hover
    }
  },
  subMenuStyles: {
    zIndex: 'calc(var(--header-z-index) + 1)'
  },
  subMenuContent: {
    backgroundColor: 'var(--mui-palette-background-paper)'
  }
})

export default menuItemStyles
