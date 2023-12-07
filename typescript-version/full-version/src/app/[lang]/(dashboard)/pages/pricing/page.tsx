// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import Pricing from '@views/pages/pricing'

// Util Imports
import { getDirection } from '@/utils/get-direction'

const getPricingData = async () => {
  const res = await fetch(`${process.env.API_URL}/pages/pricing`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const PricePage = async ({ params }: { params: { lang: Locale } }) => {
  const data = await getPricingData()

  const direction = getDirection(params.lang)

  return <Pricing data={data} direction={direction} />
}

export default PricePage
