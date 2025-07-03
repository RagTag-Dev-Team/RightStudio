'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import NavToggle from '@components/layout/horizontal/NavToggle'
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu/horizontal-menu'

import verticalMenuItemStyles from '@docComponents/styles/vertical/menuItemStyles'

import menuItemStyles from '@docComponents/styles/horizontal/menuItemStyles'

import VerticalNavContent from '../VerticalNavContent'

// Styled Component Imports
import styles from '../styles.module.css'

const BreakPoint = () => {
  return (
    <div className={classnames('flex items-center plb-2.5 pli-6 w-full', styles.customStyles)}>
      <NavToggle />
      <HorizontalNav
        switchToVertical
        breakpoint='md'
        verticalNavContent={VerticalNavContent}

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

export default BreakPoint
