'use client'

// React Imports
import { Children, cloneElement, forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react'
import type {
  AnchorHTMLAttributes,
  ForwardRefRenderFunction,
  KeyboardEvent,
  MouseEvent,
  ReactElement,
  ReactNode
} from 'react'

// Next Imports
import { usePathname } from 'next/navigation'

// Third Party Imports
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
import type { ACLPropsType, ChildrenType, SubMenuItemElement } from '../../types'

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
  Partial<ChildrenType> & {
    label: string | ReactNode
    icon?: ReactNode
    prefix?: ReactNode
    suffix?: ReactNode

    // open?: boolean
    defaultOpen?: boolean
    active?: boolean
    disabled?: boolean
    rootStyles?: CSSObject
    component?: string | ReactElement
    i18nKey?: string
    aclProps?: ACLPropsType

    // onOpenChange?: (open: boolean) => void

    /**
     * @ignore
     */
    level?: number
  }

type StyledSubMenuProps = Pick<SubMenuProps, 'rootStyles' | 'active' | 'disabled'> & {
  level: number
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
    label,
    icon,
    title,
    prefix,
    suffix,

    // open: openSubmenu,
    defaultOpen,
    level = 0,
    disabled = false,
    rootStyles,
    component,

    // onOpenChange,
    onClick,
    onKeyUp,
    ...rest
  } = props
  const { isCollapsed, transitionOptions, isPopoutWhenCollapsed, isHovered } = useVerticalNav()
  const {
    triggerPopout,
    renderExpandIcon,
    menuItemStyles,
    openSubmenu,
    toggleOpenSubmenu,

    // subMenuOpenBehavior,
    openSubmenusRef
  } = useVerticalMenu()
  const rendersCount = useRendersCount()

  // const [open, setOpen] = useState<boolean>(!!defaultOpen)

  // const [openDefault, setOpenDefault] = useState<boolean>(!!defaultOpen)
  const [openWhenCollapsed, setOpenWhenCollapsed] = useState<boolean>(false)
  const [active, setActive] = useState<boolean>(false)

  // Hooks
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
    handleClose: safePolygon(), // safePolygon function allows us to reach to submenu
    restMs: 25, // Only opens submenu when cursor rests for 25ms on a menu
    enabled: triggerPopout === 'hover' // Only enable hover effect when triggerPopout option is set to 'hover'
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
    toggleOpenSubmenu?.({ level, label, active })
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
        open: openSubmenu?.some((item: OpenSubmenu) => item.label === label) ?? false
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
  }, [isCollapsed, level, transitionOptions, active])

  useEffect(() => {
    if (confirmUrlInChildren(children, pathname)) {
      openSubmenusRef?.current.push({ level, label, active: true })
    } else {
      if (defaultOpen) {
        openSubmenusRef?.current.push({ level, label, active: false })
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Change active state when the url changes
  useEffect(() => {
    // Check if the current url matches any of the children urls
    if (confirmUrlInChildren(children, pathname)) {
      setActive(true)

      if (openSubmenusRef?.current.findIndex(submenu => submenu.label === label) === -1) {
        openSubmenusRef?.current.push({ level, label, active: true })
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
        { [menuClasses.subMenuRoot]: level === 0 },
        { [menuClasses.active]: active },
        { [menuClasses.disabled]: disabled },
        { [menuClasses.open]: openSubmenu?.some((item: OpenSubmenu) => item.label === label) ?? false },
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
        className={menuClasses.button}
        component={component}
        tabIndex={0}
        active={active}
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
            transitionOptions={transitionOptions}
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
            transitionOptions={transitionOptions}
            firstLevel={level === 0}
            className={menuClasses.suffix}
            rootStyles={getSubMenuItemStyles('suffix')}
          >
            {suffix}
          </StyledMenuSuffix>
        )}

        {/* Sub Menu Toggle Icon Wrapper */}
        <StyledVerticalNavExpandIconWrapper
          className={menuClasses.SubMenuExpandIcon}
          isCollapsed={isCollapsed}
          level={level}
          isHovered={isHovered}
          rootStyles={getSubMenuItemStyles('SubMenuExpandIcon')}
        >
          {renderExpandIcon ? (
            renderExpandIcon({
              level,
              disabled,
              active,
              open: openSubmenu?.some((item: OpenSubmenu) => item.label === label) ?? false
            })
          ) : isCollapsed && !isHovered && level === 0 ? null : (
            // eslint-disable-next-line lines-around-comment
            /* Expanded Arrow Icon */
            <StyledVerticalNavExpandIcon
              open={openSubmenu?.some((item: OpenSubmenu) => item.label === label) ?? false}
            />
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
        // eslint-disable-next-line lines-around-comment
        // open={openSubmenu ?? open}
        open={openSubmenu?.some((item: OpenSubmenu) => item.label === label) ?? false}
        firstLevel={level === 0}
        isCollapsed={isCollapsed}
        isHovered={isHovered}
        // eslint-disable-next-line lines-around-comment
        // defaultOpen={openDefault}
        className={menuClasses.subMenuContent}
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
