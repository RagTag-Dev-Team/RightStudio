// Type Imports
import type { PricingPlanType } from '@/types/pages/pricingTypes'

export const db: PricingPlanType[] = [
  {
    title: 'Basic',
    monthlyPrice: 0,
    currentPlan: true,
    popularPlan: false,
    subtitle: 'A simple start for everyone',
    imgSrc: '/images/pages/pricing-basic.png',
    yearlyPlan: {
      monthly: 0,
      annually: 0
    },
    planBenefits: [
      '100 responses a month',
      'Unlimited forms and surveys',
      'Unlimited fields',
      'Basic form creation tools',
      'Up to 2 subdomains'
    ]
  },
  {
    monthlyPrice: 49,
    title: 'Standard',
    popularPlan: true,
    currentPlan: false,
    subtitle: 'For small to medium businesses',
    imgSrc: '/images/pages/pricing-standard.png',
    yearlyPlan: {
      monthly: 40,
      annually: 480
    },
    planBenefits: [
      'Unlimited responses',
      'Unlimited forms and surveys',
      'Instagram profile page',
      'Google Docs integration',
      'Custom “Thank you” page'
    ]
  },
  {
    monthlyPrice: 99,
    popularPlan: false,
    currentPlan: false,
    title: 'Enterprise',
    subtitle: 'Solution for big organizations',
    imgSrc: '/images/pages/pricing-enterprise.png',
    yearlyPlan: {
      monthly: 80,
      annually: 960
    },
    planBenefits: [
      'PayPal payments',
      'Logic Jumps',
      'File upload with 5GB storage',
      'Custom domain support',
      'Stripe integration'
    ]
  }
]
