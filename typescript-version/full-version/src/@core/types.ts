// React Imports
import type { ReactNode } from 'react'

// MUI Imports
import type { ComponentsPropsList, Theme } from '@mui/material/styles'

export type Layout = 'vertical' | 'horizontal' | 'collapsed'

export type Skin = 'default' | 'bordered'

export type Mode = 'light' | 'dark' | 'system'

export type Direction = 'ltr' | 'rtl'

export type ContentWidth = 'compact' | 'wide'

export type NavbarPosition = 'fixed' | 'static'

export type FooterPosition = 'fixed' | 'static'

export type ChildrenType = {
  children: ReactNode
}

export type ThemeAndOwnerState = {
  theme: Theme
  ownerState: ComponentsPropsList[keyof ComponentsPropsList] & Record<string, unknown>
}
