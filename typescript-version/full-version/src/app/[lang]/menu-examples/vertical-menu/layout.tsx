// Next Imports
import { cookies } from 'next/headers'

// Type Imports
import type { ChildrenType } from '@menu-package/types'
import type { Locale } from '@configs/i18n'

// Component Imports
import Providers from '@components/Providers'

// Util Imports
import { getDirection } from '@/utils/get-direction'

const Layout = async ({ children, params }: ChildrenType & { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)
  const cookieStore = cookies()

  const settingsCookie = JSON.parse(cookieStore.get('settings')?.value || '{}')

  return (
    <Providers settingsCookie={settingsCookie} direction={direction}>
      {children}
    </Providers>
  )
}

export default Layout
