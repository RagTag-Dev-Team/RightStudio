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
    url: '/apps/invoice/preview/4987',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '9',
    name: 'Invoice Edit',
    url: '/apps/invoice/edit/4987',
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
    name: 'User View',
    url: '/apps/user/view',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '13',
    name: 'Roles',
    url: '/apps/roles',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '14',
    name: 'Permissions',
    url: '/apps/permissions',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '15',
    name: 'User Profile',
    url: '/pages/user-profile',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '16',
    name: 'Account Settings',
    url: '/pages/account-settings',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '17',
    name: 'FAQ',
    url: '/pages/faq',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '18',
    name: 'Pricing',
    url: '/pages/pricing',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '19',
    name: 'Coming Soon',
    url: '/pages/misc/coming-soon',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '20',
    name: 'Under Maintenance',
    url: '/pages/misc/under-maintenance',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '21',
    name: 'Page Not Found - 404',
    url: '/pages/misc/404-not-found',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '22',
    name: 'Not Authorized - 401',
    url: '/pages/misc/401-not-authorized',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '23',
    name: 'Login V1',
    url: '/pages/auth/login-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '24',
    name: 'Login V2',
    url: '/pages/auth/login-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '25',
    name: 'Register V1',
    url: '/pages/auth/register-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '26',
    name: 'Register V2',
    url: '/pages/auth/register-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '27',
    name: 'Register Multi-Steps',
    url: '/pages/auth/register-multi-steps',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '28',
    name: 'Forgot Password V1',
    url: '/pages/auth/forgot-password-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '29',
    name: 'Forgot Password V2',
    url: '/pages/auth/forgot-password-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '30',
    name: 'Reset Password V1',
    url: '/pages/auth/reset-password-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '31',
    name: 'Reset Password V2',
    url: '/pages/auth/reset-password-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '32',
    name: 'Verify Email V1',
    url: '/pages/auth/verify-email-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '33',
    name: 'Verify Email V2',
    url: '/pages/auth/verify-email-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '34',
    name: 'Two Steps V1',
    url: '/pages/auth/two-steps-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '35',
    name: 'Two Steps V2',
    url: '/pages/auth/two-steps-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '36',
    name: 'Wizard - Checkout',
    url: '/pages/wizard-examples/checkout',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '37',
    name: 'Wizard - Property Listing',
    url: '/pages/wizard-examples/property-listing',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '38',
    name: 'Wizard - Create Deal',
    url: '/pages/wizard-examples/create-deal',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '39',
    name: 'Dialog Examples',
    url: '/pages/dialog-examples',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '40',
    name: 'Widget - Advanced',
    url: '/pages/widget-examples/advanced',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '41',
    name: 'Widget - Statistics',
    url: '/pages/widget-examples/statistics',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '42',
    name: 'Widget - Charts',
    url: '/pages/widget-examples/charts',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '43',
    name: 'Icons Test',
    url: '/icons-test',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '44',
    name: 'Form Layouts',
    url: '/forms/form-layouts',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '45',
    name: 'Form Validation',
    url: '/forms/form-validation',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '46',
    name: 'Form Wizard',
    url: '/forms/form-wizard',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '47',
    name: 'React Table',
    url: '/react-table',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '48',
    name: 'Recharts',
    url: '/charts/recharts',
    icon: 'Icon',
    section: 'Charts'
  },
  {
    id: '49',
    name: 'Apex Charts',
    url: '/charts/apex-charts',
    icon: 'Icon',
    section: 'Charts'
  },
  {
    id: '50',
    name: 'Menu Examples',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/menu-examples/intro`,
    icon: 'Icon',
    section: 'Others'
  },
  {
    id: '53',
    name: 'Typography',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/typography`,
    icon: 'Icon',
    section: 'User Interface'
  },
  {
    id: '54',
    name: 'Icons',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/icons`,
    icon: 'Icon',
    section: 'User Interface'
  },
  {
    id: '55',
    name: 'Card Basic',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/cards-basic`,
    icon: 'Icon',
    section: 'User Interface'
  },
  {
    id: '56',
    name: 'Card Actions',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/cards-actions`,
    icon: 'Icon',
    section: 'User Interface'
  },
  {
    id: '57',
    name: 'Accordion',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/components/accordion`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '58',
    name: 'Alerts',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/components/alerts`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '59',
    name: 'Avatars',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/components/avatars`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '60',
    name: 'Badges',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/components/badges`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '61',
    name: 'Buttons',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/components/buttons`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '62',
    name: 'Button Group',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/components/button-group`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '63',
    name: 'Chips',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/components/chips`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '64',
    name: 'Dialogs',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/components/dialogs`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '65',
    name: 'List',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/components/list`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '66',
    name: 'Menu',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/components/menu`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '67',
    name: 'Pagination',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/components/pagination`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '68',
    name: 'Progress',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/components/progress`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '69',
    name: 'Ratings',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/components/ratings`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '70',
    name: 'Snackbar',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/components/snackbar`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '71',
    name: 'Swiper',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/components/swiper`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '72',
    name: 'Tabs',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/components/tabs`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '73',
    name: 'Timeline',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/components/timeline`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '74',
    name: 'Toasts',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/components/toasts`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '75',
    name: 'More Components',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/components/more`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '76',
    name: 'Text Field',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/form-elements/text-field`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '77',
    name: 'Select',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/form-elements/select`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '78',
    name: 'Checkbox',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/form-elements/checkbox`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '79',
    name: 'Radio',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/form-elements/radio`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '80',
    name: 'Custom Inputs',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/form-elements/custom-inputs`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '81',
    name: 'Textarea',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/form-elements/textarea`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '82',
    name: 'Autocomplete',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/form-elements/autocomplete`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '83',
    name: 'Picker',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/form-elements/picker`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '84',
    name: 'Switch',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/form-elements/switch`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '85',
    name: 'File Uploader',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/form-elements/file-uploader`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '86',
    name: 'Editor',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/form-elements/editor`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '87',
    name: 'Slider',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/form-elements/slider`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '88',
    name: 'MUI Tables',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/tables/mui-table`,
    icon: 'Icon',
    section: 'Forms & Tables'
  }
]

export default data
