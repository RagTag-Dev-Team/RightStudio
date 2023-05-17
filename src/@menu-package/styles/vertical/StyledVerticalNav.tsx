import styled from '@emotion/styled'
import { VerticalNavProps } from '../../components/vertical-menu/VerticalNav'
import { VerticalNavState } from '../../contexts/verticalNavContext'
import { verticalNavClasses } from '../../utils/utilityClasses'

type StyledVerticalNavProps = VerticalNavProps &
  Pick<VerticalNavState, 'isBreakpointReached' | 'collapsing' | 'expanding'>

export const StyledVerticalNav = styled.aside<StyledVerticalNavProps>`
  ${({ scrollWithContent }) =>
    !scrollWithContent &&
    `
    position: sticky;
    inset-block-start: 0;
    block-size: 100vh;
  `}
  border-inline-end: 1px solid #efefef;
  z-index: 9;

  /* Transition */
  transition-property: inline-size, min-inline-size, margin-inline-start, inset-inline-start;
  transition-duration: ${({ transitionOptions }) =>
    `${
      typeof transitionOptions?.duration === 'number' ? `${transitionOptions?.duration}ms` : transitionOptions?.duration
    }`};
  transition-timing-function: ${({ transitionOptions }) => transitionOptions?.easing};
  transition-delay: ${({ transitionOptions }) =>
    `${typeof transitionOptions?.delay === 'number' ? `${transitionOptions?.delay}ms` : transitionOptions?.delay}`};

  /* Width & Min Width & Margin */
  inline-size: ${({ width }) => `${typeof width === 'number' ? `${width}px` : width}`};
  min-inline-size: ${({ width }) => `${typeof width === 'number' ? `${width}px` : width}`};
  &.${verticalNavClasses.collapsed} {
    inline-size: ${({ collapsedWidth }) =>
      `${typeof collapsedWidth === 'number' ? `${collapsedWidth}px` : collapsedWidth}`};
    min-inline-size: ${({ collapsedWidth }) =>
      `${typeof collapsedWidth === 'number' ? `${collapsedWidth}px` : collapsedWidth}`};
  }

  &.${verticalNavClasses.collapsing}, &.${verticalNavClasses.expanding} {
    pointer-events: none;
  }

  /* Collapsed & Toggled */
  &.${verticalNavClasses.breakpointReached} {
    position: fixed;
    block-size: 100%;
    inset-block-start: 0;
    inset-inline-start: 0;
    z-index: 100;
    margin: 0;
    ${({ width }) => `inset-inline-start: ${typeof width === 'number' ? `-${width}px` : `-${width}`};`}
    &.${verticalNavClasses.collapsed} {
      inset-inline-start: -${({ collapsedWidth }) => `${typeof collapsedWidth === 'number' ? `${collapsedWidth}px` : collapsedWidth}`};
    }
    &.${verticalNavClasses.toggled} {
      inset-inline-start: 0;
    }
  }

  ${({ width, isBreakpointReached }) =>
    !isBreakpointReached &&
    `
    &.${verticalNavClasses.toggled} {
      margin-inline-start: ${typeof width === 'number' ? `-${width}px` : `-${width}`};
    }
  `}

  /* User Styles */
  ${({ customStyle }) => customStyle}
`

export default StyledVerticalNav
