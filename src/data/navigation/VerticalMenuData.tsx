// Type Imports
import type { VerticalMenuDataType } from '../@menu-package/types'

const menuData: VerticalMenuDataType[] = [
  {
    label: 'Home',
    active: false,
    disabled: false,
    target: '_blank',
    rel: 'noopener noreferrer',
    prefix: '-',
    suffix: '+',

    // i18nKey: 'apps-pages',
    // aclProps: { action: 'read', subject: 'apps-pages' },
    rootStyles: { backgroundColor: '#f4f4f4' },
    href: '/'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Apps & Pages',
    isSection: true,
    prefix: '-',
    suffix: '+',

    // i18nKey: 'apps-pages',
    // aclProps: { action: 'read', subject: 'apps-pages' },
    rootStyles: { color: 'red' },
    children: [
      {
        label: 'Email',
        href: '/email'
      },
      {
        label: 'Chat',
        href: '/chat'
      },
      {
        label: 'Authentication',
        prefix: '12',
        suffix: 'AB',
        defaultOpen: false,
        active: false,
        disabled: false,
        rootStyles: { backgroundColor: 'yellow' },
        children: [
          {
            label: 'Login',
            children: [
              {
                label: 'Login v1',
                href: '/login-v1'
              },
              {
                label: 'Login v2',
                href: '/login-v2'
              }
            ]
          }
        ]
      },
      {
        label: 'Manage Users',
        children: [
          {
            label: 'User List',
            href: '/user-list'
          },
          {
            label: 'User Details',
            href: '/user-details'
          }
        ]
      }
    ]
  }
]

export default menuData
