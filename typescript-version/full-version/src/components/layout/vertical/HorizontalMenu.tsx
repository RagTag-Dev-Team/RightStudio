'use client'

// Next Imports
// import { useParams } from 'next/navigation'

// Type Imports
// import type { getDictionary } from '@/utils/getDictionary'

// Context Imports
import { HorizontalNavProvider } from '@menu/contexts/horizontalNavContext'

// Component Imports
import { RouterLink } from '@menu/components/RouterLink'
import HorizontalNav, { Menu, SubMenu, MenuItem } from '@menu/horizontal-menu'

// import { GenerateHorizontalMenu } from '@components/GenerateMenu'

// Style Imports
import menuItemStyles from '@core/styles/horizontal/menuItemStyles'

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
            ...menuItemStyles(),
            ...{ subMenuStyles: { zIndex: 'calc(var(--header-z-index) + 1)' } }
          }}
          popoutMenuOffset={{
            mainAxis: ({ level }) => (level && level > 0 ? 10 : 8),
            alignmentAxis: ({ level }) => (level && level > 0 ? -5 : 0)
          }}
        >
          <MenuItem component={<RouterLink href='/' />}>Home</MenuItem>
          <MenuItem component='div'>About</MenuItem>
          <MenuItem href='/about'>About</MenuItem>
          <MenuItem href='/apps/email'>Email</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <SubMenu label='Authentication'>
            <SubMenu label='Login'>
              <MenuItem href='/pages/auth/login-v1'>Login v1</MenuItem>
              <MenuItem href='/pages/auth/login-v2'>Login v2</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label='Dashboards'>
            <MenuItem href='/dashboards/crm'>CRM</MenuItem>
            <MenuItem href='/dashboards/analytics'>Analytics</MenuItem>
            <MenuItem href='/dashboards/ecommerce'>eCommerce</MenuItem>
          </SubMenu>
        </Menu>
        {/* <Menu
          menuItemStyles={{
            ...menuItemStyles(settings, theme),
            ...{ subMenuStyles: { zIndex: 'calc(var(--header-z-index) + 1)' } }
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
