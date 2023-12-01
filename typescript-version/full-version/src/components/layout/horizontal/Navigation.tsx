'use client'

// Third-party Imports
import styled from '@emotion/styled'
import classnames from 'classnames'

// Type Imports
import type { Dictionary } from '@core/types'

// Component Imports
import HorizontalMenu from './HorizontalMenu'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'
import useHorizontalNav from '@menu-package/hooks/useHorizontalNav'

// Util Imports
import { horizontalLayoutClasses } from '@layouts/utils/layoutClasses'

// Style Imports
import styles from './styles.module.css'

type StyledDivProps = {
  isContentCompact: boolean
  isBreakpointReached?: boolean
}

const StyledDiv = styled.main<StyledDivProps>`
  ${({ isContentCompact, isBreakpointReached }) =>
    !isBreakpointReached &&
    `
    padding: ${themeConfig.layoutPadding}px;

    ${
      isContentCompact &&
      `
      margin-inline: auto;
      max-inline-size: ${themeConfig.compactContentWidth}px;
    `
    }
  `}
`

const Navigation = ({ dictionary }: { dictionary: Dictionary }) => {
  // Hooks
  const { settings } = useSettings()
  const { isBreakpointReached } = useHorizontalNav()

  const headerContentCompact = settings.navbarContentWidth === 'compact'

  return (
    <div
      {...(!isBreakpointReached && {
        className: classnames(horizontalLayoutClasses.navigation, 'flex', styles.navigation)
      })}
    >
      <StyledDiv
        isContentCompact={headerContentCompact}
        isBreakpointReached={isBreakpointReached}
        {...(!isBreakpointReached && {
          className: classnames(horizontalLayoutClasses.navigationContentWrapper, 'flex items-center is-full')
        })}
      >
        <HorizontalMenu dictionary={dictionary} />
      </StyledDiv>
    </div>
  )
}

export default Navigation
