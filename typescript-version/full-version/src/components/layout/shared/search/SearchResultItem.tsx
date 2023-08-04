// React Imports
import { Fragment, forwardRef, useMemo } from 'react'
import type { Ref } from 'react'

// Third-party Imports
import classnames from 'classnames'
import type { ActionId, ActionImpl } from 'kbar'

// Icon Imports
import SubdirectoryLeft from '@/assets/svg/SubdirectoryLeft'

// Style Imports
import styles from './styles.module.css'

const Title = ({ title, flexGrow = false }: { title: string; flexGrow?: boolean }) => {
  return flexGrow ? (
    <span className={classnames('flex-grow-1', styles.itemLabel)}>{title}</span>
  ) : (
    <span className={styles.itemLabel}>{title}</span>
  )
}

const TitleWithAncestors = ({
  title,
  flexGrow = false,
  ancestors
}: {
  title: string
  flexGrow?: boolean
  ancestors: ActionImpl[]
}) => {
  if (ancestors.length === 0) return <Title title={title} flexGrow={flexGrow} />

  return (
    <div className='d-flex align-items-center flex-grow-1 gap-8px'>
      {ancestors.map((ancestor: ActionImpl) => (
        <Fragment key={ancestor.id}>
          <span style={{ opacity: 0.5 }}>{ancestor.name}</span>
          <span>&rsaquo;</span>
        </Fragment>
      ))}
      <Title title={title} flexGrow={flexGrow} />
    </div>
  )
}

const Shortcut = ({ shortcut }: { shortcut: string[] }) => {
  if (shortcut.length > 1) {
    return (
      <div className='d-flex align-items-center gap-6px'>
        {shortcut.map(sc => (
          <kbd key={sc} className={classnames('d-flex align-items-center justify-content-center', styles.kbd)}>
            {sc}
          </kbd>
        ))}
      </div>
    )
  }

  return <kbd className={classnames('d-flex align-items-center justify-content-center', styles.kbd)}>{shortcut[0]}</kbd>
}

const EnterComponent = ({ active }: { active: boolean }) => {
  return (
    active && (
      <div className='d-flex'>
        <SubdirectoryLeft fontSize='1.25rem' />
      </div>
    )
  )
}

const SearchResultItem = forwardRef(
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
          'd-flex align-items-center justify-content-between gap-16px cursor-pointer'
        )}
      >
        <div className={classnames(styles.itemContentWrapper, 'd-flex align-items-center flex-grow-1 gap-10px')}>
          {action.icon && <div className={classnames('d-flex', styles.itemIcon)}>{action.icon}</div>}
          {action.name &&
            (action.subtitle ? (
              <div className={classnames('d-flex flex-column flex-grow-1', styles.nameSubtitleWrapper)}>
                <TitleWithAncestors title={action.name} ancestors={ancestors} />
                {action.subtitle && <span className={styles.itemSubtitle}>{action.subtitle}</span>}
              </div>
            ) : (
              <TitleWithAncestors flexGrow title={action.name} ancestors={ancestors} />
            ))}
        </div>
        <EnterComponent active={active} />
        {action.shortcut?.length && <Shortcut shortcut={action.shortcut} />}
      </div>
    )
  }
)

export default SearchResultItem
