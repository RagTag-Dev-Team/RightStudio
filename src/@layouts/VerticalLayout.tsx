// React Imports
import type { ReactNode } from 'react'

// Context Imports
import { VerticalNavProvider } from '../@menu-package/contexts/verticalNavContext'

// Component Imports
import Footer from './components/Footer'
import Navbar from './components/navbar-vertical/Navbar'
import PageContent from './components/PageContent'
import { RouterLink } from '../@menu-package/components/RouterLink'
import MenuHeader from './components/menu-vertical/MenuHeader'
import PerfectScrollbar from '../@menu-package/wrapper-componnents/perfectscrollbar'
import VerticalNavCollapseIcons from './components/menu-vertical/VerticalNavCollapseIcons'
import VerticalNav, { Menu, SubMenu, MenuItem, MenuSection } from '../@menu-package/components/vertical-menu'

const VerticalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <VerticalNavProvider>
      <VerticalNav backgroundImage='assets/01.jpg' backgroundColor='rgba(255,255,0,0.8)'>
        <MenuHeader>
          Logo
          <VerticalNavCollapseIcons />
        </MenuHeader>
        <PerfectScrollbar options={{ wheelPropagation: false }}>
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
      <PageContent>
        <Navbar />
        {/* Content */}
        <div>{children}</div>
        <Footer />
      </PageContent>
    </VerticalNavProvider>
  )
}

export default VerticalLayout
