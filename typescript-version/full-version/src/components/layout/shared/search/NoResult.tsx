// React Imports
import type { ReactNode } from 'react'

// Next Imports
import Link from 'next/link'

// Third-party Imports
import classnames from 'classnames'

// Style Imports
import styles from './noResult.module.css'
import commonStyles from './styles.module.css'

type NoResultProps = {
  query: string | undefined
}

type NoResultData = {
  label: string
  href: string
  icon: ReactNode
}

const noResultData: NoResultData[] = [
  {
    label: 'Analytics',
    href: '/dashboards/analytics',
    icon: 'Icon'
  },
  {
    label: 'User Profile',
    href: '/pages/user-profile/profile',
    icon: 'Icon'
  },
  {
    label: 'CRM',
    href: '/dashboards/crm',
    icon: 'Icon'
  }
]

const NoResult = (props: NoResultProps) => {
  // Props
  const { query } = props

  return (
    <div className={classnames('flex items-center justify-center bs-full', styles.wrapper)}>
      <div className='flex flex-col items-center'>
        <span className={classnames('flex', styles.noResultIcon)}>Icon</span>
        <p className={styles.noResultText}>{`No result for "${query}"`}</p>
        <p className={styles.noResultSubText}>Try searching for</p>
        <ul className='flex flex-col gap-4'>
          {noResultData.map((item, index) => (
            <li key={index} className='flex items-center'>
              <Link href={item.href} className={classnames('flex items-center', commonStyles.itemLink)}>
                <div className={classnames('flex', commonStyles.itemIcon)}>{item.icon}</div>
                <p className={commonStyles.itemLabel}>{item.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NoResult
