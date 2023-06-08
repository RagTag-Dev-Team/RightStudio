// Third-party Imports
import styled from '@emotion/styled'

// Type Imports
import type { SubMenuContentProps } from '../../components/horizontal-menu/SubMenuContent'

const StyledHorizontalSubMenuContent = styled.div<SubMenuContentProps>`
  inline-size: 260px;
  border-radius: 4px;
  box-shadow: 0 9px 28px 8px #00000011;
  outline: none;
  box-sizing: border-box;
  background-color: white;
  overflow: hidden;

  ${({ browserScroll }) =>
    browserScroll && `overflow-y: auto; max-block-size: calc((var(--vh, 1vh) * 100) - 120px - 4rem);`}
  ${({ strategy }) => strategy && `position: ${strategy};`}
  ${({ top }) => top && `top: ${top}px;`}
  ${({ left }) => left && `left: ${left}px;`}
  ${({ rootStyles }) => rootStyles};
`

export default StyledHorizontalSubMenuContent
