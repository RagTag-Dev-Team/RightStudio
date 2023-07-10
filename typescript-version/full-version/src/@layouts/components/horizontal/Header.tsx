// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ChildrenType } from '../../../@core/types'

// Util Imports
import { horizontalLayoutClasses } from '../../utils/layoutClasses'

// Style Imports
import styles from '../../styles/horizontal.module.css'

const Header = ({ children }: ChildrenType) => {
  return <header className={classnames(horizontalLayoutClasses.header, styles.header)}>{children}</header>
}

export default Header
