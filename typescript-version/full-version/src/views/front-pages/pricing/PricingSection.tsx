// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { PricingPlanType } from '@/types/pages/pricingTypes'

// Component Imports
import Pricing from '@components/pricing'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

const PricingSection = ({ data }: { data: PricingPlanType[] }) => {
  return (
    <section className={classnames('plb-[100px]', frontCommonStyles.layoutSpacing)}>
      <Pricing data={data} />
    </section>
  )
}

export default PricingSection
