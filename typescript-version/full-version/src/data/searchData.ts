type SearchData = {
  id: string
  name: string
  url: string
  excludeLang?: boolean
  icon: string
  section: string
  shortcut?: string
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
    name: 'Academy Dashboard',
    url: '/dashboards/academy',
    icon: 'Icon',
    section: 'Dashboards'
  },
  {
    id: '5',
    name: 'Logistics Dashboard',
    url: '/dashboards/logistics',
    icon: 'Icon',
    section: 'Dashboards'
  },
  {
    id: '6',
    name: 'Landing Front',
    url: '/front-pages/landing-page',
    excludeLang: true,
    icon: 'Icon',
    section: 'Front Pages'
  },
  {
    id: '7',
    name: 'Pricing Front',
    url: '/front-pages/pricing',
    excludeLang: true,
    icon: 'Icon',
    section: 'Front Pages'
  },
  {
    id: '8',
    name: 'Payment Front',
    url: '/front-pages/payment',
    excludeLang: true,
    icon: 'Icon',
    section: 'Front Pages'
  },
  {
    id: '9',
    name: 'Checkout Front',
    url: '/front-pages/checkout',
    excludeLang: true,
    icon: 'Icon',
    section: 'Front Pages'
  },
  {
    id: '10',
    name: 'Help Center Front',
    url: '/front-pages/help-center',
    excludeLang: true,
    icon: 'Icon',
    section: 'Front Pages'
  },
  {
    id: '11',
    name: 'About',
    url: '/about',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '12',
    name: 'eCommerce - Dashboard',
    url: '/apps/ecommerce/dashboard',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '13',
    name: 'eCommerce - Product List',
    url: '/apps/ecommerce/products/list',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '14',
    name: 'eCommerce - Add New Product',
    url: '/apps/ecommerce/products/add',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '15',
    name: 'eCommerce - Product Category',
    url: '/apps/ecommerce/products/category',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '16',
    name: 'eCommerce - Order List',
    url: '/apps/ecommerce/orders/list',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '17',
    name: 'eCommerce - Order Details',
    url: '/apps/ecommerce/orders/details/5434',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '18',
    name: 'eCommerce - Customer List',
    url: '/apps/ecommerce/customers/list',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '19',
    name: 'eCommerce - Customer Details',
    url: '/apps/ecommerce/customers/details/879861',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '20',
    name: 'eCommerce - Manage Reviews',
    url: '/apps/ecommerce/manage-reviews',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '21',
    name: 'eCommerce - Referrals',
    url: '/apps/ecommerce/referrals',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '22',
    name: 'eCommerce - Settings',
    url: '/apps/ecommerce/settings',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '23',
    name: 'Academy - Dashboard',
    url: '/apps/academy/dashboard',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '24',
    name: 'Academy - My Courses',
    url: '/apps/academy/my-courses',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '25',
    name: 'Academy - Course Details',
    url: '/apps/academy/course-details',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '26',
    name: 'Logistics - Dashboard',
    url: '/apps/logistics/dashboard',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '27',
    name: 'Logistics - Fleet',
    url: '/apps/logistics/fleet',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '28',
    name: 'Email',
    url: '/apps/email',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '29',
    name: 'Chat',
    url: '/apps/chat',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '30',
    name: 'Calendar',
    url: '/apps/calendar',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '31',
    name: 'Kanban',
    url: '/apps/kanban',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '32',
    name: 'Invoice List',
    url: '/apps/invoice/list',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '33',
    name: 'Invoice Preview',
    url: '/apps/invoice/preview/4987',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '34',
    name: 'Invoice Edit',
    url: '/apps/invoice/edit/4987',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '35',
    name: 'Invoice Add',
    url: '/apps/invoice/add',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '36',
    name: 'User List',
    url: '/apps/user/list',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '37',
    name: 'User View',
    url: '/apps/user/view/1',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '38',
    name: 'Roles',
    url: '/apps/roles',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '39',
    name: 'Permissions',
    url: '/apps/permissions',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '40',
    name: 'User Profile',
    url: '/pages/user-profile',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '41',
    name: 'Account Settings',
    url: '/pages/account-settings',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '42',
    name: 'FAQ',
    url: '/pages/faq',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '43',
    name: 'Pricing',
    url: '/pages/pricing',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '44',
    name: 'Coming Soon',
    url: '/pages/misc/coming-soon',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '45',
    name: 'Under Maintenance',
    url: '/pages/misc/under-maintenance',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '46',
    name: 'Page Not Found - 404',
    url: '/pages/misc/404-not-found',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '47',
    name: 'Not Authorized - 401',
    url: '/pages/misc/401-not-authorized',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '48',
    name: 'Login V1',
    url: '/pages/auth/login-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '49',
    name: 'Login V2',
    url: '/pages/auth/login-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '50',
    name: 'Register V1',
    url: '/pages/auth/register-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '51',
    name: 'Register V2',
    url: '/pages/auth/register-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '52',
    name: 'Register Multi-Steps',
    url: '/pages/auth/register-multi-steps',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '53',
    name: 'Forgot Password V1',
    url: '/pages/auth/forgot-password-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '54',
    name: 'Forgot Password V2',
    url: '/pages/auth/forgot-password-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '55',
    name: 'Reset Password V1',
    url: '/pages/auth/reset-password-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '56',
    name: 'Reset Password V2',
    url: '/pages/auth/reset-password-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '57',
    name: 'Verify Email V1',
    url: '/pages/auth/verify-email-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '58',
    name: 'Verify Email V2',
    url: '/pages/auth/verify-email-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '59',
    name: 'Two Steps V1',
    url: '/pages/auth/two-steps-v1',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '60',
    name: 'Two Steps V2',
    url: '/pages/auth/two-steps-v2',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '61',
    name: 'Wizard - Checkout',
    url: '/pages/wizard-examples/checkout',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '62',
    name: 'Wizard - Property Listing',
    url: '/pages/wizard-examples/property-listing',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '63',
    name: 'Wizard - Create Deal',
    url: '/pages/wizard-examples/create-deal',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '64',
    name: 'Dialog Examples',
    url: '/pages/dialog-examples',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '65',
    name: 'Widget - Basic',
    url: '/pages/widget-examples/basic',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '66',
    name: 'Widget - Advanced',
    url: '/pages/widget-examples/advanced',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '67',
    name: 'Widget - Statistics',
    url: '/pages/widget-examples/statistics',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '68',
    name: 'Widget - Charts',
    url: '/pages/widget-examples/charts',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '69',
    name: 'Widget - Actions',
    url: '/pages/widget-examples/actions',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '70',
    name: 'Icons Test',
    url: '/icons-test',
    icon: 'Icon',
    section: 'Pages'
  },
  {
    id: '71',
    name: 'Form Layouts',
    url: '/forms/form-layouts',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '72',
    name: 'Form Validation',
    url: '/forms/form-validation',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '73',
    name: 'Form Wizard',
    url: '/forms/form-wizard',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '74',
    name: 'React Table',
    url: '/react-table',
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '75',
    name: 'Apex Charts',
    url: '/charts/apex-charts',
    icon: 'Icon',
    section: 'Charts'
  },
  {
    id: '76',
    name: 'Recharts',
    url: '/charts/recharts',
    icon: 'Icon',
    section: 'Charts'
  },
  {
    id: '77',
    name: 'Menu Examples',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/menu-examples/overview`,
    icon: 'Icon',
    section: 'Others'
  },
  {
    id: '78',
    name: 'Typography',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation/typography`,
    icon: 'Icon',
    section: 'Foundation'
  },
  {
    id: '79',
    name: 'Colors',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation/colors`,
    icon: 'Icon',
    section: 'Foundation'
  },
  {
    id: '80',
    name: 'Shadows',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation/shadows`,
    icon: 'Icon',
    section: 'Foundation'
  },
  {
    id: '81',
    name: 'Icons',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation/icons`,
    icon: 'Icon',
    section: 'Foundation'
  },
  {
    id: '82',
    name: 'Accordion',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/accordion`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '83',
    name: 'Alerts',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/alerts`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '84',
    name: 'Avatars',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/avatars`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '85',
    name: 'Badges',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/badges`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '86',
    name: 'Buttons',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/buttons`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '87',
    name: 'Button Group',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/button-group`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '88',
    name: 'Chips',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/chips`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '89',
    name: 'Dialogs',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/dialogs`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '90',
    name: 'List',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/list`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '91',
    name: 'Menu',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/menu`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '92',
    name: 'Pagination',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/pagination`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '93',
    name: 'Progress',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/progress`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '94',
    name: 'Ratings',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/ratings`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '95',
    name: 'Snackbar',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/snackbar`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '96',
    name: 'Swiper',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/swiper`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '97',
    name: 'Tabs',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/tabs`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '98',
    name: 'Timeline',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/timeline`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '99',
    name: 'Toasts',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/toasts`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '100',
    name: 'More Components',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/more`,
    icon: 'Icon',
    section: 'Components'
  },
  {
    id: '101',
    name: 'Text Field',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/text-field`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '102',
    name: 'Select',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/select`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '103',
    name: 'Checkbox',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/checkbox`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '104',
    name: 'Radio',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/radio`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '105',
    name: 'Custom Inputs',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/custom-inputs`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '106',
    name: 'Textarea',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/textarea`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '107',
    name: 'Autocomplete',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/autocomplete`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '108',
    name: 'Picker',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/picker`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '109',
    name: 'Switch',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/switch`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '110',
    name: 'File Uploader',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/file-uploader`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '111',
    name: 'Editor',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/editor`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '112',
    name: 'Slider',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/slider`,
    icon: 'Icon',
    section: 'Forms & Tables'
  },
  {
    id: '113',
    name: 'MUI Tables',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/mui-table`,
    icon: 'Icon',
    section: 'Forms & Tables'
  }
]

export default data
