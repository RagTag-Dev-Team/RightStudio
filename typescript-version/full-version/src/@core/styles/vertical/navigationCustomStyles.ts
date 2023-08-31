// Util Imports
import { menuClasses, verticalNavClasses } from '@menu-package/utils/menuClasses'

const navigationCustomStyles = () => ({
  color: 'var(--mui-palette-text-primary)',
  zIndex: 'calc(var(--header-z-index) + 1)',
  [`& .${verticalNavClasses.container}`]: {
    borderColor: 'var(--mui-palette-divider)'
  },
  [`& .${menuClasses.menuSectionContent}`]: {
    color: 'var(--mui-palette-text-disabled)'
  }
})

export default navigationCustomStyles
