// React Imports
import type { ReactNode } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Third-party Imports
import { useKBar } from 'kbar'

// Type Imports
import type { Locale } from '@configs/i18n'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

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
    href: '/pages/user-profile',
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

  // Hooks
  const { query: kbarQuery } = useKBar()
  const { lang: locale } = useParams()

  return (
    <div className='flex items-center justify-center grow flex-wrap plb-14 pli-16 overflow-y-auto overflow-x-hidden'>
      <div className='flex flex-col items-center'>
        <span className='flex mbe-2.5'>Icon</span>
        <p className='text-xl mbe-11'>{`No result for "${query}"`}</p>
        <p className='mbe-[18px]'>Try searching for</p>
        <ul className='flex flex-col gap-4'>
          {noResultData.map((item, index) => (
            <li key={index} className='flex items-center'>
              <Link
                href={getLocalizedUrl(item.href, locale as Locale)}
                className='flex items-center gap-2 hover:text-primary focus-visible:text-primary focus-visible:outline-0'
                onClick={kbarQuery.toggle}
              >
                <div className='flex text-xl'>{item.icon}</div>
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
