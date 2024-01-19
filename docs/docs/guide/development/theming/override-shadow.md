---
hide_table_of_contents: true
---

# How to override Shadows

We are using `customShadows` everywhere in our template. You can refer the `customShadows` from `src/@core/theme/customShadows.ts` file.

You can also checkout the MUI Shadows in our core theme file `src/@core/theme/shadows.ts`.

#### How to override Custom Shadows

1. Open the file `src/components/theme/mergedTheme.ts` and override the `customShadows` as per your requirement.
   For example, if you want to change the `xs shadow`, you can do it like this:

   ```ts
   const userTheme = {
        ...
     customShadows: {
       xs: `0px 5px 15px rgb(var(--mui-mainColorChannels-${mode}Shadow) / ${mode === 'light' ? 0.5 : 0.6})`
     },
   } as Theme;
   ```

2. Now follow the common [customization steps](/docs/guide/development/theming/overview#common-customization-steps) mentioned in Overview.
