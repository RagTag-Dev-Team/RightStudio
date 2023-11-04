// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import CreateDeal from '@views/pages/wizard-examples/create-deal'

// Util Imports
import { getDirection } from '@/utils/get-direction'

const CreateDealPage = ({ params }: { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)

  return <CreateDeal direction={direction} />
}

export default CreateDealPage
