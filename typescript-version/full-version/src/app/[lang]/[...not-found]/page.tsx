// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import Providers from '@components/Providers'
import NotFound from '@views/NotFound'

// Util Imports
import { getDirection } from '@/utils/get-direction'

const NotFoundPage = ({ params }: { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)

  return (
    <Providers direction={direction}>
      <NotFound />
    </Providers>
  )
}

export default NotFoundPage
