'use client'

// React Imports
import { createContext, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { ForwardRefRenderFunction, MenuHTMLAttributes, MutableRefObject, ReactElement, ReactNode } from 'react'

// Next Imports
import { usePathname } from 'next/navigation'

// Third-party Imports
import classNames from 'classnames'
import type { CSSObject } from '@emotion/react'
import { FloatingTree } from '@floating-ui/react'

// Type Imports
import type {
  ChildrenType,
  MenuItemStyles,
  RootStylesType,
  RenderExpandIconParams,
  RenderExpandedMenuItemIcon
} from '../../types'

// Hook Imports
import useVerticalNav from '../../hooks/useVerticalNav'

// Util Imports
import { menuClasses } from '../../utils/utilityClasses'

// Styled Component Imports
import StyledUl from '../../styles/StyledUl'
import StyledVerticalMenu from '../../styles/vertical/StyledVerticalMenu'

// Default Config Imports
import { verticalSubMenuToggleDuration } from '../../defaultConfigs'

// Menu Section Styles Type
export type MenuSectionStyles = {
  root?: CSSObject
  label?: CSSObject
  prefix?: CSSObject
  suffix?: CSSObject
  icon?: CSSObject
}

export type OpenSubmenu = {
  level: number
  label: ReactNode
  active: boolean
  id: string
}

export type VerticalMenuContextProps = {
  browserScroll?: boolean
  triggerPopout?: 'hover' | 'click'
  transitionDuration?: number
  menuSectionStyles?: MenuSectionStyles
  menuItemStyles?: MenuItemStyles
  subMenuOpenBehavior?: 'accordion' | 'collapse'
  renderExpandIcon?: (params: RenderExpandIconParams) => ReactElement
  renderExpandedMenuItemIcon?: RenderExpandedMenuItemIcon
  collapsedMenuSectionLabel?: ReactNode
  popoutMenuOffset?: {
    mainAxis?: number | ((params: { level?: number }) => number)
    alignmentAxis?: number | ((params: { level?: number }) => number)
  }

  /**
   * @ignore
   */
  openSubmenu?: OpenSubmenu[]

  /**
   * @ignore
   */
  openSubmenusRef?: MutableRefObject<OpenSubmenu[]>

  /**
   * @ignore
   */
  toggleOpenSubmenu?: (...submenus: { level: number; label: ReactNode; active?: boolean; id: string }[]) => void
}

export type MenuProps = VerticalMenuContextProps &
  RootStylesType &
  Partial<ChildrenType> &
  MenuHTMLAttributes<HTMLMenuElement> & {
    popoutWhenCollapsed?: boolean
  }

export const VerticalMenuContext = createContext({} as VerticalMenuContextProps)

const Menu: ForwardRefRenderFunction<HTMLMenuElement, MenuProps> = (props, ref) => {
  const {
    children,
    className,
    rootStyles,
    menuItemStyles,
    renderExpandIcon,
    renderExpandedMenuItemIcon,
    menuSectionStyles,
    browserScroll = false,
    triggerPopout = 'hover',
    popoutWhenCollapsed = false,
    subMenuOpenBehavior = 'accordion', // accordion, collapse
    transitionDuration = verticalSubMenuToggleDuration,
    collapsedMenuSectionLabel = '-',
    popoutMenuOffset = { mainAxis: 0 },
    ...rest
  } = props

  const openSubmenusRef = useRef<OpenSubmenu[]>([])
  const [openSubmenu, setOpenSubmenu] = useState<OpenSubmenu[]>([])

  // Hooks
  const pathname = usePathname()
  const { updateVerticalNavState } = useVerticalNav()

  const toggleOpenSubmenu = useCallback(
    (...submenus: { level: number; label: ReactNode; active?: boolean; id: string }[]): void => {
      if (!submenus.length) return

      const openSubmenuCopy = [...openSubmenu]

      submenus.forEach(({ level, label, active = false, id }) => {
        const submenuIndex = openSubmenuCopy.findIndex(submenu => submenu.id === id)
        const submenuExists = submenuIndex >= 0
        const isAccordion = subMenuOpenBehavior === 'accordion'

        // const activeSubmenuIndex = openSubmenuCopy.findIndex(submenu => submenu.active && submenu.level === 0)
        const inactiveSubmenuIndex = openSubmenuCopy.findIndex(submenu => !submenu.active && submenu.level === 0)

        // Delete submenu if it exists
        if (submenuExists) {
          openSubmenuCopy.splice(submenuIndex, 1)
        }

        if (isAccordion) {
          // Add submenu if it doesn't exist
          if (!submenuExists) {
            if (inactiveSubmenuIndex >= 0 && !active && level === 0) {
              openSubmenuCopy.splice(inactiveSubmenuIndex, 1, { level, label, active, id })
            } else {
              openSubmenuCopy.push({ level, label, active, id })
            }
          }
        } else {
          // Add submenu if it doesn't exist
          if (!submenuExists) {
            openSubmenuCopy.push({ level, label, active, id })
          }
        }
      })

      setOpenSubmenu(openSubmenuCopy)
    },
    [openSubmenu, subMenuOpenBehavior]
  )

  useEffect(() => {
    // if (openSubmenusRef.current.length) {
    setOpenSubmenu([...openSubmenusRef.current])
    openSubmenusRef.current = []

    // }
  }, [pathname])

  // UseEffect, update verticalNav state to set initial values and update values on change
  useEffect(() => {
    updateVerticalNavState({
      isPopoutWhenCollapsed: popoutWhenCollapsed
    })
  }, [popoutWhenCollapsed, updateVerticalNavState])

  const providerValue = useMemo(
    () => ({
      browserScroll,
      triggerPopout,
      transitionDuration,
      menuItemStyles,
      menuSectionStyles,
      renderExpandIcon,
      renderExpandedMenuItemIcon,
      openSubmenu,
      openSubmenusRef,
      toggleOpenSubmenu,
      subMenuOpenBehavior,
      collapsedMenuSectionLabel,
      popoutMenuOffset
    }),
    [
      browserScroll,
      triggerPopout,
      transitionDuration,
      menuItemStyles,
      menuSectionStyles,
      renderExpandIcon,
      renderExpandedMenuItemIcon,
      openSubmenu,
      openSubmenusRef,
      toggleOpenSubmenu,
      subMenuOpenBehavior,
      collapsedMenuSectionLabel,
      popoutMenuOffset
    ]
  )

  return (
    <VerticalMenuContext.Provider value={providerValue}>
      <FloatingTree>
        <StyledVerticalMenu
          ref={ref}
          className={classNames(menuClasses.root, className)}
          rootStyles={rootStyles}
          {...rest}
        >
          <StyledUl>{children}</StyledUl>
        </StyledVerticalMenu>
      </FloatingTree>
    </VerticalMenuContext.Provider>
  )
}

export default forwardRef(Menu)
