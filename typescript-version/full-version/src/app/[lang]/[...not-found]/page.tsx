// Type Imports
import type { Locale } from '@configs/i18n'

// Component Imports
import Providers from '@components/Providers'
import NotFound from '@views/NotFound'

// Config Imports
import { i18n } from '@configs/i18n'

const NotFoundPage = ({ params }: { params: { lang: Locale } }) => {
  const direction = i18n.langDirection[params.lang]

  return (
    <Providers direction={direction}>
      <NotFound />
    </Providers>
  )
}

export default NotFoundPage
