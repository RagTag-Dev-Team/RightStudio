// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ChildrenType } from '../../../@core/types'

// Config Imports
import themeConfig from '../../../configs/themeConfig'

// Util Imports
import { horizontalLayoutClasses } from '../../utils/layoutClasses'

const LayoutContent = ({ children }: ChildrenType) => {
  return (
    <main
      className={classnames(horizontalLayoutClasses.content, 'flex-auto')}
      style={{ padding: themeConfig.layoutPadding }}
    >
      {children}
    </main>
  )
}

export default LayoutContent
