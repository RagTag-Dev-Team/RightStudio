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
    href: '/analytics',
    icon: 'Icon'
  },
  {
    label: 'User Profile',
    href: '/user-profile',
    icon: 'Icon'
  },
  {
    label: 'CRM',
    href: '/crm',
    icon: 'Icon'
  }
]

const NoResult = (props: NoResultProps) => {
  // Props
  const { query } = props

  return (
    <div className={classnames('d-flex align-items-center justify-content-center height-100', styles.wrapper)}>
      <div className='d-flex flex-column align-items-center'>
        <span className={classnames('d-flex', styles.noResultIcon)}>Icon</span>
        <p className={styles.noResultText}>{`No result for "${query}"`}</p>
        <p className={styles.noResultSubText}>Try searching for</p>
        <ul className='d-flex flex-column gap-16px'>
          {noResultData.map((item, index) => (
            <li key={index} className='d-flex align-items-center'>
              <Link href={item.href} className={classnames('d-flex align-items-center', commonStyles.itemLink)}>
                <div className={classnames('d-flex', commonStyles.itemIcon)}>{item.icon}</div>
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
