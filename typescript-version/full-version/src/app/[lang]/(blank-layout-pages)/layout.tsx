// Type Imports
import type { ChildrenType } from '@core/types'
import type { Locale } from '@configs/i18n'

// Component Imports
import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'

// Util Imports
import { getDirection } from '@/utils/get-direction'

type Props = ChildrenType & {
  params: { lang: Locale }
}

const Layout = ({ children, params }: Props) => {
  const direction = getDirection(params.lang)

  return (
    <Providers direction={direction}>
      <BlankLayout>{children}</BlankLayout>
    </Providers>
  )
}

export default Layout
