// React Imports
import type { CSSProperties } from 'react'

// Third-party Imports
import { KBarResults, useMatches } from 'kbar'

// Component Imports
import SearchResultItem from './SearchResultItem'

// Styles
const groupNameStyle: CSSProperties = {
  padding: '8px 16px',
  fontSize: '10px',
  textTransform: 'uppercase' as const,
  opacity: 0.5
}

const SearchResults = () => {
  // Hooks
  const { results, rootActionId } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div style={groupNameStyle}>{item}</div>
        ) : (
          <SearchResultItem action={item} active={active} currentRootActionId={rootActionId} />
        )
      }
    />
  )
}

export default SearchResults
