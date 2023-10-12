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
    section: 'Dashboards'
  },
  {
    id: '2',
    name: 'eCommerce Dashboard',
    url: '/dashboards/ecommerce',
    icon: 'Icon',
    section: 'Dashboards'
  },
  {
    id: '3',
    name: 'About',
    url: '/about',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '4',
    name: 'Email',
    url: '/email',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '5',
    name: 'Chat',
    url: '/chat',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '6',
    name: 'Calendar',
    url: '/apps/calendar',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '7',
    name: 'Invoice List',
    url: '/apps/invoice/list',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '8',
    name: 'Invoice Preview',
    url: '/apps/invoice/preview',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '9',
    name: 'Invoice Edit',
    url: '/apps/invoice/edit',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '10',
    name: 'Invoice Add',
    url: '/apps/invoice/add',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '11',
    name: 'User List',
    url: '/apps/user/list',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '12',
    name: 'User View - Overview',
    url: '/apps/user/view/overview',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '13',
    name: 'User View - Security',
    url: '/apps/user/view/security',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '14',
    name: 'User View - Billing & Plans',
    url: '/apps/user/view/billing-plans',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '15',
    name: 'User View - Notifications',
    url: '/apps/user/view/notifications',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '16',
    name: 'User View - Connections',
    url: '/apps/user/view/connections',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '17',
    name: 'Roles',
    url: '/apps/roles',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '18',
    name: 'Permissions',
    url: '/apps/permissions',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '19',
    name: 'User Profile',
    url: '/pages/user-profile/profile',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '20',
    name: 'User Profile - Teams',
    url: '/pages/user-profile/teams',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '21',
    name: 'User Profile - Projects',
    url: '/pages/user-profile/projects',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '22',
    name: 'User Profile - Connections',
    url: '/pages/user-profile/connections',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '23',
    name: 'Account Settings',
    url: '/pages/account-settings/account',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '24',
    name: 'Account Settings - Security',
    url: '/pages/account-settings/security',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '25',
    name: 'Account Settings - Billing & Plans',
    url: '/pages/account-settings/billing-plans',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '26',
    name: 'Account Settings - Notifications',
    url: '/pages/account-settings/notifications',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '27',
    name: 'Account Settings - Connections',
    url: '/pages/account-settings/connections',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '28',
    name: 'FAQ',
    url: '/pages/faq',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '29',
    name: 'Pricing',
    url: '/pages/pricing',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '30',
    name: 'Coming Soon',
    url: '/pages/misc/coming-soon',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '31',
    name: 'Under Maintenance',
    url: '/pages/misc/under-maintenance',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '32',
    name: 'Page Not Found - 404',
    url: '/pages/misc/404-not-found',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '33',
    name: 'Not Authorized - 401',
    url: '/pages/misc/401-not-authorized',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '34',
    name: 'Login V1',
    url: '/pages/auth/login-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '35',
    name: 'Login V2',
    url: '/pages/auth/login-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '36',
    name: 'Register V1',
    url: '/pages/auth/register-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '37',
    name: 'Register V2',
    url: '/pages/auth/register-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '38',
    name: 'Register Multi-Steps',
    url: '/pages/auth/register-multi-steps',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '39',
    name: 'Forgot Password V1',
    url: '/pages/auth/forgot-password-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '40',
    name: 'Forgot Password V2',
    url: '/pages/auth/forgot-password-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '41',
    name: 'Reset Password V1',
    url: '/pages/auth/reset-password-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '42',
    name: 'Reset Password V2',
    url: '/pages/auth/reset-password-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '43',
    name: 'Verify Email V1',
    url: '/pages/auth/verify-email-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '44',
    name: 'Verify Email V2',
    url: '/pages/auth/verify-email-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '45',
    name: 'Two Steps V1',
    url: '/pages/auth/two-steps-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '46',
    name: 'Two Steps V2',
    url: '/pages/auth/two-steps-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '47',
    name: 'Wizard - Checkout',
    url: '/pages/wizard-examples/checkout',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '48',
    name: 'Wizard - Property Listing',
    url: '/pages/wizard-examples/property-listing',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '49',
    name: 'Wizard - Create Deal',
    url: '/pages/wizard-examples/create-deal',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '50',
    name: 'Dialog Examples',
    url: '/pages/dialog-examples',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '51',
    name: 'Widget - Advanced',
    url: '/pages/widget-examples/advanced',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '52',
    name: 'Widget - Statistics',
    url: '/pages/widget-examples/statistics',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '53',
    name: 'Widget - Charts',
    url: '/pages/widget-examples/charts',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '54',
    name: 'Icons Test',
    url: '/icons-test',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '55',
    name: 'Form Layouts',
    url: '/forms/form-layouts',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '56',
    name: 'Form Validation',
    url: '/forms/form-validation',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '57',
    name: 'Form Wizard',
    url: '/forms/form-wizard',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '58',
    name: 'React Table',
    url: '/react-table',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '59',
    name: 'ECharts',
    url: '/charts/echarts',
    icon: 'Icon',
    section: 'Charts'
  },
  {
    id: '60',
    name: 'Recharts',
    url: '/charts/recharts',
    icon: 'Icon',
    section: 'Charts'
  },
  {
    id: '61',
    name: 'Apex Charts',
    url: '/charts/apex-charts',
    icon: 'Icon',
    section: 'Charts'
  },
  {
    id: '62',
    name: 'Raise Support',
    url: '/support',
    icon: 'Icon',
    section: 'Others'
  },
  {
    id: '63',
    name: 'Documentation',
    url: '/docs',
    icon: 'Icon',
    section: 'Others'
  },
  {
    id: '64',
    name: 'Typography',
    url: 'http://localhost:3001/docs/user-interface/typography',
    icon: 'Icon',
    section: 'User Interface'
  },
  {
    id: '65',
    name: 'Icons',
    url: 'http://localhost:3001/docs/user-interface/icons',
    icon: 'Icon',
    section: 'User Interface'
  },
  {
    id: '66',
    name: 'Card Basic',
    url: 'http://localhost:3001/docs/user-interface/cards-basic',
    icon: 'Icon',
    section: 'User Interface'
  },
  {
    id: '67',
    name: 'Card Actions',
    url: 'http://localhost:3001/docs/user-interface/cards-actions',
    icon: 'Icon',
    section: 'User Interface'
  },
  {
    id: '68',
    name: 'Accordion',
    url: 'http://localhost:3001/docs/components/accordion',
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '69',
    name: 'Alerts',
    url: 'http://localhost:3001/docs/components/alerts',
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '70',
    name: 'Avatars',
    url: 'http://localhost:3001/docs/components/avatars',
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '71',
    name: 'Badges',
    url: 'http://localhost:3001/docs/components/badges',
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '72',
    name: 'Buttons',
    url: 'http://localhost:3001/docs/components/buttons',
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '73',
    name: 'Button Group',
    url: 'http://localhost:3001/docs/components/button-group',
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '74',
    name: 'Chips',
    url: 'http://localhost:3001/docs/components/chips',
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '75',
    name: 'Dialogs',
    url: 'http://localhost:3001/docs/components/dialogs',
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '76',
    name: 'List',
    url: 'http://localhost:3001/docs/components/list',
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '77',
    name: 'Menu',
    url: 'http://localhost:3001/docs/components/menu',
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '78',
    name: 'Pagination',
    url: 'http://localhost:3001/docs/components/pagination',
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '79',
    name: 'Progress',
    url: 'http://localhost:3001/docs/components/progress',
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '80',
    name: 'Ratings',
    url: 'http://localhost:3001/docs/components/ratings',
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '81',
    name: 'Snackbar',
    url: 'http://localhost:3001/docs/components/snackbar',
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '82',
    name: 'Swiper',
    url: 'http://localhost:3001/docs/components/swiper',
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '83',
    name: 'Tabs',
    url: 'http://localhost:3001/docs/components/tabs',
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '84',
    name: 'Timeline',
    url: 'http://localhost:3001/docs/components/timeline',
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '85',
    name: 'Toasts',
    url: 'http://localhost:3001/docs/components/toasts',
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '86',
    name: 'Tree View',
    url: 'http://localhost:3001/docs/components/tree-view',
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '87',
    name: 'More Components',
    url: 'http://localhost:3001/docs/components/more',
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '88',
    name: 'Text Field',
    url: 'http://localhost:3001/docs/form-elements/text-field',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '89',
    name: 'Select',
    url: 'http://localhost:3001/docs/form-elements/select',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '90',
    name: 'Checkbox',
    url: 'http://localhost:3001/docs/form-elements/checkbox',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '91',
    name: 'Radio',
    url: 'http://localhost:3001/docs/form-elements/radio',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '92',
    name: 'Custom Inputs',
    url: 'http://localhost:3001/docs/form-elements/custom-inputs',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '93',
    name: 'Textarea',
    url: 'http://localhost:3001/docs/form-elements/textarea',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '94',
    name: 'Autocomplete',
    url: 'http://localhost:3001/docs/form-elements/autocomplete',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '95',
    name: 'Picker',
    url: 'http://localhost:3001/docs/form-elements/picker',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '96',
    name: 'Switch',
    url: 'http://localhost:3001/docs/form-elements/switch',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '97',
    name: 'File Uploader',
    url: 'http://localhost:3001/docs/form-elements/file-uploader',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '98',
    name: 'Editor',
    url: 'http://localhost:3001/docs/form-elements/editor',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '99',
    name: 'Slider',
    url: 'http://localhost:3001/docs/form-elements/slider',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '100',
    name: 'MUI Tables',
    url: 'http://localhost:3001/docs/tables/mui-table',
    icon: 'Icon',
    section: 'Forms & Tables'
  }
]

export default data
