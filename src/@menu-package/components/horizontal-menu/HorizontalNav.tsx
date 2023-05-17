// Import React
import { HTMLAttributes } from 'react'

// Import Third party libs
import classNames from 'classnames'
import { CSSObject } from '@emotion/react'

// Import Styled Components
import StyledHorizontalNav from '../../styles/horizontal/StyledHorizontalNav'

// Import Components
import VerticalNavInHorizontalLayout from '../../../components/VerticalNavInHorizontalLayout'

// Import Hooks and Utils
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { horizontalNavClasses } from '../../utils/utilityClasses'

// Define Types
type BreakPoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'always'

const BREAK_POINTS: Record<BreakPoint, string> = {
  xs: '480px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1536px',
  xxl: '1920px',
  always: 'always'
}

export type HorizontalNavProps = HTMLAttributes<HTMLDivElement> & {
  switchToVertical?: boolean
  hideMenu?: boolean
  breakPoint?: BreakPoint
  customBreakPoint?: string
  transitionOptions?: {
    duration?: number | string
    easing?: string
    delay?: number | string
  }
  customStyle?: CSSObject
}

const HorizontalNav = (props: HorizontalNavProps) => {
  /* Destructure Props with default values */
  const {
    switchToVertical = false,
    hideMenu = false,
    breakPoint = 'lg',
    customBreakPoint,
    customStyle,
    className,
    children,
    ...rest
  } = props

  // Find the breakpoint from which screen size responsive behavior should enable and if its reached or not
  const breakpointReached = useMediaQuery(customBreakPoint ?? (breakPoint ? BREAK_POINTS[breakPoint] : breakPoint))

  // If switchToVertical is true, then render the VerticalNav component if breakpoint is reached
  if (switchToVertical && breakpointReached) {
    return <VerticalNavInHorizontalLayout>{children}</VerticalNavInHorizontalLayout>
  }

  // If hideMenu is true, then hide the HorizontalNav component if breakpoint is reached
  if (hideMenu && breakpointReached) {
    return null
  }

  // If switchToVertical & hideMenu are false, then render the HorizontalNav component
  return (
    <StyledHorizontalNav
      switchToVertical={switchToVertical}
      hideMenu={hideMenu}
      breakpointReached={breakpointReached}
      customStyle={customStyle}
      className={classNames(
        horizontalNavClasses.root,
        {
          [horizontalNavClasses.breakpointReached]: breakpointReached
        },
        className
      )}
      {...rest}
    >
      {children}
    </StyledHorizontalNav>
  )
}

export default HorizontalNav
