// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ChildrenType } from '../../../@core/types'

// Config Imports
import themeConfig from '../../../configs/themeConfig'

// Util Imports
import { horizontalLayoutClasses } from '../../utils/layoutClasses'

// Style Imports
import styles from './header.module.css'

const Navbar = ({ children }: ChildrenType) => {
  return (
    <div
      className={classnames(
        horizontalLayoutClasses.navbar,
        'd-flex align-items-center justify-content-between width-100',
        styles.navbar
      )}
      style={{ paddingInline: themeConfig.layoutPadding }}
    >
      {children}
    </div>
  )
}

export default Navbar
