---
hide_table_of_contents: true
---

# AppReactApexCharts

In this guide, we'll discuss how to effectively utilize `ApexCharts`, a modern charting library, with Material-UI styling in a Next.js application. For more information on ApexCharts, see the [official documentation](https://apexcharts.com/).

## Overview

ApexCharts is a feature-rich charting library that allows for the creation of interactive and visually appealing charts. To ensure these charts blend seamlessly with the Material-UI themed application, we have created a custom wrapper component.

## Styling ApexCharts

We use Material-UI's styling capabilities to apply custom styles to ApexCharts. This is achieved through the `AppReactApexCharts` component, which is a styled `Box` component from Material-UI, adapted specifically for ApexCharts.

### Styled Component: AppReactApexCharts

`AppReactApexCharts` encapsulates an ApexCharts component within a Material-UI Box, applying tailored styles for consistency with the overall theme.

#### Example Code

```tsx
// MUI Imports
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import type { BoxProps } from '@mui/material/Box';

import ReactApexcharts from '@/libs/ApexCharts';

// Third-party Imports
import type { Props } from 'react-apexcharts'

type ApexChartWrapperProps = Props & {
  boxProps?: BoxProps
}

// Define custom styles and properties
const ApexChartWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  // Custom styles for the ApexCharts...
}));

// Component to render the chart
const AppReactApexCharts = (props: ApexChartWrapperProps) => {
  const { boxProps, ...rest } = props;

  return (
    <ApexChartWrapper {...boxProps}>
      <ReactApexcharts {...rest} />
    </ApexChartWrapper>
  );
};

export default AppReactApexCharts;
```

In this code, `AppReactApexCharts` takes in the standard props for an ApexCharts component, along with additional BoxProps for further customization.

## Implementing the Styled ApexCharts

Using `AppReactApexCharts`, you can easily incorporate customized ApexCharts into your application.

Example: Creating a Basic Line Chart

```tsx
import dynamic from 'next/dynamic';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import type { ApexOptions } from 'apexcharts';

const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'));

const ApexLineChart = () => {
  const theme = useTheme();
  const options: ApexOptions = {
    // ApexCharts configuration...
  };

  return (
    <Card>
      <CardHeader
        title='Balance'
        subheader='Commercial networks & enterprises'
        // Additional styling...
      />
      <CardContent>
        <AppReactApexCharts type='line' width='100%' height={400} options={options} series={series} />
      </CardContent>
    </Card>
  );
};

export default ApexLineChart;
```

In this example, `ApexLineChart` is a functional component that renders a line chart using the `AppReactApexCharts` wrapper. It demonstrates how to pass configuration options and data series to the chart.
