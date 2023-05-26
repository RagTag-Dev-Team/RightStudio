// Third Party Imports
import styled from '@emotion/styled'

// Type Imports
import type { HorizontalNavProps } from '../../components/horizontal-menu/HorizontalNav'

type StyledHorizontalNavProps = Omit<HorizontalNavProps, 'customBreakPoint' | 'checkIfBreakpointReached'> & {
  breakpointReached: boolean
}

const StyledHorizontalNav = styled.div<StyledHorizontalNavProps>`
  inline-size: 100%;
  block-size: 100%;
  overflow: hidden;
  position: relative;
`

export default StyledHorizontalNav
