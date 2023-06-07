// Do not remove this following 'use client' else SubMenu in rendered in vertical menu on smaller screen will not work.
'use client'

// Component Imports from @menu-package
import { RouterLink } from '../../../@menu-package/components/RouterLink'
import HorizontalNav, { Menu, SubMenu, MenuItem } from '../../../@menu-package/components/horizontal-menu'

// Utils Imports
// import { generateHorizontalMenu } from '../../../@menu-package/utils/menuUtils'

// Menu Data Imports
// import menuData from '../../../navigation-data/HorizontalMenuData'

const Navigation = () => {
  return (
    <HorizontalNav switchToVertical>
      <Menu>
        {/* This is how you can use a custom component */}
        <MenuItem component={<RouterLink href='/' />}>Home</MenuItem>
        {/* This is how you can use a custom Element */}
        <MenuItem component='div'>About</MenuItem>
        {/* This is how you will normally render menu item */}
        <MenuItem href='/about'>About</MenuItem>
        <MenuItem href='/email'>Email</MenuItem>
        <MenuItem href='/chat'>Chat</MenuItem>
        <SubMenu label='Authentication'>
          {/* <MenuItem href='/contact'>Contact</MenuItem> */}
          <SubMenu label='Login'>
            <MenuItem href='/login-v1'>Login v1</MenuItem>
            <MenuItem href='/login-v2'>Login v2</MenuItem>
          </SubMenu>
          <MenuItem href='/chat'>Chat</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
          <MenuItem href='/chat'>Chat</MenuItem>
        </SubMenu>
        <SubMenu label='Manage Users'>
          <MenuItem href='/user-list'>User List</MenuItem>
          <MenuItem href='/user-details'>User Details</MenuItem>
        </SubMenu>
      </Menu>
      {/* <Menu>{generateHorizontalMenu(menuData)}</Menu> */}
    </HorizontalNav>
  )
}

export default Navigation
