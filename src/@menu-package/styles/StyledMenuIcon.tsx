// Third Party Imports
import styled from '@emotion/styled'

// Type Imports
import type { RootStylesType } from '../types'

const StyledMenuIcon = styled.span<RootStylesType>`
  inline-size: 35px;
  min-inline-size: 35px;
  block-size: 35px;
  line-height: 35px;
  text-align: center;
  display: inline-block;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline-end: 10px;
  ${({ rootStyles }) => rootStyles};
`

export default StyledMenuIcon
