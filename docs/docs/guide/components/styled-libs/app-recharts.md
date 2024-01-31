---
hide_table_of_contents: true
---

# AppRecharts

This guide outlines how to use `Recharts`, a composable charting library built on React components, in conjunction with Material-UI styling within a Next.js application. For more information on Recharts, see the [official documentation](https://recharts.org/en-US/).

## Overview

Recharts offers a suite of customizable chart components, making it straightforward to create and render various types of charts in your React applications. The library provides a simple yet flexible way to visualize data.

## Styling Recharts

To ensure the charts from Recharts align with the Material-UI theme of your application, we use `AppRecharts`, a styled component that modifies Recharts components to using Material-UI styles.

### Styled Component: AppRecharts

`AppRecharts` is a styled div component that applies Material-UI theming to Recharts elements, ensuring a consistent look and feel with the rest of your application.

Example: Defining AppRecharts

```tsx
// MUI imports and styling
import { styled } from '@mui/material/styles';

// Styled Components
const AppRecharts = styled('div')(({ theme }) => ({
  // Custom styles for Recharts components...
}));

export default AppRecharts;
```

This code snippet demonstrates how AppRecharts provides Material-UI themed styling to Recharts' graphical elements.

## Implementing the Styled Recharts

Using `AppRecharts`, you can easily incorporate beautifully styled charts into your Next.js application.

Example: Creating an Area Chart

```tsx
// Next Imports
import dynamic from 'next/dynamic'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from '@/libs/Recharts';

const AppRecharts = dynamic(() => import('@/libs/styles/AppRecharts'))

const RechartsAreaChart = () => {
   ...
  // Sample data for the chart
  const data = [
    // Chart data...
  ];

  return (
    <Card>
      <AppRecharts>
        <div>
          <ResponsiveContainer>
            <AreaChart height={350} data={data} >
              {/* Recharts components and configuration */}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </AppRecharts>
    </Card>
  );
};

export default RechartsAreaChart;
```

In this example, `RechartsAreaChart` is a component that uses `AppRecharts` to render an area chart. The chart follows the Material-UI theme.
