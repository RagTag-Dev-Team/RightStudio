# Card Statistics

## Overview

We have created different versions of card components to make it easier for you to show your statistics neatly.

## Card Statistics Horizontal with subtitle

The `HorizontalWithSubtitle` component enriches the presentation of statistics by incorporating a horizontal layout with additional context provided by subtitles. This component is specifically designed for displaying comprehensive metrics, such as user engagement figures, financial statistics, or any key performance indicators, with an emphasis on changes or trends over time.

This component is placed inside the `src/components/card-statistics/HorizontalWithSubtitle.tsx` file. You may refer to the `src/views/apps/user/list/UserListCards.tsx` file for it's usage.

### Usage

Here's an example of how to use the `HorizontalWithSubtitle` component:

```tsx
import HorizontalWithSubtitle from "@components/card-statistics/HorizontalWithSubtitle";

const Component = () => {
  return (
    <HorizontalWithSubtitle
      title="Session"
      subtitle="Total User"
      stats="21,459"
      avatarIcon="tabler-user"
      avatarColor="primary"
      trend="positive"
      trendNumber="29%"
    />
  );
};

export default Component;
```

### Props

| Prop        | Type                                                                                | Required | Description                            |
| ----------- | ----------------------------------------------------------------------------------- | -------- | -------------------------------------- |
| title       | `string`                                                                            | Yes      | The title displayed on the card        |
| subtitle    | `string`                                                                            | Yes      | The subtitle displayed on the card     |
| stats       | `string`                                                                            | Yes      | The primary statistic number displayed |
| avatarIcon  | `string`                                                                            | Yes      | Icon to display inside the avatar      |
| trend       | `'positive'` \| `'negative'`                                                        | Yes      | The trend of the statistic             |
| trendNumber | `string`                                                                            | Yes      | Numerical value indicating the trend   |
| avatarColor | `'primary'` \| `'secondary'` \| `'success'` \| `'error'` \| `'warning'` \| `'info'` | No       | Color theme for the avatar             |

## Card Statistics Horizontal with border

The `HorizontalWithBorder` component is designed to enhance the presentation of statistics by incorporating a horizontal layout with a bordered card design. This component is ideal for displaying comprehensive metrics, such as user engagement figures, financial statistics, or any key performance indicators, with an emphasis on changes or trends over time. The border and shadow effects add a visually appealing dynamic when users interact with the component.

This component is placed inside the `src/components/card-statistics/HorizontalWithBorder.tsx` file. You may refer to the `src/views/apps/logistics/dashboard/LogisticsStatisticsCard.tsx` file for its usage.

### Usage

Here's an example of how to use the `HorizontalWithBorder` component:

```tsx
import HorizontalWithBorder from "@components/card-statistics/HorizontalWithBorder";

const Component = () => {
  return (
    <HorizontalWithBorder
      title="Active Users"
      stats={15278}
      change={12.5}
      avatarIcon="ri-user-line"
      color="success"
    />
  );
};

export default Component;
```

### Props

| Prop        | Type                                                                                | Required | Description                            |
| ----------- | ----------------------------------------------------------------------------------- | -------- | -------------------------------------- |
| title       | `string`                                                                            | Yes      | The title displayed on the card        |
| stats       | `number`                                                                            | Yes      | The primary statistic number displayed |
| trendNumber | `number`                                                                            | Yes      | The change in the statistic            |
| avatarIcon  | `string`                                                                            | Yes      | Icon to display inside the avatar      |
| color       | `'primary'` \| `'secondary'` \| `'success'` \| `'error'` \| `'warning'` \| `'info'` | No       | Color theme for the avatar             |

## Card Statistics Horizontal with avatar

The `HorizontalWithAvatar` component is designed to present statistical data in a horizontal layout, enhanced by a customizable avatar. This component is ideal for showcasing key metrics such as user statistics, performance indicators, or financial data, with an emphasis on visually appealing and informative displays.

