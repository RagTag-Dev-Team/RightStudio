# Vertical

## Overview

You may refer to the custom-inputs examples from the [here](/docs/user-interface/form-elements/custom-inputs).

We have created custom radio and checkbox components to save your time and make it easier for you. You can find detailed explanations of the Radio component in the [MUI Radio Docs](https://mui.com/material-ui/react-radio-button/) and the Checkbox component in the [MUI Checkbox Docs](https://mui.com/material-ui/react-checkbox/).

We have already added these components in the `MUI` components. More information on how to create `Themeable component` of MUI can be found [here](https://mui.com/material-ui/guides/themeable-component/#introduction).

The Vertical Custom Input is a component designed to provide a vertically aligned user interface for radio and checkbox inputs which is located at `src/@core/components/custom-inputs/Vertical.tsx`.

## Types

```ts title='src/@core/components/custom-inputs/types'
// Types of Vertical Custom Inputs
export type CustomInputVerticalData = {
  value: string
  title?: ReactNode
  content?: ReactNode
  isSelected?: boolean
  asset?: ReactNode
}
export type CustomInputVerticalProps = {
  name: string
  color?: ThemeColor
  gridProps?: GridProps
  data: CustomInputVerticalData
} & (
  | {
      type: 'checkbox'
      selected: string[]
      handleChange: (value: string) => void
    }
  | {
      type: 'radio'
      selected: string
      handleChange: (value: string | ChangeEvent<HTMLInputElement>) => void
    }
)
```

## Usage Example

Here's an example of how the `CustomInputVertical` component can be implemented in a project:

```tsx
// Import components and types
import type { CustomInputVerticalData } from '@core/components/custom-inputs/types'
import CustomInputVertical from '@core/components/custom-inputs/Vertical'

const data: CustomInputVerticalData[] = [
  {
    title: 'I am the Builder',
    value: 'builder',
    content: 'List property as Builder, list your project and get highest reach.',
    asset: 'ri-home-5-line',
    isSelected: true
  }
  // Additional data objects
]

const Component = () => {
  return (
    ...
    <CustomInputVertical
      type='radio'
      key={index}
      gridProps={{ sm: 4, xs: 12 }}
      selected={selectedOption}
      name='custom-radios-basic'
      handleChange={handleOptionChange}
      data={item}
    />
    ...
  );
};

export default Component
```
