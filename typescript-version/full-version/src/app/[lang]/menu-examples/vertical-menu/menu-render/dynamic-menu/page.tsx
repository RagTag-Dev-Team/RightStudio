'use client'

// React imports
import type { ReactNode } from 'react'

// Type imports
import type { MenuItemProps, MenuSectionProps, SubMenuProps } from '@menu/vertical-menu'

// Component Imports
import VerticalNav, { Menu, MenuItem, MenuSection, SubMenu } from '@menu/vertical-menu'

type MenuData =
  | (Omit<MenuSectionProps, 'children'> & { isSection: boolean; children: MenuData[] })
  | (Omit<MenuItemProps, 'children'> & { label: ReactNode })
  | (Omit<SubMenuProps, 'children'> & { children: MenuData[] })

const menuData = [
  {
    label: 'Dashboards & Apps',
    isSection: true,
    children: [
      {
        label: 'Dashboards',
        children: [
          {
            label: 'Analytics'
          },
          {
            label: 'eCommerce'
          }
        ]
      },
      {
        label: 'Calendar'
      }
    ]
  },
  {
    label: 'Others',
    isSection: true,
    children: [
      {
        label: 'FAQ'
      },
      {
        label: 'Menu Level',
        children: [
          {
            label: 'Menu Level 2.1'
          },
          {
            label: 'Menu Level 2.2',
            children: [
              {
                label: 'Menu Level 3.1'
              },
              {
                label: 'Menu Level 3.2'
              }
            ]
          }
        ]
      },
      {
        label: 'Documentation'
      }
    ]
  }
]

const DynamicMenu = () => {
  const generateVerticalMenu = (menuData: MenuData[]) => {
    // Use the map method to iterate through the array of menu data
    return menuData.map((item: MenuData, index) => {
      const menuSectionItem = item as Omit<MenuSectionProps, 'children'> & { isSection: boolean; children: MenuData[] }
      const subMenuItem = item as Omit<SubMenuProps, 'children'> & { children: MenuData[] }
      const menuItem = item as Omit<MenuItemProps, 'children'> & { label: ReactNode }

      // Check if the current item is a section
      if (menuSectionItem.isSection) {
        // If it is, return a MenuSection component and call generateMenu with the current menuSectionItem's children
        return (
          <MenuSection
            key={index}
            label={menuSectionItem.label}
            icon={menuSectionItem.icon}
            prefix={menuSectionItem.prefix}
            suffix={menuSectionItem.suffix}
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
          <SubMenu
            key={index}
            label={subMenuItem.label}
            icon={subMenuItem.icon}
            prefix={subMenuItem.prefix}
            suffix={subMenuItem.suffix}
            defaultOpen={subMenuItem.defaultOpen}
            disabled={subMenuItem.disabled}
            rootStyles={subMenuItem.rootStyles}
            component={subMenuItem.component}
          >
            {subMenuItem.children && generateVerticalMenu(subMenuItem.children)}
          </SubMenu>
        )
      }

      // If the current item is neither a section nor a sub menu, return a MenuItem component
      return (
        <MenuItem
          key={index}
          icon={menuItem.icon}
          disabled={menuItem.disabled}
          target={menuItem.target}
          rel={menuItem.rel}
          prefix={menuItem.prefix}
          suffix={menuItem.suffix}
          rootStyles={menuItem.rootStyles}
        >
          {menuItem.label}
        </MenuItem>
      )
    })
  }

  return (
    <VerticalNav customBreakpoint='200px'>
      <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>{generateVerticalMenu(menuData)}</Menu>
    </VerticalNav>
  )
}

export default DynamicMenu
