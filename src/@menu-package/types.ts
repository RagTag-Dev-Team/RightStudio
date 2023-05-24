// React Imports
import type { AnchorHTMLAttributes, ReactElement, ReactNode } from 'react'

// Third Party Imports
import type { CSSObject } from '@emotion/react'

// Type Imports
import type {
  SubMenuProps as VerticalSubMenuProps,
  MenuItemProps as VerticalMenuItemProps,
  MenuSectionProps as VerticalMenuSectionProps
} from './components/vertical-menu'
import type {
  SubMenuProps as HorizontalSubMenuProps,
  MenuItemProps as HorizontalMenuItemProps
} from './components/horizontal-menu'

export type ChildrenType = {
  children: ReactNode
}

// Breakpoints
export type BreakPointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'always'

// Menu Item Elements for styling
export type MenuItemElement = 'root' | 'button' | 'icon' | 'label' | 'prefix' | 'suffix'

// Sub Menu Item Elements for styling
export type SubMenuItemElement =
  | 'root'
  | 'button'
  | 'label'
  | 'prefix'
  | 'suffix'
  | 'icon'
  | 'subMenuContent'
  | 'SubMenuExpandIcon'

// Transition Options
export type TransitionOptionsType = {
  delay?: number
  easing?: string
  duration?: number
}

// Menu Button Props
export type MenuButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'prefix'> &
  Partial<ChildrenType> & {
    active?: boolean
    component?: string | ReactElement
  }

// Expand Icon
export type RenderExpandIconParams = {
  open: boolean
  level: number
  active: boolean
  disabled: boolean
}

// Root Styles
export type RootStylesType = {
  rootStyles?: CSSObject
}

// ACL Props
export type ACLPropsType = {
  action: string
  subject: string
}

// Vertical Menu Data
export type VerticalMenuItemDataType = Omit<VerticalMenuItemProps, 'children'> & { label: string | ReactNode }
export type VerticalSubMenuDataType = Omit<VerticalSubMenuProps, 'children'> & { children: VerticalMenuDataType[] }
export type VerticalSectionDataType = Omit<VerticalMenuSectionProps, 'children'> & {
  isSection: boolean
  children: VerticalMenuDataType[]
}
export type VerticalMenuDataType = VerticalMenuItemDataType | VerticalSubMenuDataType | VerticalSectionDataType

// Horizontal Menu Data
export type HorizontalMenuItemDataType = Omit<HorizontalMenuItemProps, 'children'> & { label: string | ReactNode }
export type HorizontalSubMenuDataType = Omit<HorizontalSubMenuProps, 'children'> & {
  children: HorizontalMenuDataType[]
}
export type HorizontalMenuDataType = HorizontalMenuItemDataType | HorizontalSubMenuDataType
