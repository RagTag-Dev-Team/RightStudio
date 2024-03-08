# Card Statistics

## Overview

We have created different versions of card components to make it easier for you to show your statistics neatly.

## Card Statistics Horizontal with subtitle

The `HorizontalWithSubtile` component enriches the presentation of statistics by incorporating a horizontal layout with additional context provided by subtitles. This component is specifically designed for displaying comprehensive metrics, such as user engagement figures, financial statistics, or any key performance indicators, with an emphasis on changes or trends over time.

This component is placed inside the `src/components/card-statistics/HorizontalWithSubtitle.tsx` file. You may refer to the `src/views/apps/user/list/UserListCards.tsx` file for it's usage.

Usage: Here's an example of how to use the `HorizontalWithSubtitle` component:

```tsx
import HorizontalWithSubtitle from "@components/card-statistics/HorizontalWithSubtitle";

const Component = () => {
  return (
    <HorizontalWithSubtitle
      title="Session"
      subTitle="Total User"
      value="21,459"
      avatarIcon="tabler-user"
      avatarColor="primary"
      change="positive"
      changeNumber="29%"
    />
  )
}

export default Component
```

### Props

| Prop         | Type                                                                      | Required | Description                                 |
| ------------ | ------------------------------------------------------------------------- | -------- | ------------------------------------------- |
| title        | `string`                                                                  | Yes      | The title displayed on the card             |
| subTitle     | `string`                                                                  | Yes      | The subtitle displayed on the card          |
| value        | `string`                                                                  | Yes      | The primary statistic number displayed      |
| avatarIcon   | `string`                                                                  | Yes      | Icon to display inside the avatar           |
| avatarColor  | `'primary' \| 'secondary' \| 'success' \| 'error' \| 'warning' \| 'info'` | No       | Color theme for the avatar                  |
| change       | `'positive' \| 'negative'`                                                | Yes      | Indicating change in the number of sessions |
| changeNumber | `string`                                                                  | Yes      | Numerical value indicating the trend        |

## Card Statistics Vertical

The `CardStatVertical` component offers a minimalist and modern design to showcase important statistics like financial gains or user growth. It features a custom avatar, contextual title and subtitle, and a highlight chip for percentage changes, providing a quick visual summary of key data.

This component is placed inside the `src/components/card-statistics/Vertical.tsx` file. You may refer to the `src/views/pages/widget-examples/statistics/Vertical.tsx` file for it's usage.

Usage: Here's an example of how to use the `CardStatVertical` component:

```tsx
import CardStatVertical from "@/components/card-statistics/Vertical";

const Component = () => {
  return (
    <CardStatVertical
      title="Total Profit"
      subtitle="Last Week"
      stats="1.28k"
      avatarColor="error"
      avatarIcon="tabler-credit-card"
      avatarSkin="light"
      avatarSize={44}
      avatarIconSize={28}
      chipText="-12.2%"
      chipColor="error"
      chipVariant="tonal"
    />
  )
}

export default Component
```

### Props

| Prop           | Type                                                                      | Required | Description                                               |
| -------------- | ------------------------------------------------------------------------- | -------- | --------------------------------------------------------- |
| title          | `string`                                                                  | Yes      | The title of the card, providing the main context.        |
| subtitle       | `string`                                                                  | Yes      | A secondary line of text offering additional context.     |
| stats          | `string`                                                                  | Yes      | The primary statistic number to be displayed prominently. |
| avatarIcon     | `string`                                                                  | Yes      | The icon class to be used within the avatar component.    |
| avatarColor    | `'primary' \| 'secondary' \| 'error' \| 'info' \| 'success' \| 'warning'` | No       | The background color for the avatar.                      |
| avatarSize     | `number`                                                                  | No       | The size of the avatar. Can be a predefined a number.     |
| avatarIconSize | `number`                                                                  | No       | The font size of the icon within the avatar.              |
| avatarSkin     | `'filled' \| 'light'\| 'light-static'`                                    | No       | The skin or variant for the avatar.                       |
| chipText       | `string`                                                                  | Yes      | The text to be displayed on the chip.                     |
| chipColor      | `'primary' \| 'secondary' \| 'error' \| 'info' \| 'success' \| 'warning'` | No       | The color of the chip component.                          |
| chipVariant    | `'filled' \| 'outlined'\| 'tonal'`                                        | No       | The visual style of the chip.                             |

## Card Statistics Horizontal

The `CardStatHorizontal` component is a versatile and compact way to present key statistics in a horizontal layout. It's perfect for dashboards and summary sections where space is at a premium but information density is important.

This component is placed inside the `src/components/card-statistics/Horizontal.tsx` file. You may refer to the `src/views/pages/widget-examples/statistics/Horizontal.tsx` file for it's usage.

Usage: Here's an example of how to use the `CardStatHorizontal` component:

```tsx
import CardStatHorizontal from "@components/card-statistics/CardStatHorizontal";

const Component = () => {
  return (
    <CardStatHorizontal
      title="Total Users"
      stats="1.28k"
      avatarIcon="tabler-user"
      avatarColor="primary"
      avatarSkin="light"
      avatarSize={44}
      avatarIconSize={28}
    />
  )
}

export default Component
```

