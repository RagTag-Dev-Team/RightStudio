---
hide_table_of_contents: true
---

# How to create your own custom theme

:::danger Heads up!
For an optimal experience with our template, we suggest utilizing the default theme we've provided. Crafting a custom theme can be complex and demands considerable time and expertise. <br/>
Please be aware that introducing a new theme may lead to runtime errors, given that our entire template is closely integrated with the existing theme settings. If you decide to create your own theme, please be aware that it may alter the intended appearance of the template. Should any issues arise, you may need to address them independently.
:::
##### Still want to create your own custom theme, please follow the steps mentioned below.

1.  Open the file `src/components/theme/userTheme.ts` and add your custom theme as shown below:

    ```ts title="src/components/theme/userTheme.ts"
    const userTheme = () => {
      return {
        // Write your custom theme object here.
        colorSchemes: {
          ...
        },
        mainColorChannels: {
          ...
        },
        customShadows: {
          ...
        }
      } as Theme
    }
    ```

2. Open the `src/components/theme/index.tsx` file and add and remove the imports and shown below:

   ```diff
   - import defaultCoreTheme from '@core/theme'
   + import userTheme from './userTheme'
   
   ```

3. Now use `userTheme` instead of `defaultCoreTheme` in the `ThemeProvider` component as shown below:
   ```diff title="src/components/theme/index.tsx"
   - const coreTheme = deepmerge(defaultCoreTheme(), ...)
   + const coreTheme = deepmerge(userTheme(), ...)

  ```
