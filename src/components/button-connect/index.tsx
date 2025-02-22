import { useState } from 'react'

import Link from 'next/link'
import { useParams, useRouter, useSearchParams } from 'next/navigation'

import { signIn, getSession } from 'next-auth/react'

import { darkTheme, ConnectButton } from 'thirdweb/react'

import classnames from 'classnames'

import { client } from '@/libs/thirdwebclient'

import { generatePayload, isLoggedIn, logout } from '@/libs/auth'

// Third-party Imports

// Style Imports
import styles from './styles.module.css'

const THIRDWEB_CLIENT = client

const ButtonConnect = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [errorState, setErrorState] = useState<ErrorType | null>(null)

  return (
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
          const loggedIn = await isLoggedIn()

          console.log('loggedIn', loggedIn)

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
  )
}

export default ButtonConnect
