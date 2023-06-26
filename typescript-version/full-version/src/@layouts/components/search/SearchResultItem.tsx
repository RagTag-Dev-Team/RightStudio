// React Imports
import type { Ref } from 'react'
import { Fragment, forwardRef, useMemo } from 'react'

// Third-party Imports
import type { ActionId, ActionImpl } from 'kbar'

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
        style={{
          padding: '12px 16px',
          background: active ? 'rgba(0 0 0 / 0.05)' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer'
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            fontSize: 14
          }}
        >
          {action.icon && action.icon}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
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
            {action.subtitle && <span style={{ fontSize: 12 }}>{action.subtitle}</span>}
          </div>
        </div>
        {action.shortcut?.length ? (
          <div aria-hidden style={{ display: 'grid', gridAutoFlow: 'column', gap: '4px' }}>
            {action.shortcut.map(sc => (
              <kbd
                key={sc}
                style={{
                  padding: '4px 6px',
                  background: 'rgba(0 0 0 / .1)',
                  borderRadius: '4px',
                  fontSize: 14
                }}
              >
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
