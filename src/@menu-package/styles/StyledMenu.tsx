// Third-party Imports
import styled from '@emotion/styled'

// Type Imports
import type { MenuProps } from '../components/vertical-menu/Menu'

// Util Imports
import { menuClasses } from '../utils/utilityClasses'

const StyledMenu = styled.nav<Pick<MenuProps, 'rootStyles'>>`
  &.${menuClasses.root} {
    ${({ rootStyles }) => rootStyles}
  }
`

export default StyledMenu
