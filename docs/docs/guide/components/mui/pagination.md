# Pagination

### Overview

To understand the `Pagination` component better, please refer to the [MUI Pagination Documentation](https://mui.com/material-ui/react-pagination/).

We've enhanced our custom MUI `Pagination` component by introducing a new `variant='tonal'` option, offering more versatility and a refreshed look. This document highlights the enhancements we've made to the Pagination component.

:::tip Note
This documentation covers only the additional properties we've introduced. All standard props provided by MUI's Pagination component are also available for use.
:::

### Pagination Skins

The tonal variant can be applied to any `Pagination` component by setting the `variant='tonal'` prop. This new skin is designed to seamlessly integrate with your existing theme while offering an additional layer of visual distinction to the Pagination component.

### Usage

Here is an example of how to use the new tonal variant:

```tsx
// MUI Imports
import Pagination from '@mui/material/Pagination'

<Pagination count={10} color='primary' variant='tonal' />
<Pagination count={10} color='secondary' variant='tonal' />
```

### Props

We've extended the `Pagination` component's props to include our custom variant option:

| Prop    | Type                                  | Default   | Required | Description                                         |
|---------|---------------------------------------|-----------|----------|-----------------------------------------------------|
| variant | `'text'` \| `'outlined'` \| `'tonal'` | `'text'`  | No       | Set to 'tonal' to apply the tonal theme to the item |
