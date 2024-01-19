---
hide_table_of_contents: true
---

# How to add Custom Color

In order to new custom color to the template, you need to follow the steps below:

Suppose you want to add a new customColor `bodyColor` to the template.

1. First you need to add type for `bodyColor` in `src/components/theme/types.ts` file with other custom colors.

    ```ts
    // Palette
    interface Palette {
      ...
      customColors: {
        ...
        // New custom color
        bodyColor: string
      }
    }
    interface PaletteOptions {
      ...
      customColors?: {
        ...
        // New custom color
        bodyColor?: string
      }
    }
    ```

2. Now you need to add `bodyColor` in `src/components/theme/mergedTheme.ts` like below:

    ```ts
    colorSchemes: {
      light: {
        palette: {
          ...
          customColors: {
            bodyColor: '#1E1E1E'
          }
        }
      },
      dark: {
        palette: {
          ...
          customColors: {
            bodyColor: '#F8F8F1'
          }
        }
      }
    }
    ```

3. Now follow the common [customization steps](/docs/guide/development/overview#common-customization-steps) mentioned on Overview page.