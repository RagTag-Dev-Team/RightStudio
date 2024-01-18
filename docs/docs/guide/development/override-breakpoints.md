# How to override Breakpoints

## How to change MUI Breakpoints

If you want to change the MUI breakpoints of the template, you need to follow the steps below:

:::warning
You need to change the breakpoints in both `tailwind.config.js` and `src/components/theme/mergedTheme.ts` files, otherwise template will not be in sync with both the breakpoints.
:::

1. Open the file `src/components/theme/mergedTheme.ts` and change the breakpoints size as per your requirement.

   ```ts
   const userTheme = {
       ...
     breakpoints: {
       values: {
         xs: 0,
         sm: 600,
         md: 960,
         lg: 1280,
         xl: 1920,
         2xl: 2560,
       },
     },
   } as Theme;
   ```

2. Now follow the common [customization steps](/docs/guide/development/overview#common-customization-steps) mentioned in Overview.

## How to change Tailwind Breakpoints

If you want to change the Tailwind breakpoints of the template. You need to change the breakpoints in the `tailwind.config.js` file.

```js title="tailwind.config.js"

theme: {
    ...
    screens: {
      'sm': '600px',
      'md': '960px',
      'lg': '1280px',
      'xl': '1920px',
      '2xl': '2560px',
    },
}
```
:::tip Reference
https://mui.com/material-ui/customization/breakpoints/
:::