// Third Party Imports
import styled from '@emotion/styled'

// Type Imports
import type { RootStylesType, TransitionOptionsType } from '../types'

type StyledMenuSuffixProps = RootStylesType & {
  firstLevel?: boolean
  isCollapsed?: boolean
  isHovered?: boolean
  transitionOptions?: TransitionOptionsType
}

const StyledMenuSuffix = styled.span<StyledMenuSuffixProps>`
  margin-inline-end: 5px;
  margin-inline-start: 5px;
  display: ${({ firstLevel, isCollapsed, isHovered }) =>
    firstLevel && isCollapsed && !isHovered ? 'none' : 'inline-flex'};
  ${({ rootStyles }) => rootStyles};
`

export default StyledMenuSuffix
