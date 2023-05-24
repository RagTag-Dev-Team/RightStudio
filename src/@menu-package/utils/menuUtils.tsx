// React Imports
import { isValidElement } from 'react'
import type { ReactNode } from 'react'

// Type Imports
import type {
  VerticalMenuDataType,
  VerticalSectionDataType,
  VerticalSubMenuDataType,
  VerticalMenuItemDataType,
  HorizontalMenuDataType,
  HorizontalSubMenuDataType,
  HorizontalMenuItemDataType
} from '../types'

// Component Imports
import { SubMenu as HorizontalSubMenu, MenuItem as HorizontalMenuItem } from '../components/horizontal-menu'
import { SubMenu as VerticalSubMenu, MenuItem as VerticalMenuItem, MenuSection } from '../components/vertical-menu'

// Generate a menu from the menu data array
export const generateVerticalMenu = (menuData: VerticalMenuDataType[]) => {
  // Use the map method to iterate through the array of menu data
  return menuData.map((item: VerticalMenuDataType, index) => {
    const menuSectionItem = item as VerticalSectionDataType
    const subMenuItem = item as VerticalSubMenuDataType
    const menuItem = item as VerticalMenuItemDataType

    // Check if the current item is a section
    if (menuSectionItem.isSection) {
      // If it is, return a MenuSection component and call generateVerticalMenu with the current menuSectionItem's children
      return (
        <MenuSection
          key={index}
          label={menuSectionItem.label}
          icon={menuSectionItem.icon}
          prefix={menuSectionItem.prefix}
          suffix={menuSectionItem.suffix}
          // eslint-disable-next-line lines-around-comment
          // i18nKey={menuSectionItem.i18nKey}
          // aclProps={menuSectionItem.aclProps}
          rootStyles={menuSectionItem.rootStyles}
        >
          {menuSectionItem.children && generateVerticalMenu(menuSectionItem.children)}
        </MenuSection>
      )
    }

    // Check if the current item is a sub menu
    if (subMenuItem.children) {
      // If it is, return a SubMenu component and call generateMenu with the current subMenuItem's children
      return (
        <VerticalSubMenu
          key={index}
          label={subMenuItem.label}
          icon={subMenuItem.icon}
          prefix={subMenuItem.prefix}
          suffix={subMenuItem.suffix}
          defaultOpen={subMenuItem.defaultOpen}
          active={subMenuItem.active}
          disabled={subMenuItem.disabled}
          rootStyles={subMenuItem.rootStyles}
          // eslint-disable-next-line lines-around-comment
          // open={subMenuItem.open}
          // i18nKey={subMenuItem.i18nKey}
          // aclProps={subMenuItem.aclProps}
          component={subMenuItem.component}
        >
          {subMenuItem.children && generateVerticalMenu(subMenuItem.children)}
        </VerticalSubMenu>
      )
    }

    // If the current item is neither a section nor a sub menu, return a MenuItem component
    return (
      <VerticalMenuItem
        key={index}
        icon={menuItem.icon}
        active={menuItem.active}
        disabled={menuItem.disabled}
        target={menuItem.target}
        rel={menuItem.rel}
        prefix={menuItem.prefix}
        suffix={menuItem.suffix}
        rootStyles={menuItem.rootStyles}
        href={menuItem.href}
        component={menuItem.component}
        // eslint-disable-next-line lines-around-comment
        // i18nKey={menuItem.i18nKey}
        // aclProps={menuItem.aclProps}
        // component={<RouterLink href={menuItem.href || '/'} />}
      >
        {menuItem.label}
      </VerticalMenuItem>
    )
  })
}

// Generate a menu from the menu data array
export const generateHorizontalMenu = (menuData: HorizontalMenuDataType[]) => {
  // Use the map method to iterate through the array of menu data
  return menuData.map((item: HorizontalMenuDataType, index) => {
    const subMenuItem = item as HorizontalSubMenuDataType
    const menuItem = item as HorizontalMenuItemDataType

    // Check if the current item is a sub menu
    if (subMenuItem.children) {
      // If it is, return a SubMenu component and call generateMenu with the current subMenuItem's children
      return (
        <HorizontalSubMenu
          key={index}
          label={subMenuItem.label}
          icon={subMenuItem.icon}
          prefix={subMenuItem.prefix}
          suffix={subMenuItem.suffix}
          disabled={subMenuItem.disabled}
          rootStyles={subMenuItem.rootStyles}
          component={subMenuItem.component}
        >
          {subMenuItem.children && generateHorizontalMenu(subMenuItem.children)}
        </HorizontalSubMenu>
      )
    }

    // If the current item is neither a section nor a sub menu, return a MenuItem component
    return (
      <HorizontalMenuItem
        key={index}
        icon={menuItem.icon}
        disabled={menuItem.disabled}
        target={menuItem.target}
        rel={menuItem.rel}
        prefix={menuItem.prefix}
        suffix={menuItem.suffix}
        rootStyles={menuItem.rootStyles}
        href={menuItem.href}
        component={menuItem.component}
        // eslint-disable-next-line lines-around-comment
        // component={<RouterLink href={menuItem.href || '/'} />}
      >
        {menuItem.label}
      </HorizontalMenuItem>
    )
  })
}

export const confirmUrlInChildren = (children: ReactNode, url: string): boolean => {
  if (!children) {
    return false
  }

  if (Array.isArray(children)) {
    return children.some((child: ReactNode) => confirmUrlInChildren(child, url))
  }

  if (isValidElement(children)) {
    const { component, href, children: subChildren } = children.props

    if (component && component.props.href) {
      return component.props.href === url
    }
    if (href) {
      return href === url
    }
    if (subChildren) {
      return confirmUrlInChildren(subChildren, url)
    }
  }

  return false
}
