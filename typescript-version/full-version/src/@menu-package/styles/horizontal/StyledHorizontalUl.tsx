// Third-party Imports
import styled from '@emotion/styled'

const StyledHorizontalUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  inline-size: 100%;
  block-size: 100%;
  overflow: hidden;
  position: relative;
  padding: 0;
  margin: 0;
  & > li:not(:last-of-type) {
    margin-inline-end: 4px;
  }
`

export default StyledHorizontalUl
