'use client'

// React Imports
import { createContext, forwardRef, useMemo } from 'react'
import type { ForwardRefRenderFunction, MenuHTMLAttributes, ReactNode } from 'react'

// Third Party Imports
import classNames from 'classnames'
import { FloatingTree } from '@floating-ui/react'
import type { CSSObject } from '@emotion/react'

// Util Imports
import { menuClasses } from '../../utils/utilityClasses'

// Styled Component Imports
import StyledMenu from '../../styles/StyledMenu'
import StyledHorizontalUl from '../../styles/horizontal/StyledHorizontalUl'

// Menu Item Styles Params Type
export type MenuItemStylesParams = {
  level: number
  disabled: boolean
  active?: boolean
  isSubmenu: boolean
  open?: boolean
}

// Menu Item Style Elements Type
export type ElementStyles = CSSObject | ((params: MenuItemStylesParams) => CSSObject | undefined)

// Menu Item Styles Type
export type MenuItemStyles = {
  root?: ElementStyles
  button?: ElementStyles
  label?: ElementStyles
  prefix?: ElementStyles
  suffix?: ElementStyles
  icon?: ElementStyles
  subMenuContent?: ElementStyles
  SubMenuExpandIcon?: ElementStyles
}

export type RenderExpandIconParams = {
  level: number
  disabled: boolean
  active: boolean
  open: boolean
}

export type HorizontalMenuContextProps = {
  triggerPopout?: 'hover' | 'click'
  browserScroll?: boolean
  menuItemStyles?: MenuItemStyles
  renderExpandIcon?: (params: RenderExpandIconParams) => ReactNode
  transitionOptions?: {
    duration?: number | string
    easing?: string
    delay?: number | string
  }
}

export type MenuProps = HorizontalMenuContextProps &
  MenuHTMLAttributes<HTMLMenuElement> & {
    rootStyles?: CSSObject
    children?: ReactNode
  }

const transitionOptionsDefaults = {
  easing: 'ease-in-out',
  duration: 300,
  delay: 0
}

export const HorizontalMenuContext = createContext({} as HorizontalMenuContextProps)

const Menu: ForwardRefRenderFunction<HTMLMenuElement, MenuProps> = (props, ref) => {
  const {
    children,
    className,
    rootStyles,
    menuItemStyles,
    triggerPopout = 'hover',
    browserScroll = false,
    transitionOptions = transitionOptionsDefaults,
    renderExpandIcon,
    ...rest
  } = props

  const providerValue = useMemo(
    () => ({ triggerPopout, browserScroll, transitionOptions, menuItemStyles, renderExpandIcon }),
    [triggerPopout, browserScroll, transitionOptions, menuItemStyles, renderExpandIcon]
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
