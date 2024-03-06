---
title: Tabs (Styled)
---

# Tabs

### Overview

To understand the `Tabs` component better, please refer to the [MUI Tabs Documentation](https://mui.com/material-ui/react-tabs/).

Tabs component is modified to make it more attractive and easier to use.

:::tip Note
This documentation covers only the additional properties we've introduced. You're welcome to utilize all the standard props available in MUI's Tabs component as well.
:::

### Tabs pills

You can use the `pill = 'true'` prop to get the pills style. Here is an example of how to use the pills:

```tsx
// MUI Imports
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'

// Component Imports
import CustomTabList from '@core/components/mui/TabList'

<TabContext value={value}>
  <CustomTabList pill='true' onChange={handleChange} aria-label='customized tabs example'>
    <Tab value='1' label='Tab 1' />
    <Tab value='2' label='Tab 2' />
    <Tab value='3' label='Tab 3' />
  </CustomTabList>
  <TabPanel value='1'>
    <Typography>
      ...
    </Typography>
  </TabPanel>
  <TabPanel value='2'>
    <Typography>
      ...
    </Typography>
  </TabPanel>
  <TabPanel value='3'>
    <Typography>
     ...
    </Typography>
  </TabPanel>
</TabContext>
```

### Props

| Prop  | Type                                                                                | Default   | Required | Description                                             |
|-------|-------------------------------------------------------------------------------------|-----------|----------|---------------------------------------------------------|
| color | `'primary'` \| `'secondary'` \| `'success'` \| `'error'` \| `'warning'` \| `'info'` | `primary` | No       | Color theme for badge (works only when `pill = 'true'`) |
| pill  | `'true'` \| `'false'`                                                               | false     | No       | Set to 'true' to enable the pills style                 |

### Styled Component

In our implementation, we've gone a step beyond the standard `Tabs` component by incorporating it into a styled component. This approach allows us to add custom styles, enhancing the visual appeal and user experience of the tabs.

Our modifications ensure that the `Tabs` not only functions optimally but also aligns aesthetically with the overall design of our application.