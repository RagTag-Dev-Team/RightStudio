// Next Imports
import { cookies } from 'next/headers'

// Type Imports
import type { ChildrenType } from '@core/types'
import type { Locale } from '@configs/i18n'

// Layout Imports
import LayoutWrapper from '@layouts/LayoutWrapper'
import VerticalLayout from '@layouts/VerticalLayout'
import HorizontalLayout from '@layouts/HorizontalLayout'

// Component Imports
import Providers from '@components/Providers'
import Navigation from '@components/layout/vertical/Navigation'
import Header from '@components/layout/horizontal/Header'
import Navbar from '@components/layout/vertical/Navbar'
import VerticalFooter from '@components/layout/vertical/Footer'
import HorizontalFooter from '@components/layout/horizontal/Footer'
import Customizer from '@core/components/customizer'

// Util Imports
import { getDirection } from '@/utils/get-direction'
import { getDictionary } from '@/utils/get-dictionary'

const Layout = async ({ children, params }: ChildrenType & { params: { lang: Locale } }) => {
  const direction = getDirection(params.lang)
  const dictionary = await getDictionary(params.lang)
  const cookieStore = cookies()

  const settingsCookie = JSON.parse(cookieStore.get('settings')?.value || '{}')

  return (
    <Providers settingsCookie={settingsCookie}>
      <LayoutWrapper
        settingsCookie={settingsCookie}
        verticalLayout={
          <VerticalLayout
            navigation={<Navigation dictionary={dictionary} />}
            navbar={<Navbar />}
            footer={<VerticalFooter />}
          >
            {children}
          </VerticalLayout>
        }
        horizontalLayout={
          <HorizontalLayout header={<Header dictionary={dictionary} />} footer={<HorizontalFooter />}>
            {children}
          </HorizontalLayout>
        }
      />
      <Customizer dir={direction} />
    </Providers>
  )
}

export default Layout
