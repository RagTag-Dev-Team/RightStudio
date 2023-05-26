// React Imports
import { forwardRef } from 'react'
import type { AnchorHTMLAttributes, ForwardRefRenderFunction, ReactElement, ReactNode } from 'react'

// Third Party Imports
import classNames from 'classnames'
import type { CSSObject } from '@emotion/react'

// Component Imports
import MenuButton from './MenuButton'

// Hook Imports
import useHorizontalMenu from '../../hooks/useHorizontalMenu'
import useVerticalNav from '../../hooks/useVerticalNav'

// Util Imports
import { menuClasses } from '../../utils/utilityClasses'

// Styled Component Imports
import StyledMenuIcon from '../../styles/StyledMenuIcon'
import StyledMenuLabel from '../../styles/StyledMenuLabel'
import StyledMenuPrefix from '../../styles/StyledMenuPrefix'
import StyledMenuSuffix from '../../styles/StyledMenuSuffix'
import StyledHorizontalMenuItem from '../../styles/horizontal/StyledHorizontalMenuItem'

export type MenuItemProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> & {
  icon?: ReactNode
  prefix?: ReactNode
  suffix?: ReactNode
  disabled?: boolean
  target?: string
  rel?: string
  aclProps?: { action: string; subject: string }
  i18nKey?: string
  children?: ReactNode
  component?: string | ReactElement
  rootStyles?: CSSObject
  transitionOptions?: {
    duration?: number | string
    easing?: string
    delay?: number | string
  }

  /**
   * @ignore
   */
  level?: number
}

type MenuItemElement = 'root' | 'button' | 'icon' | 'label' | 'prefix' | 'suffix'

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
    transitionOptions,
    component,
    rootStyles,
    ...rest
  } = props

  // Hooks
  const { menuItemStyles } = useHorizontalMenu()
  const { toggleVerticalNav, isToggled } = useVerticalNav()

  const getMenuItemStyles = (element: MenuItemElement): CSSObject | undefined => {
    // If the menuItemStyles prop is provided, get the styles for the
    // specified element.
    if (menuItemStyles) {
      // Define the parameters that are passed to the style functions.
      const params = { level, disabled, isSubmenu: false }

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

  return (
    <StyledHorizontalMenuItem
      ref={ref}
      className={classNames(
        { [menuClasses.menuItemRoot]: level === 0 },

        // { [menuClasses.active]: exactMatch },
        { [menuClasses.disabled]: disabled },
        className
      )}
      level={level}
      disabled={disabled}
      buttonStyles={getMenuItemStyles('button')}
      menuItemStyles={getMenuItemStyles('root')}
      rootStyles={rootStyles}
    >
      <MenuButton className={menuClasses.button} component={component} tabIndex={0} {...rest} onClick={handleClick}>
        {icon && (
          <StyledMenuIcon className={menuClasses.icon} rootStyles={getMenuItemStyles('icon')}>
            {icon}
          </StyledMenuIcon>
        )}

        {prefix && (
          <StyledMenuPrefix
            transitionOptions={transitionOptions}
            firstLevel={level === 0}
            className={menuClasses.prefix}
            rootStyles={getMenuItemStyles('prefix')}
          >
            {prefix}
          </StyledMenuPrefix>
        )}

        <StyledMenuLabel className={menuClasses.label} rootStyles={getMenuItemStyles('label')}>
          {children}
        </StyledMenuLabel>

        {suffix && (
          <StyledMenuSuffix
            transitionOptions={transitionOptions}
            firstLevel={level === 0}
            className={menuClasses.suffix}
            rootStyles={getMenuItemStyles('suffix')}
          >
            {suffix}
          </StyledMenuSuffix>
        )}
      </MenuButton>
    </StyledHorizontalMenuItem>
  )
}

export default forwardRef(MenuItem)
