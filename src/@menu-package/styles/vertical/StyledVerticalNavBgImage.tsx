import styled from '@emotion/styled'
import { verticalNavClasses } from '../../utils/utilityClasses'

const StyledVerticalNavBgImage = styled.img`
  &.${verticalNavClasses.image} {
    inline-size: 100%;
    block-size: 100%;
    position: absolute;
    inset-block-start: 0;
    inset-inline-start: 0;
    object-fit: cover;
    object-position: center;
    z-index: 2;
  }
`

export default StyledVerticalNavBgImage
