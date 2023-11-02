// Type Imports
import type { VerticalMenuDataType } from '@/types/menuTypes'
import type { Dictionary, Params } from '@core/types'

// Icon Imports
import LinkExternalIcon from '@layouts/svg/LinkExternal'

const verticalMenuData = (dictionary: Dictionary, params: Params): VerticalMenuDataType[] => [
  // This is how you will normally render submenu
  {
    label: dictionary['navigation'].dashboards,
    children: [
      // This is how you will normally render menu item
      {
        label: dictionary['navigation'].analytics,
        href: '/dashboards/analytics'
      },
      {
        label: dictionary['navigation'].eCommerce,
        href: '/dashboards/ecommerce'
      }
    ]
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'User List',
    href: '/user-list'
  },
  {
    label: 'User Details',
    href: '/user-details'
  },

  // This is how you will normally render menu section
  {
    label: dictionary['navigation'].appsPages,
    isSection: true,
    children: [
      {
        label: dictionary['navigation'].email,
        href: '/email'
      },
      {
        label: dictionary['navigation'].chat,
        href: '/chat'
      },
      {
        label: dictionary['navigation'].calendar
      },
      {
        label: dictionary['navigation'].invoice,
        children: [
          {
            label: dictionary['navigation'].list,
            href: '/apps/invoice/list'
          },
          {
            label: dictionary['navigation'].preview,
            href: `/apps/invoice/preview/${params.id || '4987'}`
          },
          {
            label: dictionary['navigation'].edit,
            href: `/apps/invoice/edit/${params.id || '4987'}`
          },
          {
            label: dictionary['navigation'].add,
            href: '/apps/invoice/add'
          }
        ]
      },
      {
        label: dictionary['navigation'].user,
        children: [
          {
            label: dictionary['navigation'].list,
            href: '/apps/user/list'
          },
          {
            label: dictionary['navigation'].view,
            href: '/apps/user/view'
          }
        ]
      },
      {
        label: dictionary['navigation'].rolesPermissions,
        children: [
          {
            label: dictionary['navigation'].roles,
            href: '/apps/roles'
          },
          {
            label: dictionary['navigation'].permissions,
            href: '/apps/permissions'
          }
        ]
      },
      {
        label: dictionary['navigation'].pages,
        children: [
          {
            label: dictionary['navigation'].userProfile,
            href: '/pages/user-profile'
          },
          {
            label: dictionary['navigation'].accountSettings,
            href: '/pages/account-settings'
          },
          {
            label: dictionary['navigation'].faq,
            href: '/pages/faq'
          },
          {
            label: dictionary['navigation'].pricing,
            href: '/pages/pricing'
          },
          {
            label: dictionary['navigation'].miscellaneous,
            children: [
              {
                label: dictionary['navigation'].comingSoon,
                href: '/pages/misc/coming-soon',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].underMaintenance,
                href: '/pages/misc/under-maintenance',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].pageNotFound404,
                href: '/pages/misc/404-not-found',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].notAuthorized401,
                href: '/pages/misc/401-not-authorized',
                target: '_blank'
              }
            ]
          }
        ]
      },
      {
        label: dictionary['navigation'].authPages,
        children: [
          {
            label: dictionary['navigation'].login,
            children: [
              {
                label: dictionary['navigation'].loginV1,
                href: '/pages/auth/login-v1',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].loginV2,
                href: '/pages/auth/login-v2',
                target: '_blank'
              }
            ]
          },
          {
            label: dictionary['navigation'].register,
            children: [
              {
                label: dictionary['navigation'].registerV1,
                href: '/pages/auth/register-v1',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].registerV2,
                href: '/pages/auth/register-v2',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].registerMultiSteps,
                href: '/pages/auth/register-multi-steps',
                target: '_blank'
              }
            ]
          },
          {
            label: dictionary['navigation'].verifyEmail,
            children: [
              {
                label: dictionary['navigation'].verifyEmailV1,
                href: '/pages/auth/verify-email-v1',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].verifyEmailV2,
                href: '/pages/auth/verify-email-v2',
                target: '_blank'
              }
            ]
          },
          {
            label: dictionary['navigation'].forgotPassword,
            children: [
              {
                label: dictionary['navigation'].forgotPasswordV1,
                href: '/pages/auth/forgot-password-v1',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].forgotPasswordV2,
                href: '/pages/auth/forgot-password-v2',
                target: '_blank'
              }
            ]
          },
          {
            label: dictionary['navigation'].resetPassword,
            children: [
              {
                label: dictionary['navigation'].resetPasswordV1,
                href: '/pages/auth/reset-password-v1',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].resetPasswordV2,
                href: '/pages/auth/reset-password-v2',
                target: '_blank'
              }
            ]
          },
          {
            label: dictionary['navigation'].twoSteps,
            children: [
              {
                label: dictionary['navigation'].twoStepsV1,
                href: '/pages/auth/two-steps-v1',
                target: '_blank'
              },
              {
                label: dictionary['navigation'].twoStepsV2,
                href: '/pages/auth/two-steps-v2',
                target: '_blank'
              }
            ]
          }
        ]
      },
      {
        label: dictionary['navigation'].wizardExamples,
        children: [
          {
            label: dictionary['navigation'].checkout,
            href: '/pages/wizard-examples/checkout'
          },
          {
            label: dictionary['navigation'].propertyListing,
            href: '/pages/wizard-examples/property-listing'
          },
          {
            label: dictionary['navigation'].createDeal,
            href: '/pages/wizard-examples/create-deal'
          }
        ]
      },
      {
        label: dictionary['navigation'].dialogExamples,
        href: '/pages/dialog-examples'
      },
      {
        label: dictionary['navigation'].widgetExamples,
        children: [
          {
            label: dictionary['navigation'].advanced,
            href: '/pages/widget-examples/advanced'
          },
          {
            label: dictionary['navigation'].statistics,
            href: '/pages/widget-examples/statistics'
          },
          {
            label: dictionary['navigation'].charts,
            href: '/pages/widget-examples/charts'
          }
        ]
      },
      {
        label: 'Icons Test',
        href: '/icons-test'
      }
    ]
  },
  {
    label: dictionary['navigation'].formsAndTables,
    isSection: true,
    children: [
      {
        label: dictionary['navigation'].formLayouts,
        href: '/forms/form-layouts'
      },
      {
        label: dictionary['navigation'].formValidation,
        href: '/forms/form-validation'
      },
      {
        label: dictionary['navigation'].formWizard,
        href: '/forms/form-wizard'
      },
      {
        label: dictionary['navigation'].reactTable,
        href: '/react-table'
      },
      {
        label: dictionary['navigation'].formELements,
        suffix: <LinkExternalIcon fontSize='1.125rem' />,
        href: 'http://localhost:3001/docs/forms-tables/intro#form-elements',
        target: '_blank'
      },
      {
        label: dictionary['navigation'].muiTables,
        href: 'http://localhost:3001/docs/tables/mui-table',
        suffix: <LinkExternalIcon fontSize='1.125rem' />,
        target: '_blank'
      }
    ]
  },
  {
    label: dictionary['navigation'].chartsMisc,
    isSection: true,
    children: [
      {
        label: dictionary['navigation'].charts,
        children: [
          {
            label: dictionary['navigation'].echarts,
            href: '/charts/echarts'
          },
          {
            label: dictionary['navigation'].recharts,
            href: '/charts/recharts'
          },
          {
            label: dictionary['navigation'].apex,
            href: '/charts/apex-charts'
          },
          {
            label: 'Echarts Advance',
            href: '/charts/echarts-advance'
          }
        ]
      },

      {
        label: dictionary['navigation'].userInterface,
        href: 'http://localhost:3001/docs/user-interface/intro',
        suffix: <LinkExternalIcon fontSize='1.125rem' />,
        target: '_blank'
      },
      {
        label: dictionary['navigation'].components,
        href: 'http://localhost:3001/docs/components/intro',
        suffix: <LinkExternalIcon fontSize='1.125rem' />,
        target: '_blank'
      },
      {
        label: dictionary['navigation'].raiseSupport,
        suffix: <LinkExternalIcon fontSize='1.125rem' />,
        target: '_blank'
      },
      {
        label: dictionary['navigation'].documentation,
        suffix: <LinkExternalIcon fontSize='1.125rem' />,
        target: '_blank'
      },
      {
        label: dictionary['navigation'].others,
        children: [
          {
            label: dictionary['navigation'].itemWithBadge
          },
          {
            label: dictionary['navigation'].externalLink,
            href: 'https://themeselection.com/',
            target: '_blank',
            suffix: <LinkExternalIcon fontSize='1.125rem' />
          },
          {
            label: dictionary['navigation'].menuLevels,
            children: [
              {
                label: dictionary['navigation'].menuLevel2
              },
              {
                label: dictionary['navigation'].menuLevel2,
                children: [
                  {
                    label: dictionary['navigation'].menuLevel3
                  },
                  {
                    label: dictionary['navigation'].menuLevel3
                  }
                ]
              }
            ]
          },
          {
            label: dictionary['navigation'].disabledMenu,
            disabled: true
          }
        ]
      }
    ]
  }
]

export default verticalMenuData
