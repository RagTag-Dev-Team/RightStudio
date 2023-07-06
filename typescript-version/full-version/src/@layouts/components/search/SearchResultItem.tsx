// React Imports
import { Fragment, forwardRef, useMemo } from 'react'
import type { Ref } from 'react'

// Third-party Imports
import classnames from 'classnames'
import type { ActionId, ActionImpl } from 'kbar'

// Style Imports
import styles from '../../styles/search.module.css'

const ResultItem = forwardRef(
  (
    {
      action,
      active,
      currentRootActionId
    }: {
      action: ActionImpl
      active: boolean
      currentRootActionId: ActionId | undefined | null
    },
    ref: Ref<HTMLDivElement>
  ) => {
    const ancestors = useMemo(() => {
      if (!currentRootActionId) return action.ancestors

      const index = action.ancestors.findIndex(ancestor => ancestor.id === currentRootActionId)

      return action.ancestors.slice(index + 1)
    }, [action.ancestors, currentRootActionId])

    return (
      <div
        ref={ref}
        className={classnames(
          styles.itemButton,
          { [styles.activeItemButton]: active },
          'd-flex align-items-center justify-content-between cursor-pointer'
        )}
      >
        <div className={classnames(styles.itemContentWrapper, 'd-flex align-items-center gap-2')}>
          {action.icon && action.icon}
          <div className='d-flex flex-column'>
            <div>
              {ancestors.length > 0 &&
                ancestors.map((ancestor: ActionImpl) => (
                  <Fragment key={ancestor.id}>
                    <span style={{ opacity: 0.5, marginRight: 8 }}>{ancestor.name}</span>
                    <span style={{ marginRight: 8 }}>&rsaquo;</span>
                  </Fragment>
                ))}
              <span>{action.name}</span>
            </div>
            {action.subtitle && <span className={styles.itemSubtitle}>{action.subtitle}</span>}
          </div>
        </div>
        {action.shortcut?.length ? (
          <div aria-hidden className={styles.shortcutWrapper}>
            {action.shortcut.map(sc => (
              <kbd key={sc} className={styles.kbd}>
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    )
  }
)

export default ResultItem
