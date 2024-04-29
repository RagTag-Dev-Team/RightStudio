---
hide_table_of_contents: true
---

# AppReactToastify

This guide describes the integration of `react-toastify`, a library for creating highly customizable toast notifications, with Material-UI in a Next.js application.

## Overview

React Toastify provides an easy way to add toast notifications to your React application. These notifications are highly customizable and can be used for various purposes like success messages, error or information notices and more.

## `AppReactToastify` component

To ensure the toast notifications match the theme's UI, we have created `AppReactToastify` component. `AppReactToastify` is a custom styled component that wraps the `ToastContainer` from React Toastify, providing consistent styling.

## Usage

You need to use the `AppReactToastify` component in the `src/components/Providers.tsx` file to add the Toastify's container and the custom styles for the toast notifications.

```tsx
// src/components/Providers.tsx

import AppReactToastify from '@/libs/styles/AppReactToastify'

const Providers = (/* props */) => {
  return (
    {/* Other providers in the wrapper */}
    <ThemeProvider {/* props of ThemeProvider */}>
      {children}
      <AppReactToastify {/* props of AppReactToastify */} />
    </ThemeProvider>
  )
}

export default Providers
```
