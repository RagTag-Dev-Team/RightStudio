'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem, MenuSection, SubMenu } from '@menu/vertical-menu'

// Style Imports
import menuItemStyles from '@docComponents/styles/vertical/menuItemStyles'

const RootStyles = () => {
  return (
    <VerticalNav customBreakpoint='200px' customStyles={{ minHeight: '100%', '& .ts-vertical-nav-container': { borderInlineEndColor: 'var(--mui-palette-divider)'}, '& .ts-submenu-content': { backgroundColor: 'transparent'} }} backgroundColor='var(--mui-palette-background-paper)'>
      <Menu menuItemStyles={menuItemStyles()}>
        <MenuSection
          label='Dashbaords & Apps'
          rootStyles={{
            backgroundColor: '#e4e2ff',
            color: '#7367F0 !important'
          }}
        >
          <SubMenu label='Dashboards'>
            <MenuItem>Analytics</MenuItem>
            <MenuItem>eCommerce</MenuItem>
          </SubMenu>
          <MenuItem>Calendar</MenuItem>
        </MenuSection>
        <MenuSection label='Others'>
          <MenuItem>FAQ</MenuItem>
          <SubMenu label='Menu Level'>
            <MenuItem>Menu Level 2.1</MenuItem>
            <SubMenu label='Menu Level 2.2'>
              <MenuItem>Menu Level 3.1</MenuItem>
              <MenuItem>Menu Level 3.2</MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem>Documentation</MenuItem>
        </MenuSection>
      </Menu>
    </VerticalNav>
  )
}

export default RootStyles
