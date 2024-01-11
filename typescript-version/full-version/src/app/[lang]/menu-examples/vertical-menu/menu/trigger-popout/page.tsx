'use client'

// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// Type Imports
import type { MenuProps } from '@menu/components/vertical-menu/Menu'

// Component Imports
import VerticalNav, { Menu, MenuItem, MenuSection, SubMenu } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

const TriggerPopOut = () => {
  const {
    isToggled,
    isCollapsed,
    toggleVerticalNav,
    isBreakpointReached,
    isPopoutWhenCollapsed,
    updateVerticalNavState
  } = useVerticalNav()

  // States
  const [trigger, setTrigger] = useState<MenuProps['triggerPopout']>('hover')

  const handleTriggerChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTrigger(event.target.value as MenuProps['triggerPopout'])
  }

  return (
    <div className='flex'>
      <VerticalNav customBreakpoint='200px'>
        <Menu
          menuItemStyles={{ button: { paddingBlock: '12px' } }}
          triggerPopout={trigger}
          popoutWhenCollapsed={isPopoutWhenCollapsed}
        >
          <MenuSection label='Dashboards & Apps'>
            <SubMenu label='Dashboards'>
              <MenuItem>Analytics</MenuItem>
              <MenuItem>eCommerce</MenuItem>
            </SubMenu>
            <MenuItem>Calendar</MenuItem>
          </MenuSection>
          <MenuSection label='Others'>
            <MenuItem>FAQ</MenuItem>
            <SubMenu label='Menu Level'>
              <MenuItem>Menu Level 2.1</MenuItem>
              <SubMenu label='Menu Level 2.2'>
                <MenuItem>Menu Level 3.1</MenuItem>
                <MenuItem>Menu Level 3.2</MenuItem>
              </SubMenu>
            </SubMenu>
            <MenuItem>Documentation</MenuItem>
          </MenuSection>
        </Menu>
      </VerticalNav>
      <main className='p-4 flex-grow'>
        {isBreakpointReached ? (
          <div
            onClick={() => toggleVerticalNav(isBreakpointReached ? !isToggled : true)}
            className='flex items-center gap-2 cursor-pointer mb-5'
          >
            🔥 Menu Toggle
          </div>
        ) : (
          <>
            <button onClick={() => updateVerticalNavState({ isCollapsed: !isCollapsed })} className='cursor-pointer'>
              Collapse
            </button>
            <div
              onClick={() => updateVerticalNavState({ isPopoutWhenCollapsed: !isPopoutWhenCollapsed })}
              className='flex items-center gap-2 cursor-pointer'
            >
              {isPopoutWhenCollapsed === true ? '🔥' : '🌊'}
              Popout When Collapsed
            </div>
            <div>
              <input
                type='radio'
                name='trigger'
                id='hover'
                value='hover'
                checked={trigger === 'hover'}
                onChange={handleTriggerChange}
              />
              <label htmlFor='hover'>Hover</label>
              <input
                type='radio'
                name='trigger'
                id='click'
                value='click'
                checked={trigger === 'click'}
                onChange={handleTriggerChange}
              />
              <label htmlFor='click'>Click</label>
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export default TriggerPopOut
