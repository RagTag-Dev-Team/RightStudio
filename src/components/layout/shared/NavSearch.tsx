'use client'

// React Imports
import type { CSSProperties } from 'react'

// Next Imports
import { useRouter } from 'next/navigation'

// Third-party Imports
import { KBarProvider, KBarPortal, KBarPositioner, KBarAnimator, KBarSearch, useKBar } from 'kbar'

// Component Imports
import SearchResults from '../../../@layouts/components/search/SearchResults'

// Data
import data from '../../../data/SearchData'

// Icon Imports
import Search from '../../../@layouts/svg/Search'

// Styles
const searchStyle: CSSProperties = {
  padding: '12px 16px',
  fontSize: '16px',
  inlineSize: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  background: 'white'
}

const animatorStyle: CSSProperties = {
  maxInlineSize: '600px',
  inlineSize: '100%',
  background: 'white',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0px 6px 20px rgb(0 0 0 / 20%)'
}

const BackdropStyle: CSSProperties = {
  position: 'fixed',
  insetInlineStart: 0,
  insetBlockStart: 0,
  insetInlineEnd: 0,
  insetBlockEnd: 0,
  zIndex: 9,
  backgroundColor: 'rgba(0, 0, 0, 0.3)'
}

// Search Icon Component
const SearchIcon = () => {
  const { query } = useKBar()

  return (
    <Search
      className='ts-nav-search-icon'
      role='button'
      aria-label='search'
      onClick={query.toggle}
      style={{ cursor: 'pointer', marginInlineEnd: '16px' }}
      fontSize='1.25rem'
    />
  )
}

// NavSearch Component
const NavSearch = () => {
  // Hooks
  const router = useRouter()

  // Search Actions Data with 'perform' method
  const searchActions = data.map(item => ({
    ...item,
    url: undefined, // Remove the 'url' key
    perform: () => router.push(`/${item.url}`) // Add 'perform' method
  }))

  return (
    <KBarProvider actions={searchActions}>
      <SearchIcon />
      <KBarPortal>
        <KBarPositioner style={{ zIndex: 10 }}>
          <KBarAnimator style={animatorStyle}>
            <KBarSearch style={searchStyle} />
            <SearchResults />
          </KBarAnimator>
        </KBarPositioner>
        <div className='ts-nav-search-backdrop' style={BackdropStyle} role='button' aria-label='backdrop' />
      </KBarPortal>
    </KBarProvider>
  )
}

export default NavSearch
