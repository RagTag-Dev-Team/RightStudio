# IconButton

### Overview

:::warning
We developed the `CustomIconButton` component specifically to cater to diverse UI requirements. Please use it solely as an IconButton and avoid using text as content.
:::

To understand the `Button` component better, please refer to the  [MUI Button Documentation](https://mui.com/material-ui/react-button/).

The `CustomIconButton` component extends the capabilities of MUI's Button component, offering enhanced customization options for developers. This documentation aims to guide you through the usage of the `CustomIconButton` component, including its props and how to implement various props.

:::tip Note
This documentation covers only the additional properties we've introduced. You're welcome to utilize all the standard props available in MUI's `Button` component as well.
:::

### Usage

The default `CustomIconButton` component looks like the standard MUI's IconButton component even though you pass the `variant` prop (from the MUI's Button component). The `CustomIconButton` component is designed to be used with icons only. You can pass the icon as a child to the `CustomIconButton` component.

If you pass the `color` prop (from the MUI's Button component) to the `CustomIconButton` component, it will override the color of the icon and it will work according to the specified `variant` (from the MUI's Button component).

Here is the example of how to use the `CustomIconButton` component:

```tsx
// MUI Imports
import CustomIconButton from '@core/components/mui/IconButton'

<CustomIconButton>
  <i className='ri-camera-lens-fill' />
</CustomIconButton>
<CustomIconButton color='primary' variant='outlined'>
  <i className='ri-camera-lens-fill' />
</CustomIconButton>
<CustomIconButton color='secondary' size='small'>
  <i className='ri-camera-lens-fill' />
</CustomIconButton>
<CustomIconButton color='error' disabled>
  <i className='ri-camera-lens-fill' />
</CustomIconButton>
<CustomIconButton color='info' variant='contained'>
  <i className='ri-camera-lens-fill' />
</CustomIconButton>
<CustomIconButton color='success' size='large'>
  <i className='ri-camera-lens-fill' />
</CustomIconButton>
<CustomIconButton color='warning' size='large' variant='contained'>
  <i className='ri-camera-lens-fill' />
</CustomIconButton>
```
