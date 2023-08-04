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
        href: '/analytics',
        icon: 'Icon'
      },
      {
        label: 'CRM',
        href: '/crm',
        icon: 'Icon'
      },
      {
        label: 'eCommerce',
        href: '/ecommerce',
        icon: 'Icon'
      },
      {
        label: 'User List',
        href: '/user-list',
        icon: 'Icon'
      }
    ]
  },
  {
    sectionLabel: 'Apps & Pages',
    items: [
      {
        label: 'Calendar',
        href: '/calendar',
        icon: 'Icon'
      },
      {
        label: 'Invoice List',
        href: '/invoice-list',
        icon: 'Icon'
      },
      {
        label: 'Account Settings',
        href: '/account-settings',
        icon: 'Icon'
      },
      {
        label: 'Dialog Examples',
        href: '/dialog-examples',
        icon: 'Icon'
      }
    ]
  },
  {
    sectionLabel: 'User Interface',
    items: [
      {
        label: 'Typography',
        href: '/typography',
        icon: 'Icon'
      },
      {
        label: 'Advanced Cards',
        href: '/advanced-cards',
        icon: 'Icon'
      },
      {
        label: 'Icons',
        href: '/icons',
        icon: 'Icon'
      },
      {
        label: 'Widget Cards',
        href: '/widget-cards',
        icon: 'Icon'
      }
    ]
  },
  {
    sectionLabel: 'Forms & Charts',
    items: [
      {
        label: 'Form Layouts',
        href: '/form-layouts',
        icon: 'Icon'
      },
      {
        label: 'Form Validation',
        href: '/form-validation',
        icon: 'Icon'
      },
      {
        label: 'Form Wizard',
        href: '/form-wizard',
        icon: 'Icon'
      },
      {
        label: 'E-Charts',
        href: '/e-charts',
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
          className={classnames('d-flex flex-column justify-content-center overflow-x-hidden', styles.section, {
            'flex-shrink-0': isSmallScreen
          })}
        >
          <p className={styles.sectionLabel}>{section.sectionLabel}</p>
          <ul className='d-flex flex-column gap-16px'>
            {section.items.map((item, i) => (
              <li key={i} className='d-flex'>
                <Link
                  href={item.href}
                  onClick={query.toggle}
                  className={classnames(
                    'd-flex align-items-center overflow-x-hidden cursor-pointer',
                    commonStyles.itemLink
                  )}
                >
                  {item.icon && <div className={classnames('d-flex', commonStyles.itemIcon)}>{item.icon}</div>}
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
