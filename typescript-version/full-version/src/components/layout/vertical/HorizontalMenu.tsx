'use client'

// Next Imports
// import { useParams } from 'next/navigation'

// Type Imports
// import type { getDictionary } from '@/utils/get-dictionary'

// Context Imports
import { HorizontalNavProvider } from '@menu-package/contexts/horizontalNavContext'

// Component Imports
import { RouterLink } from '@menu-package/components/RouterLink'
import HorizontalNav, { Menu, SubMenu, MenuItem } from '@menu-package/horizontal-menu'

// import { GenerateHorizontalMenu } from '@components/GenerateMenu'

// Menu Data Imports
// import menuData from '@/data/navigation/horizontalMenuData'

const HorizontalMenu = (/* { dictionary }: { dictionary: Awaited<ReturnType<typeof getDictionary>> } */) => {
  // Hooks
  // const params = useParams()

  return (
    <HorizontalNavProvider>
      <HorizontalNav hideMenu>
        <Menu
          menuItemStyles={{
            button: { paddingBlock: '12px' },
            subMenuStyles: { zIndex: 'calc(var(--header-z-index) + 1)' }
          }}
          popoutMenuOffset={{
            mainAxis: ({ level }) => (level && level > 0 ? 10 : 8),
            alignmentAxis: ({ level }) => (level && level > 0 ? -5 : 0)
          }}
        >
          <MenuItem component={<RouterLink href='/' />}>Home</MenuItem>
          <MenuItem component='div'>About</MenuItem>
          <MenuItem href='/about'>About</MenuItem>
          <MenuItem href='/email'>Email</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <SubMenu label='Authentication'>
            <SubMenu label='Login'>
              <MenuItem href='/pages/auth/login-v1'>Login v1</MenuItem>
              <MenuItem href='/pages/auth/login-v2'>Login v2</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label='Manage Users'>
            <MenuItem href='/user-list'>User List</MenuItem>
            <MenuItem href='/user-details'>User Details</MenuItem>
          </SubMenu>
        </Menu>
        {/* <Menu
          menuItemStyles={{
            button: { paddingBlock: '12px' },
            subMenuStyles: { zIndex: 'calc(var(--header-z-index) + 1)' }
          }}
          popoutMenuOffset={{
            mainAxis: ({ level }) => (level && level > 0 ? 10 : 8),
            alignmentAxis: ({ level }) => (level && level > 0 ? -5 : 0)
          }}
        >
          <GenerateHorizontalMenu menuData={menuData(dictionary, params)} />
        </Menu> */}
      </HorizontalNav>
    </HorizontalNavProvider>
  )
}

export default HorizontalMenu
