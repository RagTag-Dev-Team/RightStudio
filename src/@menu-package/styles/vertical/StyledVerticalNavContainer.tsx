// Third Party Imports
import styled from '@emotion/styled'

// Type Imports
import type { VerticalNavProps } from '../../components/vertical-menu/VerticalNav'

// Util Imports
import { verticalNavClasses } from '../../utils/utilityClasses'

type StyledVerticalNavContainerProps = Pick<VerticalNavProps, 'width' | 'transitionOptions'>

const StyledVerticalNavContainer = styled.div<StyledVerticalNavContainerProps>`
  position: relative;
  block-size: 100%;
  inline-size: 100%;
  .${verticalNavClasses.hovered} &,
  .${verticalNavClasses.expanding} & {
    inline-size: ${({ width }) => `${typeof width === 'number' ? `${width}px` : width}`};
  }

  /* Transition */
  transition-property: inline-size, inset-inline-start;
  transition-duration: ${({ transitionOptions }) => `${transitionOptions?.duration}ms`};
  transition-timing-function: ${({ transitionOptions }) => transitionOptions?.easing};
  transition-delay: ${({ transitionOptions }) => `${transitionOptions?.delay}ms`};
`

export default StyledVerticalNavContainer
