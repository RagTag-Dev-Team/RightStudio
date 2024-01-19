---
hide_table_of_contents: true
---

# Overview

Theming is the most important aspect of any template. You can easily customize theme of our template. You can change the colors, the typography, the spacing and much more.

MUI offers a utility function: `extendTheme` that creates a theme which can be passed to the theme provider, otherwise the theme provider uses the default theme. The theme provider makes the theme available in the component tree, and can be used via the `sx` prop, or inside styled components using the MUI styled engine (styled). You can read more about [MUI extendTheme](https://mui.com/material-ui/experimental-api/css-theme-variables/customization/#theming) in the official docs.

We are using `CssVarsProvider` which is built on top of `ThemeProvider` and provides a way to use CSS variables in your theme. It is useful when you want to use CSS variables in your theme. Consider reading [MUI CssVarsProvider docs](https://mui.com/material-ui/experimental-api/css-theme-variables/usage/#getting-started) for more information.

:::caution Important
To customize colors, typography, spacing, or other aspects of component styling, please modify the **src/components/theme/mergedTheme.ts** file. Avoid altering theme settings within the @core folder, unless directed by our support team.

:::

:::tip Important
If you want to use your own custom theme from scratch, you can follow the steps mentioned in [How to create your own custom theme](/docs/guide/development/theming/create-your-own-theme).
:::

### Common Customization steps

:::info Note
Following two steps are common for all the customizations in the theme.
:::

1. Open the `src/components/theme/index.tsx` file and add and remove the imports and shown below:

   ```diff
   - import defaultCoreTheme from '@core/theme'
   + import mergedTheme from './mergedTheme'

   ```

2. Now use `mergedTheme` instead of `defaultCoreTheme` in the `ThemeProvider` component as shown below:
   ```diff title="src/components/theme/index.tsx"
   - const coreTheme = deepmerge(defaultCoreTheme(..), ...)
   + const coreTheme = deepmerge(mergedTheme(..), ...)
   ```


