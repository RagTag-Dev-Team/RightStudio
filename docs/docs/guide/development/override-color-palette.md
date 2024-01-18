---
hide_table_of_contents: true
---

# Override Color Palette

#### How to Change Colors

:::info
The instructions provided below will not change the primary color.<br/> 
If you want to change the primary color, please refer [How to change Primary Color](/docs/guide/development/change-primary-color).
:::

In order to change the colors of the template,you need to follow the steps below:

1. For example, if you want to change the Secondary Color, you need to open `src/components/theme/mergedTheme.ts` file and add color's values to the `userTheme` object for light and dark mode.

   ```ts
   const userTheme = {
     colorSchemes: {
       light: {
         palette: {
           secondary: {
             main: "#BF2761",
             light: "#FF9CF2",
             dark: "#80004E",
           },
           warning: {
            ...
           },
         },
       },
       dark: {
         palette: {
           secondary: {
             main: "#BF2761",
             light: "#FF9CF2",
             dark: "#80004E",
           },
           warning: {
            ...
           },
         },
       },
     },
   } as Theme;
   ```

2. Now follow the [common customization steps](/docs/guide/development/overview#common-customization-steps) mentioned in Overview.

Above example is for changing the secondary color, you can change any color by following the same steps. Please refer
[MUI extendTheme customization](https://mui.com/material-ui/experimental-api/css-theme-variables/customization/#color-schemes) for more information.
Also refer our core theme from file `src/@core/theme/colorSchemes.ts` in order to check more colors & custom colors, dark/light colors etc.. to get better idea.
