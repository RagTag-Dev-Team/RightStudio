'use client'

// React Imports
import type { ElementType, ReactNode } from 'react'

// Next Imports
import { useRouter } from 'next/navigation'

// Third-party Imports
import { useMedia } from 'react-use'
import classnames from 'classnames'
import { KBarProvider, KBarPortal, KBarPositioner, KBarSearch, useKBar } from 'kbar'

// Type Imports
import type { ChildrenType } from '@core/types'

// Component Imports
import SearchResults from './SearchResults'

// Icon Imports
import Search from '@layouts/svg/Search'
import Close from '@menu-package/svg/Close'

// Config Imports
import themeConfig from '@configs/themeConfig'

// Hook Imports
import useVerticalNav from '@menu-package/hooks/useVerticalNav'

// Styled Component Imports
import StyledKBarAnimator from './StyledKBarAnimator'

// Style Imports
import styles from './styles.module.css'

// Data Imports
import data from '@/data/searchData'

type ComponentWithUseKBarProps = Partial<ChildrenType> & {
  className?: string
  icon?: ReactNode
  tag?: ElementType
  triggerClick?: boolean
}

const ComponentWithUseKBar = (props: ComponentWithUseKBarProps) => {
  // Props
  const { children, className, icon, tag, triggerClick = false } = props

  // Hooks
  const { isBreakpointReached, isToggled, toggleVerticalNav } = useVerticalNav()
  const { query } = useKBar(state => {
    if (isBreakpointReached && isToggled && state.visualState === 'showing') {
      toggleVerticalNav(false)
    }
  })

  const Tag = tag || 'div'

  return (
    <Tag className={className} {...(triggerClick && { onClick: query.toggle })}>
      {icon || children}
    </Tag>
  )
}

// NavSearch Component
const NavSearch = () => {
  // Hooks
  const router = useRouter()
  const isSmallScreen = useMedia('(max-width: 600px)', false)

  // Search Actions Data with 'perform' method
  const searchActions = data.map(item => ({
    ...item,
    url: undefined, // Remove the 'url' key
    perform: () => (item.url.includes('http') ? window.open(item.url, '_blank') : router.push(item.url)) // Add 'perform' method
  }))

  return (
    <KBarProvider actions={searchActions}>
      <ComponentWithUseKBar
        triggerClick
        className='ts-nav-search-icon flex cursor-pointer'
        icon={<Search fontSize='1.25rem' />}
      />
      <KBarPortal>
        <KBarPositioner className={styles.positioner}>
          <StyledKBarAnimator
            className={classnames('is-full bs-full overflow-hidden', { smallScreen: isSmallScreen })}
            {...(!isSmallScreen && { style: { margin: themeConfig.layoutPadding } })}
          >
            <div className={classnames('flex items-center gap-2.5', styles.inputWrapper)}>
              <div className='flex'>
                <Search />
              </div>
              <KBarSearch defaultPlaceholder='' className={classnames('grow min-is-0', styles.searchInput)} />
              <ComponentWithUseKBar className={styles.escape}>{`[esc]`}</ComponentWithUseKBar>
              <ComponentWithUseKBar triggerClick className='flex cursor-pointer' icon={<Close fontSize='1.75rem' />} />
            </div>
            <SearchResults />
          </StyledKBarAnimator>
        </KBarPositioner>
        <div
          className={classnames('ts-nav-search-backdrop', styles.searchBackdrop)}
          role='button'
          aria-label='backdrop'
        />
      </KBarPortal>
    </KBarProvider>
  )
}

export default NavSearch
