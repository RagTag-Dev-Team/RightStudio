// Third Party Imports
import styled from '@emotion/styled'

// Type Imports
import type { RootStylesType } from '../types'

const StyledMenuLabel = styled.span<RootStylesType>`
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${({ rootStyles }) => rootStyles};
`

export default StyledMenuLabel
