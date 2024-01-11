'use client'

// Component Imports
import VerticalNav, { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

const IsToggled = () => {
  // Hooks
  const { updateVerticalNavState, isPopoutWhenCollapsed } = useVerticalNav()

  return (
    <div className='flex'>
      <VerticalNav customBreakpoint='200px' defaultCollapsed>
        <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }} popoutWhenCollapsed={isPopoutWhenCollapsed}>
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
          <button
            onClick={() => updateVerticalNavState({ isPopoutWhenCollapsed: !isPopoutWhenCollapsed })}
            className='cursor-pointer'
          >
            Click here to pop out
          </button>
          <p>{`isPopoutWhenCollapsed: ${isPopoutWhenCollapsed}`}</p>
        </div>
      </main>
    </div>
  )
}

export default IsToggled
