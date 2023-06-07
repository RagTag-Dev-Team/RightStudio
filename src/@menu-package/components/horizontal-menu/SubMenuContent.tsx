// React Imports
import { forwardRef } from 'react'
import type { ForwardRefRenderFunction, HTMLAttributes } from 'react'

// Third Party Imports
import type { CSSObject } from '@emotion/react'
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { ChildrenType, TransitionOptionsType } from '../../types'

// Hook Imports
import useHorizontalMenu from '../../hooks/useHorizontalMenu'

// Styled Component Imports
import StyledUl from '../../styles/StyledUl'
import StyledHorizontalSubMenuContent from '../../styles/horizontal/StyledHorizontalSubMenuContent'

export type SubMenuContentProps = HTMLAttributes<HTMLDivElement> &
  Partial<ChildrenType> & {
    open?: boolean
    transitionOptions?: TransitionOptionsType
    browserScroll?: boolean
    firstLevel?: boolean
    strategy?: string
    top?: number
    left?: number
    rootStyles?: CSSObject
  }

const SubMenuContent: ForwardRefRenderFunction<HTMLDivElement, SubMenuContentProps> = (props, ref) => {
  const { children, open, firstLevel, strategy, top, left, ...rest } = props

  const { transitionOptions, browserScroll } = useHorizontalMenu()

  return (
    <StyledHorizontalSubMenuContent
      ref={ref}
      firstLevel={firstLevel}
      open={open}
      strategy={strategy}
      top={top}
      left={left}
      transitionOptions={transitionOptions}
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
