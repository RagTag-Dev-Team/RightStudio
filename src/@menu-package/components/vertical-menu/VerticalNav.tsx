'use client'

// React imports
import { HTMLAttributes, useEffect } from 'react'

// Third party lib imports
import classnames from 'classnames'
import { CSSObject } from '@emotion/react'

// Context import
import { VerticalNavState } from '../../contexts/verticalNavContext'

// Hook imports
import useVerticalNav from '../../hooks/useVerticalNav'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { verticalNavClasses } from '../../utils/utilityClasses'

// Styled component imports
import StyledVerticalNav from '../../styles/vertical/StyledVerticalNav'
import StyledBackdrop from '../../styles/StyledBackdrop'
import StyledVerticalNavBgImage from '../../styles/vertical/StyledVerticalNavBgImage'
import StyledVerticalNavContainer from '../../styles/vertical/StyledVerticalNavContainer'
import StyledVerticalNavBgColorContainer from '../../styles/vertical/StyledVerticalNavBgColorContainer'

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

export type VerticalNavProps = HTMLAttributes<HTMLHtmlElement> & {
  width?: VerticalNavState['width']
  collapsedWidth?: VerticalNavState['collapsedWidth']
  defaultCollapsed?: boolean
  rtl?: VerticalNavState['isRtl']
  backgroundColor?: string
  backgroundImage?: string
  breakPoint?: BreakPoint
  customBreakPoint?: string
  transitionOptions?: VerticalNavState['transitionOptions']
  backdropColor?: string
  popoutWhenCollapsed?: boolean
  scrollWithContent?: boolean
  customStyle?: CSSObject
}

const transitionOptionsDefaults = {
  easing: 'ease-in-out',
  duration: 300,
  delay: 0
}

