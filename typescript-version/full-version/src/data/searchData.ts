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
    name: 'Widget - Basic',
    url: '/pages/widget-examples/basic',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '42',
    name: 'Widget - Advanced',
    url: '/pages/widget-examples/advanced',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '43',
    name: 'Widget - Statistics',
    url: '/pages/widget-examples/statistics',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '44',
    name: 'Widget - Charts',
    url: '/pages/widget-examples/charts',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '45',
    name: 'Widget - Actions',
    url: '/pages/widget-examples/actions',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '46',
    name: 'Icons Test',
    url: '/icons-test',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '47',
    name: 'Form Layouts',
    url: '/forms/form-layouts',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '48',
    name: 'Form Validation',
    url: '/forms/form-validation',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '49',
    name: 'Form Wizard',
    url: '/forms/form-wizard',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '50',
    name: 'React Table',
    url: '/react-table',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '51',
    name: 'Recharts',
    url: '/charts/recharts',
    icon: 'Icon',
    section: 'Charts'
  },
  {
    id: '52',
    name: 'Apex Charts',
    url: '/charts/apex-charts',
    icon: 'Icon',
    section: 'Charts'
  },
  {
    id: '53',
    name: 'Menu Examples',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/menu-examples/overview`,
    icon: 'Icon',
    section: 'Others'
  },
  {
    id: '54',
    name: 'Typography',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation/typography`,
    icon: 'Icon',
    section: 'Foundation'
  },
  {
    id: '55',
    name: 'Colors',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation/colors`,
    icon: 'Icon',
    section: 'Foundation'
  },
  {
    id: '56',
    name: 'Shadows',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation/shadows`,
    icon: 'Icon',
    section: 'Foundation'
  },
  {
    id: '57',
    name: 'Icons',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation/icons`,
    icon: 'Icon',
    section: 'Foundation'
  },
  {
    id: '58',
    name: 'Accordion',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/accordion`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '59',
    name: 'Alerts',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/alerts`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '60',
    name: 'Avatars',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/avatars`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '61',
    name: 'Badges',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/badges`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '62',
    name: 'Buttons',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/buttons`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '63',
    name: 'Button Group',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/button-group`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '64',
    name: 'Chips',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/chips`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '65',
    name: 'Dialogs',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/dialogs`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '66',
    name: 'List',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/list`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '67',
    name: 'Menu',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/menu`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '68',
    name: 'Pagination',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/pagination`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '69',
    name: 'Progress',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/progress`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '70',
    name: 'Ratings',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/ratings`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '71',
    name: 'Snackbar',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/snackbar`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '72',
    name: 'Swiper',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/swiper`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '73',
    name: 'Tabs',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/tabs`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '74',
    name: 'Timeline',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/timeline`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '75',
    name: 'Toasts',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/toasts`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '76',
    name: 'More Components',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/more`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '77',
    name: 'Text Field',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/text-field`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '78',
    name: 'Select',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/select`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '79',
    name: 'Checkbox',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/checkbox`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '80',
    name: 'Radio',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/radio`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '81',
    name: 'Custom Inputs',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/custom-inputs`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '82',
    name: 'Textarea',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/textarea`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '83',
    name: 'Autocomplete',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/autocomplete`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '84',
    name: 'Picker',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/picker`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '85',
    name: 'Switch',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/switch`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '86',
    name: 'File Uploader',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/file-uploader`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '87',
    name: 'Editor',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/editor`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '88',
    name: 'Slider',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/slider`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '89',
    name: 'MUI Tables',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/mui-table`,
    icon: 'Icon',
    section: 'Forms & Tables'
  }
]

export default data
