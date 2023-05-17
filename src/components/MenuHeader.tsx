// This is User Component (Not a core component)

import { ReactNode } from 'react'
import StyledMenuHeader from '../@menu-package/styles/StyledMenuHeader'

type MenuHeaderProps = {
  children: ReactNode
}
const MenuHeader = ({ children }: MenuHeaderProps) => {
  return <StyledMenuHeader>{children}</StyledMenuHeader>
}

export default MenuHeader
