// Type Imports
import type { ChildrenType } from '../../../@menu-package/types'

// Util Imports
import { horizontalLayoutClasses } from '../../utils/utilityClasses'

const headerStyles = {
  borderBlockEnd: '1px solid #efefef'
}

const Header = ({ children }: ChildrenType) => {
  return (
    <header className={horizontalLayoutClasses.header} style={headerStyles}>
      {children}
    </header>
  )
}

export default Header
