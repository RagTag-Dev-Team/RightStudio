'use client'

// React Imports
import { useState } from 'react'

// Component Imports
import VerticalNav, { Menu, MenuItem, SubMenu } from '@menu/vertical-menu'

const CollapsedHover = () => {
  // States
  const [trigger, setTrigger] = useState<'click' | 'hover'>('click')

  return (
    <div className='flex'>
      <VerticalNav customBreakpoint='200px' defaultCollapsed>
        <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }} triggerPopout={trigger} popoutWhenCollapsed>
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
        <label>
          <input
            id='hover'
            type='radio'
            value='hover'
            name='triggerPopout'
            checked={trigger === 'hover'}
            onChange={() => setTrigger('hover')}
          />
          Hover
        </label>
        <label>
          <input
            id='click'
            type='radio'
            value='click'
            name='triggerPopout'
            checked={trigger === 'click'}
            onChange={() => setTrigger('click')}
          />
          Click
        </label>
      </main>
    </div>
  )
}

export default CollapsedHover
