// React Imports
import { useRef, useEffect, createElement, Fragment, useState } from 'react'
import type { ReactInstance } from 'react'

// Third-party Imports
import { autocomplete } from '@algolia/autocomplete-js'
import type { AutocompleteOptions } from '@algolia/autocomplete-js'
import type { Root } from 'react-dom/client'
import { createRoot } from 'react-dom/client'

// Icon Imports
import Search from '../../svg/Search'

// Style Imports
import '@algolia/autocomplete-theme-classic'

/* interface AutocompleteProps extends AutocompleteOptions {
  // Define props if needed
} */

export const Autocomplete = (props: AutocompleteOptions) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const panelRootRef = useRef<Root | null>(null)
  const rootRef = useRef<ReactInstance | null>(null)
  const isOpen = useRef(false)
  const [isAutoCompleteOpen, setIsAutoCompleteOpen] = useState(false)

  const handleClick = () => {
    setIsAutoCompleteOpen(true)
  }

  // Search Icon Component
  const SearchIcon = ({ onClick }: { onClick: () => void }) => {
    return (
      <span style={{ display: 'flex' }}>
        <Search
          className='ts-nav-search-icon'
          role='button'
          aria-label='search'
          style={{ cursor: 'pointer' }}
          onClick={onClick}
          fontSize='1.25rem'
        />
      </span>
    )
  }

  useEffect(() => {
    if (!containerRef.current) {
      return
    }

    const { setIsOpen, destroy } = autocomplete({
      container: containerRef?.current,
      placeholder: 'Search Menu Items',
      detachedMediaQuery: '',
      defaultActiveItemId: 0,
      onStateChange({ state }) {
        isOpen.current = state.isOpen
        if (state.isOpen === false) {
          setIsAutoCompleteOpen(false)
        }
      },

      renderer: {
        createElement: createElement,
        Fragment: Fragment,
        render: () => null
      },

      render({ children }, root) {
        if (!panelRootRef.current || rootRef.current !== root) {
          rootRef.current = root

          panelRootRef.current?.unmount()
          panelRootRef.current = createRoot(root)
        }

        panelRootRef.current.render(children)
      },
      ...props
    })

    if (isAutoCompleteOpen) {
      setIsOpen(true)
    }

    // Open search on CMD+K
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey && event.key.toLowerCase() === 'k') {
        setIsOpen(!isOpen.current)
      }
    }

    // Add event listener
    window.addEventListener('keydown', onKeyDown)

    // useEffect cleanup
    return () => {
      // Remove event listener
      window.removeEventListener('keydown', onKeyDown)

      // Destroy autocomplete
      destroy()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props, isAutoCompleteOpen])

  return (
    <>
      <SearchIcon onClick={handleClick} />
      <div ref={containerRef} className='d-none' />
    </>
  )
}
