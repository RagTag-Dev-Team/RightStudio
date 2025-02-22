// MUI Imports
import { Suspense } from 'react'

// import { usePathname } from 'next/navigation'

import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'

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

//import VerticalFooter from '@components/layout/vertical/Footer'
import HorizontalFooter from '@components/layout/horizontal/Footer'

// import Customizer from '@core/components/customizer'
import ScrollToTop from '@core/components/scroll-to-top'
import AuthGuard from '@/hocs/AuthGuard'

// Config Imports
import { i18n } from '@configs/i18n'

// Util Imports
import { getDictionary } from '@/utils/getDictionary'
import { getMode, getSystemMode } from '@core/utils/serverHelpers'

// Router Import

// React Import

// Loading component for navigation
const NavigationLoader = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-background/50 z-50'>
      <CircularProgress />
    </div>
  )
}

const Layout = async ({ children, params }: ChildrenType & { params: { lang: Locale } }) => {
  // Vars
  const direction = i18n.langDirection[params.lang]
  const dictionary = await getDictionary(params.lang)
  const mode = getMode()
  const systemMode = getSystemMode()

  return (
    <Providers direction={direction}>
      <AuthGuard locale={params.lang}>
        <LayoutWrapper
          systemMode={systemMode}
          verticalLayout={
            <VerticalLayout
              navigation={<Navigation dictionary={dictionary} mode={mode} systemMode={systemMode} />}
              navbar={<Navbar />}
              footer={/* <VerticalFooter /> */ null}
            >
              <Suspense fallback={<NavigationLoader />}>{children}</Suspense>
            </VerticalLayout>
          }
          horizontalLayout={
            <HorizontalLayout header={<Header dictionary={dictionary} />} footer={<HorizontalFooter />}>
              <Suspense fallback={<NavigationLoader />}>{children}</Suspense>
            </HorizontalLayout>
          }
        />
        <ScrollToTop className='mui-fixed'>
          <Button
            variant='contained'
            className='is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center'
          >
            <i className='tabler-arrow-up' />
          </Button>
        </ScrollToTop>
        {/* Hide Customizer on production

        <Customizer dir={direction} />
        */}
      </AuthGuard>
    </Providers>
  )
}

export default Layout
