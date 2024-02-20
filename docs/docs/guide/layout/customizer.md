# Customizer

## Overview

Customizer is a tool in your app that lets users change how the app looks and feels. They can pick different colors, switch between light or dark mode, choose the layout style (like vertical or side-by-side), and set the text direction (left-to-right or right-to-left).

:::warning Using Customizer in Starter Kit?
While adding customizer in the starter-kit, you must add the `disableDirection` prop in the Customizer component otherwise it will show LTR and RTL inside the customizer. If you have added more than 1 languages or implemented i18n in Starter Kit and one of the languages is RTL, you can remove the `disableDirection` prop.
:::

## Usage

To use the Customizer component, import it into your Next.js page or component:

```jsx
import Customizer from '@core/components/customizer'
```

Then, add the Customizer component to your page or component:

```jsx
<Customizer />
```

## Props

Customizer lets you change these things:

| Name             | Type                                           | Default  | Description                                                           |
| ---------------- | ---------------------------------------------- | -------  | --------------------------------------------------------------------- |
| breakpoint       | `${number}px`, `${number}rem` or `${number}em` | `1200px` | Determines the breakpoint for displaying the customizer.              |
| dir              | `ltr` or `rtl`                                 | `ltr`    | The direction of the customizer.                                      |
| disableDirection | boolean                                        | false    | If `true`, the direction section will be removed from the customizer. |

## How to override Customizer

Please refer [here](/docs/guide/customizing-our-component) to customize the Customizer component.

To change the direction based on selected language, e.g., Portuguese ('pt') for LTR and Hebrew ('he') for RTL, you can use the `getLocalePath` function to get the path for the selected language.

Make sure these languages are set up in `src/config/i18n.ts` and `src/utils/getDictionary.ts` files and `src/data/dictionaries` folder.

```tsx title='src/components/customizer/index.tsx'
<div className='flex items-center gap-4'>
  {/* For Portuguese (LTR) */}
  <Link href={getLocalePath(pathName, 'pt')}>
    ...
  </Link>
  {/* For Hebrew (RTL) */}
  <Link href={getLocalePath(pathName, 'he')}>
    ...
  </Link>
</div>
```
