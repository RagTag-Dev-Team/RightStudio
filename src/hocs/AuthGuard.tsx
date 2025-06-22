// Third-party Imports
import { getServerSession } from 'next-auth'

// Type Imports
import type { Locale } from '@configs/i18n'
import type { ChildrenType } from '@core/types'

// Component Imports
import AuthRedirect from '@/components/AuthRedirect'

// Lib Imports
import { authOptions } from '@/libs/auth'

export default async function AuthGuard({ children, locale }: ChildrenType & { locale: Locale }) {
  const session = await getServerSession(authOptions)

 

  // If session exists but user data is missing, log a warning
  if (session && !session.user?.name && !session.user?.email) {
    console.warn('AuthGuard - Session exists but user data is incomplete:', session)
  }

  return <>{session ? children : <AuthRedirect lang={locale} />}</>
}
