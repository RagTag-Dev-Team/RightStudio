import type { CardStatsType } from '@/types/pages/widgetTypes'

export const db: CardStatsType = {
  statsHorizontalWithBorder: [
    {
      title: 'On route vehicles',
      value: 42,
      change: 18.2,
      avatarIcon: 'ri-car-line',
      color: 'primary'
    },
    {
      title: 'Vehicles with errors',
      value: 8,
      change: -8.7,
      avatarIcon: 'ri-alert-line',
      color: 'warning'
    },
    {
      title: 'Deviated from route',
      value: 27,
      change: 4.3,
      avatarIcon: 'ri-route-line',
      color: 'error'
    },
    {
      title: 'Late vehicles',
      value: 13,
      change: 2.5,
      avatarIcon: 'ri-time-line',
      color: 'info'
    }
  ]
}
