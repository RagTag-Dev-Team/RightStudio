import styled, { CSSObject } from '@emotion/styled'

type StyledMenuIconProps = {
  rootStyles?: CSSObject
}

const StyledMenuIcon = styled.span<StyledMenuIconProps>`
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
