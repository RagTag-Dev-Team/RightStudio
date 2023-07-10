// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ChildrenType } from '../../@core/types'

// Config Imports
import themeConfig from '../../configs/themeConfig'

// Util Imports
import { layoutClasses } from '../utils/layoutClasses'

// Style Imports
import styles from '../styles/footer.module.css'

const Footer = ({ children }: ChildrenType) => {
  return (
    <footer
      className={classnames(layoutClasses.footer, styles.root, 'width-100')}
      style={{ paddingInline: themeConfig.layoutPadding }}
    >
      <div className={classnames(layoutClasses.footerContentWrapper, 'width-100')}>{children}</div>
    </footer>
  )
}

export default Footer
