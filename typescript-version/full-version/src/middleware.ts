// Next Imports
import { NextResponse } from 'next/server'

// Third-party Imports
import type { NextRequestWithAuth } from 'next-auth/middleware'
import { withAuth } from 'next-auth/middleware'

// This function can be marked `async` if using `await` inside
export default withAuth(
  async function middleware(request: NextRequestWithAuth) {
    // If the user is logged in, `token` will be an object containing the user's details
    const token = await request.nextauth.token

    // Check if the user is logged in
    const isUserLoggedIn = !!token

    // Root route
    const rootRoute = '/'

    // Guest routes (Routes that can be accessed by guest users who are not logged in)
    const guestRoutes = ['/login', '/register', '/forgot-password', '/reset-password']

    // Shared routes (Routes that can be accessed by both guest and logged in users)
    const sharedRoutes = ['shared-route']

    // Private routes (All routes except guest and shared routes that can only be accessed by logged in users)
    const privateRoute = ![...guestRoutes, ...sharedRoutes].includes(request.nextUrl.pathname)

    // If the user is not logged in and is trying to access a private route, redirect to the login page
    if (!isUserLoggedIn && privateRoute) {
      return NextResponse.redirect(
        new URL(`/login?redirectTo=${encodeURIComponent(request.nextUrl.pathname)}`, request.url)
      )
    }

    // If the user is logged in and is trying to access a guest route, redirect to the root page
    if (isUserLoggedIn && rootRoute !== request.nextUrl.pathname && guestRoutes.includes(request.nextUrl.pathname)) {
      return NextResponse.redirect(new URL('/', request.url))
    }

    // Access granted, continue to the page
    return NextResponse.next()
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
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}
