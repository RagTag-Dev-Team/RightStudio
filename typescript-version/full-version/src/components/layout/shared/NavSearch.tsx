'use client'

// Next Imports
import { useRouter } from 'next/navigation'

// Third-party Imports
import classnames from 'classnames'
import { KBarProvider, KBarPortal, KBarPositioner, KBarAnimator, KBarSearch, useKBar } from 'kbar'

// Component Imports
import SearchResults from '../../../@layouts/components/search/SearchResults'

// Icon Imports
import Search from '../../../@layouts/svg/Search'

// Style Imports
import styles from './styles.module.css'

// Data Imports
import data from '../../../data/SearchData'

// Search Icon Component
const SearchIcon = () => {
  const { query } = useKBar()

  return (
    <span className='d-flex'>
      <Search
        className='ts-nav-search-icon cursor-pointer'
        role='button'
        aria-label='search'
        onClick={query.toggle}
        fontSize='1.25rem'
      />
    </span>
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
          <KBarAnimator className={classnames(styles.searchDialog, 'width-100 overflow-hidden')}>
            <KBarSearch className={classnames(styles.searchInput, 'width-100')} />
            <SearchResults />
          </KBarAnimator>
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
