// React Imports
import type { ReactNode } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Type Imports
import type { Locale } from '@configs/i18n'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

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
        href: '/pages/user-profile',
        icon: 'Icon'
      },
      {
        label: 'Account Settings',
        href: '/pages/account-settings',
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

const DefaultSuggestions = ({ setOpen }: { setOpen: (value: boolean) => void }) => {
  // Hooks
  const { lang: locale } = useParams()

  return (
    <div className='flex grow flex-wrap gap-x-[48px] gap-y-8 plb-14 pli-16 overflow-y-auto overflow-x-hidden bs-full'>
      {defaultSuggestions.map((section, index) => (
        <div
          key={index}
          className='flex flex-col justify-center overflow-x-hidden gap-4 basis-full sm:basis-[calc((100%-3rem)/2)]'
        >
          <p className='text-xs uppercase'>{section.sectionLabel}</p>
          <ul className='flex flex-col gap-4'>
            {section.items.map((item, i) => (
              <li key={i} className='flex'>
                <Link
                  href={getLocalizedUrl(item.href, locale as Locale)}
                  className='flex items-center overflow-x-hidden cursor-pointer gap-2 hover:text-primary focus-visible:text-primary focus-visible:outline-0'
                  onClick={() => setOpen(false)}
                >
                  {item.icon && <div className='flex text-xl'>{item.icon}</div>}
                  <p className='text-sm overflow-hidden whitespace-nowrap overflow-ellipsis'>{item.label}</p>
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
