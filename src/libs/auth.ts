// Third-party Imports
import CredentialProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'

// import { PrismaAdapter } from '@auth/prisma-adapter'
// import { PrismaClient } from '@prisma/client'

//  import { SurrealDBAdapter } from "@auth/surrealdb-adapter"

import type { NextAuthOptions } from 'next-auth'

import { jsonify } from 'surrealdb'

//import type { Adapter } from 'next-auth/adapters'
import type { VerifyLoginPayloadParams } from 'thirdweb/auth'

import { createAuth } from 'thirdweb/auth'

import { privateKeyToAccount } from 'thirdweb/wallets'

import { loginUser } from '@/app/server/user-actions'

import { client } from './thirdwebclient'

import { getDb } from '@/libs/surreal'

import { generateUsername } from '@/utils/userUtils'
import { Session } from 'inspector/promises'

const privateKey = process.env.NEXT_PUBLIC_THIRDWEB_ADMIN_KEY

// const prisma = new PrismaClient()

if (!privateKey) {
  throw new Error('Missing THIRDWEB_ADMIN_PRIVATE_KEY in .env file.')
}

const thirdwebAuth = createAuth({
  domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || '',
  adminAccount: privateKeyToAccount({ client, privateKey }),
  client: client
})

export const generatePayload = thirdwebAuth.generatePayload

export async function login(payload: VerifyLoginPayloadParams) {
  const verifiedPayload = await thirdwebAuth.verifyPayload(payload)

  if (verifiedPayload.valid) {
    const jwt = await thirdwebAuth.generateJWT({
      payload: verifiedPayload.payload
    })

    console.log('JWT' + jwt)
  }
}

export async function logout() {
  //  cookies().delete("jwt");
}

export async function isLoggedIn() {
  // const jwt = cookies().get("jwt");
  // check if jwt is in the cookies

  // const jwt = null

  return true
}

interface User {
  id: string
  name: string
  email: string
  password: string
  image: string
  wallet_address: string
  newUser: boolean
}

