---
hide_table_of_contents: true
---

# AppReactToastify

This guide describes the integration of `react-toastify`, a library for creating highly customizable toast notifications, with Material-UI in a Next.js application.

## Overview

React Toastify provides an easy way to add toast notifications to your React application. These notifications are highly customizable and can be used for various purposes like success messages, error alerts, or information notices.

## Styling React Toastify

To ensure the toast notifications match the Material-UI theme of your application, we have created `AppReactToastify`, a styled component that applies Material-UI styling to React Toastify's elements.

### Styled Component: AppReactToastify

`AppReactToastify` is a custom styled component that wraps the ToastContainer from React Toastify, providing consistent styling with your Material-UI theme.

Defining AppReactToastify

```tsx
// MUI Imports
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import type { BoxProps } from '@mui/material/Box'

import { ToastContainer } from 'react-toastify';
import type { ToastContainerProps } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';

type Props = ToastContainerProps & {
  boxProps?: BoxProps
}

// Styled Components
const ToastifyWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  // Custom styles for React Toastify...
}));

// Component to render toast notifications
const AppReactToastify = (props: Props) => {
  const { boxProps, ...rest } = props;

  return (
    <ToastifyWrapper {...boxProps}>
      <ToastContainer {...rest} />
    </ToastifyWrapper>
  );
};

export default AppReactToastify;
```

This code snippet shows how `AppReactToastify` applies custom styles to the React Toastify notifications, ensuring they integrate smoothly with the Material-UI theme.

## Implementing the Styled React Toastify

In a Providers File
In a typical Next.js application, you might use `AppReactToastify` within a Providers file. This approach ensures toast notifications are available throughout your application and styled according to the Material-UI theme.

Example: Using AppReactToastify in a Providers File

```tsx
// Providers file code
import AppReactToastify from '@/libs/styles/AppReactToastify';

const MyApp = ({ Component, pageProps }) => {
  return (
    // Other providers...
    <AppReactToastify>
      {/* Rest of your application components */}
      <Component {...pageProps} />
    </AppReactToastify>
  );
};

export default MyApp;
```

In this example, `AppReactToastify` is used to wrap the main component of your application, allowing toast notifications to be displayed on any page.

By integrating `AppReactToastify` into your Next.js application, you enable the use of toast notifications that are consistent with the Material-UI theme, enhancing the user interface with aesthetically pleasing and functional alerts and messages.
