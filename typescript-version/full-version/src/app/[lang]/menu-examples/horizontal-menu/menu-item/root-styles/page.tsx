// Third-party Imports
import classnames from 'classnames'

// Component Imports
import HorizontalNav, { Menu, MenuItem } from '@menu/horizontal-menu'

// Util Imports
import { menuClasses } from '@menu/utils/menuClasses'

// Style Imports
import styles from '../../styles.module.css'

const RootStyles = () => {
  return (
    <div className={classnames('flex items-center plb-2.5 pli-6 w-full', styles.customStyles)}>
      <HorizontalNav>
        <Menu menuItemStyles={{ button: { paddingBlock: '12px' } }}>
          <MenuItem
            rootStyles={{
              ['.' + menuClasses.button]: {
                backgroundColor: '#d6d6d6',
                color: '#9f0099'
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
