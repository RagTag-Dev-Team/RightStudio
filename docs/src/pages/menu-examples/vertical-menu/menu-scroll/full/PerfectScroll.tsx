'use client'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

// Component Imports
import VerticalNav, { Menu, MenuItem, MenuSection, SubMenu } from '@menu/vertical-menu'

// Style Imports
import menuItemStyles from '@docComponents/styles/vertical/menuItemStyles'

const FullMenuPerfectScroll = () => {
  return (
    <VerticalNav 
      customBreakpoint='200px' 

      // The following customStyles prop is used to show this example properly in the documentation.
      // You need to remove this prop in your implementation.
      customStyles={{
        '& .ts-vertical-nav-container': { borderInlineEndColor: 'var(--mui-palette-divider)'},
        '& .scrollbar-container': {
          height: '400px'
        }
      }}
      backgroundColor='var(--mui-palette-background-paper)'

      // Remove the code till here
    >
      <PerfectScrollbar options={{ wheelPropagation: false, suppressScrollX: true }}>
        <Menu menuItemStyles={menuItemStyles()}>
          <MenuSection label='Dashboards'>
            <SubMenu label='Dashboards'>
              <MenuItem>Analytics</MenuItem>
              <MenuItem>eCommerce</MenuItem>
            </SubMenu>
          </MenuSection>
          <MenuSection label='Apps'>
            <MenuItem>Email</MenuItem>
            <MenuItem>Chats</MenuItem>
            <MenuItem>Calendar</MenuItem>
            <MenuItem>Invoice</MenuItem>
            <SubMenu label='User'>
              <MenuItem>List</MenuItem>
              <SubMenu label='View'>
                <MenuItem>Account</MenuItem>
                <MenuItem>Security</MenuItem>
                <MenuItem>Billings & Plans</MenuItem>
                <MenuItem>Notifications</MenuItem>
                <MenuItem>Connection</MenuItem>
              </SubMenu>
            </SubMenu>
          </MenuSection>
          <MenuSection label='Pages'>
            <MenuItem>FAQ</MenuItem>
            <MenuItem>Help Center</MenuItem>
            <SubMenu label='Auth Pages'>
              <MenuItem>Login</MenuItem>
              <MenuItem>Register</MenuItem>
              <MenuItem>Forgot Password</MenuItem>
            </SubMenu>
          </MenuSection>
          <MenuSection label='User Interface'>
            <MenuItem>Typography</MenuItem>
            <MenuItem>Icons</MenuItem>
            <MenuItem>Cards</MenuItem>
          </MenuSection>
          <MenuSection label='Others'>
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
      </PerfectScrollbar>
    </VerticalNav>
  )
}

export default FullMenuPerfectScroll
