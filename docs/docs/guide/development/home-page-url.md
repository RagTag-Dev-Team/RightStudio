# Home Page URL

The home page URL is the address to which users are redirected when they visit the root URL of your website.

You can define the home page URL in the `src/configs/themeConfig.ts` file.

```ts
export type Config = {
  ...
  homePageUrl: string
  ...
}
```

```ts
const themeConfig: Config = {
  ...
  homePageUrl: '/dashboards/crm', // Change this to the URL you want to redirect to
  ...
}
```

Additionally, update the `destination` variable in the `src/next.config.mjs` file to match the home page URL.

By updating these files, you ensure that users are redirected to the correct home page URL when they visit the root URL of your website.
