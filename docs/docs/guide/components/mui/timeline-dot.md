# TimelineDot

### Overview

For comprehensive details on the `TimelineDot` component, refer to the [MUI Timeline Documentation](https://mui.com/material-ui/react-timeline/).

We have extended MUI's `TimelineDot` component to include a `variant='tonal'` option. This enhancement is aimed at boosting the aesthetic appeal of the `TimelineDot` with a unique tonal theme, adding an extra layer of visual interest.

:::tip Note
This documentation focuses on the newly introduced `variant='tonal'`. All standard props provided by MUI's `TimelineDot` component remain accessible.
:::

### TimelineDot Skins

The `variant='tonal'` option gives the `TimelineDot` component a unique tonal effect, making it visually distinct and subtly enhancing its appearance compared to the standard look.

### Usage

Here's how to apply the `variant='tonal'` to the `TimelineDot`:

```tsx
// MUI Imports
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'

<Timeline position='alternate'>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color='primary' variant='tonal'>
        <i className='tabler-photo' />
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>Primary</TimelineContent>
  </TimelineItem>
  <TimelineItem>
    <TimelineSeparator>
      <TimelineDot color='success' variant='tonal'>
        <i className='tabler-star' />
      </TimelineDot>
    </TimelineSeparator>
    <TimelineContent>Success</TimelineContent>
  </TimelineItem>
</Timeline>
```

### Props

We've extended the `TimelineDot` component's props to include our custom variant option:

| Prop    | Type                                    | Default    | Required | Description                                     |
|---------|-----------------------------------------|------------|----------|-------------------------------------------------|
| variant | `'filled'` \| `'outlined'` \| `'tonal'` | `'filled'` | No       | Set to 'tonal' to apply the unique tonal effect |
