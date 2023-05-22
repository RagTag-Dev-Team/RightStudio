'use client'

//* This is User Component (Not a core component)

// Components Imports
import VerticalNavToggle from './VerticalNavToggle'
import { RouterLink } from '../../@menu-package/components/RouterLink'
import HorizontalNav, { Menu, SubMenu, MenuItem } from '../../@menu-package/components/horizontal-menu'

// Utils Imports
import { generateHorizontalMenu } from '../../@menu-package/utils/menuUtils'

// Styled Components Imports
import StyledNavbar from '../../styles/StyledNavbar'

// Menu Data Imports
import menuData from '../../navigation-data/HorizontalMenuData'

const Navbar = () => {
  return (
    <StyledNavbar>
      <VerticalNavToggle />
      <span style={{ marginInlineStart: '10px' }}>Navbar</span>
      <HorizontalNav switchToVertical>
        <Menu>
          {/* This is how you can use a custom component */}
          <MenuItem component={<RouterLink href='/' />}>Home</MenuItem>
          {/* This is how you can use a custom Element */}
          <MenuItem component='div'>About</MenuItem>
          {/* This is how you will normally render menu item */}
          <MenuItem href='/about'>About</MenuItem>
          <SubMenu label='Authentication'>
            {/* <MenuItem href='/contact'>Contact</MenuItem> */}
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
        <Menu>{generateHorizontalMenu(menuData)}</Menu>
      </HorizontalNav>
    </StyledNavbar>
  )
}

export default Navbar
