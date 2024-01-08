// React Imports
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

const menuData = [
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
  },
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

const DynamicMenu = () => {
  const generateHorizontalMenu = (menuData: MenuData[]) => {
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
            {subMenuItem.children && generateHorizontalMenu(subMenuItem.children)}
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
        <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>{generateHorizontalMenu(menuData)}</Menu>
      </HorizontalNav>
    </div>
  )
}

export default DynamicMenu
