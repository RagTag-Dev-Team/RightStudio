'use client'

// MUI Imports
import { useTheme } from '@mui/material/styles'

// Component Imports
import { RouterLink } from '../../../@menu-package/components/RouterLink'
import HorizontalNav, { Menu, SubMenu, MenuItem } from '../../../@menu-package/horizontal-menu'

// Context Imports
import { HorizontalNavProvider } from '../../../@menu-package/contexts/horizontalNavContext'

// Hook Imports
import useSettings from '../../../@core/hooks/useSettings'

// Util Imports
// import { generateHorizontalMenu } from '../../../@menu-package/utils/menuUtils'

// Style Imports
import menuItemStyles from '../../../@core/styles/horizontal/menuItemStyles'

// Menu Data Imports
// import menuData from '../../../navigation-data/HorizontalMenuData'

const HorizontalMenu = () => {
  // Hooks
  const theme = useTheme()
  const { settings } = useSettings()

  return (
    <HorizontalNavProvider>
      <HorizontalNav hideMenu>
        <Menu
          menuItemStyles={menuItemStyles(settings, theme)}
          popoutMenuOffset={{
            mainAxis: ({ level }) => (level && level > 0 ? 10 : 8),
            alignmentAxis: ({ level }) => (level && level > 0 ? -5 : 0)
          }}
        >
          {/* This is how you can use a custom component */}
          <MenuItem component={<RouterLink href='/' />}>Home</MenuItem>
          {/* This is how you can use a custom Element */}
          <MenuItem component='div'>About</MenuItem>
          {/* This is how you will normally render menu item */}
          <MenuItem href='/about'>About</MenuItem>
          <MenuItem href='/email'>Email</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <SubMenu label='Authentication'>
            <SubMenu label='Login'>
              <MenuItem href='/login-v1'>Login v1</MenuItem>
              <MenuItem href='/login-v2'>Login v2</MenuItem>
            </SubMenu>
          </SubMenu>
          <SubMenu label='Manage Users'>
            <MenuItem href='/user-list'>User List</MenuItem>
            <MenuItem href='/user-details'>User Details</MenuItem>
          </SubMenu>
        </Menu>
        {/* <Menu>{generateHorizontalMenu(menuData)}</Menu> */}
      </HorizontalNav>
    </HorizontalNavProvider>
  )
}

export default HorizontalMenu
