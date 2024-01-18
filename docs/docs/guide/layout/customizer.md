# Customizer

## Overview

Customizer is a tool in your app that lets users change how the app looks and feels. They can pick different colors, switch between light or dark mode, choose the layout style (like vertical or side-by-side), and set the text direction (left-to-right or right-to-left).

:::warning Using Customizer in Starter Kit?
While adding customizer in the starter-kit, user must add the disableDirection prop in the Customizer component otherwise it will show LTR and RTL inside the customizer. If user has added more than 1 languages or implemented i18n in Starter Kit and one of the languages is RTL, they can remove the disableDirection prop.
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

| Name             | Type                                                            | Default | Description                                              |
| ---------------- | ----------------------------------------------------------------| ------- | ---------------------------------------------------------|
| breakpoint       | Breakpoint, 'xxl', `${number}px`, `${number}rem`, `${number}em` | 'lg'    | Determines the breakpoint for displaying the customizer. |
| dir              | 'ltr', 'rtl'                                                    | 'ltr'   | The direction of the customizer.                         |
| disableDirection | boolean                                                         | false   | If true the direction section will be removed.           |

The `Breakpoint` type is defined as:

```tsx
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
```

## How to override Customizer

Want to change how Customizer works for your needs? Here's how:

1. It is not recommended to make changes in the `src/@core` folder, so create a new file (say `src/components/customizer/index.tsx`). Copy the code from `src/@core/ components/custmoizer/index.tsx` file, paste it into the new file, and make necessary modifications

2. Import the new customizer component in `src/app/[lang]/(dashboard)/layout.tsx` file and replace the `Customizer` component with the new customizer component.

3. If you want to apply the styles as we have in the default customizer, you can copy the styles from `src/@core/components/customizer/styles.module.css` file and paste it into the `src/components/customizer/styles.module.css` file. Then, import the `styles.module.css` file in `src/components/customizer/index.tsx` file

### Usage

To change the direction based on selected language, e.g., Portuguese ('pt') for LTR and Hebrew ('he') for RTL:

Make sure these languages are set up in `src/config/i18n.ts` and `src/utils/get-dictionary` files and `src/data/dictionaries` folder.

```tsx
<div className='flex items-center gap-4'>
  {/* For Portuguese (LTR) */}
  <Link href={getLocalePath(pathName, 'pt')}>
    {/* Portuguese Link Here */}
  </Link>
  {/* For Hebrew (RTL) */}
  <Link href={getLocalePath(pathName, 'he')}>
    {/* Hebrew Link Here */}
  </Link>
</div>
```
