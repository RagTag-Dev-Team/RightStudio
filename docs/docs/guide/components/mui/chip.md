# Chip

### Overview

To understand the `Chip` component better, please refer to the [MUI Chip Documentation](https://mui.com/material-ui/react-chip/).

Chip component is slightly modified to make it more attractive and easier to use. Go ahead and check out the changes.

:::tip Note
This documentation covers only the additional properties we've introduced. You're welcome to utilize all the standard props available in MUI's Chip component as well.
:::

### Chip Skins

We've introduced a new `variant='tonal'` option to the MUI Chip, adding the unique tonal skin for enhanced visual appeal.

Here is an example of how to use the skin:

```tsx
// MUI Imports
import Chip from '@mui/material/Chip'

<Chip label='Primary' color='primary' variant='tonal' />
<Chip label='Secondary' color='secondary' variant='tonal' />
<Chip label='Success' color='success' variant='tonal' />
<Chip label='Error' color='error' variant='tonal' />
<Chip label='Warning' color='warning' variant='tonal' />
<Chip label='Info' color='info' variant='tonal' />
```

### Props

| Prop    | Type                                     | Default      | Required | Description                               |
|---------|------------------------------------------|--------------|----------|-------------------------------------------|
| variant | `'filled'` \| `'outlined'` \| `'tonal'`  | `'filled'`   | No       | Set to `'tonal'` to enable the tonal skin |
