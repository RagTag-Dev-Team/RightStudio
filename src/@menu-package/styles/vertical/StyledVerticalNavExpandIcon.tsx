// Third Party Imports
import styled from '@emotion/styled'

// Type Imports
import type { RootStylesType } from '../../types'

type StyledVerticalNavExpandIconProps = {
  open?: boolean
}

type StyledVerticalNavExpandIconWrapperProps = RootStylesType & {
  isCollapsed?: boolean
  level?: number
  isHovered?: boolean
}

export const StyledVerticalNavExpandIconWrapper = styled.span<StyledVerticalNavExpandIconWrapperProps>`
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

/* export const StyledVerticalNavExpandIconCollapsed = styled.span`
  inline-size: 5px;
  block-size: 5px;
  background-color: currentcolor;
  border-radius: 50%;
  display: inline-block;
` */

const StyledVerticalNavExpandIcon = styled.span<StyledVerticalNavExpandIconProps>`
  display: inline-block;
  block-size: 5px;
  inline-size: 5px;
  border-inline-end: 2px solid currentcolor;
  border-block-end: 2px solid currentcolor;
  transition: transform 0.3s;
  transform: rotate(${({ open }) => (open ? '45deg' : '-45deg')});
  [dir='rtl'] & {
    border-block-end: 0;
    border-inline-start: 0;
    border-inline-end: 2px solid currentcolor;
    border-block-start: 2px solid currentcolor;
    transform: rotate(${({ open }) => (open ? '-135deg' : '-45deg')});
  }
`

export default StyledVerticalNavExpandIcon
