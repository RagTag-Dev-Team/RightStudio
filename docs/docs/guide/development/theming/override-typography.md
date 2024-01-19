---
hide_table_of_contents: true
---

# How to override Typography

#### How to change font

We have used [Inter](https://fonts.google.com/specimen/Inter?query=inter) font in our template. Now suppose you want to implement [Montserrat fonts](https://fonts.google.com/specimen/Montserrat?query=montserrat).<br/>
You can change it by following these steps:

1. Go to the file `src/components/theme/mergedTheme.ts` and import the Montserrat font and use like this:

   ```js
   // Next Imports
   import { Montserrat } from "next/font/google";

   const montserrat = Montserrat({
     subsets: ["latin"],
     weight: ["300", "400", "500", "600", "700", "800", "900"],
   });
   ```

2. Now add the font family to the `userTheme` object in the same file like this:

   ```js title="src/components/theme/mergedTheme.ts"
   const userTheme = {
       ...
     typography: {
       fontFamily: montserrat.style.fontFamily
     }
   } as Theme;
   ```

3. Now follow the [common customization steps](/docs/guide/development/theming/overview#common-customization-steps) mentioned in Overview.

#### Use multiple fonts

```js title="src/components/theme/mergedTheme.ts"
const userTheme = {
   ...
   typography: {
   // Only h1 will use Montserrat font, while other components will use Inter font,
     h1: {
       fontFamily: montserrat.style.fontFamily,
       fontWeight: 700,
       fontSize: '3.5rem',
       lineHeight: 1.375
     },
   }
} as Theme;
```

:::note Note
You can refer the typography of the template from `src/@core/theme/typography.ts` file.
:::

:::tip Reference
You can refer to template's typography from [here](/docs/user-interface/typography) <br/>
MUI typography customization: [https://mui.com/material-ui/customization/typography](https://mui.com/material-ui/customization/typography)