### Props

| Prop           | Type                                                                      | Required | Description                                               |
| -------------- | ------------------------------------------------------------------------- | -------- | --------------------------------------------------------- |
| title          | `string`                                                                  | Yes      | The title of the card, providing the main context.        |
| stats          | `string`                                                                  | Yes      | The primary statistic number to be displayed prominently. |
| avatarIcon     | `string`                                                                  | Yes      | The icon class to be used within the avatar component.    |
| avatarColor    | `'primary' \| 'secondary' \| 'error' \| 'info' \| 'success' \| 'warning'` | No       | The background color for the avatar.                      |
| avatarSize     | `number`                                                                  | No       | The size of the avatar. Can be a predefined a number.     |
| avatarIconSize | `number`                                                                  | No       | The font size of the icon within the avatar.              |
| avatarSkin     | `'filled' \| 'light'\| 'light-static'`                                    | No       | The skin for the avatar.                                  |

## Card Statistics With Chart

The `CardStatsWithAreaChart` component is a powerful way to present key statistics along with a visual representation in the form of an area chart. It's perfect for dashboards and summary sections where you need to display trends or changes over the time in a compact space.

The component is placed inside the `src/components/card-statistics/StatsWithAreaChart.tsx` file. You may refer to the `src/views/pages/widget-examples/statistics/CardStatsLineAreaCharts.tsx` file for it's usage.

Usage: Here's an example of how to use the `CardStatsWithAreaChart` component:

```tsx
import CardStatsWithAreaChart from "@components/card-statistics/StatsWithAreaChart";

const Component = () => {
  return (
    <CardStatsWithAreaChart
      title="Total Users"
      stats="1.28k"
      avatarIcon="tabler-user"
      chartSeries={[{ data: [30, 40, 35, 50, 49, 60, 70, 91, 125] }]}
      avatarColor="primary"
      avatarSize={44}
      avatarIconSize={28}
      avatarSkin="light"
    />
  )
}

export default Component
```

### Props

| Prop           | Type                                                                      | Required | Description                                               |
| -------------- | ------------------------------------------------------------------------- | -------- | --------------------------------------------------------- |
| title          | `string`                                                                  | Yes      | The title of the card, providing the main context.        |
| stats          | `string`                                                                  | Yes      | The primary statistic number to be displayed prominently. |
| chartColor     | `'primary' \| 'secondary' \| 'error' \| 'info' \| 'success' \| 'warning'` | No       | The color of the chart.                                   |
| chartSeries    | `ApexOptions['series']`                                                   | Yes      | The data series for the chart.                            |
| avatarIcon     | `string`                                                                  | Yes      | The icon class to be used within the avatar component.    |
| avatarColor    | `'primary' \| 'secondary' \| 'error' \| 'info' \| 'success' \| 'warning'` | No       | The background color for the avatar.                      |
| avatarSize     | `number`                                                                  | No       | The size of the avatar. Can be a predefined a number.     |
| avatarIconSize | `number`                                                                  | No       | The font size of the icon within the avatar.              |
| avatarSkin     | `'filled' \| 'light'\| 'light-static'`                                    | No       | The skin for the avatar.                                  |

## Card Statistics Square

The `CardStatSquare` component is a compact way to present key statistics with an accompanying icon. It's perfect for dashboards and summary sections where you need to display key metrics in a compact space.

This component is placed inside the `src/components/card-statistics/CardStatsSquare.tsx` file. You may refer to the `src/views/pages/widget-examples/statistics/Square.tsx` file for it's usage.

Usage: Here's an example of how to use the `CardStatSquare` component:

```tsx
import CardStatsSquare from '@components/card-statistics/CardStatsSquare'

cost Component = () => {
  return (
    <CardStatsSquare
      stats='345'
      statsTitle='Subscribers'
      avatarIcon='tabler-users'
      avatarIconSize={24}
      avatarSize={40}
      avatarVariant='rounded'
      avatarColor='primary'
      avatarSkin='light'
    />
  )
}

export default Component
```

### Props

| Prop              | Type                                                                       | Required | Description                                                      |
|-------------------|----------------------------------------------------------------------------|----------|------------------------------------------------------------------|
| stats           | `string`                                                                     | Yes      | The primary statistic number to be displayed prominently.        |
| statsTitle      | `string`                                                                     | Yes      | The title of the card, providing the main context.                |
| avatarIcon      | `string`                                                                     | Yes      | The icon class to be used within the avatar component.            |
| avatarColor     | `ThemeColor`                                                                 | No       | The background color for the avatar.                              |
| avatarSize      | `number`                                                                     | No       | The size of the avatar.                                           |
| avatarIconSize  | `number`                                                                     | No       | The font size of the icon within the avatar.                      |
| avatarVariant   | `CustomAvatarProps['variant']`                                               | No       | The variant of the avatar.                                       |
| avatarSkin      | `CustomAvatarProps['skin']`                                                  | No       | The skin or variant for the avatar.                               |
