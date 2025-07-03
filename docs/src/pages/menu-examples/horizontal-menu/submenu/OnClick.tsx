'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu/horizontal-menu'

// Style Imports
import menuItemStyles from '@docComponents/styles/horizontal/menuItemStyles'

import styles from '../styles.module.css'

const OnClick = () => {
  return (
    <div className='flex flex-col w-full h-full'>
      <div className={classnames('flex items-center plb-2.5 pli-6 w-full', styles.customStyles)}>
        <HorizontalNav>
          <Menu menuItemStyles={menuItemStyles()}>
            <SubMenu
              label='Dashboards'
              onClick={() => {
                console.log('Submenu clicked')
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
        </HorizontalNav>
      </div>
      <main className='p-4 flex-grow'>
        <p>Click on Dashboards and check console</p>
      </main>
    </div>
  )
}

export default OnClick
