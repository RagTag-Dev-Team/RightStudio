# Avatar

### Overview

For an in-depth guide on the `Avatar` component, please refer to the [MUI Avatar Documentation](https://mui.com/material-ui/react-avatar/).

We've enhanced the standard Avatar component to increase its visual appeal and functionality. Here's a brief overview of the enhancements.

:::tip Note
This documentation covers only the additional properties we've introduced. You're welcome to utilize all the standard props available in MUI's Avatar component as well.
:::

### Avatar Colors

Use the `color` prop so you don't have to use the `sx` prop and write the styles inside it.

Use the MUI colors `primary` | `secondary` | `error` | `info` | `success` | `warning` to create colored avatars.

Here is the example of how to use the colors mentioned above:

```tsx
// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

<CustomAvatar>
  <i className='ri-notification-4-line' />
</CustomAvatar>
<CustomAvatar color='secondary'>
  <i className='ri-add-box-line' />
</CustomAvatar>
<CustomAvatar color='success'>
  <i className='ri-save-2-line' />
</CustomAvatar>
<CustomAvatar color='warning'>
  <i className='ri-notification-4-line' />
</CustomAvatar>
<CustomAvatar color='error'>
  <i className='ri-save-2-line' />
</CustomAvatar>
<CustomAvatar color='info'>
  <i className='ri-add-box-line' />
</CustomAvatar>
```

### Avatar Skins

Our template enhances Avatars with three custom skin options: `filled` | `light` | `light-static`.

**Key Insight:** Note that the distinction between the `light` & `light-static` skins becomes more noticeable in the **Dark Layout**.

Here is the example of how to use the skins mentioned above:

```tsx
// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

<CustomAvatar color='error' skin='filled'>N</CustomAvatar>
<CustomAvatar color='error' skin='light'>OP</CustomAvatar>
<CustomAvatar color='error' skin='light-static'>AB</CustomAvatar>
```

### Avatar Sizes

The `size` prop in our custom Avatar component is straightforward to use. It sets both the height and width of the Avatar, ensuring a consistent and proportionate size.

The `size` prop accepts a numeric value that defines the size of the Avatar in pixels. It will have both its height and width set to the value specified in the `size` prop.

Here's how you can use the `size` prop:

```tsx
// MUI Imports
import Avatar from '@mui/material/Avatar'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

<CustomAvatar size={24} alt='Victor Anderson' />
<Avatar alt='Victor Anderson' /> // If you are not using additional props like size, color, etc, you can use the MUI Avatar component
<CustomAvatar size={56} alt='Victor Anderson' />
```

### Props

| Prop  | Type                                                                                |  Default | Required | Description                     |
|-------|-------------------------------------------------------------------------------------|----------|----------|---------------------------------|
| color | `'primary'` \| `'secondary'` \| `'success'` \| `'error'` \| `'warning'` \| `'info'` | `primary`| No       | Background color of the avatar  |
| skin  | `'filled'` \| `'light'` \| `'light-static'`                                         | `filled` | No       | Skin of the avatar              |
| size  | `number`                                                                            |   `40`   | No       | Size of the avatar (px)         |
