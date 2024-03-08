# Chip

## Overview

To understand the `Chip` component better, please refer to the [MUI Chip Documentation](https://mui.com/material-ui/react-chip/).

Chip component is slightly modified to make it more attractive and easier to use. Go ahead and check out the changes.

:::tip Note
This documentation covers only the additional properties we've introduced. You're welcome to utilize all the standard props available in MUI's Chip component as well.
:::

## Chip Skins

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

## Custom Chip

The `@core/components/mui/Chip` component is an extension of the Material-UI (MUI) `Chip` component, designed to include an additional `round` property. This property allows for the customization of the chip's border-radius, offering a more rounded appearance when enabled.

Here's a basic example of using `CustomChip` component:

```tsx
// MUI Imports
import Chip from '@mui/material/Chip'

<CustomChip round='true' label='Primary' color='primary' />
<CustomChip round='true' label='Secondary' color='secondary' />
<CustomChip round='true' label='Success' color='success' />
<CustomChip round='true' label='Error' color='error' />
<CustomChip round='true' label='Warning' color='warning' />
<CustomChip round='true' label='Info' color='info' />
```

### Props

| Prop    | Type                   | Default   | Description                                                |
|---------|------------------------|-----------|------------------------------------------------------------|
| round   | `'true'` \| `'false'`  | `'false'` | If `'true'`, chips will have a more rounded border-radius. |