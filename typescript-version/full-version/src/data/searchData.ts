// Third-party Imports
import type { Action } from 'kbar'

type SearchData = Action & {
  url: string
}

const data: SearchData[] = [
  {
    id: '1',
    name: 'Analytics Dashboard',
    url: '/dashboards/analytics',
    icon: 'Icon',
    section: 'dashboards'
  },
  {
    id: '2',
    name: 'eCommerce Dashboard',
    url: '/dashboards/ecommerce',
    icon: 'Icon',
    section: 'dashboards'
  },
  {
    id: '3',
    name: 'About',
    url: '/about',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '4',
    name: 'Email',
    url: '/email',
    icon: 'Icon',
    section: 'apps'
  },
  {
    id: '5',
    name: 'Chat',
    url: '/chat',
    icon: 'Icon',
    section: 'apps'
  },
  {
    id: '6',
    name: 'Calendar',
    url: '/apps/calendar',
    icon: 'Icon',
    section: 'apps'
  },
  {
    id: '7',
    name: 'Invoice List',
    url: '/apps/invoice/list',
    icon: 'Icon',
    section: 'apps'
  },
  {
    id: '8',
    name: 'Invoice Preview',
    url: '/apps/invoice/preview',
    icon: 'Icon',
    section: 'apps'
  },
  {
    id: '9',
    name: 'Invoice Edit',
    url: '/apps/invoice/edit',
    icon: 'Icon',
    section: 'apps'
  },
  {
    id: '10',
    name: 'Invoice Add',
    url: '/apps/invoice/add',
    icon: 'Icon',
    section: 'apps'
  },
  {
    id: '11',
    name: 'User List',
    url: '/user-list',
    icon: 'Icon',
    section: 'apps'
  },
  {
    id: '12',
    name: 'User View - Account',
    url: '/user-details',
    icon: 'Icon',
    section: 'apps'
  },
  {
    id: '13',
    name: 'User View - Security',
    url: '/apps/user/view/security',
    icon: 'Icon',
    section: 'apps'
  },
  {
    id: '14',
    name: 'User View - Billing & Plans',
    url: '/apps/user/view/billing-plans',
    icon: 'Icon',
    section: 'apps'
  },
  {
    id: '15',
    name: 'User View - Notifications',
    url: '/apps/user/view/notifications',
    icon: 'Icon',
    section: 'apps'
  },
  {
    id: '16',
    name: 'User View - Connections',
    url: '/apps/user/view/connections',
    icon: 'Icon',
    section: 'apps'
  },
  {
    id: '17',
    name: 'Roles',
    url: '/apps/roles',
    icon: 'Icon',
    section: 'apps'
  },
  {
    id: '18',
    name: 'Permissions',
    url: '/apps/permissions',
    icon: 'Icon',
    section: 'apps'
  },
  {
    id: '19',
    name: 'User Profile',
    url: '/pages/user-profile/profile',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '20',
    name: 'User Profile - Teams',
    url: '/pages/user-profile/teams',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '21',
    name: 'User Profile - Projects',
    url: '/pages/user-profile/projects',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '22',
    name: 'User Profile - Connections',
    url: '/pages/user-profile/connections',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '23',
    name: 'Account Settings',
    url: '/pages/account-settings/account',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '24',
    name: 'Account Settings - Security',
    url: '/pages/account-settings/security',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '25',
    name: 'Account Settings - Billing & Plans',
    url: '/pages/account-settings/billing-plans',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '26',
    name: 'Account Settings - Notifications',
    url: '/pages/account-settings/notifications',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '27',
    name: 'Account Settings - Connections',
    url: '/pages/account-settings/connections',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '28',
    name: 'FAQ',
    url: '/pages/faq',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '29',
    name: 'Pricing',
    url: '/pages/pricing',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '30',
    name: 'Coming Soon',
    url: '/pages/misc/coming-soon',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '31',
    name: 'Under Maintenance',
    url: '/pages/misc/under-maintenance',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '32',
    name: 'Page Not Found - 404',
    url: '/pages/misc/404-not-found',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '33',
    name: 'Not Authorized - 401',
    url: '/pages/misc/401-not-authorized',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '34',
    name: 'Login V1',
    url: '/pages/auth/login-v1',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '35',
    name: 'Login V2',
    url: '/pages/auth/login-v2',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '36',
    name: 'Register V1',
    url: '/pages/auth/register-v1',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '37',
    name: 'Register V2',
    url: '/pages/auth/register-v2',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '38',
    name: 'Register Multi-Steps',
    url: '/pages/auth/register-multi-steps',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '39',
    name: 'Forgot Password V1',
    url: '/pages/auth/forgot-password-v1',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '40',
    name: 'Forgot Password V2',
    url: '/pages/auth/forgot-password-v2',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '41',
    name: 'Reset Password V1',
    url: '/pages/auth/reset-password-v1',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '42',
    name: 'Reset Password V2',
    url: '/pages/auth/reset-password-v2',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '43',
    name: 'Verify Email V1',
    url: '/pages/auth/verify-email-v1',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '44',
    name: 'Verify Email V2',
    url: '/pages/auth/verify-email-v2',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '45',
    name: 'Two Steps V1',
    url: '/pages/auth/two-steps-v1',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '46',
    name: 'Two Steps V2',
    url: '/pages/auth/two-steps-v2',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '47',
    name: 'Wizard - Checkout',
    url: '/pages/wizard-examples/checkout',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '48',
    name: 'Wizard - Property Listing',
    url: '/pages/wizard-examples/property-listing',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '49',
    name: 'Wizard - Create Deal',
    url: '/pages/wizard-examples/create-deal',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '50',
    name: 'Dialog Examples',
    url: '/pages/dialog-examples',
    icon: 'Icon',
    section: 'pages'
  },
  {
    id: '51',
    name: 'Typography',
    url: '/ui/typography',
    icon: 'Icon',
    section: 'user interface'
  },
  {
    id: '52',
    name: 'Icons',
    url: '/ui/icons',
    icon: 'Icon',
    section: 'user interface'
  },
  {
    id: '53',
    name: 'Card Basic',
    url: '/ui/cards/basic',
    icon: 'Icon',
    section: 'user interface'
  },
  {
    id: '54',
    name: 'Card Actions',
    url: '/ui/cards/actions',
    icon: 'Icon',
    section: 'user interface'
  },
  {
    id: '55',
    name: 'Form Layouts',
    url: '/forms/form-layouts',
    icon: 'Icon',
    section: 'forms'
  },
  {
    id: '56',
    name: 'Form Validation',
    url: '/forms/form-validation',
    icon: 'Icon',
    section: 'forms'
  },
  {
    id: '57',
    name: 'Form Wizard',
    url: '/forms/form-wizard',
    icon: 'Icon',
    section: 'forms'
  },
  {
    id: '58',
    name: 'Apex Charts',
    url: '/charts/apex-charts',
    icon: 'Icon',
    section: 'charts'
  },
  {
    id: '59',
    name: 'Recharts',
    url: '/charts/recharts',
    icon: 'Icon',
    section: 'charts'
  },
  {
    id: '60',
    name: 'Chartjs',
    url: '/charts/chartjs',
    icon: 'Icon',
    section: 'charts'
  },
  {
    id: '61',
    name: 'Access Control (ACL)',
    url: '/acl',
    icon: 'Icon',
    section: 'pages'
  }
]

export default data
