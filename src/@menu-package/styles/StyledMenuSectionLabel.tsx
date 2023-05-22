// Third Party Imports
import styled from '@emotion/styled'
import type { CSSObject } from '@emotion/styled'

type StyledMenuSectionLabelProps = {
  isCollapsed?: boolean
  isHovered?: boolean
  rootStyles?: CSSObject
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
