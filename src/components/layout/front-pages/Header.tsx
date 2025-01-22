'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams, useRouter, useSearchParams } from 'next/navigation'

// MUI Imports
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import classnames from 'classnames'

import { signIn, getSession } from 'next-auth/react'

import { darkTheme, ConnectButton } from 'thirdweb/react'

import { client } from '@/libs/thirdwebclient'

import { generatePayload, isLoggedIn, logout } from '@/libs/auth'

// Type Imports
import type { SystemMode } from '@core/types'
import type { Locale } from '@/configs/i18n'

// Component Imports
import Logo from '@components/layout/shared/Logo'
import FrontMenu from './FrontMenu'

import { useSettings } from '@core/hooks/useSettings'

import { getLocalizedUrl } from '@/utils/i18n'

// Util Imports
import { frontLayoutClasses } from '@layouts/utils/layoutClasses'

// Styles Imports
import styles from './styles.module.css'

const Header = ({ mode }: { mode: Mode }) => {
  // States
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [errorState, setErrorState] = useState<ErrorType | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const { lang: locale } = useParams()
  const { settings } = useSettings()

  // Hooks
  const isBelowLgScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  // Detect window scroll
  const trigger = useScrollTrigger({
    threshold: 0,
    disableHysteresis: true
  })

  const THIRDWEB_CLIENT = client

  return (
    <header className={classnames(frontLayoutClasses.header, styles.header)}>
      <div className={classnames(frontLayoutClasses.navbar, styles.navbar, { [styles.headerScrolled]: trigger })}>
        <div className={classnames(frontLayoutClasses.navbarContent, styles.navbarContent)}>
          {isBelowLgScreen ? (
            <div className='flex items-center gap-2 sm:gap-4'>
              <IconButton onClick={() => setIsDrawerOpen(true)} className='-mis-2'>
                <i className='tabler-menu-2 text-textPrimary' />
              </IconButton>
              <Link href='/front-pages/landing-page'>
                <Logo />
              </Link>
              <FrontMenu mode={mode} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
            </div>
          ) : (
            <div className='flex items-center gap-10'>
              <Link href='/front-pages/landing-page'>
                <Logo />
              </Link>
              {/* <FrontMenu mode={mode} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} /> */}
            </div>
          )}
          <div className='flex items-center gap-2 sm:gap-4'>
            <ConnectButton
              client={THIRDWEB_CLIENT}
              theme={darkTheme({
                colors: {
                  primaryButtonBg: '#247cdb',
                  primaryButtonText: '#ffffff'
                }
              })}
              connectModal={{
                title: 'Connect to RightStudio',
                titleIcon: '/images/pages/rightstudio-icon-color.png',
                size: 'wide',
                showThirdwebBranding: false
              }}
              connectButton={{
                label: 'Get Started'
              }}
              auth={{
                isLoggedIn: async address => {
                  const session = await getSession()

                  console.log('session', session)

                  if (!session) {
                    return false
                  } else {
                    return true
                  }
                },
                doLogin: async params => {
                  console.log('logging in!')

                  const res = await signIn('credentials', {
                    wallet_address: params.payload.address,
                    redirect: false
                  })

                  if (res && res.ok && res.error === null) {
                    // Vars
                    const redirectURL = searchParams.get('redirectTo') ?? '/en/dashboards/fileLibrary'

                    console.log('redirectURL', redirectURL)
                    router.replace('/en/dashboards/fileLibrary')
                  } else {
                    if (res?.error) {
                      const error = JSON.parse(res.error)

                      setErrorState(error)
                    }
                  }
                },
                getLoginPayload: async (address: string) => {
                  return await generatePayload(address)
                },
                doLogout: async () => {
                  await logout()
                }
              }}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
