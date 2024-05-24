'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem } from '@menu/vertical-menu'

// Style Imports
import menuItemStyles from '@docComponents/styles/vertical/menuItemStyles'

const OnClick = () => {
  return (
    <div className='flex'>
      <VerticalNav customBreakpoint='200px' customStyles={{ '& .ts-vertical-nav-container': { borderInlineEndColor: 'var(--mui-palette-divider)'} }} backgroundColor='var(--mui-palette-background-paper)'>
        <Menu menuItemStyles={menuItemStyles()}>
          <MenuItem
            onClick={() => {
              console.log('Analytics Dashboard clicked')
            }}
          >
            Analytics Dashboard
          </MenuItem>
          <MenuItem>Calendar</MenuItem>
          <MenuItem>FAQ</MenuItem>
          <MenuItem>Form Layout</MenuItem>
          <MenuItem>Documentation</MenuItem>
        </Menu>
      </VerticalNav>
      <main className='p-4 flex-grow'>
        <p>Click on Analytics and check console</p>
      </main>
    </div>
  )
}

export default OnClick
