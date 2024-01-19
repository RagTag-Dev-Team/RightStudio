---
hide_table_of_contents: true
---

# How to change Custom Colors

The `customColors` object shown below is added in core theme file `src/@core/theme/colorSchemes.ts`.

```ts
light: {
  palette: {
    primary: {
        ...
    },
    customColors: {
      ...
    }
  }
},
dark: {
  palette: {
    primary: {
        ...
    },
    customColors: {
      ...
    }
  }
}
```

In order to change the custom colors of the template, you need to follow the steps below:

1. Open the file `src/components/theme/mergedTheme.ts` and override the color as per your requirement.
The example shows how to change the `bodyBg` color.

   ```ts
    colorSchemes: {
      light: {
        palette: {
          secondary: {
           ...
          },
          customColors: {
            bodyBg: '#F8F8F1'
          }
        }
      },
      dark: {
        palette: {
          secondary: {
           ...
          },
          customColors: {
            bodyBg: '#1E1E1E'
          }
        }
      }
    }
   ```

2. Now follow the common [customization steps](/docs/guide/development/theming/overview#common-customization-steps) mentioned above.
