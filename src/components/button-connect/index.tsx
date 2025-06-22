import { useState } from 'react'

import { useParams, useRouter, useSearchParams } from 'next/navigation'

import { signIn, signOut, useSession } from 'next-auth/react'

import { darkTheme, ConnectButton } from 'thirdweb/react'

import { client } from '@/libs/thirdwebclient'

import { generatePayload, login, logout } from './actions/auth'

// Type Imports
import type { Locale } from '@/configs/i18n'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Context Imports
import { useAuthLoading } from '@/contexts/authLoadingContext'

type ErrorType = {
  message: string[]
}

const THIRDWEB_CLIENT = client

const ButtonConnect = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { lang: locale } = useParams()
  const { setAuthLoading, setAuthError } = useAuthLoading()
  const { data: session, status, update } = useSession()

  const [errorState, setErrorState] = useState<ErrorType | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Update both local and global loading state
  const updateLoadingState = (loading: boolean) => {
    setIsLoading(loading)
    setAuthLoading(loading)
  }

  // Update both local and global error state
  const updateErrorState = (error: ErrorType | null) => {
    setErrorState(error)
    setAuthError(error)
  }



  return (
    <ConnectButton
      client={THIRDWEB_CLIENT}
      autoConnect={true}
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
          console.log('ButtonConnect - isLoggedIn called with address:', address)
          console.log('ButtonConnect - Current session status:', status)
          console.log('ButtonConnect - Current session data:', session)

          // If session is still loading, wait a bit and check again
          if (status === 'loading') {
            console.log('ButtonConnect - Session still loading, waiting...')

            // Wait a short time for session to load
            await new Promise(resolve => setTimeout(resolve, 100))

            return false
          }

          // If not authenticated, return false immediately
          if (status !== 'authenticated') {
            console.log('ButtonConnect - Session not authenticated, status:', status)

            return false
          }

          // If authenticated but session might still be loading, wait a bit
          if (status === 'authenticated' && !session?.user?.wallet_address) {
            console.log('ButtonConnect - Session authenticated but wallet address not loaded yet, waiting...')
            await new Promise(resolve => setTimeout(resolve, 200))
          }

          // Check if we have a NextAuth session and if the wallet address matches
          if (session?.user?.wallet_address) {
            const sessionWallet = session.user.wallet_address.toLowerCase()
            const addressWallet = address.toLowerCase()
            const isLoggedIn = sessionWallet === addressWallet

            console.log('ButtonConnect - Session found, checking wallet match:', {
              sessionWallet,
              addressWallet,
              isMatch: isLoggedIn
            })

            return isLoggedIn
          }

          console.log('ButtonConnect - No session found or no wallet address in session')

          return false
        },
        doLogin: async params => {
          updateLoadingState(true)

          try {
            await login(params)

            console.log('Next Auth Sign In')

            const res = await signIn('credentials', {
              email: `${params.payload.address}@wallet.local`,
              password: 'wallet-auth',
              wallet_address: params.payload.address,
              redirect: false
            })

            if (res && res.ok && res.error === null) {
              // Force session update after successful login
              await update()

              const redirectURL = searchParams.get('redirectTo') ?? '/'

              router.replace(getLocalizedUrl(redirectURL, locale as Locale))
            } else {
              if (res?.error) {
                const error = JSON.parse(res.error)

                updateErrorState(error)
              }

              updateLoadingState(false)
            }
          } catch (error) {
            updateLoadingState(false)
            updateErrorState({ message: ['An unexpected error occurred'] })
          }
        },
        getLoginPayload: async ({ address }) => generatePayload({ address, chainId: Number(process.env.CHAIN_ID) }),
        doLogout: async () => {
          console.log('logging out!')
          await logout()

          // Get current pathname for redirect
          const currentPath = window.location.pathname
          const baseUrl = window.location.origin
          const logoutUrl = `${baseUrl}/login?redirectTo=${encodeURIComponent(currentPath)}`

          await signOut({ callbackUrl: logoutUrl })
        }
      }}
    />
  )
}

export default ButtonConnect
