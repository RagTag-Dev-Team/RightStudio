'use client'

// Third-party Imports
import styled from '@emotion/styled'

// Config Imports
import themeConfig from '../../configs/themeConfig'

const StyledVerticalNavbar = styled.header`
  min-block-size: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  inline-size: 100%;
  inset-block-start: 0;
  background-color: white;
  padding-block: 10px;
  padding-inline: ${themeConfig.layoutPadding}px;
  border-block-end: 1px solid #efefef;
`

export default StyledVerticalNavbar
