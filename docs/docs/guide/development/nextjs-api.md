---
hide_table_of_contents: true
---

# Next.js API

## Utilizing Next.js API Routes in Our Template

### Introduction
Next.js API routes offer a user-friendly way to construct APIs within your Next.js application. These routes enable you to design server-side logic and API endpoints directly inside your app. For comprehensive details on API routes, refer to the [Next.js documentation](https://nextjs.org/docs/app/building-your-application/routing/route-handlers).

:::info Note
If you are not utilizing multiple languages in your app, you can bypass the `[lang]` folder in the `src/app/[lang]/**/**` path.
:::

### Steps to Create an API Route

1. **Setting Up the Location:**
API routes reside in the `src/app/api` folder. To establish a new API route, create a new file within this directory.

2. **Managing the Data:**
Data for the API routes is located in the `src/app/api/fake-db` folder by default. You can use your own database and API endpoints. Refer how you can use your own database and API endpoints and how you can remove the fake-db [here](/articles/how-to-remove-fake-db-and-use-real-api)

3. **Configuring the Routing:**
Routes and API endpoints are managed in the `src/app/[lang]/` folder. You're encouraged to develop your API endpoints within this area.

4. **Creating an Example API Route:**
    - **Data File:** Create a data file at `src/app/api/fake-db/**/example/example.tsx`

      ```tsx
      import type { ExampleType } from '@/types/**/exampleTypes'

      export const db: ExampleType[] = [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false
      }
      ...
      ]
      ```
    - **Data Type:** Define the data types in `src/types/**/exampleTypes.tsx` file
      ```tsx
      export type ExampleType = {
        userId: number
        id: number
        title: string
        completed: boolean
      }
      ```

    - **API Routes:** Establish your API routes in `src/app/api/**/example/routes.ts` file
      ```tsx
      // Next Imports
      import { NextResponse } from 'next/server'

      // Data Imports
      import { db } from '@/app/api/fake-db/**/example'

      export async function GET() {
        return NextResponse.json(db)
      }
      ```
    
    - **API Endpoints:** Define your API endpoints in `src/app/[lang]/**/**/example/page.tsx` file
      ```tsx
      import type { ExampleType } from '@/types/**/exampleTypes'

      const getExampleData = async () => {
        // API_URL variable is defined in .env file
        const res = await fetch(`${process.env.API_URL}/**/example`)

        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }

        return res.json()
      }

      const ComponentName = async () => {
        // Vars
        const data: ExampleType[] = await getExampleData()

        return (
          <div>
            <h1>ComponentName</h1>
            {data.map(item => (
              <div key={item.id}>
                <div>{item.title}</div>
                <div>{item.completed}</div>
              </div>
            ))}
          </div>
        )
      }

      export default ComponentName
      ```
    - **Finalizing Your API Route:**
      - After completing these steps, your data is ready to be manipulated as required.
      - Your new API route will be accessible at `http://localhost:3000/**/**/example`.

That's it!!! You have successfully created your API route. 🥳 🎉