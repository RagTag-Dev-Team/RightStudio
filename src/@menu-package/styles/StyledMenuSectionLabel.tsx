// Third Party Imports
import styled from '@emotion/styled'

// Type Imports
import type { RootStylesType } from '../types'

type StyledMenuSectionLabelProps = RootStylesType & {
  isCollapsed?: boolean
  isHovered?: boolean
}

const StyledMenuSectionLabel = styled.span<StyledMenuSectionLabelProps>`
  ${({ isCollapsed, isHovered }) =>
    !isCollapsed || (isCollapsed && isHovered)
      ? `
flex-grow: 1;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`
      : 'display: none;'}
  ${({ rootStyles }) => rootStyles};
`

export default StyledMenuSectionLabel
