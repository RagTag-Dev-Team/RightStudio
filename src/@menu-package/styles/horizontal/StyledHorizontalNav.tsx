import styled from '@emotion/styled'
import { HorizontalNavProps } from '../../components/horizontal-menu/HorizontalNav'

type StyledHorizontalNavProps = Omit<HorizontalNavProps, 'customBreakPoint'> & { breakpointReached: boolean }

const StyledHorizontalNav = styled.div<StyledHorizontalNavProps>`
  inline-size: 100%;
  block-size: 100%;
  overflow: hidden;
  position: relative;
`

export default StyledHorizontalNav
