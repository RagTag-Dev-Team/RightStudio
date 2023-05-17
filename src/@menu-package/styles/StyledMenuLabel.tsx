import styled, { CSSObject } from '@emotion/styled'

type StyledMenuLabelProps = {
  rootStyles?: CSSObject
}

const StyledMenuLabel = styled.span<StyledMenuLabelProps>`
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${({ rootStyles }) => rootStyles};
`

export default StyledMenuLabel
