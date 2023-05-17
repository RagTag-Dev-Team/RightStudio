import styled from '@emotion/styled'
import { SubMenuContentProps } from '../../components/horizontal-menu/SubMenuContent'

const StyledHorizontalSubMenuContent = styled.div<SubMenuContentProps>`
  min-inline-size: 200px;
  border-radius: 4px;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  inline-size: max-content;
  outline: none;
  box-sizing: border-box;
  background-color: white;

  ${({ browserScroll }) =>
    browserScroll && `overflow-y: auto; max-block-size: calc((var(--vh, 1vh) * 100) - 120px - 4rem);`}
  ${({ strategy }) => strategy && `position: ${strategy};`}
  ${({ top }) => top && `top: ${top}px;`}
  ${({ left }) => left && `left: ${left}px;`}
  ${({ rootStyles }) => rootStyles};
`

export default StyledHorizontalSubMenuContent
