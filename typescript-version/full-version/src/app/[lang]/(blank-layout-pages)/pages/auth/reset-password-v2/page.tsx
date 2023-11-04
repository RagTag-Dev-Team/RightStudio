// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import ResetPasswordV2 from '@views/pages/auth/ResetPasswordV2'

// Util Imports
import { getDirection } from '@/utils/get-direction'

const ResetPasswordV2Page = ({ params }: { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)

  return <ResetPasswordV2 direction={direction} />
}

export default ResetPasswordV2Page
