# Remove Authentication from full-version

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

## Overview

In this guide, we'll walk you through the process of removing authentication from the full-version of the application.

## Remove Files

To remove authentication from the full-version, you'll need to delete the following files & folders:

#### API Endpoints

- `src/app/api/auth/[...nextauth].ts`: This file serves as the entry point for NextAuth.js, handling authentication-related functionality.

- `src/app/api/login/route.ts`: This file is the entry point for the login API, managing the login process.

- `src/app/api/login/users.ts`: This file holds mock user data for the login API, facilitating testing and development.

#### Authentication Logic

- `src/lib/auth.ts`: This file encompasses the authentication logic, supporting various authentication processes.

#### Context Provider

- `src/contexts/nextAuthProvider.tsx`: This file provides the NextAuth.js context, allowing components to access authentication-related information.

#### Database Schema and Migrations

- `src/prisma` (folder): This folder contains the Prisma schema and migrations, enabling interaction with the database.

## Remove Authentication Code

To remove authentication from the full-version, you'll need to remove the following code:

- remove `signOut` & `useSession` imports and usage from `src/@layouts/components/UserDetails.tsx`

- remove `signIn` import and usage from `src/app/(blank-layout-pages)/LoginForm.tsx`

- remove `NextRequestWithAuth` and `withAuth` imports and usage from `src/middleware.ts`, also remove `callbacks` and guestRoutes, sharedRoutes, and privateRoutes and its logical conditions from `src/middleware.ts`

- replace the `dev` and `build` scripts in `package.json` with the following:

  ```json
  "dev": "next dev",
  "build": "next build",
  ```

## Remove Dependencies

To remove authentication from the full-version, you'll need to remove the following dependencies:

- `@prisma/client`
- `@next-auth/prisma-adapter`
- `@auth/prisma-adapter`
- `prisma`
- `next-auth`
- `ts-node`

use the following command to remove the dependencies:

<Tabs>
<TabItem value="pnpm">

```bash
pnpm remove @prisma/client @next-auth/prisma-adapter @auth/prisma-adapter prisma next-auth ts-node
```

</TabItem>
<TabItem value="yarn">

```bash
yarn remove @prisma/client @next-auth/prisma-adapter @auth/prisma-adapter prisma next-auth ts-node
```

</TabItem>
<TabItem value="npm">

```bash
npm uninstall @prisma/client @next-auth/prisma-adapter @auth/prisma-adapter prisma next-auth ts-node
```

</TabItem>
</Tabs>
