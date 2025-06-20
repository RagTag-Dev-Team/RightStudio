// Third-party Imports
import classnames from 'classnames'

// Component Imports
import HorizontalNav, { Menu, MenuItem } from '@menu/horizontal-menu'

// Util Imports
import { menuClasses } from '@menu/utils/menuClasses'

// Style Imports
import styles from '../styles.module.css'
import menuItemStyles from '@docComponents/styles/horizontal/menuItemStyles'

const RootStyles = () => {
  return (
    <div className={classnames('flex items-center plb-2.5 pli-6 w-full', styles.customStyles)}>
      <HorizontalNav>
        <Menu menuItemStyles={menuItemStyles()}>
          <MenuItem
            rootStyles={{
              ['.' + menuClasses.button]: {
                backgroundColor: '#e4e2ff',
                color: '#7367F0 !important'
              }
            }}
          >
            Analytics Dashboard
          </MenuItem>
          <MenuItem>Calendar</MenuItem>
          <MenuItem>FAQ</MenuItem>
          <MenuItem>Form Layout</MenuItem>
          <MenuItem>Documentation</MenuItem>
        </Menu>
      </HorizontalNav>
    </div>
  )
}

export default RootStyles
