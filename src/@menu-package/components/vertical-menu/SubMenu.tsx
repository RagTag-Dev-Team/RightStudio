'use client'

// React Imports
import { Children, cloneElement, forwardRef, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import type { AnchorHTMLAttributes, ForwardRefRenderFunction, KeyboardEvent, MouseEvent, ReactElement } from 'react'

// Next Imports
import { usePathname } from 'next/navigation'

// Third-party Imports
import classnames from 'classnames'
import styled from '@emotion/styled'
import { useRendersCount } from 'react-use'
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useRole,
  useInteractions,
  useClick,
  safePolygon,
  useDismiss,
  hide
} from '@floating-ui/react'
import type { CSSObject } from '@emotion/styled'

// Type Imports
import type { OpenSubmenu } from './Menu'
import type { MenuItemProps } from './MenuItem'
import type { ChildrenType, RootStylesType, SubMenuItemElement } from '../../types'

// Component Imports
import SubMenuContent from './SubMenuContent'
import MenuButton, { menuButtonStyles } from './MenuButton'

// Hook Imports
import useVerticalNav from '../../hooks/useVerticalNav'
import useVerticalMenu from '../../hooks/useVerticalMenu'

// Util Imports
import { menuClasses } from '../../utils/utilityClasses'
import { confirmUrlInChildren } from '../../utils/menuUtils'

// Styled Component Imports
import StyledMenuLabel from '../../styles/StyledMenuLabel'
import StyledMenuIcon from '../../styles/StyledMenuIcon'
import StyledMenuPrefix from '../../styles/StyledMenuPrefix'
import StyledMenuSuffix from '../../styles/StyledMenuSuffix'
import StyledVerticalNavExpandIcon, {
  StyledVerticalNavExpandIconWrapper
} from '../../styles/vertical/StyledVerticalNavExpandIcon'

export type SubMenuProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> &
  RootStylesType &
  Partial<ChildrenType> & {
    label: string | ReactElement
    icon?: ReactElement
    prefix?: string | ReactElement
    suffix?: string | ReactElement
    defaultOpen?: boolean
    disabled?: boolean
    component?: string | ReactElement
    contentClassName?: string

    // open?: boolean
    // onOpenChange?: (open: boolean) => void

    /**
     * @ignore
     */
    level?: number
  }

type StyledSubMenuProps = Pick<SubMenuProps, 'rootStyles' | 'disabled'> & {
  level: number
  active?: boolean
  menuItemStyles?: CSSObject
  isPopoutWhenCollapsed?: boolean
  buttonStyles?: CSSObject
}

const StyledSubMenu = styled.li<StyledSubMenuProps>`
  position: relative;
  inline-size: 100%;
  ${({ menuItemStyles }) => menuItemStyles};
  ${({ rootStyles }) => rootStyles};

  > .${menuClasses.button} {
    ${({ level, disabled, active, children, isPopoutWhenCollapsed }) =>
      menuButtonStyles({
        level,
        disabled,
        active,
        children,
        isPopoutWhenCollapsed
      })};
    ${({ buttonStyles }) => buttonStyles};
  }
`

