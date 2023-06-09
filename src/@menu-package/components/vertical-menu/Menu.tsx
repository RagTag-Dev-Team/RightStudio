'use client'

// React Imports
import { createContext, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { ForwardRefRenderFunction, MenuHTMLAttributes, MutableRefObject, ReactElement, ReactNode } from 'react'

// Next Imports
import { usePathname } from 'next/navigation'

// Third-party Imports
import classNames from 'classnames'
import type { CSSObject } from '@emotion/react'

// Type Imports
import { FloatingTree } from '@floating-ui/react'

import type { ChildrenType, MenuItemStyles, RenderExpandIconParams, RootStylesType } from '../../types'

// Util Imports
import { menuClasses } from '../../utils/utilityClasses'

// Styled Component Imports
import StyledUl from '../../styles/StyledUl'
import StyledMenu from '../../styles/StyledMenu'

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
  triggerPopout?: 'hover' | 'click'
  transitionDuration?: number
  menuSectionStyles?: MenuSectionStyles
  menuItemStyles?: MenuItemStyles
  subMenuOpenBehavior?: 'accordion' | 'collapse'
  renderExpandIcon?: (params: RenderExpandIconParams) => ReactElement

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
  MenuHTMLAttributes<HTMLMenuElement>

export const VerticalMenuContext = createContext({} as VerticalMenuContextProps)

const Menu: ForwardRefRenderFunction<HTMLMenuElement, MenuProps> = (props, ref) => {
  const {
    children,
    className,
    rootStyles,
    menuItemStyles,
    renderExpandIcon,
    menuSectionStyles,
    triggerPopout = 'hover',
    subMenuOpenBehavior = 'accordion', // accordion, collapse
    transitionDuration = verticalSubMenuToggleDuration,
    ...rest
  } = props

  const openSubmenusRef = useRef<OpenSubmenu[]>([])
  const [openSubmenu, setOpenSubmenu] = useState<OpenSubmenu[]>([])

  const pathname = usePathname()

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

  const providerValue = useMemo(
    () => ({
      triggerPopout,
      transitionDuration,
      menuItemStyles,
      menuSectionStyles,
      renderExpandIcon,
      openSubmenu,
      openSubmenusRef,
      toggleOpenSubmenu,
      subMenuOpenBehavior
    }),
    [
      triggerPopout,
      transitionDuration,
      menuItemStyles,
      menuSectionStyles,
      renderExpandIcon,
      openSubmenu,
      openSubmenusRef,
      toggleOpenSubmenu,
      subMenuOpenBehavior
    ]
  )

  return (
    <VerticalMenuContext.Provider value={providerValue}>
      <FloatingTree>
        <StyledMenu ref={ref} className={classNames(menuClasses.root, className)} rootStyles={rootStyles} {...rest}>
          <StyledUl>{children}</StyledUl>
        </StyledMenu>
      </FloatingTree>
    </VerticalMenuContext.Provider>
  )
}

export default forwardRef(Menu)
