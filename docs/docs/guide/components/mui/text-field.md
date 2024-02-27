---
hide_table_of_contents: true
---

# TextField

### Overview

The `CustomTextField` component build upon the standard MUI `TextField` by introducing specific styling enhancements. These modifications are designed to improve the visual appeal and user experience of the input fields without compromising the comprehensive functionality provided by MUI's default `TextField`.

:::note
While we have applied custom styling to the `TextField` component, it retains compatibility with all standard MUI `TextField` props.
:::

:::caution Warning
The custom modifications come with certain restrictions:

- The `variant` prop is fixed to ensure consistency in the component's enhanced design. As a result, you cannot change the `TextField` variant when using `CustomTextField`.
- The `shrink` property of the `InputLabelProps` prop cannot be modified. This decision was made to maintain a uniform appearance across different implementations of the component.
:::

### Importing the Customized textField

To use the customized `textField` component in your project, import it as follows:

```tsx
import CustomTextField from '@core/components/mui/text-field';
```

### Example

Here's how to integrate the `CustomTextField`.

```tsx
import CustomTextField from '@core/components/mui/text-field';

const Example = () => {
  return (
    <CustomTextField
      label="Email"
      fullWidth
      placeholder="Enter your email"
    />
  )
}
```
:::tip Reference
For more information on the `TextField` component, refer to the official [MUI TextField documentation](https://mui.com/material-ui/react-text-field/).
:::