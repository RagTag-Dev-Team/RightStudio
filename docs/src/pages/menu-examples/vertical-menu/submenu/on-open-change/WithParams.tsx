'use client'

// React imports
import { useState } from 'react'

// Component imports
import VerticalNav, { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'

// Style Imports
import menuItemStyles from '@docComponents/styles/vertical/menuItemStyles'

const SubMenuWithParams = () => {
  // States
  const [text, setText] = useState('closed')

  return (
    <div className='flex min-bs-full bs-dvh'>
      <VerticalNav customBreakpoint='200px' customStyles={{ blockSize: 'auto', '& .ts-vertical-nav-container': { borderInlineEndColor: 'var(--mui-palette-divider)'} }} backgroundColor='var(--mui-palette-background-paper)'>
        <Menu menuItemStyles={menuItemStyles()}>
          <SubMenu
            label='Dashboards'
            onOpenChange={(open: boolean) => {
              setText(open ? 'opened' : 'closed')
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
      <main className='p-4 flex-grow'>
        <p>Toggle Dashbord Submenu to see the change</p>
        <br />
        <i>{`Submenu is ${text}`}</i>
      </main>
    </div>
  )
}

export default SubMenuWithParams
