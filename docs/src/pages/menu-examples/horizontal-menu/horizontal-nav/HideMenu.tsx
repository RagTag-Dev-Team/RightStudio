'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import NavToggle from '@components/layout/horizontal/NavToggle'
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu/horizontal-menu'
import VerticalNavContent from '../VerticalNavContent'

// Style Imports
import styles from '../styles.module.css'
import verticalMenuItemStyles from '@docComponents/styles/vertical/menuItemStyles'
import menuItemStyles from '@docComponents/styles/horizontal/menuItemStyles'

const HideMenu = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className={classnames('flex items-center plb-2.5 pli-6 w-full', styles.customStyles)}>
        <NavToggle />
        <HorizontalNav hideMenu breakpoint='md'>
          <Menu menuItemStyles={verticalMenuItemStyles()}>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Contact Us</MenuItem>
          </Menu>
        </HorizontalNav>
      </div>
      <HorizontalNav
        breakpoint='md'
        verticalNavContent={VerticalNavContent}
        switchToVertical
        customStyles={{ padding: '10px 24px', borderBottom: '1px solid var(--mui-palette-divider)' }}
        // The following customStyles prop is used to show this example properly in the documentation.
        // You need to remove this prop in your implementation.
        verticalNavProps={{ 
          customStyles: {
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
    </div>
  )
}

export default HideMenu
