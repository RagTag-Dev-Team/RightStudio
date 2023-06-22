// Type Imports
import type { ChildrenType } from '../../../@menu-package/types'

// Config Imports
import themeConfig from '../../../configs/themeConfig'

// Util Imports
import { verticalLayoutClasses } from '../../utils/utilityClasses'

const LayoutContent = ({ children }: ChildrenType) => {
  return (
    <main className={verticalLayoutClasses.content} style={{ flex: '1 1 auto', padding: themeConfig.layoutPadding }}>
      {children}
    </main>
  )
}

export default LayoutContent
