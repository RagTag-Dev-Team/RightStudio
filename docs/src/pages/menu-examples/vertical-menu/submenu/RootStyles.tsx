'use client'

// Util Imports
import { menuClasses } from '@menu/utils/menuClasses'

// Component Imports
import VerticalNav, { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'

// Style Imports
import menuItemStyles from '@docComponents/styles/vertical/menuItemStyles'

const RootStyles = () => {
  return (
    <VerticalNav customBreakpoint='200px' customStyles={{ minHeight: '100%', '& .ts-vertical-nav-container': { borderInlineEndColor: 'var(--mui-palette-divider)'} }} backgroundColor='var(--mui-palette-background-paper)'>
      <Menu menuItemStyles={menuItemStyles()}>
        <SubMenu
          label='Dashboards'
          rootStyles={{
            ['& > .' + menuClasses.button]: {
              backgroundColor: '#e4e2ff !important',
              color: '#7367F0 !important'
            },
            ['.' + menuClasses.subMenuContent]: {
              backgroundColor: '#f3f2ff'
            }
          }}
        >
          <MenuItem>Analytics</MenuItem>
          <MenuItem>eCommerce</MenuItem>
        </SubMenu>
        <SubMenu label='User'>
          <MenuItem>List</MenuItem>
          <SubMenu label='View'>
            <MenuItem>Overview</MenuItem>
            <MenuItem>Security</MenuItem>
            <MenuItem>Notifications</MenuItem>
          </SubMenu>
        </SubMenu>
        <SubMenu label='Menu Level'>
          <MenuItem>Menu Level 2.1</MenuItem>
          <SubMenu label='Menu Level 2.2'>
            <MenuItem>Menu Level 3.1</MenuItem>
            <MenuItem>Menu Level 3.2</MenuItem>
          </SubMenu>
        </SubMenu>
      </Menu>
    </VerticalNav>
  )
}

export default RootStyles