export const authOptions: NextAuthOptions = {
  // ** Configure one or more authentication providers
  // ** Please refer to https://next-auth.js.org/configuration/options#providers for more `providers` options
  providers: [
    CredentialProvider({
      // ** The name to display on the sign in form (e.g. 'Sign in with...')
      // ** For more details on Credentials Provider, visit https://next-auth.js.org/providers/credentials
      name: 'Credential',
      type: 'credentials',

      /*
       * As we are using our own Sign-in page, we do not need to change
       * username or password attributes manually in following credentials object.
       */
      credentials: {},
      async authorize(credentials) {
        console.log('Authorize called with credentials:', credentials)

        const { email, password, wallet_address } = credentials as {
          email: string
          password: string
          wallet_address: string
        }

        const db = await getDb()

        try {
          // For wallet-based authentication, prioritize wallet_address
          // If email ends with @wallet.local, it's a wallet auth and we should use wallet_address
          const isWalletAuth = email.endsWith('@wallet.local')

          if (isWalletAuth && wallet_address) {
            // For wallet authentication, use a dummy email/password combination
            const userRecord = await loginUser(email, password, wallet_address)

            console.log('First Query for User ', userRecord)

            if (userRecord) {
              // If it's a new user, create them in the database first
              if ('newUser' in userRecord && userRecord.newUser) {
                console.log('Creating User')

                if (!db) {
                  console.error('Database not initialized')

                  return null
                }

                try {
                  // Create the user with required fields
                  const userData = {
                    name: generateUsername(), // Generate random name
                    email: `${wallet_address.slice(0, 6)}@wallet.local`, // Use truncated wallet address
                    password,
                    wallet_address: wallet_address || '',
                    image: '/images/avatars/1.png', // Default avatar
                    newUser: false
                  }

                  console.log('Attempting to create user with data:', userData)

                  // @ts-ignore
                  const createdUser = await db.create<User>('User', userData)
                  const userArr = Array.isArray(createdUser) ? createdUser : [createdUser]

                  console.log('User created successfully:', userArr[0])
                  const user = jsonify(userArr[0])

                  // Remove password from returned user object
                  const userWithoutPassword = { ...user, password: undefined } as User

                  console.log(' user without password', userWithoutPassword)

                  return userWithoutPassword as User
                } catch (err: unknown) {
                  console.error('Failed to create user in database:', err instanceof Error ? err.message : String(err))

                  // Even if database creation fails, we can still authenticate the user
                  // by returning a user object with the email
                  console.log('Returning user object without database persistence')

                  return {
                    id: wallet_address,
                    name: generateUsername(),
                    email: `${wallet_address.slice(0, 6)}@wallet.local`,
                    image: '/images/avatars/1.png',
                    wallet_address: wallet_address || '',
                    newUser: false
                  } as User
                } finally {
                  await db.close()
                }
              }

              // Return existing user
              const userToReturn = Array.isArray(userRecord) ? (userRecord[0] as User) : (userRecord as User)

              console.log('Authorize returning user:', userToReturn)

              return userToReturn
            }
          } else {
            // For traditional email/password authentication
            const userRecord = await loginUser(email, password, wallet_address || '')

            if (userRecord) {
              // If it's a new user, create them in the database first
              if ('newUser' in userRecord && userRecord.newUser) {
                console.log('Creating User')

                if (!db) {
                  console.error('Database not initialized')

                  return null
                }

                try {
                  // Create the user with required fields
                  const userData = {
                    name: email, // Use email as name if not provided
                    email,
                    password,
                    wallet_address: wallet_address || '',
                    image: '/images/avatars/1.png', // Default avatar
                    newUser: false
                  }

                  console.log('Attempting to create user with data:', userData)

                  // @ts-ignore
                  const createdUser = await db.create<User>('User', userData)
                  const userArr = Array.isArray(createdUser) ? createdUser : [createdUser]

                  console.log('User created successfully:', userArr[0])
                  const user = jsonify(userArr[0])

                  // Remove password from returned user object
                  const userWithoutPassword = { ...user, password: undefined } as User

                  console.log(' user without password', userWithoutPassword)

                  return userWithoutPassword as User
                } catch (err: unknown) {
                  console.error('Failed to create user in database:', err instanceof Error ? err.message : String(err))

                  // Even if database creation fails, we can still authenticate the user
                  // by returning a user object with the email
                  console.log('Returning user object without database persistence')

                  return {
                    id: email,
                    name: email,
                    email: email,
                    image: '/images/avatars/1.png',
                    wallet_address: wallet_address || '',
                    newUser: false
                  } as User
                } finally {
                  await db.close()
                }
              }

              // Return existing user
              const userToReturn = Array.isArray(userRecord) ? (userRecord[0] as User) : (userRecord as User)

              console.log('Authorize returning user:', userToReturn)

              return userToReturn
            }
          }
        } catch (e: any) {
          console.error('Authorize error:', e)
          throw new Error(e.message)
        }

        // Always return null if no user is found or created

        console.log('Authorize returning null - no user found')

        return null
      }
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })

    // ** ...add more providers here
  ],

  // ** Please refer to https://next-auth.js.org/configuration/options#session for more `session` options
  session: {
    /*
     * Choose how you want to save the user session.
     * The default is `jwt`, an encrypted JWT (JWE) stored in the session cookie.
     * If you use an `adapter` however, NextAuth default it to `database` instead.
     * You can still force a JWT session by explicitly defining `jwt`.
     * When using `database`, the session cookie will only contain a `sessionToken` value,
     * which is used to look up the session in the database.
     * If you use a custom credentials provider, user accounts will not be persisted in a database by NextAuth.js (even if one is configured).
     * The option to use JSON Web Tokens for session tokens must be enabled to use a custom credentials provider.
     */
    strategy: 'jwt',

    // ** Seconds - How long until an idle session expires and is no longer valid
    maxAge: 30 * 24 * 60 * 60 // ** 30 days
  },

  // ** Please refer to https://next-auth.js.org/configuration/options#pages for more `pages` options
  pages: {
    signIn: '/login'
  },

  // ** Please refer to https://next-auth.js.org/configuration/options#callbacks for more `callbacks` options
  callbacks: {
    /*
     * While using `jwt` as a strategy, `jwt()` callback will be called before
     * the `session()` callback. So we have to add custom parameters in `token`
     * via `jwt()` callback to make them accessible in the `session()` callback
     */

    async jwt({ token, user }) {
      if (user) {
        // Handle case where user might be an array (from SurrealDB)
        const userData = Array.isArray(user) ? user[0] : user

        console.log('JWT callback - Processing user data:', userData)

        // Generate random name if not provided
        const userName = userData.name || (userData.wallet_address ? generateUsername() : 'Unknown User')

        // Use truncated wallet address for email if not provided
        const userEmail =
          userData.email ||
          (userData.wallet_address ? `${userData.wallet_address.slice(0, 6)}@wallet.local` : 'unknown@wallet.local')

        // Set default avatar
        const userImage = userData.image || '/images/avatars/1.png'

        // Ensure all required fields are set (excluding password)
        token.name = userName
        token.email = userEmail
        token.picture = userImage
        token.wallet_address = userData.wallet_address
        token.sub = userData.id || userData.wallet_address // Ensure the subject is set

        console.log('JWT callback - User authenticated:', {
          name: token.name,
          email: token.email,
          wallet_address: token.wallet_address,
          sub: token.sub
        })
      }

      return token
    },
    async session({ session, token }) {
      // Ensure session.user exists
      if (!session.user) {
        session.user = {
          id: token.sub || 'unknown',
          name: undefined,
          email: undefined,
          image: undefined
        }
      }

      // Update session with token data - ensure we use the token data directly
      session.user.name = token.name || 'Unknown User'
      session.user.email = token.email || 'unknown@wallet.local'
      session.user.image = token.picture || '/images/avatars/1.png'
      ;(session.user as any).wallet_address = token.wallet_address

      console.log('Session callback - Session updated:', {
        name: session.user.name,
        email: session.user.email,
        wallet_address: (session.user as any).wallet_address,
        tokenData: {
          name: token.name,
          email: token.email,
          wallet_address: token.wallet_address
        }
      })

      return session
    }
  },

  // Add debug logging in development
  debug: process.env.NODE_ENV === 'development'
}
