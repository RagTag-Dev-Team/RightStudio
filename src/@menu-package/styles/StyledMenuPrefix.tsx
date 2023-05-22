// Third Party Imports
import styled from '@emotion/styled'
import type { CSSObject } from '@emotion/styled'

type StyledMenuPrefixProps = {
  firstLevel?: boolean
  isCollapsed?: boolean
  isHovered?: boolean
  transitionOptions?: {
    duration?: number | string
    easing?: string
    delay?: number | string
  }
  rootStyles?: CSSObject
}

const StyledMenuPrefix = styled.span<StyledMenuPrefixProps>`
  margin-inline-end: 5px;
  display: ${({ firstLevel, isCollapsed, isHovered }) =>
    firstLevel && isCollapsed && !isHovered ? 'none' : 'inline-flex'};
  ${({ rootStyles }) => rootStyles};
`

export default StyledMenuPrefix
