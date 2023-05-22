// Third Party Imports
import styled from '@emotion/styled'
import type { CSSObject } from '@emotion/styled'

// Util Imports
import { menuClasses } from '../utils/utilityClasses'

type StyledMenuProps = {
  rootStyles?: CSSObject
}

const StyledMenu = styled.nav<StyledMenuProps>`
  &.${menuClasses.root} {
    ${({ rootStyles }) => rootStyles}
  }
`

export default StyledMenu
