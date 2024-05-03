'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import NavToggle from '@components/layout/horizontal/NavToggle'
import HorizontalNav, { Menu, MenuItem, SubMenu } from '@menu/horizontal-menu'
import VerticalNavContent from '../VerticalNavContent'

// Hook Imports
import useHorizontalNav from '@menu/hooks/useHorizontalNav'

// Style Imports
import styles from '../styles.module.css'

const HorizontalNavbar = () => {
  // Hooks
  const { isBreakpointReached } = useHorizontalNav()

  return (
    <div className={classnames('flex items-center plb-2.5 pli-6 w-full', styles.customStyles)}>
      <div className='flex w-full items-center justify-between'>
        <NavToggle />
        {!isBreakpointReached && 'Logo'}
        <HorizontalNav hideMenu switchToVertical verticalNavContent={VerticalNavContent}>
          <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
            <MenuItem>Home</MenuItem>
            <MenuItem component='div'>About</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Email</MenuItem>
            <MenuItem>Chat</MenuItem>
            <SubMenu label='Authentication'>
              <SubMenu label='Login'>
                <MenuItem>Login v1</MenuItem>
                <MenuItem>Login v2</MenuItem>
              </SubMenu>
            </SubMenu>
            <SubMenu label='Manage Users'>
              <MenuItem>User List</MenuItem>
              <MenuItem>User Details</MenuItem>
            </SubMenu>
          </Menu>
        </HorizontalNav>
      </div>
    </div>
  )
}

export default HorizontalNavbar
