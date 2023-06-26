// Type Imports
import type { ChildrenType } from '../../../@menu-package/types'

// Styled Components Imports
import StyledHorizontalNavbar from '../../../@layouts/styles/StyledHorizontalNavbar'

// Util Imports
import { horizontalLayoutClasses } from '../../../@layouts/utils/utilityClasses'

const Navbar = ({ children }: ChildrenType) => {
  return <StyledHorizontalNavbar className={horizontalLayoutClasses.navbar}>{children}</StyledHorizontalNavbar>
}

export default Navbar
