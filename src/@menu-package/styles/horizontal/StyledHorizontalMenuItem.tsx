// Third Party Imports
import styled from '@emotion/styled'
import type { CSSObject } from '@emotion/styled'

// Type Imports
import type { MenuItemProps } from '../../components/horizontal-menu/MenuItem'

// Util Imports
import { menuClasses } from '../../utils/utilityClasses'

// Style Imports
import { menuButtonStyles } from '../../components/horizontal-menu/MenuButton'

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
