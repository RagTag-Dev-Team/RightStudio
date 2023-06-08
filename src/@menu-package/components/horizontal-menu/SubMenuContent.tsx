// React Imports
import { forwardRef } from 'react'
import type { ForwardRefRenderFunction, HTMLAttributes } from 'react'

// Third Party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { ChildrenType, RootStylesType } from '../../types'

// Hook Imports
import useHorizontalMenu from '../../hooks/useHorizontalMenu'

// Styled Component Imports
import StyledUl from '../../styles/StyledUl'
import StyledHorizontalSubMenuContent from '../../styles/horizontal/StyledHorizontalSubMenuContent'

export type SubMenuContentProps = HTMLAttributes<HTMLDivElement> &
  RootStylesType &
  Partial<ChildrenType> & {
    open?: boolean
    browserScroll?: boolean
    firstLevel?: boolean
    strategy?: string
    top?: number
    left?: number
  }

const SubMenuContent: ForwardRefRenderFunction<HTMLDivElement, SubMenuContentProps> = (props, ref) => {
  const { children, open, firstLevel, strategy, top, left, ...rest } = props

  const { browserScroll } = useHorizontalMenu()

  return (
    <StyledHorizontalSubMenuContent
      ref={ref}
      firstLevel={firstLevel}
      open={open}
      strategy={strategy}
      top={top}
      left={left}
      browserScroll={browserScroll}
      {...rest}
    >
      {/* If browserScroll is false render PerfectScrollbar */}
      {!browserScroll ? (
        <PerfectScrollbar
          options={{ wheelPropagation: false }}
          style={{ maxBlockSize: 'calc((var(--vh, 1vh) * 100) - 120px - 4rem)' }}
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
