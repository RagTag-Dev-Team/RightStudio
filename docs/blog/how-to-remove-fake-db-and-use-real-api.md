# How to remove Fake DB and use Real API

We are using Next.js API routes to fetch data from the database. You can find all the API routes in `src/app/api` folder. This makes our template API ready and you can use it with any backend.

### How to remove Fake DB
However, you won't need fake DB if you are using real API. In this case please follow below steps to remove fake DB from the template.

- If you are not using the fake DB then you can remove `src/app/api/fake-db` folder.

- Remove imports related to fake DB.
    :::warning NOTE
    Now all (fake) API calls will result **Module not found** error, until you replace them with your own real API endpoints.
    :::

### How to replace API endpoints
As fake DB is removed, and you are using real API, you can delete the whole folder `src/app/api` and replace it with your own API endpoints.

Make sure you've built the APIs in your backend and connected them to your database before you switch out the sample APIs with the real ones.

:::warning NOTE
If the structure of the data you receive from the API is different from the sample data, you will need to update the code in the components that use the data.

You can refer to the data structure in `src/app/api/fake-db` folder.
:::

- For example you want to fetch data from `https://fakedata.example.com/` then you can create a file `src/app/**/page.tsx` and add following code:

```tsx page.tsx
// Component Imports
import Component from '@views/pages/component'

const getData = async () => {

  const res = await fetch(`https://fakedata.example.com/`)

  if (!res.ok) {
    throw new Error('Failed to fetch page Data')
  }

  return res.json()
}

const ComponentPage = async () => {

  const data = await getData()

  return <Component data={data} />
}

export default ComponentPage

```

You can refer [Next.js](https://nextjs.org/docs/app/building-your-application/data-fetching) documentation for more information on data fetching.
