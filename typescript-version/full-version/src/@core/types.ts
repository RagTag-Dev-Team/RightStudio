// React Imports
import type { ReactNode } from 'react'

export type Layout = 'vertical' | 'horizontal' | 'collapsed'

export type Skin = 'default' | 'bordered' | 'semi-dark'

export type Mode = 'light' | 'dark' | 'system'

export type Direction = 'ltr' | 'rtl'

export type ContentWidth = 'compact' | 'wide'

export type NavbarPosition = 'fixed' | 'static'

export type FooterPosition = 'fixed' | 'static'

export type ChildrenType = {
  children: ReactNode
}
