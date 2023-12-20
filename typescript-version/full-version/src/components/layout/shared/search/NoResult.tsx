// Next Imports
import Link from 'next/link'

// Third-party Imports
import classnames from 'classnames'

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
    <div className='flex items-center justify-center grow flex-wrap plb-14 pli-16 overflow-y-auto overflow-x-hidden'>
      <div className='flex flex-col items-center'>
        <i className='ri-file-forbid-line text-[64px] mbe-2.5' />
        <p className='text-xl mbe-11'>{`No result for "${query}"`}</p>
        <p className='mbe-[18px] text-textDisabled'>Try searching for</p>
        <ul className='flex flex-col gap-4'>
          {noResultData.map((item, index) => (
            <li key={index} className='flex items-center'>
              <Link
                href={item.href}
                className='flex items-center gap-2 hover:text-primary focus-visible:text-primary focus-visible:outline-0'
              >
                <i className={classnames(item.icon, 'text-xl')} />
                <p className='text-sm overflow-hidden whitespace-nowrap overflow-ellipsis'>{item.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NoResult
