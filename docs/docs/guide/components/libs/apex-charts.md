---
hide_table_of_contents: true
---

# Apex Charts

This page helps you add ApexCharts, a tool for making charts, to your Next.js website. ApexCharts is great for creating interactive charts, but it needs a bit of setup to work in Next.js since it only works in the browser.

## How to Set Up ApexCharts

Here's a simple way to get ApexCharts working in your Next.js project.

We'll start by making a special component for the charts. This lets us use ApexCharts without writing extra code every time.

```jsx
'use client';

import dynamic from 'next/dynamic';

// This code helps load ApexCharts for browser only
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default Chart;
```

This code makes sure that ApexCharts only runs in the browser, not on the server.

Now, you can use this Chart component in your project. This way, you can easily add charts to your website without worrying about server or browser issues.

And that's it! This method keeps things simple and works well with how Next.js builds websites.
