---
hide_table_of_contents: true
---

# How to override Component Styling

The theme's components key allows you to customize a component without wrapping it in another component. You can change the styles, the default props, and more.

Open the file `src/components/theme/mergedTheme.ts` and override the component styling as per your requirement.

```ts
const userTheme = {
  ...
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase'
        },
      },
    },
  },
} as Theme;

```

:::tip Reference
https://mui.com/material-ui/customization/theme-components/
:::