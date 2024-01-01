// Third-party Imports
import styled from '@emotion/styled'
import type { CSSObject } from '@emotion/styled'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Util Imports
import { horizontalLayoutClasses } from '@layouts/utils/layoutClasses'

type StyledHeaderProps = {
  overrideStyles?: CSSObject
}

const StyledHeader = styled.header<StyledHeaderProps>`
  border-block-end: 1px solid var(--border-color);

  &:not(.${horizontalLayoutClasses.headerBlur}) {
    background-color: var(--background-color);
  }

  &.${horizontalLayoutClasses.headerBlur} {
    backdrop-filter: blur(6px);
    background-color: rgb(var(--background-color-rgb) / 0.9);
  }

  &.${horizontalLayoutClasses.headerFixed} {
    position: sticky;
    inset-block-start: 0;
    z-index: var(--header-z-index);
  }

  &.${horizontalLayoutClasses.headerContentCompact} .${horizontalLayoutClasses.navbar} {
    margin-inline: auto;
    max-inline-size: ${themeConfig.compactContentWidth}px;
  }

  .${horizontalLayoutClasses.navbar} {
    position: relative;
    min-block-size: var(--header-height);
    padding-block: 10px;
    padding-inline: ${themeConfig.layoutPadding}px;
  }

  ${({ overrideStyles }) => overrideStyles}
`

export default StyledHeader