// VerticalNav Component
const VerticalNav = (props: VerticalNavProps) => {
  /* Destructure Props with default values */
  const {
    width = 260,
    collapsedWidth = 80,
    defaultCollapsed = false,
    rtl = false,
    backgroundColor = 'white',
    backgroundImage,
    breakPoint = 'lg',
    customBreakPoint,
    transitionOptions = transitionOptionsDefaults,
    backdropColor,
    popoutWhenCollapsed = false,
    scrollWithContent = false,
    className,
    customStyle,
    children,
    ...rest
  } = props

  // Find the breakpoint from which screen size responsive behavior should enable and if its reached or not
  const breakpointReached = useMediaQuery(customBreakPoint ?? (breakPoint ? BREAK_POINTS[breakPoint] : breakPoint))

  /* Hook */
  const {
    updateVerticalNavState,
    isCollapsed: isCollapsedContext,
    width: widthContext,
    collapsedWidth: collapsedWidthContext,
    isBreakpointReached: isBreakpointReachedContext,
    isToggled: isToggledContext,
    isHovered: isHoveredContext,
    collapsing: collapsingContext,
    expanding: expandingContext,
    transitionOptions: transitionOptionsContext,
    isScrollWithContent: isScrollWithContentContext
  } = useVerticalNav()

  // UseEffect, update verticalNav state to set initial values and update values on change
  useEffect(() => {
    updateVerticalNavState({
      width,
      collapsedWidth,
      transitionOptions,
      isScrollWithContent: scrollWithContent,
      isRtl: rtl,
      isBreakpointReached: breakpointReached,
      isPopoutWhenCollapsed: popoutWhenCollapsed
    })

    if (!breakpointReached) {
      updateVerticalNavState({ isToggled: false })
    } else {
      isCollapsedContext && updateVerticalNavState({ isCollapsed: false })
      isHoveredContext && updateVerticalNavState({ isHovered: false })
    }
  }, [width, collapsedWidth, rtl, scrollWithContent, breakpointReached, popoutWhenCollapsed, updateVerticalNavState])

  useEffect(() => {
    updateVerticalNavState({
      isCollapsed: defaultCollapsed,
      transitionOptions: { ...transitionOptionsDefaults, ...transitionOptions },
      isToggled: false
    })
  }, [defaultCollapsed, JSON.stringify(transitionOptions), updateVerticalNavState])

  useEffect(() => {
    setTimeout(() => {
      updateVerticalNavState({
        expanding: false,
        collapsing: false
      })
    }, transitionOptions?.duration as number)
  }, [isCollapsedContext])

  /* Handle Backdrop(Content Overlay) Click */
  const handleBackdropClick = () => {
    /* Close the verticalNav */
    updateVerticalNavState({ isToggled: false })
  }

  /* Handle VerticalNav Hover Event */
  const handleVerticalNavHover = () => {
    /* If verticalNav is collapsed then only hover class should be added to verticalNav and hover functionality should work (expand verticalNav width) */
    if (isCollapsedContext && !isHoveredContext) {
      updateVerticalNavState({ isHovered: true })
    }
  }

  /* Handle VerticalNav Hover Out Event */
  const handleVerticalNavHoverOut = () => {
    /* If verticalNav is collapsed then only remove hover class should contract verticalNav width */
    if (isCollapsedContext && isHoveredContext) {
      updateVerticalNavState({ isHovered: false })
    }
  }

  return (
    <StyledVerticalNav
      width={widthContext}
      isBreakpointReached={isBreakpointReachedContext}
      collapsedWidth={collapsedWidthContext}
      collapsing={collapsingContext}
      expanding={expandingContext}
      transitionOptions={transitionOptionsContext}
      customStyle={customStyle}
      scrollWithContent={isScrollWithContentContext}
      className={classnames(
        verticalNavClasses.root,
        {
          [verticalNavClasses.collapsed]: isCollapsedContext,
          [verticalNavClasses.toggled]: isToggledContext,
          [verticalNavClasses.hovered]: isHoveredContext,
          [verticalNavClasses.breakpointReached]: isBreakpointReachedContext,
          [verticalNavClasses.scrollWithContent]: isScrollWithContentContext,
          [verticalNavClasses.collapsing]: collapsingContext,
          [verticalNavClasses.expanding]: expandingContext
        },
        className
      )}
      {
        /* Toggle verticalNav on hover only when popoutWhenCollapsed(default false) is false */
        ...(!popoutWhenCollapsed &&
          isCollapsedContext && {
            onMouseEnter: handleVerticalNavHover,
            onMouseLeave: handleVerticalNavHoverOut
          })
      }
      {...rest}
    >
      {/* VerticalNav Container for hover effect when verticalNav is collapsed */}
      <StyledVerticalNavContainer
        width={widthContext}
        transitionOptions={transitionOptionsContext}
        className={verticalNavClasses.container}
      >
        {/* VerticalNav Container to apply styling like background */}
        <StyledVerticalNavBgColorContainer
          className={verticalNavClasses.bgColorContainer}
          backgroundColor={backgroundColor}
        >
          {children}
        </StyledVerticalNavBgColorContainer>

        {/* Display verticalNav background image if provided by user through props */}
        {backgroundImage && (
          /* VerticalNav Background Image */
          <StyledVerticalNavBgImage
            className={verticalNavClasses.image}
            src={backgroundImage}
            alt='verticalNav background'
          />
        )}
      </StyledVerticalNavContainer>

      {/* When verticalNav is toggled on smaller screen, show/hide verticalNav backdrop */}
      {isToggledContext && breakpointReached && (
        /* VerticalNav Backdrop */
        <StyledBackdrop
          role='button'
          tabIndex={0}
          aria-label='backdrop'
          onClick={handleBackdropClick}
          onKeyPress={handleBackdropClick}
          className={verticalNavClasses.backdrop}
          backdropColor={backdropColor}
        />
      )}
    </StyledVerticalNav>
  )
}

export default VerticalNav
