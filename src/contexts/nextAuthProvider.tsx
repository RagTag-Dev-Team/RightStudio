'use client'

// Third-party Imports
import { SessionProvider } from 'next-auth/react'
import type { SessionProviderProps } from 'next-auth/react'

export const NextAuthProvider = ({ children, ...rest }: SessionProviderProps) => {
  return (
    <SessionProvider
      {...rest}
      refetchInterval={10 * 60} // Refetch session every 10 minutes instead of 5
      refetchOnWindowFocus={false} // Disable refetch on window focus to prevent interference
    >
      {children}
    </SessionProvider>
  )
}
