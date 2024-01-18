# RTL

## Overview

RTL stands for Right-to-Left and refers to the writing and reading direction in certain languages. Unlike languages like English that are written and read from left to right (LTR), RTL languages, such as Arabic, Hebrew, and Persian, are written and read from right to left. This not only affects text alignment but also the layout and design of websites and applications to ensure they are user-friendly and accessible to speakers of RTL languages.

## Implementing RTL in Your Project

There is 2 scenarios in your project accordingly you need to implement RTL:

### Case 1: Implement RTL with i18n

Our template's support for Right-to-Left (RTL) languages like Arabic is directly tied to the language settings. This means that RTL formatting is automatically applied when an RTL language is selected. Conversely, languages like English (en) use Left-to-Right (LTR) formatting.

We have provided RTL support for `Arabic` language in our template. You can check it in `src/i18n.ts` file:

```tsx
export const i18n = {
  ...
  langDirection: {
    en: 'ltr', // This will result in LTR
    fr: 'ltr',
    ar: 'rtl' // This will result in RTL
  }
} as const
```

### Case 2: Implement RTL without i18n

If you don't want to use i18n in your project and you want to implement RTL support, you need to replace the following code in whole project:

   ```diff
   - const direction = 'ltr'
   + const direction = 'rtl'
   ```

That's it! Now you have RTL support in your project 🥳🎉
