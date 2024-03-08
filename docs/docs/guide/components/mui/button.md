# Button

### Overview

To get a deeper understanding of the Button and ButtonGroup components, you can refer to the MUI documentation for [MUI Button Documentation](https://mui.com/material-ui/react-button/) and [MUI ButtonGroup Documentation](https://mui.com/material-ui/react-button-group/).

We have customized the Button and ButtonGroup components to include a `tonal` variant, offering an additional visual style option for users. This document will guide you through using this new variant.

:::tip Note
This documentation focuses on the `tonal` variant we've introduced. All standard properties from MUI's Button and ButtonGroup components remain applicable.
:::

### Button Tonal Variant

The `tonal` variant for the Button component provides a subtle, tonal effect that enhances the visual hierarchy of actions in your application.

#### Usage

```tsx
// MUI Imports
import Button from '@mui/material/Button'

const TonalButtons = () => (
    <Button variant='tonal'>Primary</Button>
    <Button variant='tonal' color='secondary'>Secondary</Button>
    <Button variant='tonal' disabled>Disabled</Button>
    <Button variant='tonal' href='#'>Link</Button>
);
```

### ButtonGroup Tonal Variant

Grouping buttons with the `tonal` variant provides a cohesive look for related actions, maintaining the tonal styling across all buttons within the group.

#### Usage

```tsx
// MUI Imports
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'

const TonalButtonGroup = () => (
  <ButtonGroup variant='tonal'>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
  </ButtonGroup>
);
```
### Props

| Prop    | Type                                                   | Default   | Required | Description                               |
|---------|--------------------------------------------------------|-----------|----------|-------------------------------------------|
| variant | `'contained'` \| `'outlined'` \| `'text'` \| `'tonal'` | `'text'`  | No       | Set to `'tonal'` to enable the tonal skin |