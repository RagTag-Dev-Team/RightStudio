// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import ResetPasswordV1 from '@views/pages/auth/ResetPasswordV1'

// Util Imports
import { getDirection } from '@/utils/get-direction'

const ResetPasswordV1Page = ({ params }: { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)

  return (
    <div className='flex h-full justify-center items-center'>
      <ResetPasswordV1 direction={direction} />
    </div>
  )
}

export default ResetPasswordV1Page
