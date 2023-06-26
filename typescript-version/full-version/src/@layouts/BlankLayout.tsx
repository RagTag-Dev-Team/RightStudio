// Type Imports
import type { ChildrenType } from '../@menu-package/types'

// Util Imports
import { blankLayoutClasses } from './utils/utilityClasses'

const BlankLayout = ({ children }: ChildrenType) => {
  return (
    <div className={blankLayoutClasses.root} style={{ inlineSize: '100%' }}>
      {children}
    </div>
  )
}

export default BlankLayout
