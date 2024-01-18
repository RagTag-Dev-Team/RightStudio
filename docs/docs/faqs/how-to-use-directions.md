---
hide_table_of_contents: true
---

# How to use directions?

### Implementing Directional Features in Master Template

The Master template supports multilingual capabilities, including handling different directions like left-to-right (LTR) and right-to-left (RTL) for languages such as English and Arabic, respectively. 
This document outlines how to implement directional features in both server-side and client-side environments, as well as specific usage for directional icons.

#### Server Side Implementation
If you want to use the direction in the server-side components, you can use the `direction` prop in the `Layout` component.
When handling the direction on the server side, the direction is typically determined based on the user's selected locale. Here's how it works:

Suppose you want to add a class `text-error` to the `div` element when the direction is `rtl`. You can use the following code snippet:

```tsx title='page.tsx'
// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Locale } from '@configs/i18n'

// Config Imports
import { i18n } from '@configs/i18n'

const Component = ({ params }: { params: { lang: Locale } }) => {
  const direction = i18n.langDirection[params.lang]

  return (
    <div className={classnames({ 'text-error': direction === 'rtl' })}>
      Component
    </div>
  )
}

export default Component

```
  - The `direction` is obtained from the `i18n.langDirection` configuration based on the current language (`params.lang`).
  
  - You can manipulate the `direction` value according to your needs like adding a class or style to the component and so on.


#### Client Side Implementation
On the client side, direction handling can be more dynamic. We are handing this with MUI's `useTheme` hook. Here's how it works:

The below code snippet shows how to add a class `text-error` to the `div` element when the direction is `rtl`:

```tsx title='component.tsx'
// MUI Imports
import { useTheme } from '@mui/material/styles'

const Component = () => {
  // Hooks
  const theme = useTheme()

  return (
    <div className={theme.direction === 'rtl' ? 'text-error' : ''}>
      Component
    </div>
  )
}

export default Component
```
  - Here, the `useTheme` hook from MUI is used to access the current theme's direction property (`theme.direction`) and apply styles or functionality bases on it.

  #### Directional Icons
  For components where icons that change based on the direction, we use the `DirectionalIcon` component. It ensures that the correct icon is displayed based on the direction. Here's how it works:

  :::note
  The `DirectionalIcon` component works in both server-side and client-side environments.
  :::

  ```tsx title='component.tsx' 
  // components Imports
  import DirectionalIcon from '@components/DirectionalIcon'

  const component = () => {
    return (
      ...
      <DirectionalIcon ltrIconClass='ri-arrow-left-s-line' rtlIconClass='ri-arrow-right-s-line' />
      ...
    )
  }

  export default component
  ```
     - `DirectionalIcon` takes `ltrIconClass` and `rtlIconClass` props, specifying the icon classes for LTR and RTL directions, respectively.
     - It automatically switches between these classes based on the current direction.