// Third-party Imports
import classnames from 'classnames'

// Component Imports
import HorizontalNav, { Menu, MenuItem } from '@menu/horizontal-menu'

// Style Imports
import menuItemStyles from '@docComponents/styles/horizontal/menuItemStyles'

import styles from '../styles.module.css'

const Prefix = () => {
  return (
    <div className={classnames('flex items-center plb-2.5 pli-6 w-full', styles.customStyles)}>
      <HorizontalNav>
        <Menu menuItemStyles={menuItemStyles()}>
          <MenuItem prefix='🔥'>Analytics Dashboard</MenuItem>
          <MenuItem>Calendar</MenuItem>
          <MenuItem>FAQ</MenuItem>
          <MenuItem>Form Layout</MenuItem>
          <MenuItem>Documentation</MenuItem>
        </Menu>
      </HorizontalNav>
    </div>
  )
}

export default Prefix
