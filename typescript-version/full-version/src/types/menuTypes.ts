// React Imports
import type { ReactNode } from 'react'

// Type Imports
import type {
  SubMenuProps as VerticalSubMenuProps,
  MenuItemProps as VerticalMenuItemProps,
  MenuSectionProps as VerticalMenuSectionProps
} from '@menu/vertical-menu'
import type {
  SubMenuProps as HorizontalSubMenuProps,
  MenuItemProps as HorizontalMenuItemProps
} from '@menu/horizontal-menu'
import type { MenuItemExactMatchUrlProps } from '@menu/types'

// Vertical Menu Data
export type VerticalMenuItemDataType = Omit<VerticalMenuItemProps, 'children' | 'exactMatch' | 'activeUrl'> &
  MenuItemExactMatchUrlProps & {
    label: ReactNode
    excludeLang?: boolean
  }
export type VerticalSubMenuDataType = Omit<VerticalSubMenuProps, 'children'> & { children: VerticalMenuDataType[] }
export type VerticalSectionDataType = Omit<VerticalMenuSectionProps, 'children'> & {
  isSection: boolean
  children: VerticalMenuDataType[]
}
export type VerticalMenuDataType = VerticalMenuItemDataType | VerticalSubMenuDataType | VerticalSectionDataType

// Horizontal Menu Data
export type HorizontalMenuItemDataType = Omit<HorizontalMenuItemProps, 'children' | 'exactMatch' | 'activeUrl'> &
  MenuItemExactMatchUrlProps & {
    label: ReactNode
    excludeLang?: boolean
  }
export type HorizontalSubMenuDataType = Omit<HorizontalSubMenuProps, 'children'> & {
  children: HorizontalMenuDataType[]
}
export type HorizontalMenuDataType = HorizontalMenuItemDataType | HorizontalSubMenuDataType
