// Util Imports
import { menuClasses, verticalNavClasses } from '@menu-package/utils/menuClasses'

const navigationCustomStyles = () => ({
  color: 'var(--mui-palette-text-primary)',
  zIndex: 'var(--drawer-z-index) !important',
  [`& .${verticalNavClasses.container}`]: {
    borderColor: 'var(--mui-palette-divider)'
  },
  [`& .${menuClasses.menuSectionContent}`]: {
    color: 'var(--mui-palette-text-disabled)'
  }
})

export default navigationCustomStyles
