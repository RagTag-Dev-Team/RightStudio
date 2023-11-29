# NextAuth with Google Provider and Prisma Adapter

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

## Overview

<hr />

Welcome to the world of seamless authentication using NextAuth.js with the Google Provider and Prisma Adapter. In this guide, we'll walk you through the process step by step, ensuring you grasp each concept fully. Whether you're new to NextAuth or a seasoned developer, you're in for an enjoyable journey filled with insights and links to fine-tune your authentication flow to match your project's unique requirements.

## Prerequisites

<hr />

Before we dive into the implementation details, ensure you have a basic understanding of NextAuth.js, Google Cloud, and Prisma. If you need a quick refresher, feel free to explore the relevant documentation: [NextAuth.js](https://next-auth.js.org/), [Google Cloud](https://cloud.google.com/), and [Prisma](https://www.prisma.io/).

## Google Cloud Setup

<hr />

To get started, let's connect your project to Google Cloud. Follow these steps:

1. Open the Google Cloud Console.
2. Select your project from the list of available projects, or create a new one if needed.
3. Refer to this video guide for a complete setup tutorial for Google Cloud.
4. When creating your credentials, ensure that the "Authorized redirect URIs" include both your full domain and the callback path. Examples:
   * For production: `https://{YOUR_DOMAIN}/api/auth/callback/google`
   * For development: `http://localhost:3000/api/auth/callback/google`
5. After creating an OAuth client, Google Cloud Console will provide you with a CLIENT_ID and CLIENT_SECRET. Keep these safe and store them securely. You can save them in your .env file or adapt to your preferred configuration as shown below:

  ```bash
  GOOGLE_CLIENT_ID= YOUR_CLIENT_ID_GOES_HERE // your CLIENT_ID provided by Google Cloud Console
  GOOGLE_CLIENT_SECRET= YOUR_CLIENT_SECRET_GOES_HERE // your CLIENT_SECRET provided by Google Cloud Console
  ```

## Prisma Adapter Setup

<hr />

:::caution
If you are using SQLite database with Prisma, then you need to remove @db.Text text from the prisma/schema.prisma file.
:::

Please follow all the steps provided in the official NextAuth's PrismaAdapter (opens new window).

The necessary files, `lib/prismadb.ts` and `prisma/schema.prisma`, can be found in above link. You may move these files as per your requirements. In this example, we kept these files in the `src` folder.

:::note
Please note that you must change the import path of lib/prismadb.ts in the pages/api/auth/[...nextauth].js file to match its new location.
:::

In the `schema.prisma` file, we used `SQLite` database as the provider, with `file:./dev.db` specified as the URL in the `datasource db`. Here is the example code:

```prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}
```

However, you may alter the above settings to as per your database.

You are free to add or remove tables and columns as per your requirements. In this example, a role column has been added to the User table to define the role of a user. Please refer to the following code to add the same:

```prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
}
```

After saving your schema, use the Prisma CLI to generate the Prisma Client by running the following command in the src folder for this example:

```bash
npx prisma generate
```

To configure your database to use the new schema (e.g. creating tables and columns), run the following command using the Prisma CLI in the src folder for this example:

```bash
npx prisma migrate dev
```

If you want to watch the preview of the Prisma database, you may run the following command:

```bash
npx prisma studio
```

## Initialize NextAuth.js

[Next.js 13.2](https://nextjs.org/blog/next-13-2#custom-route-handlers) introduced [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), the preferred way to handle REST-like requests in App Router (app/).

You can initialize NextAuth.js with a Route Handler too, very similar to API Routes.

```tsx title="src/app/api/auth/[...nextauth]/route.ts"
// Third-party Imports
import NextAuth from 'next-auth'

// Lib Imports
import { authOptions } from '@/lib/auth'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
```

Internally, NextAuth.js detects that it is being initialized in a Route Handler (by understanding that it is passed a Web [Request instance](https://developer.mozilla.org/en-US/docs/Web/API/Request)), and will return a handler that returns a [Response instance](https://developer.mozilla.org/en-US/docs/Web/API/Response). A Route Handler file expects you to export some named handler functions that handle a request and return a response. NextAuth.js needs the GET and POST handlers to function properly, so we export those two.

**Please refer to the [NextAuth official documentation](https://next-auth.js.org/configuration/initialization#advanced-initialization) for  advanced initialization.**

:::info
Technically, in a Route Handler, the api/ prefix is not necessary, but we decided to keep it required for an easier migration.
:::

## `auth.ts` file

<hr />

The implementation of the authentication logic should be performed within the `src/lib/auth.ts` file. It is advisable to tailor this file to suit the specific requirements of your project. The necessary configurations and instructions for customizing can be located in the [NextAuth official documentation](https://next-auth.js.org/configuration/initialization).

<Tabs>
  <TabItem value="TSX">

  ```tsx
  // Third-party Imports
  import type { NextAuthOptions } from 'next-auth'
  import type { Adapter } from 'next-auth/adapters'
  import GoogleProvider from 'next-auth/providers/google'
  import { PrismaAdapter } from '@auth/prisma-adapter'
  import { PrismaClient } from '@prisma/client'

  const prisma = new PrismaClient()

  export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,

    // ** Configure one or more authentication providers
    // ** Please refer to https://next-auth.js.org/configuration/options#providers for more `providers` options
    providers: [
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
      * If you use a custom credentials provider, user accounts will not be persisted in a database by NextAuth.js (even if one is configured). * The option to use JSON Web Tokens for session tokens must be enabled to use a custom credentials provider.
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
          /*
          * For adding custom parameters to user in session, we first need to add those parameters
          * in token which then will be available in the `session()` callback
          */
          token.name = user.name
        }

        return token
      },
      async session({ session, token }) {
        if (session.user) {
          // ** Add custom params to user in session which are added in `jwt()` callback via `token` parameter
          session.user.name = token.name
        }

        return session
      }
    }
  }
  ```

  </TabItem>
  <TabItem value="JS">

  ```tsx
  // Third-party Imports
  import GoogleProvider from 'next-auth/providers/google'
  import { PrismaAdapter } from '@auth/prisma-adapter'
  import { PrismaClient } from '@prisma/client'

  const prisma = new PrismaClient()

  export const authOptions = {
    adapter: PrismaAdapter(prisma),

    // ** Configure one or more authentication providers
    // ** Please refer to https://next-auth.js.org/configuration/options#providers for more `providers` options
    providers: [
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
      * If you use a custom credentials provider, user accounts will not be persisted in a database by NextAuth.js (even if one is configured). * The option to use JSON Web Tokens for session tokens must be enabled to use a custom credentials provider.
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
          /*
          * For adding custom parameters to user in session, we first need to add those parameters
          * in token which then will be available in the `session()` callback
          */
          token.name = user.name
        }

        return token
      },
      async session({ session, token }) {
        if (session.user) {
          // ** Add custom params to user in session which are added in `jwt()` callback via `token` parameter
          session.user.name = token.name
        }

        return session
      }
    }
  }
  ```
  
  </TabItem>
</Tabs>

Before you embark on your journey of customization, take a moment to understand the contents and functioning of this file. Let's dive in!

:::note
All the options used in the above `[...nextauth].ts` file are outlined and explained below. Please refer to the official [NextAuth documentation](https://next-auth.js.org/configuration/options) for a comprehensive list of available options.
:::

## providers

<hr />

We utilize the [GoogleProvider](https://next-auth.js.org/providers/google) which enables the handling of sign-in through google. Multiple authentication providers can be configured simultaneously.

The following options are available within GoogleProvider:

* clientId: The client ID of your Google Cloud project.
* clientSecret: The client secret of your Google Cloud project.

Kindly consult the official [NextAuth documentation](https://next-auth.js.org/configuration/options#providers) for more providers options.

## secret

<hr/>

It is a random string used to hash tokens, sign/encrypt cookies and generate cryptographic keys.

If the `NEXTAUTH_SECRET` is set as an environment variable, it is not necessary to define this option. A secret can be generated by visiting the documentation link provided below.

Kindly consult the official [NextAuth documentation](https://next-auth.js.org/configuration/options#secret) for more details on `secret`.

## session

<hr/>

### \`strategy\`

You are required to make a choice on how you wish to preserve the user session. The default option is `jwt`, which involves the storage of an encrypted JWT (JWE) within a session cookie. If you elect to use an `adapter`, the default setting will be changed to `database` instead. It is still possible to explicitly specify `jwt` and retain a JWT session. If the option `database` is chosen, the session cookie will only hold a `sessionToken` value, which will then be used to retrieve the session information from the database.

### \`maxAge\`

The duration of an idle session until it expires and becomes invalid. It accepts a number in seconds.

Kindly consult the official [NextAuth documentation](https://next-auth.js.org/configuration/options#session) for more `session` options.

## pages

<hr />

Specify URLs to be used if you want to create custom sign in, sign out and error pages. Pages specified will override the corresponding built-in page.

Kindly consult the official [NextAuth documentation](https://next-auth.js.org/configuration/options#pages) for more `pages` options.

## callbacks

<hr />

Callbacks are asynchronous functions you can use to control what happens when an action is performed. Callbacks are extremely powerful, especially in scenarios involving JSON Web Tokens as they allow you to implement access controls without a database and to integrate with external databases or APIs.

### \`jwt\`

This callback is called whenever a JSON Web Token is created (i.e. at sign in) or updated (i.e whenever a session is accessed in the client). The returned value will be encrypted, and it is stored in a cookie.

When utilizing the `jwt` strategy within the `session` option, the `jwt()` callback will be executed prior to the `session()` callback. The data returned by the `authorize` function in the `providers` option will be passed to the `jwt()` callback in the form of the `token`.

To include custom parameters in the `session()` callback, they must be added to the `token` in the `jwt()` callback, which will then be transferred to the `session()` callback for further processing.

Kindly consult the official [NextAuth documentation](https://next-auth.js.org/configuration/callbacks#jwt-callback) for more details on `jwt()` callback.

### \`session\`

The session callback is called whenever a session is checked. By default, only a subset of the token is returned for increased security. If you want to make something available you added to the token (like `access_token` and `user.id` from above) via the `jwt()` callback, you have to explicitly forward it here to make it available to the client.

Kindly consult the official [NextAuth documentation](https://next-auth.js.org/configuration/callbacks#session-callback) for more details on `session()` callback.

Kindly consult the official [NextAuth documentation](https://next-auth.js.org/configuration/options#callbacks) for more `callbacks` options.

We hope that with the information provided, you have now acquired a comprehensive understanding of all the options available within the `[...nextauth].ts` or `[...nextauth].js` file.

## Login Form 

We can create a login form which calls the signIn function from the `next-auth/client` library. The `signIn` function will call the login API and return the user data if the credentials are valid.

Here is the example code for the login page:

```tsx
'use client'

import { useState } from 'react'

// Next Imports
import { useRouter, useSearchParams } from 'next/navigation'

// Third-party Imports
import { signIn } from 'next-auth/react'

const LoginForm = () => {
  return (
    <div>
      <button className='d-block' onClick={() => signIn('google')}>
        Login with google
      </button>
    </div>
  )
}

export default LoginForm
```

## Extending NextAuth Types for Custom User Fields

<hr />

In your dynamic and vibrant app, you might have a unique `role` field nestled within your user object. Fear not, for we shall seamlessly guide you in extending the NextAuth types to gracefully accommodate this distinct feature. 🎩 ✨

The first stop on our customization tour is the `next-auth.d.ts` file. This TypeScript declaration file plays a crucial role in modifying the types specified by NextAuth. Locate or create this file in the root directory of your project. Don't worry, you don't need a magic wand – just a few keyboard strokes! ⌨️ 🔮

Let's say your user objects have a charming `role` field that you'd like to include in the NextAuth types. This field adds a touch of distinction to your users. To achieve this, follow these simple steps:

1. Create file named `next-auth.d.ts` in the root of your project.
2. Your declaration should look something like this:

  ```ts
  import 'next-auth/jwt'
  import { DefaultSession } from 'next-auth'

  declare module 'next-auth/jwt' {
    type JWT = {
      role: string
    }
  }

  declare module 'next-auth' {
    type Session = {
      user: {
        role: string
      } & DefaultSession['user']
    }

    type User = {
      role: string
    }
  }
  ```

After adding the role field declaration, the NextAuth types are now aware of your custom user data.

Now that you've extended the NextAuth types, it's time to put your custom field to good use in your authentication flow.

First let's add role into the user session, open `src/lib/auth.ts` file and add role in `jwt` and `session` callbacks like following:

```ts title="src/lib/auth.ts" {14,23}
callbacks: {
  /*
    * While using `jwt` as a strategy, `jwt()` callback will be called before
    * the `session()` callback. So we have to add custom parameters in `token`
    * via `jwt()` callback to make them accessible in the `session()` callback
    */
  async jwt({ token, user }) {
    if (user) {
      /*
        * For adding custom parameters to user in session, we first need to add those parameters
        * in token which then will be available in the `session()` callback
        */
      token.name = user.name
      token.role = user.role
    }

    return token
  },
  async session({ session, token }) {
    if (session.user) {
      // ** Add custom params to user in session which are added in `jwt()` callback via `token` parameter
      session.user.name = token.name
      session.user.role = token.role
    }

    return session
  }
}
```

Whenever you're accessing user data through NextAuth, you can access the role field like a pro:

```ts
// Accessing user data with the role field
import { useSession } from 'next-auth/react';

// Inside your component...
const { data: session } = useSession();
const userRole = session?.user?.role || 'defaultRole';
```

:::info
Please note that customization of NextAuth to meet specific requirements, such as modifying the session strategy, adjusting session expiration times, designating authentication pages, and customizing callback functions, are not considered part of the support. These elements will vary based on the specific implementation.
:::

* To implement Prisma (SQLite) with Next.js, check out [this](https://youtu.be/FMnlyi60avU) video.

* To implement NextAuth with PrismaAdapter (Planetscale), check out [this](https://youtu.be/zB7u1r0tc6o) video.

* To implement NextAuth with [CredentialProvider](https://next-auth.js.org/configuration/providers/credentials), refer to [this](/docs/guide/authentication/credentials-provider) article.
