---
hide_table_of_contents: true
---

# How to change Primary Color

If you want to change the primary color of the theme, you can do so by changing `primaryColorConfig` value in the `src/configs/primaryColorConfig.ts` file.

```ts
const primaryColorConfig = [
  {
    name: 'primary-1',
    light: '#23FFD9',
    main: '#2196F3',
    dark: '#0D47A1',
  }
];
```
:::note
Please don't forgot to clear local storage or settings from cookies after changing the primary color and refresh the page.
:::