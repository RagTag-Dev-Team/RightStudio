import styled, { CSSObject } from '@emotion/styled'
import { menuButtonStyles } from '../../components/vertical-menu/MenuButton'
import { menuClasses } from '../../utils/utilityClasses'
import { MenuItemProps } from '../../components/vertical-menu/MenuItem'

type StyledVerticalMenuItemProps = Pick<MenuItemProps, 'rootStyles' | 'active' | 'disabled'> & {
  level: number
  menuItemStyles?: CSSObject
  isCollapsed?: boolean
  isPopoutWhenCollapsed?: boolean
  buttonStyles?: CSSObject
}

const StyledVerticalMenuItem = styled.li<StyledVerticalMenuItemProps>`
  position: relative;
  ${({ menuItemStyles }) => menuItemStyles};
  ${({ rootStyles }) => rootStyles};

  > .${menuClasses.button} {
    ${({ level, disabled, active, isCollapsed, isPopoutWhenCollapsed }) =>
      menuButtonStyles({
        level,
        disabled,
        active,
        isCollapsed,
        isPopoutWhenCollapsed
      })};
    ${({ buttonStyles }) => buttonStyles};
  }
`

export default StyledVerticalMenuItem
