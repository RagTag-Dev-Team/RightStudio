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
          href: `/${locale}/dashboards/analytics`
        },
        {
          label: dictionary['navigation'].eCommerce,
          href: `/${locale}/dashboards/ecommerce`
        }
      ]
    },
    {
      label: 'About',
      href: `/${locale}/about`
    },
    {
      label: 'User List',
      href: `/${locale}/user-list`
    },
    {
      label: 'User Details',
      href: `/${locale}/user-details`
    },

    // This is how you will normally render menu section
    {
      label: dictionary['navigation'].appsPages,
      isSection: true,
      children: [
        {
          label: dictionary['navigation'].email,
          href: `/${locale}/email`
        },
        {
          label: dictionary['navigation'].chat,
          href: `/${locale}/chat`
        },
        {
          label: dictionary['navigation'].calendar
        },
        {
          label: dictionary['navigation'].invoice,
          children: [
            {
              label: dictionary['navigation'].list,
              href: `/${locale}/app/invoice/list`
            },
            {
              label: dictionary['navigation'].preview,
              href: `/${locale}/app/invoice/preview`
            },
            {
              label: dictionary['navigation'].edit,
              href: `/${locale}/app/invoice/edit`
            },
            {
              label: dictionary['navigation'].add,
              href: `/${locale}/app/invoice/add`
            }
          ]
        },
        {
          label: dictionary['navigation'].user,
          children: [
            {
              label: dictionary['navigation'].list,
              href: `/${locale}/apps/user/list`
            },
            {
              label: dictionary['navigation'].view,
              children: [
                {
                  label: dictionary['navigation'].overview,
                  href: `/${locale}/apps/user/view/overview`
                },
                {
                  label: dictionary['navigation'].security,
                  href: `/${locale}/apps/user/view/security`
                },
                {
                  label: dictionary['navigation'].billingPlans,
                  href: `/${locale}/apps/user/view/billing`
                },
                {
                  label: dictionary['navigation'].notifications,
                  href: `/${locale}/apps/user/view/notifications`
                },
                {
                  label: dictionary['navigation'].connections,
                  href: `/${locale}/apps/user/view/connections`
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
              href: `/${locale}/apps/roles`
            },
            {
              label: dictionary['navigation'].permissions,
              href: `/${locale}/apps/permissions`
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
                  href: `/${locale}/pages/user-profile/profile`
                },
                {
                  label: dictionary['navigation'].teams,
                  href: `/${locale}/pages/user-profile/teams`
                },
                {
                  label: dictionary['navigation'].projects,
                  href: `/${locale}/pages/user-profile/projects`
                },
                {
                  label: dictionary['navigation'].connections,
                  href: `/${locale}/pages/user-profile/connections`
                }
              ]
            },
            {
              label: dictionary['navigation'].accountSettings,
              children: [
                {
                  label: dictionary['navigation'].account,
                  href: `/${locale}/pages/account-settings/account`
                },
                {
                  label: dictionary['navigation'].security,
                  href: `/${locale}/pages/account-settings/security`
                },
                {
                  label: dictionary['navigation'].billingPlans,
                  href: `/${locale}/pages/account-settings/billing-plans`
                },
                {
                  label: dictionary['navigation'].notifications,
                  href: `/${locale}/pages/account-settings/notifications`
                },

                {
                  label: dictionary['navigation'].connections,
                  href: `/${locale}/pages/account-settings/connections`
                }
              ]
            },
            {
              label: dictionary['navigation'].faq,
              href: `/${locale}/pages/faq`
            },
            {
              label: dictionary['navigation'].pricing,
              href: `/${locale}/pages/pricing`
            },
            {
              label: dictionary['navigation'].miscellaneous,
              children: [
                {
                  label: dictionary['navigation'].comingSoon,
                  href: `/${locale}/pages/misc/coming-soon`
                },
                {
                  label: dictionary['navigation'].underMaintenance,
                  href: `/${locale}/pages/misc/under-maintenance`
                },
                {
                  label: dictionary['navigation'].pageNotFound404,
                  href: `/${locale}/pages/misc/404-not-found`
                },
                {
                  label: dictionary['navigation'].notAuthorized401,
                  href: `/${locale}/pages/misc/401-not-authorized`
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
                  href: `/${locale}/pages/auth/login-v1`
                },
                {
                  label: dictionary['navigation'].loginV2,
                  href: `/${locale}/pages/auth/login-v2`
                }
              ]
            },
            {
              label: dictionary['navigation'].register,
              children: [
                {
                  label: dictionary['navigation'].registerV1,
                  href: `/${locale}/pages/auth/register-v1`
                },
                {
                  label: dictionary['navigation'].registerV2,
                  href: `/${locale}/pages/auth/register-v2`
                },
                {
                  label: dictionary['navigation'].registerMultiSteps,
                  href: `/${locale}/pages/auth/register-multi-steps`
                }
              ]
            },
            {
              label: dictionary['navigation'].verifyEmail,
              children: [
                {
                  label: dictionary['navigation'].verifyEmailV1,
                  href: `/${locale}/pages/auth/verify-email-v1`
                },
                {
                  label: dictionary['navigation'].verifyEmailV2,
                  href: `/${locale}/pages/auth/verify-email-v2`
                }
              ]
            },
            {
              label: dictionary['navigation'].forgotPassword,
              children: [
                {
                  label: dictionary['navigation'].forgotPasswordV1,
                  href: `/${locale}/pages/auth/forgot-password-v1`
                },
                {
                  label: dictionary['navigation'].forgotPasswordV2,
                  href: `/${locale}/pages/auth/forgot-password-v2`
                }
              ]
            },
            {
              label: dictionary['navigation'].resetPassword,
              children: [
                {
                  label: dictionary['navigation'].resetPasswordV1,
                  href: `/${locale}/pages/auth/reset-password-v1`
                },
                {
                  label: dictionary['navigation'].resetPasswordV2,
                  href: `/${locale}/pages/auth/reset-password-v2`
                }
              ]
            },
            {
              label: dictionary['navigation'].twoSteps,
              children: [
                {
                  label: dictionary['navigation'].twoStepsV1,
                  href: `/${locale}/pages/auth/two-steps-v1`
                },
                {
                  label: dictionary['navigation'].twoStepsV2,
                  href: `/${locale}/pages/auth/two-steps-v2`
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
              href: `/${locale}/pages/wizard-examples/checkout`
            },
            {
              label: dictionary['navigation'].propertyListing,
              href: `/${locale}/pages/wizard-examples/property-listing`
            },
            {
              label: dictionary['navigation'].createDeal,
              href: `/${locale}/pages/wizard-examples/create-deal`
            }
          ]
        },
        {
          label: dictionary['navigation'].dialogExamples,
          href: `/${locale}/pages/dialog-examples`
        },
        {
          label: dictionary['navigation'].widgetExamples,
          children: [
            {
              label: dictionary['navigation'].advanced,
              href: `/${locale}/pages/widget-examples/advanced`
            },
            {
              label: dictionary['navigation'].statistics,
              href: `/${locale}/pages/widget-examples/statistics`
            },
            {
              label: dictionary['navigation'].charts,
              href: `/${locale}/pages/widget-examples/charts`
            }
          ]
        },
        {
          label: 'Icons Test',
          href: `/${locale}/icons-test`
        }
      ]
    },
    {
      label: dictionary['navigation'].formsAndTables,
      isSection: true,
      children: [
        {
          label: dictionary['navigation'].formLayouts,
          href: `/${locale}/forms/form-layouts`
        },
        {
          label: dictionary['navigation'].formValidation,
          href: `/${locale}/forms/form-validation`
        },
        {
          label: dictionary['navigation'].formWizard,
          href: `/${locale}/forms/form-wizard`
        },
        {
          label: dictionary['navigation'].reactTable,
          href: `/${locale}/react-table`
        },
        {
          label: dictionary['navigation'].formELements,
          suffix: <LinkExternalIcon fontSize='1.125rem' />,
          href: 'http://localhost:3001/docs/forms-and-tables/intro#form-elements',
          target: '_blank'
        },
        {
          label: dictionary['navigation'].tables,
          href: 'http://localhost:3001/docs/forms-and-tables/intro#tables',
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
              href: `/${locale}/charts/echarts`
            },
            {
              label: dictionary['navigation'].recharts,
              href: `/${locale}/charts/recharts`
            },
            {
              label: dictionary['navigation'].apex,
              href: `/${locale}/charts/apex-charts`
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
