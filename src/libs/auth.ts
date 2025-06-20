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

import { privateKeyAccount } from 'thirdweb/wallets'

import { loginUser } from '@/app/server/user-actions'

import { client } from './thirdwebclient'

import { getDb } from '@/libs/surreal'

const privateKey = process.env.NEXT_PUBLIC_THIRDWEB_ADMIN_KEY

// const prisma = new PrismaClient()

if (!privateKey) {
  throw new Error('Missing THIRDWEB_ADMIN_PRIVATE_KEY in .env file.')
}

const thirdwebAuth = createAuth({
  domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || '',
  adminAccount: privateKeyAccount({ client, privateKey }),
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
        const { email, password, wallet_address } = credentials as {
          email: string
          password: string
          wallet_address: string
        }

        const db = await getDb()

        try {
          const userRecord = await loginUser(email, password, wallet_address)

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
                  wallet_address,
                  image: '', // Default empty image
                  newUser: false
                }

                // @ts-ignore
                const createdUser = await db.create<User>('User', userData)
                const user = jsonify(createdUser)

                console.log('User created:', user)

                console.log('Returned from authorize (created):', user)

                return user as User
              } catch (err: unknown) {
                console.error('Failed to create user:', err instanceof Error ? err.message : String(err))

                return null
              } finally {
                await db.close()
              }
            }

            console.log(userRecord)

            console.log('Returned from authorize:', userRecord)

            // Return existing user
            return Array.isArray(userRecord) ? (userRecord[0] as User) : (userRecord as User)
          }
        } catch (e: any) {
          throw new Error(e.message)
        }

        // Always return null if no user is found or created
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
    async jwt({ token, user, account }) {
      console.log('token user account', token, user, account)

      if (user && account) {
        token.name = user.name
        token.email = user.email
        token.wallet_address = user.wallet_address
      }

      return token
    },
    async session({ session, token }) {
  


      if (session.user) {
        // ** Add custom params to user in session which are added in `jwt()` callback via `token` parameter
        session.user.name = token.name

        //@ts-ignore
        session.user.wallet_address = token.wallet_address
      }

      console.log('Session: ' + JSON.stringify(session, null, 2))

      return session
    }
  }
}
