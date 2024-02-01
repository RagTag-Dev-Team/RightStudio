---
hide_table_of_contents: true
---

# AppReactDatepicker

This guide covers how to use `react-datepicker`, a flexible and customizable date-picker library, in conjunction with Material-UI's styling in a Next.js application. For more information on React-Datepicker, see the [official documentation](https://reactdatepicker.com/).

## Overview

React-Datepicker is a versatile and highly configurable date-picker library for React. It provides a range of options and styles to create a date-picker that suits various UI requirements. To align it with Material-UI themes, we have wrapped it in a custom component.

## Styling React-Datepicker

We have styled React-Datepicker using Material-UI's capabilities. The `AppReactDatepicker` component is a styled Material-UI `Box` that contains the React-Datepicker, applying specific styles to integrate it seamlessly into Material-UI themed interfaces.

### Styled Component: AppReactDatepicker

`AppReactDatepicker` wraps the React-Datepicker component, providing a consistent look with the Material-UI theme. This styling covers various elements of the date-picker, including the header, navigation, and days grid.

Example: Defining `AppReactDatepicker`

```tsx
// React Imports
import type { ComponentProps } from 'react'

// MUI Imports
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// Third-Party Imports
import ReactDatePickerComponent from 'react-datepicker';

// Styles
import 'react-datepicker/dist/react-datepicker.css';

type Props = ComponentProps<typeof ReactDatePickerComponent> & {
  boxProps?: BoxProps
}

// Styled Components
const StyledReactDatePicker = styled(Box)<BoxProps>(({ theme }) => ({
  // Custom styles for React-Datepicker...
}));

// Component to render the date-picker
const AppReactDatepicker = (props: Props) => {
  const { boxProps, ...rest } = props;

  return (
    <StyledReactDatePicker {...boxProps}>
      <ReactDatePickerComponent {...rest} />
    </StyledReactDatePicker>
  );
};

export default AppReactDatepicker;
```

This code sets up `AppReactDatepicker` to provide a Material-UI themed appearance to React-Datepicker.

## Implementing the Styled React-Datepicker

Using `AppReactDatepicker`, integrating a styled date-picker into your application is straightforward.

Example: Basic Date Picker Implementation

```tsx
import { useState } from 'react';
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker';
import CustomInput from './PickersCustomInput';

const PickersBasic = () => {
  const [date, setDate] = useState<Date | null | undefined>(new Date());

  return (
    <AppReactDatepicker
      selected={date}
      onChange={(date: Date) => setDate(date)}
      placeholderText='Click to select a date'
      customInput={<CustomInput label='Basic' />}
    />
  );
};

export default PickersBasic;
```

In this example, `PickersBasic` is a functional component that uses `AppReactDatepicker` to render a date-picker. It showcases how to use custom inputs and handle date changes.
