// Third-party Imports
import styled from '@emotion/styled'

// Type Imports
import type { RootStylesType } from '../types'

const StyledMenuIcon = styled.span<RootStylesType>`
  inline-size: 24px;
  min-inline-size: 24px;
  block-size: 24px;
  line-height: 24px;
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
