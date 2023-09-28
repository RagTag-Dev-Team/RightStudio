'use client'

// React imports
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { MenuItemProps, SubMenuProps } from '@menu-package/horizontal-menu'

// Component Imports
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu-package/horizontal-menu'

// Style Imports
import styles from '../../styles.module.css'

type MenuData =
  | (Omit<MenuItemProps, 'children'> & { label: ReactNode })
  | (Omit<SubMenuProps, 'children'> & { children: MenuData[] })

const MenuWithAPI = () => {
  // States
  const [sidebarMenuData, setSidebarMenuData] = useState<MenuData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchMenuData = async () => {
      const res = await fetch('https://mocki.io/v1/ea08dba9-a940-4388-9789-2d0b8fa9a475')
      const data = await res.json()

      setSidebarMenuData(data)
      setIsLoading(false)
    }

    fetchMenuData()
  }, [])

  const generateVerticalMenu = (menuData: MenuData[]) => {
    // Use the map method to iterate through the array of menu data
    return menuData.map((item: MenuData, index) => {
      const subMenuItem = item as Omit<SubMenuProps, 'children'> & { children: MenuData[] }
      const menuItem = item as Omit<MenuItemProps, 'children'> & { label: ReactNode }

      if (subMenuItem.children) {
        // If it is, return a SubMenu component and call generateMenu with the current subMenuItem's children
        return (
          <SubMenu
            key={index}
            label={subMenuItem.label}
            icon={subMenuItem.icon}
            prefix={subMenuItem.prefix}
            suffix={subMenuItem.suffix}
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
    <div className={classnames('flex items-center plb-2.5 pli-6 w-full', styles.customStyles)}>
      <HorizontalNav>
        <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
          {isLoading ? <div className='p-4'>Loading...</div> : generateVerticalMenu(sidebarMenuData)}
        </Menu>
      </HorizontalNav>
    </div>
  )
}

export default MenuWithAPI
