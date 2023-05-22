// Third Party Imports
import styled from '@emotion/styled'
import type { CSSObject } from '@emotion/styled'

type StyledMenuSuffixProps = {
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

const StyledMenuSuffix = styled.span<StyledMenuSuffixProps>`
  margin-inline-end: 5px;
  margin-inline-start: 5px;
  display: ${({ firstLevel, isCollapsed, isHovered }) =>
    firstLevel && isCollapsed && !isHovered ? 'none' : 'inline-flex'};
  ${({ rootStyles }) => rootStyles};
`

export default StyledMenuSuffix
