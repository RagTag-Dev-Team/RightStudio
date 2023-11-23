// Third-party Imports
import styled from '@emotion/styled'
import type { CSSObject } from '@emotion/styled'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

type StyledHeaderProps = {
  skin: Settings['skin']
  overrideStyles?: CSSObject
}

const StyledHeader = styled.header<StyledHeaderProps>`
  min-block-size: var(--header-height);

  &.${verticalLayoutClasses.headerContentCompact} {
    &.${verticalLayoutClasses.headerFloating}
      .${verticalLayoutClasses.navbar},
      &.${verticalLayoutClasses.headerDetached}
      .${verticalLayoutClasses.navbar},
      &.${verticalLayoutClasses.headerAttached}
      .${verticalLayoutClasses.navbar} {
      margin-inline: auto;
    }

    &.${verticalLayoutClasses.headerFloating}
      .${verticalLayoutClasses.navbar},
      &.${verticalLayoutClasses.headerFixed}.${verticalLayoutClasses.headerDetached}
      .${verticalLayoutClasses.navbar} {
      max-inline-size: calc(${themeConfig.compactContentWidth}px - ${2 * themeConfig.layoutPadding}px);
    }

    .${verticalLayoutClasses.navbar} {
      max-inline-size: ${themeConfig.compactContentWidth}px;
    }
  }

  &.${verticalLayoutClasses.headerFixed} {
    position: sticky;
    inset-block-start: 0;
    z-index: var(--header-z-index);

    &:not(.${verticalLayoutClasses.headerBlur}).${verticalLayoutClasses.headerAttached},
      &:not(.${verticalLayoutClasses.headerBlur}).${verticalLayoutClasses.headerDetached}
      .${verticalLayoutClasses.navbar} {
      background-color: var(--background-color);
    }

    &.${verticalLayoutClasses.headerDetached} .${verticalLayoutClasses.navbar} {
      border-inline: 1px solid var(--border-color);
      border-block-end: 1px solid var(--border-color);
      border-end-start-radius: var(--border-radius);
      border-end-end-radius: var(--border-radius);
    }

    &.${verticalLayoutClasses.headerDetached}, &.${verticalLayoutClasses.headerFloating} {
      pointer-events: none;

      & .${verticalLayoutClasses.navbar} {
        pointer-events: auto;
      }
    }

    &.${verticalLayoutClasses.headerBlur} {
      &.${verticalLayoutClasses.headerAttached},
        &.${verticalLayoutClasses.headerDetached}
        .${verticalLayoutClasses.navbar},
        &.${verticalLayoutClasses.headerFloating}
        .${verticalLayoutClasses.navbar} {
        backdrop-filter: blur(6px);
        background-color: rgb(var(--background-color-rgb) / 0.9);
      }

      &.${verticalLayoutClasses.headerFloating} {
        &:before {
          content: '';
          position: absolute;
          z-index: -1;
          inset-block-start: 0;
          inset-inline: 0;
          block-size: 100%;
          background: linear-gradient(
            180deg,
            rgb(var(--background-color-rgb) / 0.7) 44%,
            rgb(var(--background-color-rgb) / 0.43) 73%,
            rgb(var(--background-color-rgb) / 0)
          );
          backdrop-filter: blur(10px);
          mask: linear-gradient(black, black 18%, transparent 100%);
        }
      }
    }

    &.${verticalLayoutClasses.headerAttached} {
      border-block-end: 1px solid var(--border-color);
    }
  }

  &.${verticalLayoutClasses.headerFloating} {
    padding-block-start: 16px;

    .${verticalLayoutClasses.navbar} {
      background-color: var(--background-color);
      border: 1px solid var(--border-color);
      border-radius: var(--border-radius);
    }
  }

  &.${verticalLayoutClasses.headerFloating}
    .${verticalLayoutClasses.navbar},
    &.${verticalLayoutClasses.headerFixed}.${verticalLayoutClasses.headerDetached}
    .${verticalLayoutClasses.navbar} {
    inline-size: calc(100% - ${2 * themeConfig.layoutPadding}px);
  }

  .${verticalLayoutClasses.navbar} {
    padding-block: 10px;
    padding-inline: ${themeConfig.layoutPadding}px;
    inline-size: 100%;
  }

  ${({ overrideStyles }) => overrideStyles}
`

export default StyledHeader
