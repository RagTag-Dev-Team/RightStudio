// Type Imports
import type { VerticalMenuDataType } from '@/types/menuTypes'
import type { Locale } from '@configs/i18n'

// Icon Imports
import LinkExternalIcon from '@layouts/svg/LinkExternal'

// Util Imports
import { getDictionary } from '@/utils/get-dictionary'

const VerticalMenuData = (locale: Locale): VerticalMenuDataType[] => {
  // Get dictionary based on locale
  const dictionary = getDictionary(locale)

  return [
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
      href: `/about`
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
              href: '/app/invoice/list'
            },
            {
              label: dictionary['navigation'].preview,
              href: '/app/invoice/preview'
            },
            {
              label: dictionary['navigation'].edit,
              href: '/app/invoice/edit'
            },
            {
              label: dictionary['navigation'].add,
              href: '/app/invoice/add'
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
              children: [
                {
                  label: dictionary['navigation'].overview,
                  href: '/apps/user/view/overview'
                },
                {
                  label: dictionary['navigation'].security,
                  href: '/apps/user/view/security'
                },
                {
                  label: dictionary['navigation'].billingPlans,
                  href: '/apps/user/view/billing'
                },
                {
                  label: dictionary['navigation'].notifications,
                  href: '/apps/user/view/notifications'
                },
                {
                  label: dictionary['navigation'].connections,
                  href: '/apps/user/view/connections'
                }
              ]
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
              children: [
                {
                  label: dictionary['navigation'].profile,
                  href: '/pages/user-profile/profile'
                },
                {
                  label: dictionary['navigation'].teams,
                  href: '/pages/user-profile/teams'
                },
                {
                  label: dictionary['navigation'].projects,
                  href: '/pages/user-profile/projects'
                },
                {
                  label: dictionary['navigation'].connections,
                  href: '/pages/user-profile/connections'
                }
              ]
            },
            {
              label: dictionary['navigation'].accountSettings,
              children: [
                {
                  label: dictionary['navigation'].account,
                  href: '/pages/account-settings/account'
                },
                {
                  label: dictionary['navigation'].security,
                  href: '/pages/account-settings/security'
                },
                {
                  label: dictionary['navigation'].billingPlans,
                  href: '/pages/account-settings/billing-plans'
                },
                {
                  label: dictionary['navigation'].notifications,
                  href: '/pages/account-settings/notifications'
                },

                {
                  label: dictionary['navigation'].connections,
                  href: '/pages/account-settings/connections'
                }
              ]
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
                  href: '/pages/misc/coming-soon'
                },
                {
                  label: dictionary['navigation'].underMaintenance,
                  href: '/pages/misc/under-maintenance'
                },
                {
                  label: dictionary['navigation'].pageNotFound404,
                  href: '/pages/misc/404-not-found'
                },
                {
                  label: dictionary['navigation'].notAuthorized401,
                  href: '/pages/misc/401-not-authorized'
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
                  href: '/pages/auth/login-v1'
                },
                {
                  label: dictionary['navigation'].loginV2,
                  href: '/pages/auth/login-v2'
                }
              ]
            },
            {
              label: dictionary['navigation'].register,
              children: [
                {
                  label: dictionary['navigation'].registerV1,
                  href: '/pages/auth/register-v1'
                },
                {
                  label: dictionary['navigation'].registerV2,
                  href: '/pages/auth/register-v2'
                },
                {
                  label: dictionary['navigation'].registerMultiSteps,
                  href: '/pages/auth/register-multi-steps'
                }
              ]
            },
            {
              label: dictionary['navigation'].verifyEmail,
              children: [
                {
                  label: dictionary['navigation'].verifyEmailV1,
                  href: '/pages/auth/verify-email-v1'
                },
                {
                  label: dictionary['navigation'].verifyEmailV2,
                  href: '/pages/auth/verify-email-v2'
                }
              ]
            },
            {
              label: dictionary['navigation'].forgotPassword,
              children: [
                {
                  label: dictionary['navigation'].forgotPasswordV1,
                  href: '/pages/auth/forgot-password-v1'
                },
                {
                  label: dictionary['navigation'].forgotPasswordV2,
                  href: '/pages/auth/forgot-password-v2'
                }
              ]
            },
            {
              label: dictionary['navigation'].resetPassword,
              children: [
                {
                  label: dictionary['navigation'].resetPasswordV1,
                  href: '/pages/auth/reset-password-v1'
                },
                {
                  label: dictionary['navigation'].resetPasswordV2,
                  href: '/pages/auth/reset-password-v2'
                }
              ]
            },
            {
              label: dictionary['navigation'].twoSteps,
              children: [
                {
                  label: dictionary['navigation'].twoStepsV1,
                  href: '/pages/auth/two-steps-v1'
                },
                {
                  label: dictionary['navigation'].twoStepsV2,
                  href: '/pages/auth/two-steps-v2'
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
}

export default VerticalMenuData
