---
hide_table_of_contents: true
---

# Select

The customized `CustomTextField` component leverages MUI's built-in `select` prop to create select functionality, offering a dropdown select option that combines MUI's functionality with our custom aesthetics.

### Overview

To use the `CustomTextField` as a select dropdown, you simply need to pass the `select` prop to the component. The `select` prop makes the text field use the `Select` component internally.

Additionally, `SelectProps` allows for the further customization of the select text field, accepting an object with some properties that can be used to customize the select component.

### How to use

```tsx
import CustomTextField from "@core/components/mui/text-field";
import MenuItem from "@mui/material/MenuItem";

const selectCustom = () => {
  return (
    <CustomTextField
      select
      fullWidth
      defaultValue=""
      label="Default"
      id="custom-select"
      SelectProps={{
        displayEmpty: true,
        multiple: true
      }}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </CustomTextField>
  )
}

export default selectCustom;
```
