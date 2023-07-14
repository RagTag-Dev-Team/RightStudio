/*
 * If you change the following items in the config object, you will not see any effect in the local development server
 * as these are stored in the localStorage (localStorage has the highest priority over the themeConfig):
 * 1. mode
 * 2. skin
 * 3. semiDark
 * 4. direction
 * 5. layout
 * 6. navbar.contentWidth
 * 7. contentWidth
 * 8. footer.contentWidth
 *
 * To see the effect of the above items, you can click on the reset button from the Customizer
 * which is on the top-right corner of the customizer besides the close button.
 * This will reset the localStorage to the values provided in the config object below.
 *
 * Another way is to clear the localStorage from the browser's Application/Storage tab and then reload the page.
 */

// Type Imports
import type { Mode, Skin, Direction, Layout, LayoutComponentPosition, LayoutComponentWidth } from '../@core/types'

type Navbar = {
  type: LayoutComponentPosition
  contentWidth: LayoutComponentWidth
  floating: boolean
  detached: boolean
  blur: boolean
}

type Footer = {
  type: LayoutComponentPosition
  contentWidth: LayoutComponentWidth
  detached: boolean
}

export type Config = {
  templateName: string
  mode: Mode
  skin: Skin
  semiDark: boolean
  direction: Direction
  layout: Layout
  layoutPadding: number
  navbar: Navbar
  contentWidth: LayoutComponentWidth
  footer: Footer
}

const themeConfig: Config = {
  templateName: 'Master Admin',
  mode: 'light', // 'light', 'dark', 'system'
  skin: 'default', // 'default', 'bordered'
  semiDark: false, // true, false
  direction: 'ltr', // 'ltr', 'rtl'
  layout: 'vertical', // 'vertical', 'collapsed', 'horizontal'
  layoutPadding: 24, // Common padding for header, content, footer layout components (in px)
  navbar: {
    type: 'fixed', // 'fixed', 'static'
    contentWidth: 'compact', // 'compact', 'wide'
    floating: false, //! true, false (This will not work in the Horizontal Layout)
    detached: true, //! true, false (This will not work in the Horizontal Layout or floating navbar is enabled)
    blur: true // true, false
  },
  contentWidth: 'compact', // 'compact', 'wide'
  footer: {
    type: 'static', // 'fixed', 'static'
    contentWidth: 'compact', // 'compact', 'wide'
    detached: true //! true, false (This will not work in the Horizontal Layout)
  }
}

export default themeConfig
