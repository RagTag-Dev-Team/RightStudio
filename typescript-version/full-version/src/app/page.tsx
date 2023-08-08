// Next Imports
import { redirect } from 'next/navigation'

// Third-party Imports
import { getServerSession } from 'next-auth'

// Lib Imports
import { authOptions } from '../lib/auth'

export default async function Page() {
  // Default redirect URL
  let redirectURL = '/login'

  // Get the session from the server
  const session = await getServerSession(authOptions)

  // If session exists, get the redirect URL
  if (session) {
    redirectURL = '/about'
  }

  // Redirect user to respective home page
  redirect(redirectURL)

  // Return Loader
  return 'Loading...'
}
