// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ChildrenType } from '../../../@core/types'

// Config Imports
import themeConfig from '../../../configs/themeConfig'

// Util Imports
import { verticalLayoutClasses } from '../../utils/layoutClasses'

// Style Imports
import styles from '../../styles/vertical.module.css'

const Navbar = ({ children }: ChildrenType) => {
  return (
    <header
      className={classnames(
        verticalLayoutClasses.header,
        styles.header,
        'd-flex align-items-center justify-content-between width-100'
      )}
      style={{ paddingInline: themeConfig.layoutPadding }}
    >
      <div className={classnames(verticalLayoutClasses.navbar, 'width-100')}>{children}</div>
    </header>
  )
}

export default Navbar
