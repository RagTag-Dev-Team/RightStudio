// Import React
import { isValidElement, ReactNode } from 'react'

import fse from 'fs-extra'

// Import Vertical Menu Components
import {
  SubMenu as VerticalSubMenu,
  MenuItem as VerticalMenuItem,
  MenuSection,
  SubMenuProps as VerticalSubMenuProps,
  MenuItemProps as VerticalMenuItemProps,
  MenuSectionProps
} from '../components/vertical-menu'

import {
  SubMenu as HorizontalSubMenu,
  MenuItem as HorizontalMenuItem,
  SubMenuProps as HorizontalSubMenuProps,
  MenuItemProps as HorizontalMenuItemProps
} from '../components/horizontal-menu'

type VerticalMenuData =
  | (Omit<MenuSectionProps, 'children'> & { isSection: boolean; children: VerticalMenuData[] })
  | (Omit<VerticalMenuItemProps, 'children'> & { label: string | ReactNode })
  | (Omit<VerticalSubMenuProps, 'children'> & { children: VerticalMenuData[] })

type HorizontalMenuData =
  | (Omit<HorizontalMenuItemProps, 'children'> & { label: string | ReactNode })
  | (Omit<HorizontalSubMenuProps, 'children'> & { children: HorizontalMenuData[] })

// Generate a menu from the menu data array
export const generateVerticalMenu = (menuData: VerticalMenuData[]) => {
  // Use the map method to iterate through the array of menu data
  return menuData.map((item: VerticalMenuData, index) => {
    const menuSectionItem = item as Omit<MenuSectionProps, 'children'> & {
      isSection: boolean
      children: VerticalMenuData[]
    }
    const subMenuItem = item as Omit<VerticalSubMenuProps, 'children'> & { children: VerticalMenuData[] }
    const menuItem = item as Omit<VerticalMenuItemProps, 'children'> & { label: string | ReactNode }

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
          // open={subMenuItem.open}
          defaultOpen={subMenuItem.defaultOpen}
          active={subMenuItem.active}
          disabled={subMenuItem.disabled}
          rootStyles={subMenuItem.rootStyles}
          /* i18nKey={subMenuItem.i18nKey}
          aclProps={subMenuItem.aclProps} */
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
        // i18nKey={menuItem.i18nKey}
        // aclProps={menuItem.aclProps}
        rootStyles={menuItem.rootStyles}
        href={menuItem.href}
        component={menuItem.component}

        // component={<RouterLink href={menuItem.href || '/'} />}
      >
        {menuItem.label}
      </VerticalMenuItem>
    )
  })
}

// Generate a menu from the menu data array
export const generateHorizontalMenu = (menuData: HorizontalMenuData[]) => {
  // Use the map method to iterate through the array of menu data
  return menuData.map((item: HorizontalMenuData, index) => {
    const subMenuItem = item as Omit<HorizontalSubMenuProps, 'children'> & { children: HorizontalMenuData[] }
    const menuItem = item as Omit<HorizontalMenuItemProps, 'children'> & { label: string | ReactNode }

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

        // component={<RouterLink href={menuItem.href || '/'} />}
      >
        {menuItem.label}
      </HorizontalMenuItem>
    )
  })
}

// Check if the children of a menu item has the provided item in one of its children
/* export const confirmItemInChildren = (children: ReactNode, item: ReactNode): boolean => {
  // Base case: if children is not an array or doesn't have any elements, return false.
  if (!Array.isArray(children) || children.length === 0) {
    return false
  }

  // Check if the current element is equal to the item.
  if (children.includes(item)) {
    return true
  }

  // Recursively check if the item exists in any of the child elements.
  for (let i = 0; i < children.length; i++) {
    const child: ReactNode = children[i]
    if (isValidElement(child) && confirmItemInChildren(child.props.children, item)) {
      return true
    }
  }

  // If we've gone through all child elements and haven't found the item, return false.
  return false
} */

/* export const confirmUrlInChildren = (children: ReactNode, url: string): boolean => {
  if (!children) {
    return false
  }

  // If children is an array
  if (Array.isArray(children)) {
    return children.some((child: ReactNode) => {
      if (isValidElement(child)) {
        if (child.props.component && child.props.component.props.href) {
          // If it is, return true if the child's component's href matches the url
          return child.props.component.props.href === url
        }
        if (child.props.href) {
          // If it is, return true if the child's component's href matches the url
          return child.props.href === url
        }

        // If the child is not a MenuItem or does not have a component prop with href property, check its children recursively
        if (child.props.children) {
          return confirmUrlInChildren(child.props.children, url)
        }
      }

      return false
    })
  } else {
    // if children is a MenuItem
    if (isValidElement(children)) {
      if (children.props.component && children.props.component.props.href) {
        // If it is, return true if the child's component's href matches the url
        return children.props.component.props.href === url
      }
      if (children.props.href) {
        // If it is, return true if the child's component's href matches the url
        return children.props.href === url
      }
    }
  }

  // If children is a submenu
  if (isValidElement(children) && children.props.children) {
    return confirmUrlInChildren(children.props.children, url)
  }

  return false
} */

export const confirmUrlInChildren = (children: ReactNode, url: Promise<string>): boolean => {
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
