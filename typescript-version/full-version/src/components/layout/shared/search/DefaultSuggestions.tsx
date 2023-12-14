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
    icon?: string
  }[]
}

const defaultSuggestions: DefaultSuggestionsType[] = [
  {
    sectionLabel: 'Popular Searches',
    items: [
      {
        label: 'Analytics',
        href: '/dashboards/analytics',
        icon: 'ri-bar-chart-line'
      },
      {
        label: 'CRM',
        href: '/dashboards/crm',
        icon: 'ri-pie-chart-2-line'
      },
      {
        label: 'eCommerce',
        href: '/dashboards/ecommerce',
        icon: 'ri-shopping-bag-3-line'
      },
      {
        label: 'User List',
        href: '/apps/user/list',
        icon: 'ri-file-user-line'
      }
    ]
  },
  {
    sectionLabel: 'Apps',
    items: [
      {
        label: 'Calendar',
        href: '/apps/calendar',
        icon: 'ri-calendar-line'
      },
      {
        label: 'Invoice List',
        href: '/apps/invoice/list',
        icon: 'ri-file-list-3-line'
      },
      {
        label: 'User List',
        href: '/apps/user/list',
        icon: 'ri-file-user-line'
      },
      {
        label: 'Roles & Permissions',
        href: '/apps/roles',
        icon: 'ri-lock-unlock-line'
      }
    ]
  },
  {
    sectionLabel: 'Pages',
    items: [
      {
        label: 'User Profile',
        href: '/pages/user-profile',
        icon: 'ri-user-3-line'
      },
      {
        label: 'Account Settings',
        href: '/pages/account-settings',
        icon: 'ri-settings-4-line'
      },
      {
        label: 'Pricing',
        href: '/pages/pricing',
        icon: 'ri-money-dollar-circle-line'
      },
      {
        label: 'FAQ',
        href: '/pages/faq',
        icon: 'ri-question-line'
      }
    ]
  },
  {
    sectionLabel: 'Forms & Charts',
    items: [
      {
        label: 'Form Layouts',
        href: '/forms/form-layouts',
        icon: 'ri-file-text-line'
      },
      {
        label: 'Form Validation',
        href: '/forms/form-validation',
        icon: 'ri-checkbox-multiple-line'
      },
      {
        label: 'Form Wizard',
        href: '/forms/form-wizard',
        icon: 'ri-equalizer-line'
      },
      {
        label: 'Apex Charts',
        href: '/charts/apex-charts',
        icon: 'ri-line-chart-line'
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
          className={classnames('flex flex-col justify-center overflow-x-hidden gap-4', styles.suggestionGroup, {
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
                  className={classnames(
                    'flex items-center overflow-x-hidden cursor-pointer gap-2',
                    commonStyles.itemLink
                  )}
                >
                  {item.icon && <i className={classnames(item.icon, commonStyles.itemIcon)} />}
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
