// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ChildrenType } from '@core/types'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Util Imports
import { horizontalLayoutClasses } from '@layouts/utils/layoutClasses'

// Style Imports
import styles from './header.module.css'

const Navbar = ({ children }: ChildrenType) => {
  return (
    <div
      className={classnames(horizontalLayoutClasses.navbar, 'flex items-center justify-between is-full', styles.navbar)}
      style={{ paddingInline: themeConfig.layoutPadding }}
    >
      {children}
    </div>
  )
}

export default Navbar
