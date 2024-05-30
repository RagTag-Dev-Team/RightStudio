// Type Imports
import type { VerticalMenuDataType } from '@/types/menuTypes'
import type { getDictionary } from '@/utils/getDictionary'

type Params = {
  [key: string]: string | string[]
}

const verticalMenuData = (
  dictionary: Awaited<ReturnType<typeof getDictionary>>,
  params: Params
): VerticalMenuDataType[] => [
  // This is how you will normally render submenu
  {
    label: dictionary['navigation'].dashboards,
    suffix: {
      label: '5',
      color: 'error'
    },
    children: [
      // This is how you will normally render menu item
      {
        label: dictionary['navigation'].crm,
        href: '/dashboards/crm'
      },
      {
        label: dictionary['navigation'].analytics,
        href: '/dashboards/analytics'
      },
      {
        label: dictionary['navigation'].eCommerce,
        href: '/dashboards/ecommerce'
      },
      {
        label: dictionary['navigation'].academy,
        href: '/dashboards/academy'
      },
      {
        label: dictionary['navigation'].logistics,
        href: '/dashboards/logistics'
      }
    ]
  },
  {
    label: dictionary['navigation'].frontPages,
    children: [
      {
        label: dictionary['navigation'].landing,
        href: '/front-pages/landing-page',
        target: '_blank'
      },
      {
        label: dictionary['navigation'].pricing,
        href: '/front-pages/pricing',
        target: '_blank'
      },
      {
        label: dictionary['navigation'].payment,
        href: '/front-pages/payment',
        target: '_blank'
      },
      {
        label: dictionary['navigation'].checkout,
        href: '/front-pages/checkout',
        target: '_blank'
      },
      {
        label: dictionary['navigation'].helpCenter,
        href: '/front-pages/help-center',
        target: '_blank'
      }
    ]
  },
  {
    label: 'About',
    href: '/about'
  },

  // This is how you will normally render menu section
  {
    label: dictionary['navigation'].appsPages,
    isSection: true,
    children: [
      {
        label: dictionary['navigation'].eCommerce,
        children: [
          {
            label: dictionary['navigation'].dashboard,
            href: '/apps/ecommerce/dashboard'
          },
          {
            label: dictionary['navigation'].products,
            children: [
              {
                label: dictionary['navigation'].list,
                href: '/apps/ecommerce/products/list'
              },
              {
                label: dictionary['navigation'].add,
                href: '/apps/ecommerce/products/add'
              },
              {
                label: dictionary['navigation'].category,
                href: '/apps/ecommerce/products/category'
              }
            ]
          },
          {
            label: dictionary['navigation'].orders,
            children: [
              {
                label: dictionary['navigation'].list,
                href: '/apps/ecommerce/orders/list'
              },
              {
                label: dictionary['navigation'].details,
                href: `/apps/ecommerce/orders/details/${params.id || '5434'}`
              }
            ]
          },
          {
            label: dictionary['navigation'].customers,
            children: [
              {
                label: dictionary['navigation'].list,
                href: '/apps/ecommerce/customers/list'
              },
              {
                label: dictionary['navigation'].details,
                href: `/apps/ecommerce/customers/details/${params.id || '879861'}`
              }
            ]
          },
          {
            label: dictionary['navigation'].manageReviews,
            href: '/apps/ecommerce/manage-reviews'
          },
          {
            label: dictionary['navigation'].referrals,
            href: '/apps/ecommerce/referrals'
          },
          {
            label: dictionary['navigation'].settings,
            href: '/apps/ecommerce/settings'
          }
        ]
      },
      {
        label: dictionary['navigation'].academy,
        children: [
          {
            label: dictionary['navigation'].dashboard,
            href: '/apps/academy/dashboard'
          },
          {
            label: dictionary['navigation'].myCourses,
            href: '/apps/academy/my-courses'
          },
          {
            label: dictionary['navigation'].courseDetails,
            href: '/apps/academy/course-details'
          }
        ]
      },
      {
        label: dictionary['navigation'].logistics,
        children: [
          {
            label: dictionary['navigation'].dashboard,
            href: '/apps/logistics/dashboard'
          },
          {
            label: dictionary['navigation'].fleet,
            href: '/apps/logistics/fleet'
          }
        ]
      },
      {
        label: dictionary['navigation'].email,
        href: '/apps/email'
      },
      {
        label: dictionary['navigation'].chat,
        href: '/apps/chat'
      },
      {
        label: dictionary['navigation'].calendar,
        href: '/apps/calendar'
      },
      {
        label: dictionary['navigation'].kanban
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
            href: `/apps/user/view/${params.id || '1'}`
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
            label: dictionary['navigation'].basic,
            href: '/pages/widget-examples/basic'
          },
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
          },
          {
            label: dictionary['navigation'].actions,
            href: '/pages/widget-examples/actions'
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
        suffix: <i className='ri-external-link-line text-xl' />,
        href: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/form-elements`,
        target: '_blank'
      },
      {
        label: dictionary['navigation'].muiTables,
        href: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/mui-table`,
        suffix: <i className='ri-external-link-line text-xl' />,
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
            label: dictionary['navigation'].apex,
            href: '/charts/apex-charts'
          },
          {
            label: dictionary['navigation'].recharts,
            href: '/charts/recharts'
          }
        ]
      },

      {
        label: dictionary['navigation'].foundation,
        href: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/foundation`,
        suffix: <i className='ri-external-link-line text-xl' />,
        target: '_blank'
      },
      {
        label: dictionary['navigation'].components,
        href: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/user-interface/components`,
        suffix: <i className='ri-external-link-line text-xl' />,
        target: '_blank'
      },
      {
        label: dictionary['navigation'].menuExamples,
        href: `${process.env.NEXT_PUBLIC_DOCS_URL}/docs/menu-examples/overview`,
        suffix: <i className='ri-external-link-line text-xl' />,
        target: '_blank'
      },
      {
        label: dictionary['navigation'].raiseSupport,
        suffix: <i className='ri-external-link-line text-xl' />,
        target: '_blank'
      },
      {
        label: dictionary['navigation'].documentation,
        suffix: <i className='ri-external-link-line text-xl' />,
        target: '_blank'
      },
      {
        label: dictionary['navigation'].others,
        children: [
          {
            suffix: {
              label: 'New',
              color: 'info'
            },
            label: dictionary['navigation'].itemWithBadge
          },
          {
            label: dictionary['navigation'].externalLink,
            href: 'https://themeselection.com',
            target: '_blank',
            suffix: <i className='ri-external-link-line text-xl' />
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
