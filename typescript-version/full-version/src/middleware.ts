// Next Imports
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Third-party Imports
import Negotiator from 'negotiator'
import { withAuth } from 'next-auth/middleware'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import type { NextRequestWithAuth } from 'next-auth/middleware'

// Config Imports
import { i18n } from '@configs/i18n'

const getLocale = (request: NextRequest): string | undefined => {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {}

  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales

  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales)

  const locale = matchLocale(languages, locales, i18n.defaultLocale)

  return locale
}

export default withAuth(
  async function middleware(request: NextRequestWithAuth) {
    let pathname = request.nextUrl.pathname

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
      locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // Get locale from request headers
    const locale = getLocale(request)

    // Update pathname if locale is missing
    if (pathnameIsMissingLocale) {
      // e.g. incoming request is /products
      // The new URL is now /en-US/products
      pathname = `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`
    }

    // If the user is logged in, `token` will be an object containing the user's details
    const token = request.nextauth.token

    // Check if the user is logged in
    const isUserLoggedIn = !!token

    // Root route
    const rootRoute = `/${locale}/`

    // Guest routes (Routes that can be accessed by guest users who are not logged in)
    const guestRoutes = ['login', 'register', 'forgot-password']

    // Shared routes (Routes that can be accessed by both guest and logged in users)
    const sharedRoutes = ['shared-route']

    // Private routes (All routes except guest and shared routes that can only be accessed by logged in users)
    const privateRoute = ![...guestRoutes, ...sharedRoutes].some(route => pathname.endsWith(route))

    // If the user is not logged in and is trying to access a private route, redirect to the login page
    if (!isUserLoggedIn && privateRoute) {
      return NextResponse.redirect(new URL(`${rootRoute}login?redirectTo=${pathname}`, request.url))
    }

    // If the user is logged in and is trying to access a guest route, redirect to the root page
    if (isUserLoggedIn && rootRoute !== pathname && guestRoutes.some(route => pathname.endsWith(route))) {
      return NextResponse.redirect(new URL(rootRoute, request.url))
    }

    // Access granted, continue to the page
    if (!pathnameIsMissingLocale) {
      // If the pathname already contains a locale, continue to the page
      return NextResponse.next()
    } else {
      // Redirect to the same path with the locale added
      return NextResponse.redirect(new URL(pathname, request.url))
    }
  },
  {
    callbacks: {
      authorized: () => {
        // This is a work-around for handling redirect on auth pages.
        // We return true here so that the middleware function above
        // is always called.
        return true
      }
    }
  }
)

// Matcher Config
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - all items inside the public folder
     *    - images (public images)
     *    - next.svg (Next.js logo)
     *    - vercel.svg (Vercel logo)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.+?/hook-examples|.+?/menu-examples|images|next.svg|vercel.svg).*)'
  ]
}
