'use client'

// React Imports
import { createContext, forwardRef, useMemo } from 'react'
import type { ForwardRefRenderFunction, MenuHTMLAttributes, ReactElement } from 'react'

// Third-party Imports
import classNames from 'classnames'
import { FloatingTree } from '@floating-ui/react'

// Type Imports
import type {
  ChildrenType,
  MenuItemStyles,
  RenderExpandIconParams,
  RenderExpandedMenuItemIcon,
  RootStylesType
} from '../../types'

// Util Imports
import { menuClasses } from '../../utils/utilityClasses'

// Styled Component Imports
import StyledMenu from '../../styles/StyledMenu'
import StyledHorizontalUl from '../../styles/horizontal/StyledHorizontalUl'

// Default Config Imports
import { horizontalSubMenuToggleDuration } from '../../defaultConfigs'

export type HorizontalMenuContextProps = {
  triggerPopout?: 'hover' | 'click'
  browserScroll?: boolean
  menuItemStyles?: MenuItemStyles
  renderExpandIcon?: (params: RenderExpandIconParams) => ReactElement
  renderExpandedMenuItemIcon?: RenderExpandedMenuItemIcon
  transitionDuration?: number
}

export type MenuProps = HorizontalMenuContextProps &
  RootStylesType &
  Partial<ChildrenType> &
  MenuHTMLAttributes<HTMLMenuElement>

export const HorizontalMenuContext = createContext({} as HorizontalMenuContextProps)

const Menu: ForwardRefRenderFunction<HTMLMenuElement, MenuProps> = (props, ref) => {
  const {
    children,
    className,
    rootStyles,
    menuItemStyles,
    triggerPopout = 'hover',
    browserScroll = false,
    transitionDuration = horizontalSubMenuToggleDuration,
    renderExpandIcon,
    renderExpandedMenuItemIcon,
    ...rest
  } = props

  const providerValue = useMemo(
    () => ({
      triggerPopout,
      browserScroll,
      menuItemStyles,
      renderExpandIcon,
      renderExpandedMenuItemIcon,
      transitionDuration
    }),
    [triggerPopout, browserScroll, menuItemStyles, renderExpandIcon, renderExpandedMenuItemIcon, transitionDuration]
  )

  return (
    <HorizontalMenuContext.Provider value={providerValue}>
      <FloatingTree>
        <StyledMenu ref={ref} className={classNames(menuClasses.root, className)} rootStyles={rootStyles} {...rest}>
          <StyledHorizontalUl>{children}</StyledHorizontalUl>
        </StyledMenu>
      </FloatingTree>
    </HorizontalMenuContext.Provider>
  )
}

export default forwardRef(Menu)
