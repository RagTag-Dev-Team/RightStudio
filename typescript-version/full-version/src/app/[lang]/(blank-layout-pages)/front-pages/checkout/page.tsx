// Component Imports
import Checkout from '@/app/[lang]/(dashboard)/(private)/pages/wizard-examples/checkout/page'

// Styles Imports
import frontCommonStyles from '@views/front-pages/styles.module.css'

const CheckoutPage = () => {
  return (
    <section className={frontCommonStyles.layoutSpacing}>
      <Checkout />
    </section>
  )
}

export default CheckoutPage
