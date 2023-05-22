// Third Party Imports
import styled from '@emotion/styled'
import type { CSSObject } from '@emotion/styled'

type StyledHorizontalNavExpandIconProps = {
  open?: boolean
  level?: number
}

type StyledHorizontalNavExpandIconWrapperProps = {
  isCollapsed?: boolean
  level?: number
  isHovered?: boolean
  rootStyles?: CSSObject
}

export const StyledHorizontalNavExpandIconWrapper = styled.span<StyledHorizontalNavExpandIconWrapperProps>`
  ${({ isCollapsed, level, isHovered }) =>
    isCollapsed &&
    !isHovered &&
    level === 0 &&
    `
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    `}
  ${({ rootStyles }) => rootStyles};
`

const StyledHorizontalNavExpandIcon = styled.span<StyledHorizontalNavExpandIconProps>`
  display: inline-block;
  block-size: 5px;
  inline-size: 5px;
  border-inline-end: 2px solid currentcolor;
  border-block-end: 2px solid currentcolor;
  transform: rotate(${({ level }) => (level && level > 0 ? '-45deg' : '45deg')});
  [dir='rtl'] & {
    border-block-end: 0;
    border-inline-start: 0;
    border-inline-end: 2px solid currentcolor;
    border-block-start: 2px solid currentcolor;
    transform: rotate(${({ open }) => (open ? '-135deg' : '-45deg')});
  }
`

export default StyledHorizontalNavExpandIcon
