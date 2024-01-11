'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import HorizontalNav, { Menu, MenuItem } from '@menu/horizontal-menu'

// Style Imports
import styles from '../../../../styles.module.css'

const OnActiveChange = () => {
  return (
    <div className='flex flex-col w-full h-full'>
      <div className={classnames('flex items-center plb-2.5 pli-6 w-full', styles.customStyles)}>
        <HorizontalNav>
          <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
            <MenuItem href='/menu-examples/horizontal-menu/menu-item/on-active-change/without-params'>
              Analytics Dashboard
            </MenuItem>
            <MenuItem
              href='/menu-examples/horizontal-menu/menu-item/on-active-change/without-params/inside'
              onActiveChange={() => {
                console.log('onActiveChange called')
              }}
            >
              Calendar
            </MenuItem>
            <MenuItem>FAQ</MenuItem>
            <MenuItem>Form Layout</MenuItem>
            <MenuItem>Documentation</MenuItem>
          </Menu>
        </HorizontalNav>
      </div>
      <main className='p-4 flex-grow'>
        <p>Toggle between first two items to see the console logs</p>
      </main>
    </div>
  )
}

export default OnActiveChange
