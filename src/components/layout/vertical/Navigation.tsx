// Component Imports from @menu-package
import { RouterLink } from '../../../@menu-package/components/RouterLink'
import PerfectScrollbar from '../../../@menu-package/wrapper-componnents/perfectscrollbar'
import VerticalNav, { Menu, SubMenu, MenuItem, MenuSection } from '../../../@menu-package/components/vertical-menu'

// Component Imports from @layouts
import NavHeader from '../../../@layouts/components/vertical/NavHeader'
import NavCollapseIcons from '../../../@layouts/components/vertical/NavCollapseIcons'

// Component Imports
import Logo from '../shared/Logo'

const Navigation = () => {
  return (
    // eslint-disable-next-line lines-around-comment
    // Sidebar Vertical Menu
    <VerticalNav backgroundImage='assets/01.jpg' backgroundColor='rgba(255,255,0,0.8)'>
      {/* Nav Header including Logo & nav toggle icons  */}
      <NavHeader>
        <Logo />
        <NavCollapseIcons />
      </NavHeader>
      {/* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */}
      <PerfectScrollbar options={{ wheelPropagation: false }}>
        {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
        {/* Vertical Menu */}
        <Menu>
          <MenuItem
            icon=''
            target='_blank'
            rel='noopener noreferrer'
            // eslint-disable-next-line lines-around-comment
            // i18nKey='apps-pages'
            // aclProps={{ action: 'read', subject: 'apps-pages' }}
            // rootStyles={{ backgroundColor: '#f4f4f4' }}
            component={<RouterLink href='/' />}
          >
            Home
          </MenuItem>
          <SubMenu label='Test' icon='' defaultOpen>
            <SubMenu label='Testing' defaultOpen>
              <MenuItem href='/about'>About</MenuItem>
            </SubMenu>
          </SubMenu>
          <MenuSection
            label='Apps & Pages'
            icon=''
            prefix='-'
            suffix='+'
            // eslint-disable-next-line lines-around-comment
            // i18nKey='apps-pages'
            // aclProps={{ action: 'read', subject: 'apps-pages' }}
            rootStyles={{ color: 'red' }}
          >
            <MenuItem href='/email'>Email</MenuItem>
            <MenuItem href='/chat'>Chat</MenuItem>
            <SubMenu label='Authentication' icon=''>
              <SubMenu label='Login'>
                <MenuItem href='/login-v1'>Login v1</MenuItem>
                <MenuItem href='/login-v2'>Login v2</MenuItem>
              </SubMenu>
            </SubMenu>
            <SubMenu label='Manage Users'>
              <MenuItem href='/user-list'>User List</MenuItem>
              <MenuItem href='/user-details'>User Details</MenuItem>
            </SubMenu>
          </MenuSection>
        </Menu>
        {/* <Menu>{generateVerticalMenu(menuData)}</Menu> */}
      </PerfectScrollbar>
    </VerticalNav>
  )
}

export default Navigation
