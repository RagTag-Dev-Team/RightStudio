// Third Party Imports
import styled from '@emotion/styled'

// Type Imports
import type { RootStylesType } from '../types'

// Util Imports
import { menuClasses } from '../utils/utilityClasses'

const StyledMenu = styled.nav<RootStylesType>`
  &.${menuClasses.root} {
    ${({ rootStyles }) => rootStyles}
  }
`

export default StyledMenu
