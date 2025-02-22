import 'next-auth'

declare module 'next-auth' {
  interface User {
    wallet_address?: string
  }

  interface Session {
    user?: User
  }
}
