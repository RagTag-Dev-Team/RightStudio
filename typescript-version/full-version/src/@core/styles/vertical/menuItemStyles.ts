// Type Imports
import type { MenuItemStyles } from '@menu/types'
import type { VerticalNavState } from '@menu/contexts/verticalNavContext'

// Util Imports
import { menuClasses } from '@menu/utils/menuClasses'

const menuItemStyles = (verticalNavOptions: VerticalNavState): MenuItemStyles => {
  // Vars
  const { isCollapsed, isPopoutWhenCollapsed } = verticalNavOptions

  const popoutCollapsed = isPopoutWhenCollapsed && isCollapsed

  return {
    root: {
      [`&.${menuClasses.open} > .${menuClasses.button}`]: {
        backgroundColor: 'var(--mui-palette-action-hover)'
      },
      [`&.${menuClasses.disabled} > .${menuClasses.button}`]: {
        color: 'var(--mui-palette-text-disabled)'
      }
    },
    button: {
      paddingBlock: '10px',
      [`&:not(.${menuClasses.active}):hover, &:not(.${menuClasses.active})[aria-expanded="true"]`]: {
        backgroundColor: 'var(--mui-palette-action-hover)'
      }
    },
    subMenuContent: ({ level }) => ({
      zIndex: 'calc(var(--drawer-z-index) + 1)',
      backgroundColor: popoutCollapsed ? 'var(--mui-palette-background-paper)' : 'transparent',

      ...(popoutCollapsed &&
        level === 0 && {
          boxShadow: 'var(--mui-shadows-4)',
          '[data-skin="bordered"] ~ [data-floating-ui-portal] &': {
            boxShadow: 'none',
            border: '1px solid var(--mui-palette-divider)'
          }
        })
    })
  }
}

export default menuItemStyles
