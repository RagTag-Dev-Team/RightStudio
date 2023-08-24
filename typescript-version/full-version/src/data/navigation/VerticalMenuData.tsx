// Third-party Imports
import { useTranslation } from 'react-i18next'

// Type Imports
import type { VerticalMenuDataType } from '@/types/menuTypes'

// Icon Imports
import LinkExternalIcon from '@layouts/svg/LinkExternal'

const VerticalMenuData = (): VerticalMenuDataType[] => {
  // Hooks
  const { t } = useTranslation()

  return [
    // This is how you will normally render submenu
    {
      label: t('navigation.dashboards'),
      children: [
        // This is how you will normally render menu item
        {
          label: t('navigation.analytics')
        },
        {
          label: t('navigation.eCommerce')
        }
      ]
    },
    {
      label: 'About',
      href: '/about'
    },

    // This is how you will normally render menu section
    {
      label: t('navigation.appsPages'),
      isSection: true,
      children: [
        {
          label: t('navigation.email'),
          href: '/email'
        },
        {
          label: t('navigation.chat'),
          href: '/chat'
        },
        {
          label: t('navigation.calendar')
        },
        {
          label: t('navigation.invoice'),
          children: [
            {
              label: t('navigation.list')
            },
            {
              label: t('navigation.preview')
            },
            {
              label: t('navigation.edit')
            },
            {
              label: t('navigation.add')
            }
          ]
        },
        {
          label: t('navigation.user'),
          children: [
            {
              label: t('navigation.list'),
              href: '/user-list'
            },
            {
              label: t('navigation.view'),
              children: [
                {
                  label: t('navigation.account'),
                  href: '/user-details'
                },
                {
                  label: t('navigation.security')
                },
                {
                  label: t('navigation.billingPlans')
                },
                {
                  label: t('navigation.notifications')
                },
                {
                  label: t('navigation.connections')
                }
              ]
            }
          ]
        },
        {
          label: t('navigation.rolesPermissions'),
          children: [
            {
              label: t('navigation.roles')
            },
            {
              label: t('navigation.permissions')
            }
          ]
        },
        {
          label: t('navigation.pages'),
          children: [
            {
              label: t('navigation.userProfile'),
              children: [
                {
                  label: t('navigation.profile')
                },
                {
                  label: t('navigation.teams')
                },
                {
                  label: t('navigation.projects')
                },
                {
                  label: t('navigation.connections')
                }
              ]
            },
            {
              label: t('navigation.accountSettings'),
              children: [
                {
                  label: t('navigation.account')
                },
                {
                  label: t('navigation.security')
                },
                {
                  label: t('navigation.billingPlans')
                },
                {
                  label: t('navigation.notifications')
                },

                {
                  label: t('navigation.connections')
                }
              ]
            },
            {
              label: t('navigation.faq')
            },
            {
              label: t('navigation.pricing')
            },
            {
              label: t('navigation.miscellaneous'),
              children: [
                {
                  label: t('navigation.comingSoon')
                },
                {
                  label: t('navigation.underMaintenance')
                },
                {
                  label: t('navigation.pageNotFound404')
                },
                {
                  label: t('navigation.notAuthorized401')
                }
              ]
            }
          ]
        },
        {
          label: t('navigation.authPages'),
          children: [
            {
              label: t('navigation.login'),
              children: [
                {
                  label: t('navigation.loginV1'),
                  href: '/pages/auth/login-v1'
                },
                {
                  label: t('navigation.loginV2'),
                  href: '/pages/auth/login-v2'
                }
              ]
            },
            {
              label: t('navigation.register'),
              children: [
                {
                  label: t('navigation.registerV1')
                },
                {
                  label: t('navigation.registerV2')
                },
                {
                  label: t('navigation.registerMultiSteps')
                }
              ]
            },
            {
              label: t('navigation.verifyEmail'),
              children: [
                {
                  label: t('navigation.verifyEmailV1')
                },
                {
                  label: t('navigation.verifyEmailV2')
                }
              ]
            },
            {
              label: t('navigation.forgotPassword'),
              children: [
                {
                  label: t('navigation.forgotPasswordV1')
                },
                {
                  label: t('navigation.forgotPasswordV2')
                }
              ]
            },
            {
              label: t('navigation.resetPassword'),
              children: [
                {
                  label: t('navigation.resetPasswordV1')
                },
                {
                  label: t('navigation.resetPasswordV2')
                }
              ]
            },
            {
              label: t('navigation.twoSteps'),
              children: [
                {
                  label: t('navigation.twoStepsV1')
                },
                {
                  label: t('navigation.twoStepsV2')
                }
              ]
            }
          ]
        },
        {
          label: t('navigation.wizardExamples'),
          children: [
            {
              label: t('navigation.checkout')
            },
            {
              label: t('navigation.propertyListing')
            },
            {
              label: t('navigation.createDeal')
            }
          ]
        },
        {
          label: t('navigation.dialogExamples')
        }
      ]
    },
    {
      label: t('navigation.userInterface'),
      isSection: true,
      children: [
        {
          label: t('navigation.typography')
        },
        {
          label: t('navigation.icons')
        },
        {
          label: t('navigation.cards'),
          children: [
            {
              label: t('navigation.basic')
            },
            {
              label: t('navigation.actions')
            }
          ]
        }
      ]
    },
    {
      label: t('navigation.forms'),
      isSection: true,
      children: [
        {
          label: t('navigation.formLayouts')
        },
        {
          label: t('navigation.formValidation')
        },
        {
          label: t('navigation.formWizard')
        }
      ]
    },
    {
      label: t('navigation.chartsMisc'),
      isSection: true,
      children: [
        {
          label: t('navigation.charts'),
          children: [
            {
              label: t('navigation.apex')
            },
            {
              label: t('navigation.recharts')
            },
            {
              label: t('navigation.chartJS')
            }
          ]
        },
        {
          label: t('navigation.accessControl')
        },
        {
          label: t('navigation.others'),
          children: [
            {
              label: t('navigation.menuLevels'),
              children: [
                {
                  label: t('navigation.menuLevel2.1')
                },
                {
                  label: t('navigation.menuLevel2.2'),
                  children: [
                    {
                      label: t('navigation.menuLevel3.1')
                    },
                    {
                      label: t('navigation.menuLevel3.2')
                    }
                  ]
                }
              ]
            },
            {
              label: t('navigation.disabledMenu'),
              disabled: true
            },
            {
              label: t('navigation.raiseSupport'),
              suffix: <LinkExternalIcon fontSize='1.125rem' />
            },
            {
              label: t('navigation.documentation'),
              suffix: <LinkExternalIcon fontSize='1.125rem' />
            }
          ]
        }
      ]
    }
  ]
}

export default VerticalMenuData
