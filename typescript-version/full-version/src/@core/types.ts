// React Imports
import type { ReactNode } from 'react'

export type Layout = 'vertical' | 'collapsed' | 'horizontal'

export type Skin = 'default' | 'bordered'

export type Mode = 'light' | 'dark' | 'system'

export type Direction = 'ltr' | 'rtl'

export type LayoutComponentWidth = 'compact' | 'wide'

export type LayoutComponentPosition = 'fixed' | 'static'

export type ChildrenType = {
  children: ReactNode
}
