// Type Imports
import type { Locale } from '@configs/i18n'

// Config Imports
import { i18n } from '@configs/i18n'

// Type Imports
import type {
  VerticalMenuDataType,
  VerticalSectionDataType,
  VerticalSubMenuDataType,
  VerticalMenuItemDataType,
  HorizontalMenuDataType,
  HorizontalSubMenuDataType,
  HorizontalMenuItemDataType
} from '@/types/menuTypes'

// Component Imports
import { SubMenu as HorizontalSubMenu, MenuItem as HorizontalMenuItem } from '@menu-package/horizontal-menu'
import { SubMenu as VerticalSubMenu, MenuItem as VerticalMenuItem, MenuSection } from '@menu-package/vertical-menu'

// Generate a menu from the menu data array
export const generateVerticalMenu = (menuData: VerticalMenuDataType[], locale: Locale) => {
  // Use the map method to iterate through the array of menu data
  return menuData.map((item: VerticalMenuDataType, index) => {
    const menuSectionItem = item as VerticalSectionDataType
    const subMenuItem = item as VerticalSubMenuDataType
    const menuItem = item as VerticalMenuItemDataType

    // Check if the current item is a section
    if (menuSectionItem.isSection) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { children, isSection, ...rest } = menuSectionItem

      // If it is, return a MenuSection component and call generateVerticalMenu with the current menuSectionItem's children
      return (
        <MenuSection key={index} {...rest}>
          {children && generateVerticalMenu(children, locale)}
        </MenuSection>
      )
    }

    // Check if the current item is a sub menu
    if (subMenuItem.children) {
      const { children, ...rest } = subMenuItem

      // If it is, return a SubMenu component and call generateMenu with the current subMenuItem's children
      return (
        <VerticalSubMenu key={index} {...rest}>
          {children && generateVerticalMenu(children, locale)}
        </VerticalSubMenu>
      )
    }

    // Localize the href
    const href = menuItem.href?.startsWith('http') ? menuItem.href : localizeUrl(menuItem, locale)

    delete menuItem.href

    // If the current item is neither a section nor a sub menu, return a MenuItem component
    return (
      <VerticalMenuItem key={index} href={href} {...menuItem}>
        {menuItem.label}
      </VerticalMenuItem>
    )
  })
}

// Generate a menu from the menu data array
export const generateHorizontalMenu = (menuData: HorizontalMenuDataType[], locale: Locale) => {
  // Use the map method to iterate through the array of menu data
  return menuData.map((item: HorizontalMenuDataType, index) => {
    const subMenuItem = item as HorizontalSubMenuDataType
    const menuItem = item as HorizontalMenuItemDataType

    // Check if the current item is a sub menu
    if (subMenuItem.children) {
      const { children, ...rest } = subMenuItem

      // If it is, return a SubMenu component and call generateMenu with the current subMenuItem's children
      return (
        <HorizontalSubMenu key={index} {...rest}>
          {children && generateHorizontalMenu(children, locale)}
        </HorizontalSubMenu>
      )
    }

    // Localize the href
    const href = menuItem.href?.startsWith('http') ? menuItem.href : localizeUrl(menuItem, locale)

    delete menuItem.href

    // If the current item is neither a section nor a sub menu, return a MenuItem component
    return (
      <HorizontalMenuItem key={index} href={href} {...menuItem}>
        {menuItem.label}
      </HorizontalMenuItem>
    )
  })
}

function localizeUrl(menuItem: VerticalMenuItemDataType, locale: string) {
  const pathnameIsMissingLocale = i18n.locales.every(
    locale =>
      menuItem.href && !menuItem.href.startsWith(`/${locale}/`) && menuItem.href && menuItem.href !== `/${locale}`
  )

  // Get the current URL
  let href = menuItem.href

  // If there is no supported locale in the pathname, add the current locale to the href
  if (pathnameIsMissingLocale) {
    href = `/${locale}${menuItem.href}`
  }

  return href
}
