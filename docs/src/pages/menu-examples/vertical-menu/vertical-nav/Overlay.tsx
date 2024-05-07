'use client'

// Component Imports
import NavToggle from '@components/layout/vertical/NavToggle'
import VerticalNav, { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'

const Overlay = () => {
  return (
    <div className='flex h-full'>
      <VerticalNav 
        breakpoint='always'
        // The following customStyles prop is used to show this example properly in the documentation.
        // You need to remove this prop in your implementation.
        customStyles={{
          position: 'absolute !important',
          '& .ts-vertical-nav-backdrop': {
            position: 'absolute',
            insetInlineEnd: '-600%'
          }
        }}
        // Remove the code till here
      >
        <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
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

export default Overlay
