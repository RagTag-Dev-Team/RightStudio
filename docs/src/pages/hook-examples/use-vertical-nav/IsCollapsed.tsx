'use client'

// MUI Imports
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

// Component Imports
import VerticalNav, { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Style Imports
import menuItemStyles from '@docComponents/styles/vertical/menuItemStyles'

const IsCollapsed = () => {
  // Hooks
  const { isCollapsed, updateVerticalNavState } = useVerticalNav()

  return (
    <div className='flex min-bs-full bs-dvh'>
      <VerticalNav customBreakpoint='200px' customStyles={{ blockSize: 'auto', '& .ts-vertical-nav-container': { borderInlineEndColor: 'var(--mui-palette-divider)'} }} backgroundColor='var(--mui-palette-background-paper)'>
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
        <div className='flex justify-between'>
          <FormControlLabel
            label={isCollapsed ? 'Expand Menu' : 'Collapse Menu'}
            control={<Checkbox onChange={() => updateVerticalNavState({ isCollapsed: !isCollapsed })} />}
          />
          <p>{`isCollapsed: ${isCollapsed}`}</p>
        </div>
      </main>
    </div>
  )
}

export default IsCollapsed
