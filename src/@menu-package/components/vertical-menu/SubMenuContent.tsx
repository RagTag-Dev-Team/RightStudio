// React Imports
import { forwardRef, useEffect, useState } from 'react'
import type { ForwardRefRenderFunction, HTMLAttributes, MutableRefObject } from 'react'

// Third Party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { VerticalMenuContextProps } from './Menu'
import type { ChildrenType, RootStylesType } from '../../types'

// Styled Components
import StyledUl from '../../styles/StyledUl'
import StyledSubMenuContent from '../../styles/StyledSubMenuContent'

export type SubMenuContentProps = HTMLAttributes<HTMLDivElement> &
  RootStylesType &
  Partial<ChildrenType> & {
    open?: boolean
    openWhenCollapsed?: boolean
    openWhenHovered?: boolean
    transitionDuration?: VerticalMenuContextProps['transitionDuration']
    isPopoutWhenCollapsed?: boolean
    level?: number
    isCollapsed?: boolean
    isHovered?: boolean
    browserScroll?: boolean
  }

const SubMenuContent: ForwardRefRenderFunction<HTMLDivElement, SubMenuContentProps> = (props, ref) => {
  const {
    children,
    open,
    level,
    isCollapsed,
    isHovered,
    transitionDuration,
    isPopoutWhenCollapsed,
    openWhenCollapsed,
    browserScroll,
    ...rest
  } = props

  const SubMenuContentRef = ref as MutableRefObject<HTMLDivElement>

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (mounted) {
      if (open || (open && isHovered)) {
        const target = SubMenuContentRef?.current

        if (target) {
          target.style.display = 'block'
          target.style.overflow = 'hidden'
          target.style.blockSize = 'auto'
          const height = target.offsetHeight

          target.style.blockSize = '0px'
          target.offsetHeight

          target.style.blockSize = `${height}px`

          setTimeout(() => {
            target.style.overflow = 'auto'
            target.style.blockSize = 'auto'
          }, transitionDuration)
        }
      } else {
        const target = SubMenuContentRef?.current

        if (target) {
          target.style.overflow = 'hidden'
          target.style.blockSize = `${target.offsetHeight}px`
          target.offsetHeight
          target.style.blockSize = '0px'

          setTimeout(() => {
            target.style.overflow = 'auto'
            target.style.display = 'none'
          }, transitionDuration)
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, mounted, SubMenuContentRef])

  useEffect(() => {
    setMounted(true)
  }, [isHovered])

  return (
    <StyledSubMenuContent
      ref={ref}
      level={level}
      isCollapsed={isCollapsed}
      isHovered={isHovered}
      open={open}
      openWhenCollapsed={openWhenCollapsed}
      isPopoutWhenCollapsed={isPopoutWhenCollapsed}
      transitionDuration={transitionDuration}
      browserScroll={browserScroll}
      {...rest}
    >
      {/* If browserScroll is false render PerfectScrollbar */}
      {!browserScroll && level === 0 && isPopoutWhenCollapsed && isCollapsed ? (
        <PerfectScrollbar
          options={{ wheelPropagation: false }}
          style={{ maxBlockSize: `calc((var(--vh, 1vh) * 100))` }}
        >
          <StyledUl>{children}</StyledUl>
        </PerfectScrollbar>
      ) : (
        <StyledUl>{children}</StyledUl>
      )}
    </StyledSubMenuContent>
  )
}

export default forwardRef(SubMenuContent)
