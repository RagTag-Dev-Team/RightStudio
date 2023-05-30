// Type Imports
import type { ChildrenType } from '../../../@menu-package/types'

const navHeaderStyles = {
  padding: 15,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}

const NavHeader = ({ children }: ChildrenType) => {
  return <div style={navHeaderStyles}>{children}</div>
}

export default NavHeader
