// Type Imports
import type { BreakPointType, ChildrenType } from '../../types'
import type { VerticalNavProps } from '../vertical-menu/VerticalNav'

// Component Imports
import VerticalNav from '../vertical-menu'

// Type
type VerticalNavInHorizontalProps = ChildrenType & {
  className?: string
  breakPoint?: BreakPointType
  customBreakPoint?: string
  verticalNavProps?: Pick<VerticalNavProps, 'width' | 'backgroundColor' | 'backgroundImage' | 'customStyles'>
}

const VerticalNavInHorizontal = (props: VerticalNavInHorizontalProps) => {
  const { children, className, breakPoint, customBreakPoint, verticalNavProps } = props

  return (
    <VerticalNav
      {...verticalNavProps}
      className={className}
      breakPoint={breakPoint}
      customBreakPoint={customBreakPoint}
    >
      {children}
    </VerticalNav>
  )
}

export default VerticalNavInHorizontal
