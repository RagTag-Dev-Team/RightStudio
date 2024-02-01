# Horizontal

## Overview

You may refer to the custom-inputs examples from the [here](/docs/user-interface/form-elements/custom-inputs).

We have created custom radio and checkbox components to save your time and make it easier for you. You can find detailed explanations of the Radio component in the [MUI Radio Docs](https://mui.com/material-ui/react-radio-button/) and the Checkbox component in the [MUI Checkbox Docs](https://mui.com/material-ui/react-checkbox/).

We have already added these components in the `MUI` components. More information on how to create `Themeable component` of MUI can be found [here](https://mui.com/material-ui/guides/themeable-component/#introduction).

The Horizontal custom input component, found at `src/@core/components/custom-inputs/Horizontal.tsx`.

## Types

The `CustomInputHorizontalProps` type defines the props accepted by the component:

```ts title='src/@core/components/custom-inputs/types'
// Types of Horizontal Custom Inputs
export type CustomInputHorizontalData = {
  value: string
  content?: ReactNode
  isSelected?: boolean
} & (
  | {
      meta: ReactNode
      title: ReactNode
    }
  | {
      meta?: never
      title?: never
    }
  | {
      title: ReactNode
      meta?: never
    }
)
export type CustomInputHorizontalProps = {
  name: string
  color?: ThemeColor
  gridProps?: GridProps
  data: CustomInputHorizontalData
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

To use the `CustomInputHorizontal` component in your project, follow this example:

```tsx
// Import the necessary components and types
import type { CustomInputHorizontalData } from '@core/components/custom-inputs/types'
import CustomInputHorizontal from '@core/components/custom-inputs/Horizontal'

const data: CustomInputHorizontalData[] = [
  {
    title: 'Standard 3-5 Days',
    meta: 'Free',
    content: 'Friday, 15 Nov - Monday, 18 Nov',
    isSelected: true,
    value: 'standard'
  },
  // Additional data objects
  // ...
]

const Component = () => {
  return (
    ...
    <CustomInputHorizontal
      type="radio"
      key={index}
      data={item}
      gridProps={{ xs: 12 }}
      selected={selectedOption}
      name="custom-radios-basic"
      handleChange={handleOptionChange}
    />
    ...
  );
};

export default Component
```
