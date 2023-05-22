'use client'

// React Imports
import { createContext, useCallback, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

type VerticalNavProviderProps = {
  children: ReactNode
}

export type VerticalNavState = {
  width?: number | string
  collapsedWidth?: number | string
  isCollapsed?: boolean
  isHovered?: boolean
  isToggled?: boolean
  isRtl?: boolean
  isScrollWithContent?: boolean
  isBreakpointReached?: boolean
  isPopoutWhenCollapsed?: boolean
  collapsing?: boolean // for internal use only
  expanding?: boolean // for internal use only
  transitionOptions?: {
    duration?: number | string
    easing?: string
    delay?: number | string
  }
}

export type VerticalNavContextProps = VerticalNavState & {
  updateVerticalNavState: (values: VerticalNavState) => void
  collapseVerticalNav: (value?: VerticalNavState['isCollapsed']) => void
  hoverVerticalNav: (value?: VerticalNavState['isHovered']) => void
  toggleVerticalNav: (value?: VerticalNavState['isToggled']) => void
}

const VerticalNavContext = createContext({} as VerticalNavContextProps)

export const VerticalNavProvider = ({ children }: VerticalNavProviderProps) => {
  const [verticalNavState, setVerticalNavState] = useState<VerticalNavState>()

  /* const updateVerticalNavState = useCallback((values: Partial<VerticalNavState>) => {
    if (values.isCollapsed !== undefined) {
      if (values.isCollapsed === true) {
        setVerticalNavState(prevState => ({ ...prevState, ...values, collapsing: true }))
      } else {
        setVerticalNavState(prevState => ({ ...prevState, ...values, expanding: true }))
      }
    }
    setVerticalNavState(prevState => ({ ...prevState, ...values }))
  }, []) */
  const updateVerticalNavState = useCallback((values: Partial<VerticalNavState>) => {
    setVerticalNavState(prevState => ({
      ...prevState,
      ...values,
      collapsing: values.isCollapsed === true,
      expanding: values.isCollapsed === false
    }))
  }, [])

  /* const collapseVerticalNav = useCallback((value?: boolean) => {
    if (value === true) {
      setVerticalNavState(prevState => ({
        ...prevState,
        collapsing: true
      }))
    } else {
      setVerticalNavState(prevState => ({
        ...prevState,
        expanding: true
      }))
    }
    setVerticalNavState(prevState => ({
      ...prevState,
      isHovered: value !== undefined && false,
      isCollapsed: value !== undefined ? Boolean(value) : !Boolean(prevState?.isCollapsed)
    }))
  }, []) */
  const collapseVerticalNav = useCallback((value?: boolean) => {
    setVerticalNavState(prevState => ({
      ...prevState,
      isHovered: value !== undefined && false,
      isCollapsed: value !== undefined ? Boolean(value) : !Boolean(prevState?.isCollapsed),
      collapsing: value === true,
      expanding: value !== true
    }))
  }, [])

  const hoverVerticalNav = useCallback((value?: boolean) => {
    setVerticalNavState(prevState => ({
      ...prevState,
      isHovered: value !== undefined ? Boolean(value) : !Boolean(prevState?.isHovered)
    }))
  }, [])

  const toggleVerticalNav = useCallback((value?: boolean) => {
    setVerticalNavState(prevState => ({
      ...prevState,
      isToggled: value !== undefined ? Boolean(value) : !Boolean(prevState?.isToggled)
    }))
  }, [])

  const VerticalNavProviderValue = useMemo(
    () => ({
      ...verticalNavState,
      updateVerticalNavState,
      collapseVerticalNav,
      hoverVerticalNav,
      toggleVerticalNav
    }),
    [verticalNavState, updateVerticalNavState, collapseVerticalNav, hoverVerticalNav, toggleVerticalNav]
  )

  return <VerticalNavContext.Provider value={VerticalNavProviderValue}>{children}</VerticalNavContext.Provider>
}

export default VerticalNavContext
