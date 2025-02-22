// MUI Imports
import Button from '@mui/material/Button'

// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Type Imports
import type { ChildrenType } from '@core/types'
import type { Locale } from '@configs/i18n'

// Context Imports
import { IntersectionProvider } from '@/contexts/intersectionContext'

import GuestOnlyRoute from '@/hocs/GuestOnlyRoute'

// Component Imports
import Providers from '@components/Providers'
import BlankLayout from '@layouts/BlankLayout'
import FrontLayout from '@components/layout/front-pages'
import ScrollToTop from '@core/components/scroll-to-top'

// Util Imports
import { getSystemMode } from '@core/utils/serverHelpers'

// Style Imports
import '@/app/globals.css'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

export const metadata = {
  title: 'RightStudio.media',
  description:
    ' With RightStudio, Media rights are immutable. We are the first to offer a platform that allows you to manage your media rights in a way that is both secure and efficient.'
}

const Layout = ({ children, params }: ChildrenType & { params: { lang: Locale } }) => {
  // Vars
  const systemMode = getSystemMode()

  return (
    <Providers direction='ltr'>
      <GuestOnlyRoute lang={params.lang}>
        <BlankLayout systemMode={systemMode}>
          <IntersectionProvider>
            <FrontLayout>
              {children}

              <ScrollToTop className='mui-fixed'>
                <Button
                  variant='contained'
                  className='is-10 bs-10 rounded-full p-0 min-is-0 flex items-center justify-center'
                >
                  <i className='tabler-arrow-up' />
                </Button>
              </ScrollToTop>
            </FrontLayout>
          </IntersectionProvider>
        </BlankLayout>
      </GuestOnlyRoute>
    </Providers>
  )
}

export default Layout
