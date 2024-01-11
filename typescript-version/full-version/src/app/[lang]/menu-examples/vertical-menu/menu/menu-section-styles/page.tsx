'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem, MenuSection, SubMenu } from '@menu/vertical-menu'

const MenuSectionStyles = () => {
  return (
    <VerticalNav customBreakpoint='200px'>
      <Menu
        menuItemStyles={{ button: { paddingBlock: '12px' } }}
        menuSectionStyles={{
          root: {
            color: '#991245',
            backgroundColor: '#f9f9f9'
          },
          label: {
            color: '#4475ff'
          }
        }}
      >
        <MenuSection label='Dashboards & Apps'>
          <SubMenu icon={<>🔥</>} label='Dashboards'>
            <MenuItem>Analytics</MenuItem>
            <MenuItem>eCommerce</MenuItem>
          </SubMenu>
          <MenuItem icon={<>🔥</>}>Calendar</MenuItem>
        </MenuSection>
        <MenuSection label='Others'>
          <MenuItem icon={<>🔥</>}>FAQ</MenuItem>
          <SubMenu icon={<>🔥</>} label='Menu Level'>
            <MenuItem>Menu Level 2.1</MenuItem>
            <SubMenu label='Menu Level 2.2'>
              <MenuItem>Menu Level 3.1</MenuItem>
              <MenuItem>Menu Level 3.2</MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuItem icon={<>🔥</>}>Documentation</MenuItem>
        </MenuSection>
      </Menu>
    </VerticalNav>
  )
}

export default MenuSectionStyles
