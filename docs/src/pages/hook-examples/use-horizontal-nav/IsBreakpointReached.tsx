'use client'

// Comopoent Imports
import NavToggle from '@components/layout/vertical/NavToggle'
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu/horizontal-menu'


// Hook Imports
import useHorizontalNav from '@menu/hooks/useHorizontalNav'

// Style Imports
import menuItemStyles from '@docComponents/styles/horizontal/menuItemStyles'

import VerticalNavContent from '../../menu-examples/horizontal-menu/VerticalNavContent'

const IsBreakpointReached = () => {
  // Hooks
  const { isBreakpointReached } = useHorizontalNav()

  return (
    <div className='flex'>
      <HorizontalNav
        switchToVertical
        breakpoint='md'
        verticalNavContent={VerticalNavContent}

        // The following customStyles prop is used to show this example properly in the documentation.
        // You need to remove this prop in your implementation.
        verticalNavProps={{ 
          customStyles: { 
            position: 'absolute !important',
            '& .ts-vertical-nav-backdrop': {
              position: 'absolute',
              insetInlineEnd: '-600%'
            }
          },
          backgroundColor: 'var(--mui-palette-background-paper)'

          // Remove the code till here 
         }}
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
      </HorizontalNav>
      <main className='p-4 flex-grow'>{isBreakpointReached && <NavToggle />}</main>
    </div>
  )
}

export default IsBreakpointReached
