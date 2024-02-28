# Card Statistics

## Overview

We have created different versions of card components to make it easier for you to show your statistics neatly.

## Card Statistics Horizontal with subtitle

The `HorizontalWithSubtile` component enriches the presentation of statistics by incorporating a horizontal layout with additional context provided by subtitles. This component is specifically designed for displaying comprehensive metrics, such as user engagement figures, financial statistics, or any key performance indicators, with an emphasis on changes or trends over time.

This component is placed inside the `src/components/card-statistics/HorizontalWithSubtitle.tsx` file. You may refer to the `src/views/apps/user/list/UserListCards.tsx` file for it's usage.

Usage: Here's an example of how to use the `HorizontalWithSubtitle` component:

```tsx
import HorizontalWithSubtitle from '@components/card-statistics/HorizontalWithSubtitle'

const Component = () => {
  return (
    <HorizontalWithSubtitle
      title="Session"
      subTitle="Total User"
      value="21,459"
      avatarIcon="ri-user-3-line"
      avatarColor="primary"
      change="positive"
      changeNumber="29%"
    />
  )
}

export default Component
```

### Props

| Prop         | Type                                                                    | Required | Description                                  |
|--------------|-------------------------------------------------------------------------|----------|----------------------------------------------|
| title        | `string`                                                                  | Yes      | The title displayed on the card              |
| subTitle     | `string`                                                                  | Yes      | The subtitle displayed on the card           |
| value        | `string`                                                                  | Yes      | The primary statistic number displayed
| avatarIcon         | `string`                                                                  | Yes      | Icon to display inside the avatar            |
| avatarColor  | `'primary' \| 'secondary' \| 'success' \| 'error' \| 'warning' \| 'info'` | No       | Color theme for the avatar                   |
| change       | `'positive' \| 'negative'`                                                | Yes      | Indicating change in the number of sessions  |
| changeNumber | `string`                                                                  | Yes      | Numerical value indicating the trend         |