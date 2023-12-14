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
  icon: string
}

const noResultData: NoResultData[] = [
  {
    label: 'Analytics',
    href: '/dashboards/analytics',
    icon: 'ri-bar-chart-line'
  },
  {
    label: 'User Profile',
    href: '/pages/user-profile',
    icon: 'ri-user-3-line'
  },
  {
    label: 'CRM',
    href: '/dashboards/crm',
    icon: 'ri-pie-chart-2-line'
  }
]

const NoResult = (props: NoResultProps) => {
  // Props
  const { query } = props

  return (
    <div className={styles.wrapper}>
      <div className='flex flex-col items-center'>
        <i className={classnames('ri-file-forbid-line', styles.noResultIcon)} />
        <p className={styles.noResultText}>{`No result for "${query}"`}</p>
        <p className={styles.noResultSubText}>Try searching for</p>
        <ul className='flex flex-col gap-4'>
          {noResultData.map((item, index) => (
            <li key={index} className='flex items-center'>
              <Link href={item.href} className={classnames('flex items-center gap-2', commonStyles.itemLink)}>
                <i className={classnames(item.icon, commonStyles.itemIcon)} />
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
