'use client'

// Third-party Imports
import styled from '@emotion/styled'

// Config Imports
import themeConfig from '../../configs/themeConfig'

const StyledFooter = styled.footer`
  position: sticky;
  inset-block-end: 0;
  inline-size: 100%;
  background-color: white;
  padding-block: 15px;
  padding-inline: ${themeConfig.layoutPadding}px;
  border-block-start: 1px solid #efefef;
`

export default StyledFooter
