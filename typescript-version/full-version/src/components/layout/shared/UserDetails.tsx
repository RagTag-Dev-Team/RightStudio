'use client'

// Third-party Imports
import { signOut, useSession } from 'next-auth/react'

const UserDetails = () => {
  // Hooks
  const { data: session } = useSession()

  const handleUserLogout = async () => {
    try {
      // Sign out from the app
      await signOut({ callbackUrl: process.env.NEXT_PUBLIC_APP_URL })
    } catch (error) {
      console.error(error)

      // Show above error in a toast like following
      // toastService.error((err as Error).message)
    }
  }

  if (!session) return null

  return (
    <div>
      <p>Signed in as {session?.user?.name ?? ''}</p>
      <button onClick={handleUserLogout}>Sign out</button>
    </div>
  )
}

export default UserDetails
