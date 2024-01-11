'use client'

// Comopoent Imports
import NavToggle from '@components/layout/vertical/NavToggle'
import VerticalNavContent from '@components/layout/horizontal/VerticalNavContent'
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu/horizontal-menu'

// Hook Imports
import useHorizontalNav from '@menu/hooks/useHorizontalNav'

const BreakPoint = () => {
  // Hooks
  const { isBreakpointReached } = useHorizontalNav()

  return (
    <div className='flex'>
      <HorizontalNav
        switchToVertical
        breakpoint='md'
        verticalNavContent={VerticalNavContent}
        verticalNavProps={{ customStyles: { '& .ts-menu-button': { paddingBlock: '12px' } } }}
      >
        <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
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

export default BreakPoint
