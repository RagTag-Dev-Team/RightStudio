# Home Page URL

The home page URL is the URL which you want to redirect to whenever a user visits the root URL of your website.

## Setting Home Page URL With Middleware

If you have the `src/middleware.ts` file in your project, you will find the `HOME_PAGE_URL` constant immediately after the imports in this file like the following:

```tsx
const HOME_PAGE_URL = '/about'
```

You can change the value of `HOME_PAGE_URL` to the URL you want to redirect to.

The `src/middleware.ts` file handles the redirection to the home page URL. You do not need to modify any other file to change the home page URL.

:::note
If you have the `src/middleware.ts` file in your project, you will not find the `src/app/page.tsx` file in your project.
:::

## Setting Home Page URL Without Middleware

If you do not have the `src/middleware.ts` file in your project, you can set the home page URL from the `src/app/page.tsx` file. You will find the following code in the `src/app/page.tsx` file:

```tsx
redirect('/home')
```

You can change the value of the URL in the `redirect` function to the URL you want to redirect to.

The `src/app/page.tsx` file handles the redirection to the home page URL. You do not need to modify any other file to change the home page URL.
