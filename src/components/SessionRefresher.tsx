'use client'

import { useEffect, useRef } from 'react'
import { useSession } from 'next-auth/react'

const SessionRefresher = () => {
  const { data: session, status, update } = useSession()
  const hasUpdated = useRef(false)
  const hasLogged = useRef(false)

  useEffect(() => {
    // Only force session update once when component mounts and session is authenticated
    if (status === 'authenticated' && session && !hasUpdated.current) {
      console.log('SessionRefresher - Forcing session update...')
      update()
      hasUpdated.current = true
    }
  }, [status, session, update])

  // Log session state for debugging only once
  useEffect(() => {
    if (status !== 'loading' && !hasLogged.current) {
      console.log('SessionRefresher - Initial session state:', {
        status,
        hasUser: !!session?.user,
        walletAddress: session?.user?.wallet_address
      })
      hasLogged.current = true
    }
  }, [session, status])

  return null // This component doesn't render anything
}

export default SessionRefresher
