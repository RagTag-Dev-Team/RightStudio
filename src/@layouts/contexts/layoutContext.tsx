// Merge this layout context file with settings context
'use client'

// React Imports
import { createContext, useMemo, useState } from 'react'

// Type Imports
import type { ChildrenType } from '../../@menu-package/types'

// Layout Context Props
export type LayoutContextProps = {
  layout: 'vertical' | 'horizontal'
  switchLayout: (layout: 'vertical' | 'horizontal') => void
}

// Create a context for the layout
const LayoutContext = createContext({} as LayoutContextProps)

export const LayoutProvider = ({ children }: ChildrenType) => {
  // Todo: Set default layout based on user settings (from ThemeConfig file)
  const [layout, setLayout] = useState<LayoutContextProps['layout']>('horizontal')

  // Switch Layout
  const switchLayout = (layout: 'vertical' | 'horizontal') => {
    setLayout(layout)
  }

  // Memoize the context value to prevent unnecessary re-renders
  const LayoutProviderValue = useMemo(
    () => ({
      layout,
      switchLayout
    }),
    [layout]
  )

  return <LayoutContext.Provider value={LayoutProviderValue}>{children}</LayoutContext.Provider>
}

export default LayoutContext
