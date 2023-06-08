// Third-party Imports
import styled from '@emotion/styled'
import type { CSSObject } from '@emotion/styled'

// Type Imports
import type { MenuSectionProps } from '../../components/vertical-menu/MenuSection'

type StyledVerticalMenuSectionProps = Pick<MenuSectionProps, 'rootStyles' | 'children'> & {
  menuSectionStyles?: CSSObject
}

const StyledVerticalMenuSection = styled.li<StyledVerticalMenuSectionProps>`
  display: inline-block;
  inline-size: 100%;
  position: relative;
  overflow: hidden;
  ${({ menuSectionStyles }) => menuSectionStyles};
  ${({ rootStyles }) => rootStyles};
`

export default StyledVerticalMenuSection
