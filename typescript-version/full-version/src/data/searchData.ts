// Third-party Imports
import type { Action } from 'kbar'

type SearchData = Action & {
  url: string
}

const data: SearchData[] = [
  {
    id: '1',
    name: 'CRM Dashboard',
    url: '/dashboards/crm',
    icon: 'Icon',
    section: 'Dashboards'
  },
  {
    id: '2',
    name: 'Analytics Dashboard',
    url: '/dashboards/analytics',
    icon: 'Icon',
    section: 'Dashboards'
  },
  {
    id: '3',
    name: 'eCommerce Dashboard',
    url: '/dashboards/ecommerce',
    icon: 'Icon',
    section: 'Dashboards'
  },
  {
    id: '4',
    name: 'About',
    url: '/about',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '5',
    name: 'Email',
    url: '/email',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '6',
    name: 'Chat',
    url: '/chat',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '7',
    name: 'Calendar',
    url: '/apps/calendar',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '8',
    name: 'Invoice List',
    url: '/apps/invoice/list',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '9',
    name: 'Invoice Preview',
    url: '/apps/invoice/preview/4987',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '10',
    name: 'Invoice Edit',
    url: '/apps/invoice/edit/4987',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '11',
    name: 'Invoice Add',
    url: '/apps/invoice/add',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '12',
    name: 'User List',
    url: '/apps/user/list',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '13',
    name: 'User View',
    url: '/apps/user/view',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '14',
    name: 'Roles',
    url: '/apps/roles',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '15',
    name: 'Permissions',
    url: '/apps/permissions',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '16',
    name: 'User Profile',
    url: '/pages/user-profile',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '17',
    name: 'Account Settings',
    url: '/pages/account-settings',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '18',
    name: 'FAQ',
    url: '/pages/faq',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '19',
    name: 'Pricing',
    url: '/pages/pricing',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '20',
    name: 'Coming Soon',
    url: '/pages/misc/coming-soon',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '21',
    name: 'Under Maintenance',
    url: '/pages/misc/under-maintenance',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '22',
    name: 'Page Not Found - 404',
    url: '/pages/misc/404-not-found',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '23',
    name: 'Not Authorized - 401',
    url: '/pages/misc/401-not-authorized',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '24',
    name: 'Login V1',
    url: '/pages/auth/login-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '25',
    name: 'Login V2',
    url: '/pages/auth/login-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '26',
    name: 'Register V1',
    url: '/pages/auth/register-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '27',
    name: 'Register V2',
    url: '/pages/auth/register-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '28',
    name: 'Register Multi-Steps',
    url: '/pages/auth/register-multi-steps',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '29',
    name: 'Forgot Password V1',
    url: '/pages/auth/forgot-password-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '30',
    name: 'Forgot Password V2',
    url: '/pages/auth/forgot-password-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '31',
    name: 'Reset Password V1',
    url: '/pages/auth/reset-password-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '32',
    name: 'Reset Password V2',
    url: '/pages/auth/reset-password-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '33',
    name: 'Verify Email V1',
    url: '/pages/auth/verify-email-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '34',
    name: 'Verify Email V2',
    url: '/pages/auth/verify-email-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '35',
    name: 'Two Steps V1',
    url: '/pages/auth/two-steps-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '36',
    name: 'Two Steps V2',
    url: '/pages/auth/two-steps-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '37',
    name: 'Wizard - Checkout',
    url: '/pages/wizard-examples/checkout',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '38',
    name: 'Wizard - Property Listing',
    url: '/pages/wizard-examples/property-listing',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '39',
    name: 'Wizard - Create Deal',
    url: '/pages/wizard-examples/create-deal',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '40',
    name: 'Dialog Examples',
    url: '/pages/dialog-examples',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '41',
    name: 'Widget - Advanced',
    url: '/pages/widget-examples/advanced',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '42',
    name: 'Widget - Statistics',
    url: '/pages/widget-examples/statistics',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '43',
    name: 'Widget - Charts',
    url: '/pages/widget-examples/charts',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '44',
    name: 'Icons Test',
    url: '/icons-test',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '45',
    name: 'Form Layouts',
    url: '/forms/form-layouts',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '46',
    name: 'Form Validation',
    url: '/forms/form-validation',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '47',
    name: 'Form Wizard',
    url: '/forms/form-wizard',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '48',
    name: 'React Table',
    url: '/react-table',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '49',
    name: 'Recharts',
    url: '/charts/recharts',
    icon: 'Icon',
    section: 'Charts'
  },
  {
    id: '50',
    name: 'Apex Charts',
    url: '/charts/apex-charts',
    icon: 'Icon',
    section: 'Charts'
  },
  {
    id: '51',
    name: 'Menu Examples',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/menu-examples/overview`,
    icon: 'Icon',
    section: 'Others'
  }
]

export default data
