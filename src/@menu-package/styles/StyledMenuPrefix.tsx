// Third Party Imports
import styled from '@emotion/styled'

// Type Imports
import type { RootStylesType, TransitionOptionsType } from '../types'

type StyledMenuPrefixProps = RootStylesType & {
  firstLevel?: boolean
  isCollapsed?: boolean
  isHovered?: boolean
  transitionOptions?: TransitionOptionsType
}

const StyledMenuPrefix = styled.span<StyledMenuPrefixProps>`
  margin-inline-end: 5px;
  display: ${({ firstLevel, isCollapsed, isHovered }) =>
    firstLevel && isCollapsed && !isHovered ? 'none' : 'inline-flex'};
  ${({ rootStyles }) => rootStyles};
`

export default StyledMenuPrefix
