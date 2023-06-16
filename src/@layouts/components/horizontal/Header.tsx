// Type Imports
import type { ChildrenType } from '../../../@menu-package/types'

// Util Imports
import { horizontalLayoutClasses } from '../../utils/utilityClasses'

const headerStyles = {
  borderBlockEnd: '1px solid #efefef'
}

const Header = ({ children }: ChildrenType) => {
  return (
    <div className={horizontalLayoutClasses.header} style={headerStyles}>
      {children}
    </div>
  )
}

export default Header
