// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import RegisterMultiSteps from '@views/pages/auth/register-multi-steps'

// Util Imports
import { getDirection } from '@/utils/get-direction'

const RegisterMultiStepsPage = ({ params }: { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)

  return <RegisterMultiSteps direction={direction} />
}

export default RegisterMultiStepsPage
