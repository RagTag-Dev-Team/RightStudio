// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import CheckoutWizard from '@views/pages/wizard-examples/checkout'

// Util Imports
import { getDirection } from '@/utils/get-direction'

const CheckoutPage = ({ params }: { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)

  return <CheckoutWizard direction={direction} />
}

export default CheckoutPage
