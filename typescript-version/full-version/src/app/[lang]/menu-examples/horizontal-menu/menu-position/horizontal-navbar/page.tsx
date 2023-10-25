'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import NavToggle from '@components/layout/horizontal/NavToggle'
import LanguageDropdown from '@components/layout/shared/LanguageDropdown'
import ModeDropdown from '@components/layout/shared/ModeDropdown'
import VerticalNavContent from '@components/layout/horizontal/VerticalNavContent'
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu-package/horizontal-menu'

// Hook Imports
import useHorizontalNav from '@menu-package/hooks/useHorizontalNav'

// Icon Imports
import Search from '@layouts/svg/Search'
import Logo from '@components/layout/shared/Logo'

// Style Imports
import styles from '../../styles.module.css'

const HorizontalNavbar = () => {
  // Hooks
  const { isBreakpointReached } = useHorizontalNav()

  return (
    <div className={classnames('flex items-center plb-2.5 pli-6 w-full', styles.customStyles)}>
      <div className='flex w-full items-center justify-between'>
        <NavToggle />
        {!isBreakpointReached && <Logo />}
        <HorizontalNav hideMenu switchToVertical verticalNavContent={VerticalNavContent}>
          <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
            <MenuItem>Home</MenuItem>
            <MenuItem component='div'>About</MenuItem>
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
        </HorizontalNav>
        <div className='flex gap-4 items-center'>
          <Search className='mis-0' />
          <LanguageDropdown />
          <ModeDropdown />
        </div>
      </div>
    </div>
  )
}

export default HorizontalNavbar
