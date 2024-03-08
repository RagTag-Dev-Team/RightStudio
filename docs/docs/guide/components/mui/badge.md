# Badge

### Overview

To fully understand the `Badge` component, please explore the [MUI Badge Documentation](https://mui.com/material-ui/react-badge/).

We've enhanced our custom MUI Badge component by introducing new properties, offering more versatility and a refreshed look. Go ahead and check out the changes.

:::tip Note
This documentation covers only the additional properties we've introduced. You're welcome to utilize all the standard props available in MUI's Badge component as well.
:::

### Badge Skins

There is only one skin, you need to add `tonal='true'` to the `Badge` component to get the tonal skin.

Here is an example of how to use the skin:

```tsx
// MUI Imports
import Avatar from '@mui/material/Avatar';

// Component Imports
import CustomBadge from '@core/components/mui/Badge';

<CustomBadge color='primary' badgeContent={4} tonal='true'>
  <Avatar alt='User Avatar' />
</CustomBadge>
<CustomBadge color='secondary' badgeContent={4} tonal='true'>
  <Avatar alt='User Avatar' />
</CustomBadge>
<CustomBadge color='success' badgeContent={4} tonal='true'>
  <Avatar alt='User Avatar' />
</CustomBadge>
<CustomBadge color='error' badgeContent={4} tonal='true'>
  <Avatar alt='User Avatar' />
</CustomBadge>
<CustomBadge color='warning' badgeContent={4} tonal='true'>
  <Avatar alt='User Avatar' />
</CustomBadge>
<CustomBadge color='info' badgeContent={4} tonal='true'>
  <Avatar alt='User Avatar' />
</CustomBadge>
```

### Props

| Prop  | Type                  | Default   | Required | Description                            |
|-------|-----------------------|-----------|----------|----------------------------------------|
| tonal | `'true'` \| `'false'` | `'false'`   | No       | Set to 'true' to enable the tonal skin |
