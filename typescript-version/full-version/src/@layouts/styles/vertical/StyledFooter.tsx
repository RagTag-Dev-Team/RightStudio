// Third-party Imports
import styled from '@emotion/styled'
import type { CSSObject } from '@emotion/styled'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

type StyledFooterProps = {
  skin: Settings['skin']
  overrideStyles?: CSSObject
}

const StyledFooter = styled.footer<StyledFooterProps>`
  &.${verticalLayoutClasses.footerContentCompact} {
    &.${verticalLayoutClasses.footerDetached} {
      margin-inline: auto;
      max-inline-size: ${themeConfig.compactContentWidth}px;
    }

    &.${verticalLayoutClasses.footerAttached} .${verticalLayoutClasses.footerContentWrapper} {
      margin-inline: auto;
      max-inline-size: ${themeConfig.compactContentWidth}px;
    }
  }

  &.${verticalLayoutClasses.footerFixed} {
    position: sticky;
    inset-block-end: 0;
    z-index: var(--footer-z-index);

    &.${verticalLayoutClasses.footerAttached},
      &.${verticalLayoutClasses.footerDetached}
      .${verticalLayoutClasses.footerContentWrapper} {
      background-color: var(--background-color);
    }

    &.${verticalLayoutClasses.footerDetached} {
      pointer-events: none;
      padding-inline: ${themeConfig.layoutPadding}px;

      & .${verticalLayoutClasses.footerContentWrapper} {
        pointer-events: auto;
        border-inline: 1px solid var(--border-color);
        border-block-start: 1px solid var(--border-color);
        border-start-start-radius: var(--border-radius);
        border-start-end-radius: var(--border-radius);
      }
    }

    &.${verticalLayoutClasses.footerAttached} {
      border-block-start: 1px solid var(--border-color);
    }
  }

  & .${verticalLayoutClasses.footerContentWrapper} {
    padding-block: 15px;
    padding-inline: ${themeConfig.layoutPadding}px;
  }

  ${({ overrideStyles }) => overrideStyles}
`

export default StyledFooter
