// Type Imports
import type { Mode, Skin, Direction, Layout, NavbarPosition, FooterPosition, ContentWidth } from '../@core/types'

export type Config = {
  mode: Mode
  skin: Skin
  semiDark: boolean
  direction: Direction
  layout: Layout
  layoutPadding: number
  navbar: NavbarPosition
  navbarBlur: boolean
  footer: FooterPosition
  contentWidth: ContentWidth
  templateName: string
}

const themeConfig: Config = {
  templateName: 'Master Admin',
  mode: 'light',
  skin: 'default',
  semiDark: false,
  direction: 'ltr',
  layout: 'vertical',
  layoutPadding: 24, // Common padding for header, content, footer layout components (in px)
  navbar: 'fixed',
  navbarBlur: false,
  footer: 'static',
  contentWidth: 'compact'
}

export default themeConfig
