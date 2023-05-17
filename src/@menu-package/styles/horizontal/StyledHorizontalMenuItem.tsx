import styled, { CSSObject } from '@emotion/styled'
import { menuButtonStyles } from '../../components/horizontal-menu/MenuButton'
import { menuClasses } from '../../utils/utilityClasses'
import { MenuItemProps } from '../../components/horizontal-menu/MenuItem'

type StyledHorizontalMenuItemProps = Pick<MenuItemProps, 'rootStyles' | 'disabled'> & {
  level: number
  menuItemStyles?: CSSObject
  buttonStyles?: CSSObject
}

const StyledHorizontalMenuItem = styled.li<StyledHorizontalMenuItemProps>`
  position: relative;
  ${({ menuItemStyles }) => menuItemStyles};
  ${({ rootStyles }) => rootStyles};

  > .${menuClasses.button} {
    ${({ level, disabled }) =>
      menuButtonStyles({
        level,
        disabled
      })};
    ${({ buttonStyles }) => buttonStyles};
  }
`

export default StyledHorizontalMenuItem
