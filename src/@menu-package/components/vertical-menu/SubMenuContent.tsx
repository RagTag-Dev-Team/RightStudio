// React Imports
import { forwardRef, useEffect, useState } from 'react'
import type { ForwardRefRenderFunction, HTMLAttributes, MutableRefObject } from 'react'

// Third Party Imports
import type { CSSObject } from '@emotion/react'

// Type Imports
import type { ChildrenType } from '../../types'

// Hook Imports
import useVerticalMenu from '../../hooks/useVerticalMenu'

// Styled Components
import StyledUl from '../../styles/StyledUl'
import StyledSubMenuContent from '../../styles/StyledSubMenuContent'

export type SubMenuContentProps = HTMLAttributes<HTMLDivElement> &
  Partial<ChildrenType> & {
    open?: boolean
    openWhenCollapsed?: boolean
    openWhenHovered?: boolean
    transitionDuration?: number
    isPopoutWhenCollapsed?: boolean
    firstLevel?: boolean
    isCollapsed?: boolean
    isHovered?: boolean

    // defaultOpen?: boolean
    strategy?: string
    top?: number
    left?: number
    rootStyles?: CSSObject
  }

const SubMenuContent: ForwardRefRenderFunction<HTMLDivElement, SubMenuContentProps> = (props, ref) => {
  const {
    children,
    open,
    firstLevel,
    isCollapsed,
    isHovered,
    strategy,
    top,
    left,
    isPopoutWhenCollapsed,
    openWhenCollapsed,
    ...rest
  } = props

  const SubMenuContentRef = ref as MutableRefObject<HTMLDivElement>

  const [mounted, setMounted] = useState(false)

  const { transitionDuration } = useVerticalMenu()

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
      firstLevel={firstLevel}
      isCollapsed={isCollapsed}
      isHovered={isHovered}
      open={open}
      strategy={strategy}
      top={top}
      left={left}
      openWhenCollapsed={openWhenCollapsed}
      transitionDuration={transitionDuration}
      isPopoutWhenCollapsed={isPopoutWhenCollapsed}
      {...rest}
    >
      <StyledUl>{children}</StyledUl>
    </StyledSubMenuContent>
  )
}

export default forwardRef(SubMenuContent)
