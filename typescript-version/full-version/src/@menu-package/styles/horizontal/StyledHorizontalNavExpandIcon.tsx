// Third-party Imports
import styled from '@emotion/styled'

// Type Imports
import type { RootStylesType } from '../../types'
import type { HorizontalMenuContextProps } from '../../components/horizontal-menu/Menu'

type StyledHorizontalNavExpandIconProps = {
  level?: number
  transitionDuration?: HorizontalMenuContextProps['transitionDuration']
}

export const StyledHorizontalNavExpandIconWrapper = styled.span<RootStylesType>`
  display: flex;
  margin-inline-start: 5px;
  ${({ rootStyles }) => rootStyles};
`

const StyledHorizontalNavExpandIcon = styled.span<StyledHorizontalNavExpandIconProps>`
  display: flex;

  & > i,
  & > svg {
    transition: ${({ transitionDuration }) => `transform ${transitionDuration}ms ease-in-out`};
    ${({ level }) => level === 0 && 'transform: rotate(90deg);'}
  }

  [dir='rtl'] & > i,
  [dir='rtl'] & > svg {
    ${({ level }) => level && level > 0 && 'transform: rotate(180deg);'}
  }
`

export default StyledHorizontalNavExpandIcon
