// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import ForgotPasswordV1 from '@views/pages/auth/ForgotPasswordV1'

// Util Imports
import { getDirection } from '@/utils/get-direction'

const ForgotPasswordV1Page = ({ params }: { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)

  return (
    <div className='flex h-full justify-center items-center'>
      <ForgotPasswordV1 direction={direction} />
    </div>
  )
}

export default ForgotPasswordV1Page
