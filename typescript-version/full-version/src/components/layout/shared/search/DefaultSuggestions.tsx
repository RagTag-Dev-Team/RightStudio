// React Imports
import type { ReactNode } from 'react'

// Next Imports
import Link from 'next/link'

// Third-party Imports
import classnames from 'classnames'
import { useMedia } from 'react-use'
import { useKBar } from 'kbar'

// Style Imports
import commonStyles from './styles.module.css'
import styles from './defaultSuggestions.module.css'

type DefaultSuggestionsType = {
  sectionLabel: string
  items: {
    label: string
    href: string
    icon?: ReactNode
  }[]
}

const defaultSuggestions: DefaultSuggestionsType[] = [
  {
    sectionLabel: 'Popular Searches',
    items: [
      {
        label: 'Analytics',
        href: '/dashboards/analytics',
        icon: 'Icon'
      },
      {
        label: 'CRM',
        href: '/dashboards/crm',
        icon: 'Icon'
      },
      {
        label: 'eCommerce',
        href: '/dashboards/ecommerce',
        icon: 'Icon'
      },
      {
        label: 'User List',
        href: '/apps/user/list',
        icon: 'Icon'
      }
    ]
  },
  {
    sectionLabel: 'Apps',
    items: [
      {
        label: 'Calendar',
        href: '/apps/calendar',
        icon: 'Icon'
      },
      {
        label: 'Invoice List',
        href: '/apps/invoice/list',
        icon: 'Icon'
      },
      {
        label: 'User List',
        href: '/apps/user/list',
        icon: 'Icon'
      },
      {
        label: 'Roles & Permissions',
        href: '/apps/roles',
        icon: 'Icon'
      }
    ]
  },
  {
    sectionLabel: 'Pages',
    items: [
      {
        label: 'User Profile',
        href: '/pages/user-profile/profile',
        icon: 'Icon'
      },
      {
        label: 'Account Settings',
        href: '/pages/account-settings/account',
        icon: 'Icon'
      },
      {
        label: 'Pricing',
        href: '/pages/pricing',
        icon: 'Icon'
      },
      {
        label: 'FAQ',
        href: '/pages/faq',
        icon: 'Icon'
      }
    ]
  },
  {
    sectionLabel: 'Forms & Charts',
    items: [
      {
        label: 'Form Layouts',
        href: '/forms/form-layouts',
        icon: 'Icon'
      },
      {
        label: 'Form Validation',
        href: '/forms/form-validation',
        icon: 'Icon'
      },
      {
        label: 'Form Wizard',
        href: '/forms/form-wizard',
        icon: 'Icon'
      },
      {
        label: 'Apex Charts',
        href: '/charts/apex-charts',
        icon: 'Icon'
      }
    ]
  }
]

const DefaultSuggestions = () => {
  // Hooks
  const isSmallScreen = useMedia('(max-width: 600px)', false)
  const { query } = useKBar()

  return (
    <div className={classnames(styles.wrapper, { [styles.smallScreen]: isSmallScreen })}>
      {defaultSuggestions.map((section, index) => (
        <div
          key={index}
          className={classnames('flex flex-col justify-center overflow-x-hidden', styles.section, {
            'shrink-0': isSmallScreen
          })}
        >
          <p className={styles.sectionLabel}>{section.sectionLabel}</p>
          <ul className='flex flex-col gap-4'>
            {section.items.map((item, i) => (
              <li key={i} className='flex'>
                <Link
                  href={item.href}
                  onClick={query.toggle}
                  className={classnames('flex items-center overflow-x-hidden cursor-pointer', commonStyles.itemLink)}
                >
                  {item.icon && <div className={classnames('flex', commonStyles.itemIcon)}>{item.icon}</div>}
                  <p className={commonStyles.itemLabel}>{item.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default DefaultSuggestions
