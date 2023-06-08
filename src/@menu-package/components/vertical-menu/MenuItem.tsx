'use client'

// React Imports
import { forwardRef, useEffect, useState } from 'react'
import type { AnchorHTMLAttributes, ForwardRefRenderFunction, ReactElement, ReactNode } from 'react'

// Next Imports
import { usePathname } from 'next/navigation'

// Third-party Imports
import classNames from 'classnames'
import { useRendersCount, useUpdateEffect } from 'react-use'
import type { CSSObject } from '@emotion/react'

// Type Imports
import type { ChildrenType, MenuItemElement, RootStylesType } from '../../types'

// Hook Imports
import useVerticalNav from '../../hooks/useVerticalNav'
import useVerticalMenu from '../../hooks/useVerticalMenu'

// Util Imports
import { menuClasses } from '../../utils/utilityClasses'

// Styled Component Imports
import MenuButton from './MenuButton'
import StyledMenuIcon from '../../styles/StyledMenuIcon'
import StyledMenuLabel from '../../styles/StyledMenuLabel'
import StyledMenuPrefix from '../../styles/StyledMenuPrefix'
import StyledMenuSuffix from '../../styles/StyledMenuSuffix'
import StyledVerticalMenuItem from '../../styles/vertical/StyledVerticalMenuItem'

export type MenuItemProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> &
  RootStylesType &
  Partial<ChildrenType> & {
    icon?: ReactElement
    prefix?: ReactNode
    suffix?: ReactNode
    disabled?: boolean
    target?: string
    rel?: string
    component?: string | ReactElement
    onActiveChange?: (active: boolean) => void

    /**
     * @ignore
     */
    level?: number
  }

const MenuItem: ForwardRefRenderFunction<HTMLLIElement, MenuItemProps> = (props, ref) => {
  // Props
  const {
    children,
    icon,
    className,
    prefix,
    suffix,
    level = 0,
    disabled = false,
    component,
    onActiveChange,
    rootStyles,
    ...rest
  } = props

  // State
  const [active, setActive] = useState(false)

  // Hooks
  const pathname = usePathname()
  const { isCollapsed, isHovered, isPopoutWhenCollapsed, toggleVerticalNav, isToggled } = useVerticalNav()
  const { menuItemStyles } = useVerticalMenu()
  const rendersCount = useRendersCount()

  // Get the styles for the specified element.
  const getMenuItemStyles = (element: MenuItemElement): CSSObject | undefined => {
    // If the menuItemStyles prop is provided, get the styles for the
    // specified element.
    if (menuItemStyles) {
      // Define the parameters that are passed to the style functions.
      const params = { level, disabled, active, isSubmenu: false }

      // Get the style function for the specified element.
      const styleFunction = menuItemStyles[element]

      if (styleFunction) {
        // If the style function is a function, call it and return the result.
        // Otherwise, return the style function itself.
        return typeof styleFunction === 'function' ? styleFunction(params) : styleFunction
      }
    }
  }

  // Handle the click event.
  const handleClick = () => {
    if (isToggled) {
      toggleVerticalNav()
    }
  }

  // Change active state when the url changes
  useEffect(() => {
    const href = rest.href || (component && typeof component !== 'string' && component.props.href)

    if (href) {
      // Check if the current url matches any of the children urls
      if (pathname === href) {
        setActive(true)
      } else {
        setActive(false)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // Call the onActiveChange callback when the active state changes.
  useUpdateEffect(() => {
    onActiveChange?.(active)
  }, [active])

  return (
    <StyledVerticalMenuItem
      ref={ref}
      className={classNames(
        menuClasses.menuItemRoot,
        { [menuClasses.disabled]: disabled },
        { [menuClasses.active]: active },
        className
      )}
      level={level}
      isCollapsed={isCollapsed}
      isPopoutWhenCollapsed={isPopoutWhenCollapsed}
      disabled={disabled}
      active={active}
      buttonStyles={getMenuItemStyles('button')}
      menuItemStyles={getMenuItemStyles('root')}
      rootStyles={rootStyles}
    >
      <MenuButton
        className={classNames(menuClasses.button, { [menuClasses.active]: active })}
        component={component}
        tabIndex={disabled ? -1 : 0}
        onClick={handleClick}
        {...rest}
      >
        {icon && (
          <StyledMenuIcon className={menuClasses.icon} rootStyles={getMenuItemStyles('icon')}>
            {icon}
          </StyledMenuIcon>
        )}

        {prefix && (
          <StyledMenuPrefix
            isHovered={isHovered}
            isCollapsed={isCollapsed}
            firstLevel={level === 0}
            className={menuClasses.prefix}
            rootStyles={getMenuItemStyles('prefix')}
          >
            {prefix}
          </StyledMenuPrefix>
        )}

        <StyledMenuLabel className={menuClasses.label} rootStyles={getMenuItemStyles('label')}>
          {children} {rendersCount}
        </StyledMenuLabel>

        {suffix && (
          <StyledMenuSuffix
            isHovered={isHovered}
            isCollapsed={isCollapsed}
            firstLevel={level === 0}
            className={menuClasses.suffix}
            rootStyles={getMenuItemStyles('suffix')}
          >
            {suffix}
          </StyledMenuSuffix>
        )}
      </MenuButton>
    </StyledVerticalMenuItem>
  )
}

export default forwardRef(MenuItem)
