// React Imports
import { forwardRef } from 'react'
import type { ForwardRefRenderFunction, HTMLAttributes } from 'react'

// Third Party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { ChildrenType, RootStylesType } from '../../types'

// Styled Component Imports
import StyledUl from '../../styles/StyledUl'
import StyledHorizontalSubMenuContent from '../../styles/horizontal/StyledHorizontalSubMenuContent'

export type SubMenuContentProps = HTMLAttributes<HTMLDivElement> &
  RootStylesType &
  Partial<ChildrenType> & {
    open?: boolean
    browserScroll?: boolean
    firstLevel?: boolean
    top?: number
  }

const SubMenuContent: ForwardRefRenderFunction<HTMLDivElement, SubMenuContentProps> = (props, ref) => {
  const { children, open, firstLevel, top, browserScroll, ...rest } = props

  return (
    <StyledHorizontalSubMenuContent
      ref={ref}
      firstLevel={firstLevel}
      open={open}
      top={top}
      browserScroll={browserScroll}
      {...rest}
    >
      {/* If browserScroll is false render PerfectScrollbar */}
      {!browserScroll ? (
        <PerfectScrollbar
          options={{ wheelPropagation: false }}
          style={{ maxBlockSize: `calc((var(--vh, 1vh) * 100) - ${top}px)` }}
        >
          <StyledUl>{children}</StyledUl>
        </PerfectScrollbar>
      ) : (
        <StyledUl>{children}</StyledUl>
      )}
    </StyledHorizontalSubMenuContent>
  )
}

export default forwardRef(SubMenuContent)
