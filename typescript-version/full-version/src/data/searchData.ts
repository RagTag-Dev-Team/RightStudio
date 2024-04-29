// Third-party Imports
import type { Action } from 'kbar'

export type SearchData = Action & {
  url: string
}

const data: SearchData[] = [
  {
    id: '1',
    name: 'CRM Dashboard',
    url: '/dashboards/crm',
    icon: 'tabler-chart-pie-2',
    section: 'Dashboards'
  },
  {
    id: '2',
    name: 'Analytics Dashboard',
    url: '/dashboards/analytics',
    icon: 'tabler-trending-up',
    section: 'Dashboards'
  },
  {
    id: '3',
    name: 'eCommerce Dashboard',
    url: '/dashboards/ecommerce',
    icon: 'tabler-shopping-cart',
    section: 'Dashboards'
  },
  {
    id: '5',
    name: 'Chat',
    url: '/apps/chat',
    icon: 'ri-wechat-line',
    section: 'Apps'
  },
  {
    id: '6',
    name: 'Calendar',
    url: '/apps/calendar',
    icon: 'tabler-calendar',
    section: 'Apps'
  },
  {
    id: '7',
    name: 'Kanban',
    url: '/apps/kanban',
    icon: 'Icon',
    section: 'Apps'
  },
  {
    id: '8',
    name: 'Invoice List',
    url: '/apps/invoice/list',
    icon: 'tabler-file-description',
    section: 'Apps'
  },
  {
    id: '9',
    name: 'Invoice Preview',
    url: '/apps/invoice/preview/4987',
    icon: 'tabler-file-info',
    section: 'Apps'
  },
  {
    id: '10',
    name: 'Invoice Edit',
    url: '/apps/invoice/edit/4987',
    icon: 'tabler-file-pencil',
    section: 'Apps'
  },
  {
    id: '11',
    name: 'Invoice Add',
    url: '/apps/invoice/add',
    icon: 'tabler-file-plus',
    section: 'Apps'
  },
  {
    id: '12',
    name: 'User List',
    url: '/apps/user/list',
    icon: 'tabler-user',
    section: 'Apps'
  },
  {
    id: '13',
    name: 'User View',
    url: '/apps/user/view',
    icon: 'tabler-file-text',
    section: 'Apps'
  },
  {
    id: '14',
    name: 'Roles',
    url: '/apps/roles',
    icon: 'tabler-user-shield',
    section: 'Apps'
  },
  {
    id: '15',
    name: 'Permissions',
    url: '/apps/permissions',
    icon: 'tabler-lock',
    section: 'Apps'
  },
  {
    id: '16',
    name: 'User Profile',
    url: '/pages/user-profile',
    icon: 'tabler-user-circle',
    section: 'Pages'
  },
  {
    id: '17',
    name: 'Account Settings',
    url: '/pages/account-settings',
    icon: 'tabler-settings',
    section: 'Pages'
  },
  {
    id: '18',
    name: 'FAQ',
    url: '/pages/faq',
    icon: 'tabler-help-circle',
    section: 'Pages'
  },
  {
    id: '19',
    name: 'Pricing',
    url: '/pages/pricing',
    icon: 'tabler-currency-dollar',
    section: 'Pages'
  },
  {
    id: '20',
    name: 'Coming Soon',
    url: '/pages/misc/coming-soon',
    icon: 'tabler-clock-hour-3',
    section: 'Pages'
  },
  {
    id: '21',
    name: 'Under Maintenance',
    url: '/pages/misc/under-maintenance',
    icon: 'tabler-settings-cog',
    section: 'Pages'
  },
  {
    id: '22',
    name: 'Page Not Found - 404',
    url: '/pages/misc/404-not-found',
    icon: 'tabler-info-circle',
    section: 'Pages'
  },
  {
    id: '23',
    name: 'Not Authorized - 401',
    url: '/pages/misc/401-not-authorized',
    icon: 'tabler-user-cancel',
    section: 'Pages'
  },
  {
    id: '24',
    name: 'Login V1',
    url: '/pages/auth/login-v1',
    icon: 'tabler-login-2',
    section: 'Pages'
  },
  {
    id: '25',
    name: 'Login V2',
    url: '/pages/auth/login-v2',
    icon: 'tabler-login-2',
    section: 'Pages'
  },
  {
    id: '26',
    name: 'Register V1',
    url: '/pages/auth/register-v1',
    icon: 'tabler-user-plus',
    section: 'Pages'
  },
  {
    id: '27',
    name: 'Register V2',
    url: '/pages/auth/register-v2',
    icon: 'tabler-user-plus',
    section: 'Pages'
  },
  {
    id: '28',
    name: 'Register Multi-Steps',
    url: '/pages/auth/register-multi-steps',
    icon: 'tabler-user-plus',
    section: 'Pages'
  },
  {
    id: '29',
    name: 'Forgot Password V1',
    url: '/pages/auth/forgot-password-v1',
    icon: 'tabler-lock-check',
    section: 'Pages'
  },
  {
    id: '30',
    name: 'Forgot Password V2',
    url: '/pages/auth/forgot-password-v2',
    icon: 'tabler-lock-check',
    section: 'Pages'
  },
  {
    id: '31',
    name: 'Reset Password V1',
    url: '/pages/auth/reset-password-v1',
    icon: 'tabler-refresh',
    section: 'Pages'
  },
  {
    id: '32',
    name: 'Reset Password V2',
    url: '/pages/auth/reset-password-v2',
    icon: 'tabler-refresh',
    section: 'Pages'
  },
  {
    id: '33',
    name: 'Verify Email V1',
    url: '/pages/auth/verify-email-v1',
    icon: 'tabler-mail-check',
    section: 'Pages'
  },
  {
    id: '34',
    name: 'Verify Email V2',
    url: '/pages/auth/verify-email-v2',
    icon: 'tabler-mail-check',
    section: 'Pages'
  },
  {
    id: '35',
    name: 'Two Steps V1',
    url: '/pages/auth/two-steps-v1',
    icon: 'tabler-devices',
    section: 'Pages'
  },
  {
    id: '36',
    name: 'Two Steps V2',
    url: '/pages/auth/two-steps-v2',
    icon: 'tabler-devices',
    section: 'Pages'
  },
  {
    id: '37',
    name: 'Wizard - Checkout',
    url: '/pages/wizard-examples/checkout',
    icon: 'tabler-shopping-cart-check',
    section: 'Pages'
  },
  {
    id: '38',
    name: 'Wizard - Property Listing',
    url: '/pages/wizard-examples/property-listing',
    icon: 'tabler-building',
    section: 'Pages'
  },
  {
    id: '39',
    name: 'Wizard - Create Deal',
    url: '/pages/wizard-examples/create-deal',
    icon: 'tabler-gift',
    section: 'Pages'
  },
  {
    id: '40',
    name: 'Dialog Examples',
    url: '/pages/dialog-examples',
    icon: 'tabler-device-desktop',
    section: 'Pages'
  },
  {
    id: '41',
    name: 'Widget - Basic',
    url: '/pages/widget-examples/basic',
    icon: 'tabler-square',
    section: 'Pages'
  },
  {
    id: '42',
    name: 'Widget - Advanced',
    url: '/pages/widget-examples/advanced',
    icon: 'tabler-file-spreadsheet',
    section: 'Pages'
  },
  {
    id: '43',
    name: 'Widget - Statistics',
    url: '/pages/widget-examples/statistics',
    icon: 'tabler-align-box-bottom-center',
    section: 'Pages'
  },
  {
    id: '44',
    name: 'Widget - Charts',
    url: '/pages/widget-examples/charts',
    icon: 'tabler-chart-histogram',
    section: 'Pages'
  },
  {
    id: '45',
    name: 'Widget - Actions',
    url: '/pages/widget-examples/actions',
    icon: 'tabler-square-plus',
    section: 'Pages'
  },
  {
    id: '46',
    name: 'Icons Test',
    url: '/icons-test',
    icon: 'tabler-icons',
    section: 'Pages'
  },
  {
    id: '47',
    name: 'Form Layouts',
    url: '/forms/form-layouts',
    icon: 'tabler-layout',
    section: 'Forms & Tables'
  },
  {
    id: '48',
    name: 'Form Validation',
    url: '/forms/form-validation',
    icon: 'tabler-checkup-list',
    section: 'Forms & Tables'
  },
  {
    id: '49',
    name: 'Form Wizard',
    url: '/forms/form-wizard',
    icon: 'tabler-git-merge',
    section: 'Forms & Tables'
  },
  {
    id: '50',
    name: 'React Table',
    url: '/react-table',
    icon: 'tabler-table',
    section: 'Forms & Tables'
  },
  {
    id: '51',
    name: 'Apex Charts',
    url: '/charts/apex-charts',
    icon: 'tabler-chart-ppf',
    section: 'Charts'
  },
  {
    id: '52',
    name: 'Recharts',
    url: '/charts/recharts',
    icon: 'tabler-chart-sankey',
    section: 'Charts'
  },
  {
    id: '53',
    name: 'Menu Examples',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/menu-examples/overview`,
    icon: 'tabler-playlist-add',
    section: 'Others'
  },
  {
    id: '54',
    name: 'Typography',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation/typography`,
    icon: 'tabler-typography',
    section: 'Foundation'
  },
  {
    id: '55',
    name: 'Colors',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation/colors`,
    icon: 'tabler-palette',
    section: 'Foundation'
  },
  {
    id: '56',
    name: 'Shadows',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation/shadows`,
    icon: 'tabler-shadow',
    section: 'Foundation'
  },
  {
    id: '57',
    name: 'Icons',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation/icons`,
    icon: 'tabler-icons',
    section: 'Foundation'
  },
  {
    id: '58',
    name: 'Accordion',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/accordion`,
    icon: 'tabler-fold',
    section: 'Components'
  },
  {
    id: '59',
    name: 'Alerts',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/alerts`,
    icon: 'tabler-alert-triangle',
    section: 'Components'
  },
  {
    id: '60',
    name: 'Avatars',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/avatars`,
    icon: 'tabler-user-square',
    section: 'Components'
  },
  {
    id: '61',
    name: 'Badges',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/badges`,
    icon: 'tabler-notification',
    section: 'Components'
  },
  {
    id: '62',
    name: 'Buttons',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/buttons`,
    icon: 'tabler-download',
    section: 'Components'
  },
  {
    id: '63',
    name: 'Button Group',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/button-group`,
    icon: 'tabler-copy',
    section: 'Components'
  },
  {
    id: '64',
    name: 'Chips',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/chips`,
    icon: 'tabler-oval-vertical',
    section: 'Components'
  },
  {
    id: '65',
    name: 'Dialogs',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/dialogs`,
    icon: 'tabler-device-desktop',
    section: 'Components'
  },
  {
    id: '66',
    name: 'List',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/list`,
    icon: 'tabler-list',
    section: 'Components'
  },
  {
    id: '67',
    name: 'Menu',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/menu`,
    icon: 'tabler-menu-2',
    section: 'Components'
  },
  {
    id: '68',
    name: 'Pagination',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/pagination`,
    icon: 'tabler-chevron-right-pipe',
    section: 'Components'
  },
  {
    id: '69',
    name: 'Progress',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/progress`,
    icon: 'tabler-progress',
    section: 'Components'
  },
  {
    id: '70',
    name: 'Ratings',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/ratings`,
    icon: 'tabler-star',
    section: 'Components'
  },
  {
    id: '71',
    name: 'Snackbar',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/snackbar`,
    icon: 'tabler-message-dots',
    section: 'Components'
  },
  {
    id: '72',
    name: 'Swiper',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/swiper`,
    icon: 'tabler-cards',
    section: 'Components'
  },
  {
    id: '73',
    name: 'Tabs',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/tabs`,
    icon: 'tabler-layout-navbar',
    section: 'Components'
  },
  {
    id: '74',
    name: 'Timeline',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/timeline`,
    icon: 'tabler-timeline',
    section: 'Components'
  },
  {
    id: '75',
    name: 'Toasts',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/toasts`,
    icon: 'tabler-bell',
    section: 'Components'
  },
  {
    id: '76',
    name: 'More Components',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components/more`,
    icon: 'tabler-table-plus',
    section: 'Components'
  },
  {
    id: '77',
    name: 'Text Field',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/text-field`,
    icon: 'tabler-forms',
    section: 'Forms & Tables'
  },
  {
    id: '78',
    name: 'Select',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/select`,
    icon: 'tabler-list-details',
    section: 'Forms & Tables'
  },
  {
    id: '79',
    name: 'Checkbox',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/checkbox`,
    icon: 'tabler-checkbox',
    section: 'Forms & Tables'
  },
  {
    id: '80',
    name: 'Radio',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/radio`,
    icon: 'tabler-circle-dot',
    section: 'Forms & Tables'
  },
  {
    id: '81',
    name: 'Custom Inputs',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/custom-inputs`,
    icon: 'tabler-list-details',
    section: 'Forms & Tables'
  },
  {
    id: '82',
    name: 'Textarea',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/textarea`,
    icon: 'tabler-rectangle',
    section: 'Forms & Tables'
  },
  {
    id: '83',
    name: 'Autocomplete',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/autocomplete`,
    icon: 'tabler-list-check',
    section: 'Forms & Tables'
  },
  {
    id: '84',
    name: 'Picker',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/picker`,
    icon: 'tabler-calendar-month',
    section: 'Forms & Tables'
  },
  {
    id: '85',
    name: 'Switch',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/switch`,
    icon: 'tabler-toggle-left',
    section: 'Forms & Tables'
  },
  {
    id: '86',
    name: 'File Uploader',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/file-uploader`,
    icon: 'tabler-file-upload',
    section: 'Forms & Tables'
  },
  {
    id: '87',
    name: 'Editor',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/editor`,
    icon: 'tabler-device-ipad-horizontal-plus',
    section: 'Forms & Tables'
  },
  {
    id: '88',
    name: 'Slider',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements/slider`,
    icon: 'tabler-line',
    section: 'Forms & Tables'
  },
  {
    id: '89',
    name: 'MUI Tables',
    url: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/mui-table`,
    icon: 'tabler-layout-board-split',
    section: 'Forms & Tables'
  }
]

export default data
