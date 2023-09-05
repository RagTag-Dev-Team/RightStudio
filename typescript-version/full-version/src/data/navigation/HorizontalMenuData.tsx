// Type Imports
import type { HorizontalMenuDataType } from '@/types/menuTypes'
import type { Locale } from '@configs/i18n'

// Icon Imports
import LinkExternalIcon from '@layouts/svg/LinkExternal'

// Util Imports
import { getDictionary } from '@/utils/get-dictionary'

const HorizontalMenuData = (locale: Locale): HorizontalMenuDataType[] => {
  // Get dictionary based on locale
  const dictionary = getDictionary(locale)

  return [
    // This is how you will normally render submenu
    {
      label: dictionary['navigation'].dashboards,
      children: [
        // This is how you will normally render menu item
        {
          label: dictionary['navigation'].analytics
        },
        {
          label: dictionary['navigation'].eCommerce
        }
      ]
    },
    {
      label: 'About',
      href: `/${locale}/about`
    },
    {
      label: dictionary['navigation'].apps,
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
              label: dictionary['navigation'].list
            },
            {
              label: dictionary['navigation'].preview
            },
            {
              label: dictionary['navigation'].edit
            },
            {
              label: dictionary['navigation'].add
            }
          ]
        },
        {
          label: dictionary['navigation'].user,
          children: [
            {
              label: dictionary['navigation'].list,
              href: `/${locale}/user-list`
            },
            {
              label: dictionary['navigation'].view,
              children: [
                {
                  label: dictionary['navigation'].account,
                  href: `/${locale}/user-details`
                },
                {
                  label: dictionary['navigation'].security
                },
                {
                  label: dictionary['navigation'].billingPlans
                },
                {
                  label: dictionary['navigation'].notifications
                },
                {
                  label: dictionary['navigation'].connections
                }
              ]
            }
          ]
        },
        {
          label: dictionary['navigation'].rolesPermissions,
          children: [
            {
              label: dictionary['navigation'].roles
            },
            {
              label: dictionary['navigation'].permissions
            }
          ]
        }
      ]
    },
    {
      label: dictionary['navigation'].ui,
      children: [
        {
          label: dictionary['navigation'].typography
        },
        {
          label: dictionary['navigation'].icons
        },
        {
          label: 'Icons Test'
        },
        {
          label: dictionary['navigation'].cards,
          children: [
            {
              label: dictionary['navigation'].basic
            },
            {
              label: dictionary['navigation'].actions
            }
          ]
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
              label: dictionary['navigation'].profile
            },
            {
              label: dictionary['navigation'].teams
            },
            {
              label: dictionary['navigation'].projects
            },
            {
              label: dictionary['navigation'].connections
            }
          ]
        },
        {
          label: dictionary['navigation'].accountSettings,
          children: [
            {
              label: dictionary['navigation'].account
            },
            {
              label: dictionary['navigation'].security
            },
            {
              label: dictionary['navigation'].billingPlans
            },
            {
              label: dictionary['navigation'].notifications
            },

            {
              label: dictionary['navigation'].connections
            }
          ]
        },
        {
          label: dictionary['navigation'].faq
        },
        {
          label: dictionary['navigation'].pricing
        },
        {
          label: dictionary['navigation'].miscellaneous,
          children: [
            {
              label: dictionary['navigation'].comingSoon
            },
            {
              label: dictionary['navigation'].underMaintenance
            },
            {
              label: dictionary['navigation'].pageNotFound404
            },
            {
              label: dictionary['navigation'].notAuthorized401
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
                  label: dictionary['navigation'].registerV1
                },
                {
                  label: dictionary['navigation'].registerV2
                },
                {
                  label: dictionary['navigation'].registerMultiSteps
                }
              ]
            },
            {
              label: dictionary['navigation'].verifyEmail,
              children: [
                {
                  label: dictionary['navigation'].verifyEmailV1
                },
                {
                  label: dictionary['navigation'].verifyEmailV2
                }
              ]
            },
            {
              label: dictionary['navigation'].forgotPassword,
              children: [
                {
                  label: dictionary['navigation'].forgotPasswordV1
                },
                {
                  label: dictionary['navigation'].forgotPasswordV2
                }
              ]
            },
            {
              label: dictionary['navigation'].resetPassword,
              children: [
                {
                  label: dictionary['navigation'].resetPasswordV1
                },
                {
                  label: dictionary['navigation'].resetPasswordV2
                }
              ]
            },
            {
              label: dictionary['navigation'].twoSteps,
              children: [
                {
                  label: dictionary['navigation'].twoStepsV1
                },
                {
                  label: dictionary['navigation'].twoStepsV2
                }
              ]
            }
          ]
        },
        {
          label: dictionary['navigation'].wizardExamples,
          children: [
            {
              label: dictionary['navigation'].checkout
            },
            {
              label: dictionary['navigation'].propertyListing
            },
            {
              label: dictionary['navigation'].createDeal
            }
          ]
        },
        {
          label: dictionary['navigation'].dialogExamples
        }
      ]
    },
    {
      label: dictionary['navigation'].forms,
      children: [
        {
          label: dictionary['navigation'].formLayouts
        },
        {
          label: dictionary['navigation'].formValidation
        },
        {
          label: dictionary['navigation'].formWizard
        }
      ]
    },
    {
      label: dictionary['navigation'].charts,
      children: [
        {
          label: dictionary['navigation'].apex
        },
        {
          label: dictionary['navigation'].recharts
        },
        {
          label: dictionary['navigation'].chartJS
        }
      ]
    },
    {
      label: dictionary['navigation'].others,
      children: [
        {
          label: dictionary['navigation'].accessControl
        },
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
        },
        {
          label: dictionary['navigation'].raiseSupport,
          suffix: <LinkExternalIcon fontSize='1.125rem' />
        },
        {
          label: dictionary['navigation'].documentation,
          suffix: <LinkExternalIcon fontSize='1.125rem' />
        }
      ]
    }
  ]
}

export default HorizontalMenuData
