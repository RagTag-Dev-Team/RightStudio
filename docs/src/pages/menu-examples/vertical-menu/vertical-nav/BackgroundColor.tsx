'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'

// Style Imports
import menuItemStyles from '@docComponents/styles/vertical/menuItemStyles'

const BackgroundColor = () => {
  return (
    <VerticalNav customBreakpoint='200px' backgroundColor='#b1b0b0' customStyles={{ minHeight: '100%', '& .ts-submenu-content': { backgroundColor: 'transparent'} }}>
      <Menu menuItemStyles={menuItemStyles()}>
        <SubMenu label='Dashboards'>
          <MenuItem>Analytics</MenuItem>
          <MenuItem>eCommerce</MenuItem>
        </SubMenu>
        <MenuItem>Calendar</MenuItem>
        <MenuItem>FAQ</MenuItem>
        <SubMenu label='Menu Level'>
          <MenuItem>Menu Level 2.1</MenuItem>
          <SubMenu label='Menu Level 2.2'>
            <MenuItem>Menu Level 3.1</MenuItem>
            <MenuItem>Menu Level 3.2</MenuItem>
          </SubMenu>
        </SubMenu>
        <MenuItem>Documentation</MenuItem>
      </Menu>
    </VerticalNav>
  )
}

export default BackgroundColor
