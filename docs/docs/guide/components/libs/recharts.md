# Recharts

This guide will help you add Recharts, a popular charting library, to your Next.js project.

## How to Set Up Recharts

Here's a simple way to get ReCharts working in your Next.js project.

### Step 1: Create a Client-Side Only Component for Recharts

To simplify the usage of Recharts, we've employed the 'use client' directive in this component. This ensures that the Recharts library is utilized as a client-side component. This approach eliminates the need for repeatedly writing 'use client' when using Recharts in your project.

```jsx
'use client';

// Exporting Recharts for client-side use
export * from 'recharts';
```

### Step 2: Using Recharts in Your Project

Now that we have our client-side only setup, you can use Recharts in your Next.js project. Just import the Recharts components you need:

```jsx
import { LineChart } from '@/libs/Recharts';

// Now you can use LineChart, Line, etc., in your project
```

This way, you can add various Recharts components, like LineChart, BarChart, etc., to your Next.js application without any rendering problems.

And that's it! Integrating Recharts into your Next.js project is simple with this setup. Now you can enjoy creating interactive charts on your website, with the assurance that they'll work seamlessly in the Next.js framework.