This component is located in the `src/components/card-statistics/HorizontalWithAvatar.tsx` file. For usage examples, refer to the `src/views/apps/ecommerce/referrals/HorizontalStatisticsCard.tsx` file.

### Usage

Here's an example of how to use the `HorizontalWithAvatar` component:

```tsx
import HorizontalWithAvatar from "@components/card-statistics/HorizontalWithAvatar";

const ExampleComponent = () => {
  return (
    <HorizontalWithAvatar
      stats="$15,362"
      title="Total Earning"
      avatarIcon="ri-money-dollar-circle-line"
      avatarColor="primary"
      avatarVariant="rounded"
      avatarSkin="light"
      avatarSize={42}
    />
  );
};

export default ExampleComponent;
```

### Props

| Prop           | Type                                                                                | Required | Description                               |
| -------------- | ----------------------------------------------------------------------------------- | -------- | ----------------------------------------- |
| stats          | `string`                                                                            | Yes      | The statistic value displayed on the card |
| title          | `string`                                                                            | Yes      | The title displayed on the card           |
| avatarIcon     | `string`                                                                            | Yes      | Icon to display inside the avatar         |
| avatarColor    | `'primary'` \| `'secondary'` \| `'success'` \| `'error'` \| `'warning'` \| `'info'` | No       | Color theme for the avatar                |
| avatarVariant  | `'circular'` \| `'rounded'` \| `'square'`                                           | No       | Variant for the avatar                    |
| avatarSkin     | `'light'` \| `'filled'` \| `'light-static'`                                         | No       | Skin for the avatar                       |
| avatarSize     | `number`                                                                            | No       | Size of the avatar                        |

## Card Customer Statistics

The `CustomerStats` component is designed to display customer-related statistics in a visually appealing card format. This component is ideal for showcasing key customer metrics, such as customer Account Balance, Wishlist, or any other pertinent customer data, with customizable options for icons, colors, and descriptions.

This component is placed inside the `src/components/card-statistics/CustomerStats.tsx` file. You may refer to the `src/views/apps/ecommerce/customers/details/customer-right/overview/CustomerStatisticsCard.tsx` file for its usage.

### Usage

Here's an example of how to use the `CustomerStats` component with `value` and `content` props:

```tsx
import CustomerStats from "@components/card-statistics/CustomerStats";

const CustomerDashboard = () => {
  return (
    <CustomerStats
      title="customer satisfaction"
      avatarIcon="ri-emotion-happy-line"
      color="warning"
      stats="94%"
      content="Satisfaction Rate"
      description="based on recent feedback"
    />
  );
};

export default CustomerDashboard;
```

Here's an example of how to use the `CustomerStats` component with `chipLabel` prop:

```tsx
import CustomerStats from "@components/card-statistics/CustomerStats";

const CustomerDashboard = () => {
  return (
    <CustomerStats
      title="loyalty program"
      avatarIcon="ri-gift-line"
      color="success"
      chipLabel="Platinum member"
      description="3000 points to next tier"
    />
  );
};

export default CustomerDashboard;
```

### Props

| Prop        | Type                                                                                | Required | Description                              |
| ----------- | ----------------------------------------------------------------------------------- | -------- | ---------------------------------------- |
| title       | `string`                                                                            | Yes      | The title displayed on the card          |
| avatarIcon  | `string`                                                                            | Yes      | Icon to display inside the avatar        |
| description | `string`                                                                            | Yes      | Description displayed on the card        |
| stats       | `string`                                                                            | No       | The primary statistic number displayed   |
| content     | `string`                                                                            | No       | Additional content displayed on the card |
| chipLabel   | `string`                                                                            | No       | Label displayed on the chip              |
| color       | `'primary'` \| `'secondary'` \| `'success'` \| `'error'` \| `'warning'` \| `'info'` | No       | Color theme for the avatar               |
