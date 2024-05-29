'use client'

// Type Imports
import type { PricingPlanType } from '@/types/pages/pricingTypes'

// Component Imports
import Pricing from '@components/pricing'

const PricingSection = ({ data }: { data: PricingPlanType[] }) => {
  return (
    <div className='plb-[100px] pli-6 md:max-is-[900px] lg:max-is-[1200px] 2xl:max-is-[1440px] mli-auto'>
      <Pricing data={data} />
    </div>
  )
}

export default PricingSection