const SubMenu: ForwardRefRenderFunction<HTMLLIElement, SubMenuProps> = (props, ref) => {
  const {
    children,
    className,
    contentClassName,
    label,
    icon,
    title,
    prefix,
    suffix,
    defaultOpen,
    level = 0,
    disabled = false,
    rootStyles,
    component,

    // open: openSubmenu,
    // onOpenChange,
    onClick,
    onKeyUp,
    ...rest
  } = props
  const { isCollapsed, isPopoutWhenCollapsed, isHovered } = useVerticalNav()
  const {
    triggerPopout,
    renderExpandIcon,
    menuItemStyles,
    openSubmenu,
    toggleOpenSubmenu,
    transitionDuration,

    // subMenuOpenBehavior,
    openSubmenusRef
  } = useVerticalMenu()
  const rendersCount = useRendersCount()

  // const [open, setOpen] = useState<boolean>(!!defaultOpen)
  // const [openDefault, setOpenDefault] = useState<boolean>(!!defaultOpen)
  const [openWhenCollapsed, setOpenWhenCollapsed] = useState<boolean>(false)
  const [active, setActive] = useState<boolean>(false)

  // Hooks
  const id = useId()
  const pathname = usePathname()

  const childNodes = Children.toArray(children).filter(Boolean) as [ReactElement<SubMenuProps | MenuItemProps>]

  const contentRef = useRef<HTMLDivElement>(null)

  const { x, y, strategy, refs, context } = useFloating({
    strategy: 'fixed',
    open: openWhenCollapsed,
    onOpenChange: setOpenWhenCollapsed,
    placement: 'right-start',
    middleware: [offset(10), flip(), shift(), hide()],
    whileElementsMounted: autoUpdate
  })

  const hover = useHover(context, {
    handleClose: safePolygon({
      blockPointerEvents: true
    }), // safePolygon function allows us to reach to submenu
    restMs: 25, // Only opens submenu when cursor rests for 25ms on a menu
    enabled: triggerPopout === 'hover', // Only enable hover effect when triggerPopout option is set to 'hover'
    delay: { open: 75 } // Delay opening submenu by 75ms
  })
  const click = useClick(context, {
    enabled: triggerPopout === 'click' // Only enable click effect when triggerPopout option is set to 'click'
  })
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: 'menu' })

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([hover, click, dismiss, role])

  const handleSlideToggle = (): void => {
    if (level === 0 && isCollapsed && !isHovered) {
      return
    }

    // onOpenChange?.(!open)
    // setOpen(!open)
    toggleOpenSubmenu?.({ level, label, active, id })
    if (openSubmenusRef?.current && openSubmenusRef?.current.length > 0) openSubmenusRef.current = []
  }

  const handleOnClick = (event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    onClick?.(event)
    handleSlideToggle()
  }

  const handleOnKeyUp = (event: KeyboardEvent<HTMLAnchorElement>) => {
    onKeyUp?.(event)
    if (event.key === 'Enter') {
      handleSlideToggle()
    }
  }

  const getSubMenuItemStyles = (element: SubMenuItemElement): CSSObject | undefined => {
    // If the menuItemStyles prop is provided, get the styles for the
    // specified element.
    if (menuItemStyles) {
      // Define the parameters that are passed to the style functions.
      const params = {
        level,
        disabled,
        active,
        isSubmenu: true,
        open: openSubmenu?.some((item: OpenSubmenu) => item.id === id) ?? false
      }

      // Get the style function for the specified element.
      const styleFunction = menuItemStyles[element]

      if (styleFunction) {
        // If the style function is a function, call it and return the result.
        // Otherwise, return the style function itself.
        return typeof styleFunction === 'function' ? styleFunction(params) : styleFunction
      }
    }
  }

  useLayoutEffect(() => {
    if (isCollapsed && level === 0) {
      setOpenWhenCollapsed(false)
    }
  }, [isCollapsed, level, active])

  useEffect(() => {
    if (confirmUrlInChildren(children, pathname)) {
      openSubmenusRef?.current.push({ level, label, active: true, id })
    } else {
      if (defaultOpen) {
        openSubmenusRef?.current.push({ level, label, active: false, id })
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Change active state when the url changes
  useEffect(() => {
    // Check if the current url matches any of the children urls
    if (confirmUrlInChildren(children, pathname)) {
      setActive(true)

      if (openSubmenusRef?.current.findIndex(submenu => submenu.id === id) === -1) {
        openSubmenusRef?.current.push({ level, label, active: true, id })
      }
    } else {
      setActive(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  /* useEffect(() => {
    console.log(openSubmenu)
  }, [openSubmenu]) */

  return (
    // eslint-disable-next-line lines-around-comment
    /* Sub Menu */
    <StyledSubMenu
      ref={ref}
      className={classnames(
        menuClasses.subMenuRoot,
        { [menuClasses.active]: active },
        { [menuClasses.disabled]: disabled },
        { [menuClasses.open]: openSubmenu?.some((item: OpenSubmenu) => item.id === id) ?? false },
        className
      )}
      menuItemStyles={getSubMenuItemStyles('root')}
      level={level}
      isPopoutWhenCollapsed={isPopoutWhenCollapsed}
      disabled={disabled}
      active={active}
      buttonStyles={getSubMenuItemStyles('button')}
      rootStyles={rootStyles}
    >
      {/* Menu Item */}
      <MenuButton
        ref={isCollapsed && level === 0 && isPopoutWhenCollapsed && !disabled ? refs.setReference : null}
        onClick={handleOnClick}
        {...(isCollapsed && level === 0 && isPopoutWhenCollapsed && !disabled && getReferenceProps())}
        onKeyUp={handleOnKeyUp}
        title={title}
        className={classnames(menuClasses.button, { [menuClasses.active]: active })}
        component={component}
        tabIndex={disabled ? -1 : 0}
        {...rest}
      >
        {/* Menu Item Icon */}
        {icon && (
          <StyledMenuIcon className={menuClasses.icon} rootStyles={getSubMenuItemStyles('icon')}>
            {icon}
          </StyledMenuIcon>
        )}

        {/* Menu Item Prefix */}
        {prefix && (
          <StyledMenuPrefix
            isHovered={isHovered}
            isCollapsed={isCollapsed}
            firstLevel={level === 0}
            className={menuClasses.prefix}
            rootStyles={getSubMenuItemStyles('prefix')}
          >
            {prefix}
          </StyledMenuPrefix>
        )}

        {/* Menu Item Name */}
        <StyledMenuLabel className={menuClasses.label} rootStyles={getSubMenuItemStyles('label')}>
          {label} {rendersCount}
        </StyledMenuLabel>

        {/* Menu Item Suffix */}
        {suffix && (
          <StyledMenuSuffix
            isHovered={isHovered}
            isCollapsed={isCollapsed}
            firstLevel={level === 0}
            className={menuClasses.suffix}
            rootStyles={getSubMenuItemStyles('suffix')}
          >
            {suffix}
          </StyledMenuSuffix>
        )}

        {/* Sub Menu Toggle Icon Wrapper */}
        <StyledVerticalNavExpandIconWrapper
          className={menuClasses.subMenuExpandIcon}
          isCollapsed={isCollapsed}
          level={level}
          isHovered={isHovered}
          rootStyles={getSubMenuItemStyles('subMenuExpandIcon')}
        >
          {renderExpandIcon ? (
            renderExpandIcon({
              level,
              disabled,
              active,
              open: openSubmenu?.some((item: OpenSubmenu) => item.id === id) ?? false
            })
          ) : isCollapsed && !isHovered && level === 0 ? null : (
            // eslint-disable-next-line lines-around-comment
            /* Expanded Arrow Icon */
            <StyledVerticalNavExpandIcon open={openSubmenu?.some((item: OpenSubmenu) => item.id === id) ?? false} />
          )}
        </StyledVerticalNavExpandIconWrapper>
      </MenuButton>

      {/* SubMenu Content */}
      <SubMenuContent
        ref={isCollapsed && level === 0 && isPopoutWhenCollapsed ? refs.setFloating : contentRef}
        {...(isCollapsed && level === 0 && isPopoutWhenCollapsed && getFloatingProps())}
        strategy={strategy}
        top={y ?? 0}
        left={x ?? 0}
        openWhenCollapsed={openWhenCollapsed}
        isPopoutWhenCollapsed={isPopoutWhenCollapsed}
        transitionDuration={transitionDuration}
        // eslint-disable-next-line lines-around-comment
        // open={openSubmenu ?? open}
        open={openSubmenu?.some((item: OpenSubmenu) => item.id === id) ?? false}
        firstLevel={level === 0}
        isCollapsed={isCollapsed}
        isHovered={isHovered}
        // eslint-disable-next-line lines-around-comment
        // defaultOpen={openDefault}
        className={classnames(menuClasses.subMenuContent, contentClassName)}
        rootStyles={getSubMenuItemStyles('subMenuContent')}
      >
        {childNodes.map(node =>
          cloneElement(node, {
            ...node.props,
            level: level + 1
          })
        )}
      </SubMenuContent>
    </StyledSubMenu>
  )
}

export default forwardRef<HTMLLIElement, SubMenuProps>(SubMenu)
