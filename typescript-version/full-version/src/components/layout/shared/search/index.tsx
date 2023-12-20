'use client'

// React Imports
import type { ElementType, ReactNode } from 'react'

// Next Imports
import { useRouter } from 'next/navigation'

// MUI Imports
import { IconButton } from '@mui/material'

// Third-party Imports
import { useMedia } from 'react-use'
import { KBarProvider, KBarPortal, KBarPositioner, KBarSearch, useKBar } from 'kbar'

// Type Imports
import type { ChildrenType } from '@core/types'

// Component Imports
import SearchResults from './SearchResults'

// Hook Imports
import useVerticalNav from '@menu-package/hooks/useVerticalNav'
import { useSettings } from '@core/hooks/useSettings'

// Styled Component Imports
import StyledKBarAnimator from './StyledKBarAnimator'

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
  const { settings } = useSettings()
  const isSmallScreen = useMedia('(max-width: 600px)', false)

  // Search Actions Data with 'perform' method
  const searchActions = data.map(item => ({
    ...item,
    url: undefined, // Remove the 'url' key
    perform: () => (item.url.startsWith('http') ? window.open(item.url, '_blank') : router.push(item.url)) // Add 'perform' method
  }))

  return (
    <KBarProvider actions={searchActions}>
      <ComponentWithUseKBar
        triggerClick
        className='ts-nav-search-icon flex cursor-pointer text-textPrimary'
        icon={<i className='ri-search-line' />}
        tag={IconButton}
      />
      <KBarPortal>
        <KBarPositioner className='!p-0 !items-center z-[calc(var(--search-z-index)+1)]'>
          <StyledKBarAnimator skin={settings.skin} isSmallScreen={isSmallScreen}>
            <div className='flex items-center gap-2 plb-5 pli-6 border-be'>
              <div className='flex'>
                <i className='ri-search-line' />
              </div>
              <KBarSearch
                defaultPlaceholder=''
                name='search-input'
                className='grow min-is-0 plb-1 pli-1.5 text-[16px] outline-0 border-0 bg-transparent text-inherit font-[inherit]'
              />
              <ComponentWithUseKBar className='select-none text-textDisabled'>{`[esc]`}</ComponentWithUseKBar>
              <ComponentWithUseKBar
                triggerClick
                className='flex cursor-pointer'
                icon={<i className='ri-close-line text-textSecondary' />}
              />
            </div>
            <SearchResults />
          </StyledKBarAnimator>
        </KBarPositioner>
        <div
          className='ts-nav-search-backdrop fixed inset-0 z-search bg-[rgba(0,0,0,0.3)]'
          role='button'
          aria-label='backdrop'
        />
      </KBarPortal>
    </KBarProvider>
  )
}

export default NavSearch
