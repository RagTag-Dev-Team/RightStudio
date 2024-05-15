'use client'

// Component Imports
import NavHeader from '@menu/components/vertical-menu/NavHeader'
import NavCollapseIcons from '@menu/components/vertical-menu/NavCollapseIcons'
import NavToggle from '@components/layout/vertical/NavToggle'
import VerticalNav, { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'

// Hook
import useHorizontalNav from '@menu/hooks/useHorizontalNav'

// Style Imports
import menuItemStyles from '@docComponents/styles/vertical/menuItemStyles'

const NavCollapseIcon = () => {
  const { isBreakpointReached } = useHorizontalNav()

  return (
    <div className='flex min-bs-full bs-dvh'>
      <VerticalNav customBreakpoint='1100px' customStyles={{ blockSize: 'auto', '& .ts-vertical-nav-container': { borderInlineEndColor: 'var(--mui-palette-divider)'} }} backgroundColor='var(--mui-palette-background-paper)'>
        <NavHeader>
          {!isBreakpointReached && 'Logo'}
          <NavCollapseIcons
            unlockedIcon={<>{'>'}</>}
            lockedIcon={<>{'<'}</>}
            closeIcon={<>X</>}
            onClick={() => console.log('clicked')}
            onClose={() => console.log('closed')}
          />
        </NavHeader>
        <Menu menuItemStyles={menuItemStyles()}>
          <SubMenu label='Dashboards'>
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
      </VerticalNav>
      <main className='p-4 flex-grow'>
        <NavToggle />
      </main>
    </div>
  )
}

export default NavCollapseIcon
