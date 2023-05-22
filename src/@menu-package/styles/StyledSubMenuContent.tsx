// Third Party Imports
import styled from '@emotion/styled'

// Type Imports
import type { SubMenuContentProps } from '../components/vertical-menu/SubMenuContent'

const StyledSubMenuContent = styled.div<SubMenuContentProps>`
  display: none;
  overflow: hidden;
  z-index: 999;
  transition: block-size ${({ transitionDuration }) => transitionDuration}ms;
  box-sizing: border-box;
  background-color: white;

  ${({ isCollapsed, firstLevel, isPopoutWhenCollapsed, isHovered, transitionDuration }) =>
    isCollapsed &&
    firstLevel &&
    !isPopoutWhenCollapsed &&
    !isHovered &&
    `
      block-size: 0 !important;
      transition: block-size ${transitionDuration}ms;
    `}

  ${({ isCollapsed, firstLevel, isPopoutWhenCollapsed, openWhenCollapsed, top }) =>
    isCollapsed && firstLevel && isPopoutWhenCollapsed
      ? `
      padding-inline-start: 0px;
      inline-size: 200px;
      border-radius: 4px;
      block-size: auto!important;
      display: block!important;
      transition: none!important;
      background-color: white;
      box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
      visibility: ${openWhenCollapsed && top && top > 0 ? 'visible' : 'hidden'};
     `
      : `
      position: static!important;
      transform: none!important;
      `}

  ${({ strategy }) => strategy && `position:${strategy};`}
  ${({ top }) => top && `top: ${top}px;`}
  ${({ left }) => left && `left: ${left}px;`}
  ${({ rootStyles }) => rootStyles};
`

export default StyledSubMenuContent
