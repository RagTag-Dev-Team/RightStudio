# Image

## Overview

You may refer to the custom-inputs examples from the [here](/docs/user-interface/form-elements/custom-inputs).

We have created custom radio and checkbox components to save your time and make it easier for you. You can find detailed explanations of the Radio component in the [MUI Radio Docs](https://mui.com/material-ui/react-radio-button/) and the Checkbox component in the [MUI Checkbox Docs](https://mui.com/material-ui/react-checkbox/).

We have already added these components in the `MUI` components. More information on how to create `Themeable component` of MUI can be found [here](https://mui.com/material-ui/guides/themeable-component/#introduction).

The Image custom input component, found at `src/@core/components/custom-inputs/image.tsx`.

## Types

```ts title='src/@core/components/custom-inputs/types'
// Types of Custom Inputs with Images
export type CustomInputImgData = {
  alt?: string
  value: string
  img: ReactNode
  isSelected?: boolean
}
export type CustomInputImgProps = {
  name: string
  color?: ThemeColor
  gridProps: GridProps
  data: CustomInputImgData
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

This configuration supports both radio and checkbox types and allows for extensive customization to match the specific needs of your application.

## Usage Example

Here's an example of how to implement the `CustomInputImg` component:

```tsx
// Import types and components
import type { CustomInputImgData } from '@core/components/custom-inputs/types'
import CustomInputImg from '@core/components/custom-inputs/CustomCheckboxImg'

const Component = () => {
  return (
    <CustomInputImg
      type='radio'
      key={index}
      data={item}
      selected={selected}
      name='custom-radios-img'
      handleChange={handleChange}
      gridProps={{ sm: 4, xs: 12 }}
    />
  );
};

export default Component
```
