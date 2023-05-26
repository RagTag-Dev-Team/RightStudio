//* This is User Component (Not a core component)

// React Imports
import type { ReactNode } from 'react'

// Styled Component Imports
import StyledMenuHeader from '../../../@menu-package/styles/StyledMenuHeader'

type MenuHeaderProps = {
  children: ReactNode
}

const MenuHeader = ({ children }: MenuHeaderProps) => {
  return <StyledMenuHeader>{children}</StyledMenuHeader>
}

export default MenuHeader
