'use client'

// Next Imports
import { useParams, useRouter } from 'next/navigation'

// Third-party Imports
import { signOut, useSession } from 'next-auth/react'

// Type Imports
import type { Locale } from '@configs/i18n'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

const UserDetails = () => {
  // Hooks
  const { data: session } = useSession()
  const router = useRouter()
  const { lang: locale } = useParams()

  const handleUserLogout = async () => {
    try {
      // Sign out from the app
      await signOut({ redirect: false })

      // Redirect to login page
      router.push(getLocalizedUrl('/login', locale as Locale))
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
