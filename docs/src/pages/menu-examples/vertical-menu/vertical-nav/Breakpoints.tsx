'use client'

// Component Imports
import NavToggle from '@components/layout/vertical/NavToggle'
import VerticalNav, { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'

// Style Imports
import menuItemStyles from '@docComponents/styles/vertical/menuItemStyles'

const Breakpoints = () => {
  return (
    <div className='flex'>
      <VerticalNav 
        breakpoints={{ lg: '1000px' }}
        // The following customStyles prop is used to show this example properly in the documentation.
        // You need to remove this prop in your implementation.
        customStyles={{
          height: '100%',
          '& .ts-vertical-nav-container': { borderInlineEndColor: 'var(--mui-palette-divider)'},
          position: 'absolute !important',
          '& .ts-vertical-nav-backdrop': {
            position: 'absolute',
            insetInlineEnd: '-600%'
          }
        }}
        backgroundColor='var(--mui-palette-background-paper)'
        // Remove the code till here
      >
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
      <main className='p-4 flex-grow'>
        <NavToggle />
      </main>
    </div>
  )
}

export default Breakpoints
