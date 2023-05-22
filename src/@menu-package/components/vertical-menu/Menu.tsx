'use client'

// React Imports
import { createContext, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { ForwardRefRenderFunction, MenuHTMLAttributes, MutableRefObject, ReactNode } from 'react'

// Next Imports
import { usePathname } from 'next/navigation'

// Third Party Imports
import classNames from 'classnames'
import type { CSSObject } from '@emotion/react'

// Util Imports
import { menuClasses } from '../../utils/utilityClasses'

// Styled Component Imports
import StyledUl from '../../styles/StyledUl'
import StyledMenu from '../../styles/StyledMenu'

// Menu Item Styles Params Type
export type MenuItemStylesParams = {
  level: number
  disabled: boolean
  active: boolean
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

// Menu Section Styles Type
export type MenuSectionStyles = {
  root?: CSSObject
  button?: CSSObject
  label?: CSSObject
  prefix?: CSSObject
  suffix?: CSSObject
  icon?: CSSObject
}

export type RenderExpandIconParams = {
  level: number
  disabled: boolean
  active: boolean
  open: boolean
}

export type OpenSubmenu = {
  level: number
  label: string | ReactNode
  active: boolean
}

export type VerticalMenuContextProps = {
  triggerPopout?: 'hover' | 'click'
  closeOnClick?: boolean
  transitionDuration?: number
  menuSectionStyles?: MenuSectionStyles
  menuItemStyles?: MenuItemStyles
  openSubmenu?: OpenSubmenu[]
  openSubmenusRef?: MutableRefObject<OpenSubmenu[]>
  subMenuOpenBehavior?: 'accordion' | 'collapse'
  toggleOpenSubmenu?: (...submenus: { level: number; label: string | ReactNode; active?: boolean }[]) => void
  renderExpandIcon?: (params: RenderExpandIconParams) => ReactNode
}

export type MenuProps = VerticalMenuContextProps &
  MenuHTMLAttributes<HTMLMenuElement> & {
    rootStyles?: CSSObject
    children?: ReactNode
  }

export const VerticalMenuContext = createContext({} as VerticalMenuContextProps)

const Menu: ForwardRefRenderFunction<HTMLMenuElement, MenuProps> = (props, ref) => {
  const {
    children,
    className,
    rootStyles,
    menuItemStyles,
    renderExpandIcon,
    menuSectionStyles,
    closeOnClick = false,
    triggerPopout = 'hover',
    transitionDuration = 300,
    subMenuOpenBehavior = 'accordion', // accordion, collapse
    ...rest
  } = props

  const openSubmenusRef = useRef<OpenSubmenu[]>([])
  const [openSubmenu, setOpenSubmenu] = useState<OpenSubmenu[]>([])

  const pathname = usePathname()

  const toggleOpenSubmenu = useCallback(
    (...submenus: { level: number; label: string | ReactNode; active?: boolean }[]): void => {
      if (!submenus.length) return

      const openSubmenuCopy = [...openSubmenu]

      submenus.forEach(({ level, label, active = false }) => {
        const submenuIndex = openSubmenuCopy.findIndex(submenu => submenu.label === label)
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
              openSubmenuCopy.splice(inactiveSubmenuIndex, 1, { level, label, active })
            } else {
              openSubmenuCopy.push({ level, label, active })
            }
          }
        } else {
          // Add submenu if it doesn't exist
          if (!submenuExists) {
            openSubmenuCopy.push({ level, label, active })
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
      closeOnClick,
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
      closeOnClick,
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
      <StyledMenu ref={ref} className={classNames(menuClasses.root, className)} rootStyles={rootStyles} {...rest}>
        <StyledUl>{children}</StyledUl>
      </StyledMenu>
    </VerticalMenuContext.Provider>
  )
}

export default forwardRef(Menu)
