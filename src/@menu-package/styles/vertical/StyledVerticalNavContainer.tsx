import styled from '@emotion/styled'
import { VerticalNavProps } from '../../components/vertical-menu/VerticalNav'
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
  transition-duration: ${({ transitionOptions }) =>
    `${
      typeof transitionOptions?.duration === 'number' ? `${transitionOptions?.duration}ms` : transitionOptions?.duration
    }`};
  transition-timing-function: ${({ transitionOptions }) => transitionOptions?.easing};
  transition-delay: ${({ transitionOptions }) =>
    `${typeof transitionOptions?.delay === 'number' ? `${transitionOptions?.delay}ms` : transitionOptions?.delay}`};
`

export default StyledVerticalNavContainer
