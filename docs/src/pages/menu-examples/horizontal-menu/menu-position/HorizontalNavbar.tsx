'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import NavToggle from '@components/layout/horizontal/NavToggle'
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu/horizontal-menu'


// Hook Imports
import useHorizontalNav from '@menu/hooks/useHorizontalNav'

// Style Imports
import verticalMenuItemStyles from '@docComponents/styles/vertical/menuItemStyles'
import menuItemStyles from '@docComponents/styles/horizontal/menuItemStyles'

import styles from '../styles.module.css'
import VerticalNavContent from '../VerticalNavContent'

const HorizontalNavbar = () => {
  // Hooks
  const { isBreakpointReached } = useHorizontalNav()

  return (
    <div className={classnames('flex items-center plb-2.5 pli-6 w-full', styles.customStyles)}>
      <div className='flex w-full items-center justify-between'>
        <NavToggle />
        {!isBreakpointReached && 'Logo'}
        <HorizontalNav 
          hideMenu
          switchToVertical
          verticalNavContent={VerticalNavContent}

          // The following customStyles prop is used to show this example properly in the documentation.
          // You need to remove this prop in your implementation.
          verticalNavProps={{
            customStyles:{
              '& .ts-vertical-nav-container': { borderInlineEndColor: 'var(--mui-palette-divider)'},
              position: 'absolute !important',
              '& .ts-vertical-nav-backdrop': {
                position: 'absolute',
                insetInlineEnd: '-600%'
              }
            },
            backgroundColor: 'var(--mui-palette-background-paper)'
          }}

          // Remove the code till here 
        >
          <Menu menuItemStyles={menuItemStyles()} verticalMenuProps={{ menuItemStyles: verticalMenuItemStyles() }}>
            <MenuItem>Home</MenuItem>
            <MenuItem component='div'>About</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Email</MenuItem>
            <MenuItem>Chat</MenuItem>
            <SubMenu label='Authentication'>
              <SubMenu label='Login'>
                <MenuItem>Login v1</MenuItem>
                <MenuItem>Login v2</MenuItem>
              </SubMenu>
            </SubMenu>
            <SubMenu label='Manage Users'>
              <MenuItem>User List</MenuItem>
              <MenuItem>User Details</MenuItem>
            </SubMenu>
          </Menu>
        </HorizontalNav>
      </div>
    </div>
  )
}

export default HorizontalNavbar
