// React Imports
import type { ReactNode } from 'react'

// MUI Imports
import type { ComponentsPropsList, CssVarsTheme } from '@mui/material/styles'

export type Layout = 'vertical' | 'collapsed' | 'horizontal'

export type Skin = 'default' | 'bordered'

export type Mode = 'system' | 'light' | 'dark'

export type Direction = 'ltr' | 'rtl'

export type LayoutComponentWidth = 'compact' | 'wide'

export type LayoutComponentPosition = 'fixed' | 'static'

export type ChildrenType = {
  children: ReactNode
}

export type ThemeAndOwnerState = {
  theme: CssVarsTheme
  ownerState: ComponentsPropsList[keyof ComponentsPropsList] & Record<string, unknown>
}
