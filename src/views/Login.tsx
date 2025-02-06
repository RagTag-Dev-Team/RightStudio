'use client'

// React Imports
import { useState } from 'react'

// Next Imports
// import Link from 'next/link'
import { useParams, useRouter, useSearchParams } from 'next/navigation'

// MUI Imports
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'

import Alert from '@mui/material/Alert'

// Third-party Imports
import { signIn } from 'next-auth/react'

import classnames from 'classnames'

import { darkTheme, ConnectButton } from 'thirdweb/react'

import { client } from '@/libs/thirdwebclient'
import { generatePayload, isLoggedIn, logout } from '@/libs/auth'

// Type Imports
import type { SystemMode } from '@core/types'
import type { Locale } from '@/configs/i18n'

// Component Imports

import Logo from '@components/layout/shared/Logo'

// Hook Imports
import { useImageVariant } from '@core/hooks/useImageVariant'
import { useSettings } from '@core/hooks/useSettings'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Styled Custom Components
const LoginIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  blockSize: 'auto',
  maxBlockSize: 680,
  maxInlineSize: '100%',
  margin: theme.spacing(12),
  [theme.breakpoints.down(1536)]: {
    maxBlockSize: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxBlockSize: 450
  }
}))

const MaskImg = styled('img')({
  blockSize: 'auto',
  maxBlockSize: 355,
  inlineSize: '100%',
  position: 'absolute',
  insetBlockEnd: 0,
  zIndex: -1
})

type ErrorType = {
  message: string[]
}

const THIRDWEB_CLIENT = client

const Login = ({ mode }: { mode: SystemMode }) => {
  // States
  const [errorState, setErrorState] = useState<ErrorType | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Vars
  const darkImg = '/images/pages/auth-mask-dark.png'
  const lightImg = '/images/pages/auth-mask-light.png'
  const darkIllustration = '/images/illustrations/auth/v2-login-dark.png'
  const lightIllustration = '/images/illustrations/auth/v2-login-light.png'
  const borderedDarkIllustration = '/images/illustrations/auth/v2-login-dark-border.png'
  const borderedLightIllustration = '/images/illustrations/auth/v2-login-light-border.png'

  // Hooks
  const router = useRouter()
  const searchParams = useSearchParams()
  const { lang: locale } = useParams()
  const { settings } = useSettings()
  const theme = useTheme()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))
  const authBackground = useImageVariant(mode, lightImg, darkImg)

  const characterIllustration = useImageVariant(
    mode,
    lightIllustration,
    darkIllustration,
    borderedLightIllustration,
    borderedDarkIllustration
  )

  return (
    <div className='flex bs-full justify-center'>
      {isLoading && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
          <CircularProgress />
        </div>
      )}
      <div
        className={classnames(
          'flex bs-full items-center justify-center flex-1 min-bs-[100dvh] relative p-6 max-md:hidden',
          {
            'border-ie': settings.skin === 'bordered'
          }
        )}
      >
        <LoginIllustration src={characterIllustration} alt='character-illustration' />
        {!hidden && <MaskImg alt='mask' src={authBackground} />}
      </div>
      <div className='flex justify-center items-center bs-full bg-backgroundPaper !min-is-full p-6 md:!min-is-[unset] md:p-12 md:is-[480px]'>
        <div className='absolute block-start-5 sm:block-start-[33px] inline-start-6 sm:inline-start-[38px]'>
          <Logo />
        </div>
        <div className='flex flex-col gap-6 is-full sm:is-auto md:is-full sm:max-is-[400px] md:max-is-[unset] mbs-8 sm:mbs-11 md:mbs-0 text-center'>
          <div className='flex flex-col gap-1'>
            <Typography variant='h4'>{`Welcome to RightStudio! `}</Typography>
            <Typography>Your journey starts here.</Typography>
          </div>

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
                console.log('Checking login status for address:', address)

                return await isLoggedIn()
              },
              doLogin: async params => {
                setIsLoading(true)

                try {
                  const res = await signIn('credentials', {
                    wallet_address: params.payload.address,
                    redirect: false
                  })

                  if (res && res.ok && res.error === null) {
                    const redirectURL = searchParams.get('redirectTo') ?? '/'

                    router.replace(getLocalizedUrl(redirectURL, locale as Locale))
                  } else {
                    if (res?.error) {
                      const error = JSON.parse(res.error)

                      setErrorState(error)
                    }

                    setIsLoading(false)
                  }
                } catch (error) {
                  setIsLoading(false)
                  setErrorState({ message: ['An unexpected error occurred'] })
                }
              },
              getLoginPayload: async ({ address }) => generatePayload({ address }),
              doLogout: async () => {
                console.log('logging out!')
                await logout()
              }
            }}
          />
          {errorState && errorState.message && (
            <Alert icon={false} className='bg-[var(--mui-palette-primary-lightOpacity)] text-center'>
              <Typography variant='body2' color='error'>
                <span className='font-medium'>{errorState.message.join(' ')}</span>
              </Typography>
            </Alert>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
