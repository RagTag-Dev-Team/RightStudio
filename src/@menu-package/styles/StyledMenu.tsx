import styled, { CSSObject } from '@emotion/styled'
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
