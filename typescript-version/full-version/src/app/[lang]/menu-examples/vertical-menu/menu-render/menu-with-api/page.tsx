'use client'

// React imports
import { useEffect, type ReactNode, useState } from 'react'

// Type imports
import type { MenuItemProps, MenuSectionProps, SubMenuProps } from '@menu/vertical-menu'

// Component imports
import VerticalNav, { Menu, MenuItem, MenuSection, SubMenu } from '@menu/vertical-menu'

type MenuData =
  | (Omit<MenuSectionProps, 'children'> & { isSection: boolean; children: MenuData[] })
  | (Omit<MenuItemProps, 'children'> & { label: ReactNode })
  | (Omit<SubMenuProps, 'children'> & { children: MenuData[] })

const MenuWithAPI = () => {
  // States
  const [sidebarMenuData, setSidebarMenuData] = useState<MenuData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMenuData = async () => {
      const res = await fetch('https://mocki.io/v1/52954c56-974e-4977-8bc0-1c0fc3a1e4d3')
      const data = await res.json()

      setSidebarMenuData(data)
      setIsLoading(false)
    }

    fetchMenuData()
  }, [])

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
      <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
        {isLoading ? <div className='p-4'>Loading...</div> : generateVerticalMenu(sidebarMenuData)}
      </Menu>
    </VerticalNav>
  )
}

export default MenuWithAPI
