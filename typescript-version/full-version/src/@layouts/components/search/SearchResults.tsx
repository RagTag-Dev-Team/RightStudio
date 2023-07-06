// Third-party Imports
import { KBarResults, useMatches } from 'kbar'

// Component Imports
import SearchResultItem from './SearchResultItem'

// Style Imports
import styles from '../../styles/search.module.css'

const SearchResults = () => {
  // Hooks
  const { results, rootActionId } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div className={styles.groupName}>{item}</div>
        ) : (
          <SearchResultItem action={item} active={active} currentRootActionId={rootActionId} />
        )
      }
    />
  )
}

export default SearchResults
