'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem } from '@menu/vertical-menu'

// Style Imports
import menuItemStyles from '@docComponents/styles/vertical/menuItemStyles'

const Icon = () => {
  return (
    <VerticalNav customBreakpoint='200px' customStyles={{ '& .ts-vertical-nav-container': { borderInlineEndColor: 'var(--mui-palette-divider)'} }} backgroundColor='var(--mui-palette-background-paper)'>
      <Menu menuItemStyles={menuItemStyles()}>
        <MenuItem icon={<>🔥</>}>Analytics Dashboard</MenuItem>
        <MenuItem icon={<>🔥</>}>Calendar</MenuItem>
        <MenuItem icon={<>🔥</>}>FAQ</MenuItem>
        <MenuItem icon={<>🔥</>}>Form Layout</MenuItem>
        <MenuItem icon={<>🔥</>}>Documentation</MenuItem>
      </Menu>
    </VerticalNav>
  )
}

export default Icon
