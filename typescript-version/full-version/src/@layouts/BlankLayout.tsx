// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ChildrenType } from '../@core/types'

// Util Imports
import { blankLayoutClasses } from './utils/layoutClasses'

const BlankLayout = ({ children }: ChildrenType) => {
  return <div className={classnames(blankLayoutClasses.root, 'width-100')}>{children}</div>
}

export default BlankLayout
