---
hide_table_of_contents: true
---

# AppFullCalendar

This guide explains how to incorporate the @fullcalendar library within a Next.js application using Material-UI for styling. For detailed features of FullCalendar, visit the [official documentation](https://fullcalendar.io/).

## Overview

`@fullcalendar` is a powerful and flexible calendar library that can be customized to fit various use cases. In this project, we have integrated it with Material-UI to enhance its appearance and functionality.

## Styling FullCalendar

We use Material-UI's styling tools to give FullCalendar a custom look. Our approach is to wrap the FullCalendar in a styled `div` element, named `AppFullCalendar`, created using Material-UI's `styled` function.

### Styled Component: AppFullCalendar

`AppFullCalendar` is a styled `div` element specifically tailored for FullCalendar. It includes styles for various elements such as the toolbar, calendar views, events, and responsive design adjustments. These styles harmonize with Material-UI's theme, ensuring a consistent design language throughout the application.

#### Example Code

```tsx
// MUI imports
import { styled } from '@mui/material/styles'
import type { Theme } from '@mui/material/styles'

// Styled Components
const AppFullCalendar = styled('div')(({ theme }: { theme: Theme }) => ({
  // Style definitions...
}))

export default AppFullCalendar
```

This code creates a component `AppFullCalendar` that wraps the FullCalendar component and applies the defined styles.

## Implementing the Styled Calendar

To use the styled `FullCalendar`, wrap the CalendarWrapper component (which contains the FullCalendar instance) within `AppFullCalendar`.

```tsx
import Card from '@mui/material/Card'
import CalendarWrapper from '@views/apps/calendar/CalendarWrapper'
import AppFullCalendar from '@/libs/styles/AppFullCalendar'

const CalendarApp = async () => {
  const res = (await fetchEvents()) || []
  return (
    <Card>
      <AppFullCalendar className='app-calendar'>
        <CalendarWrapper events={res.events} />
      </AppFullCalendar>
    </Card>
  )
}

export default CalendarApp
```

The `CalendarWrapper` is then rendered inside the `AppFullCalendar` to apply the custom styles.

By following this guide, you can integrate and style FullCalendar in your Next.js application with Material-UI for a cohesive and customizable user interface.
