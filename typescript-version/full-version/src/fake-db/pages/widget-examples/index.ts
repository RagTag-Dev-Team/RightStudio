import type { CardStatsType } from '@/types/pages/widgetTypes'

export const db: CardStatsType = {
  statsHorizontalWithAvatar: [
    {
      stats: '$24,983',
      title: 'Total Earning',
      avatarIcon: 'ri-money-dollar-circle-line',
      avatarColor: 'primary'
    },
    {
      stats: '$8,647',
      title: 'Unpaid Earning',
      avatarIcon: 'ri-gift-line',
      avatarColor: 'success'
    },
    {
      stats: '2,367',
      title: 'Signups',
      avatarIcon: 'ri-group-line',
      avatarColor: 'error'
    },
    {
      stats: '4.5%',
      title: 'Conversion Rate',
      avatarIcon: 'ri-refresh-line',
      avatarColor: 'info'
    }
  ],
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
  ],
  customerStats: [
    {
      color: 'primary',
      avatarIcon: 'ri-money-dollar-circle-line',
      title: 'account balance',
      value: '$7480',
      content: ' Credit Left',
      description: 'Account balance for next purchase'
    },
    {
      color: 'success',
      avatarIcon: 'ri-gift-line',
      title: 'loyalty program',
      chipLable: 'Platinum member',
      description: '3000 points to next tier'
    },
    {
      color: 'warning',
      avatarIcon: 'ri-star-smile-line',
      title: 'wishlist',
      value: '15',
      content: 'Items in wishlist',
      description: 'Receive notification when items go on sale'
    },
    {
      color: 'info',
      avatarIcon: 'ri-vip-crown-line',
      title: 'coupons',
      value: '21',
      content: 'Coupons you win',
      description: 'Use coupon on next purchase'
    }
  ]
}
