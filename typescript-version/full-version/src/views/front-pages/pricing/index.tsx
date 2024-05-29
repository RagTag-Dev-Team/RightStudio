// Component Imports
import PricingSection from '@views/front-pages/pricing/PricingSection'
import FreeTrial from './FreeTrial'
import Plans from './Plans'
import Faqs from './Faqs'

// Type Imports
import type { PricingPlanType } from '@/types/pages/pricingTypes'

const PricingWrapper = ({ data }: { data: PricingPlanType[] }) => {
  return (
    <>
      <PricingSection data={data} />
      <FreeTrial />
      <Plans />
      <Faqs />
    </>
  )
}

export default PricingWrapper
