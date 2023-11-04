// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import PropertyListing from '@views/pages/wizard-examples/property-listing'

// Util Imports
import { getDirection } from '@/utils/get-direction'

const PropertyListingPage = ({ params }: { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)

  return <PropertyListing direction={direction} />
}

export default PropertyListingPage
