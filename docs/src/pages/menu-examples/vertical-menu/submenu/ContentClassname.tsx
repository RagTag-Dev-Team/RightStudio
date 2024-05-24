'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'

// Style Imports
import menuItemStyles from '@docComponents/styles/vertical/menuItemStyles'

const ContentClassName = () => {
  return (
    <VerticalNav customBreakpoint='200px' customStyles={{ minHeight: '100%', '& .ts-vertical-nav-container': { borderInlineEndColor: 'var(--mui-palette-divider)'} }} backgroundColor='var(--mui-palette-background-paper)'>
      <Menu menuItemStyles={menuItemStyles()}>
        <SubMenu label='Dashboards' contentClassName='this-is-custom-content-class'>
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

export default ContentClassName
