// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ChildrenType } from '../../../@core/types'

// Util Imports
import { horizontalLayoutClasses } from '../../utils/layoutClasses'

const LayoutContentWrapper = ({ children }: ChildrenType) => {
  return (
    <div className={classnames(horizontalLayoutClasses.contentWrapper, 'd-flex flex-column width-100 overflow-hidden')}>
      {children}
    </div>
  )
}

export default LayoutContentWrapper
