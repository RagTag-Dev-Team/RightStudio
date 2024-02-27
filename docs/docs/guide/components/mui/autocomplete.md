# Autocomplete

### Overview

The `CustomAutocomplete` component extends the functionality of MUI's `Autocomplete`, offering a more aesthetically pleasing and user-friendly interface.
The `CustomAutocomplete` component maintains all the functionality of the standard MUI `Autocomplete` component.

:::note
While customs styles have been applied to the `Autocomplete` component to improve the visual presentation, it retains full compatibility with the default MUI `Autocomplete` props.
:::

:::caution Warning
Certain restrictions have been applied to the `CustomAutocomplete` component:

- The `ref` prop and `PaperComponent` cannot be altered in the `CustomAutocomplete`. These customizations are part of the design enhancement and are fixed to maintain the component's intended appearance.
  :::

### Importing the Customized Autocomplete

```tsx
import CustomAutocomplete from "@core/components/mui/autocomplete";
```

### Example

Here's how to integrate the `CustomAutocomplete`.

```tsx
// Component Imports
import CustomTextField from "@core/components/mui/text-field";
import CustomAutocomplete from "@core/components/mui/autocomplete";

// Data Imports
import { top100Films } from "../../../data/top100films";

const Example = () => {
  return (
    <CustomAutocomplete
      fullWidth
      options={top100Films}
      id="autocomplete-custom"
      getOptionLabel={(option) => option.title || ""}
      renderInput={(params) => (
        <CustomTextField
          placeholder="Placeholder"
          {...params}
          label="Default"
        />
      )}
    />
  )
}

export default Example
```
:::tip Reference
For more information on the `Autocomplete` component, refer to the official [MUI Autocomplete documentation](https://mui.com/material-ui/react-autocomplete/).
:::