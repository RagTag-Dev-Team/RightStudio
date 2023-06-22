// Type Imports
import type { ChildrenType } from '../../../@menu-package/types'

// Styled Components Imports
import StyledVerticalNavbar from '../../styles/StyledVerticalNavbar'

// Util Imports
import { verticalLayoutClasses } from '../../../@layouts/utils/utilityClasses'

const Navbar = ({ children }: ChildrenType) => {
  return (
    <StyledVerticalNavbar className={verticalLayoutClasses.header}>
      <div className={verticalLayoutClasses.navbar} style={{ width: '100%' }}>
        {children}
      </div>
    </StyledVerticalNavbar>
  )
}

export default Navbar
