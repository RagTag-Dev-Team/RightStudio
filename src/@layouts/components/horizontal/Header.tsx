// Type Imports
import type { ChildrenType } from '../../../@menu-package/types'

// Util Imports
import { horizontalLayoutClasses } from '../../utils/utilityClasses'

const headerStyles = {
  backgroundColor: '#f4f4f4'
}

const Header = ({ children }: ChildrenType) => {
  return (
    <div className={horizontalLayoutClasses.header} style={headerStyles}>
      {children}
    </div>
  )
}

export default Header
