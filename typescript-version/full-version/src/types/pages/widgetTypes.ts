// Type Imports
import type { ThemeColor } from '@core/types'
import type { CustomAvatarProps } from '@core/components/mui/Avatar'

export type CardStatsHorizontalWithAvatarProps = {
  stats: string
  title: string
  avatarIcon: string
  avatarColor?: ThemeColor
  avatarVariant?: CustomAvatarProps['variant']
  avatarSkin?: CustomAvatarProps['skin']
  avatarSize?: number
}

export type CardStatsHorizontalWithBorderProps = {
  title: string
  stats: number
  trendNumber: number
  avatarIcon: string
  color?: ThemeColor
}

export type CardStatsCustomerStatsProps = {
  title: string
  avatarIcon: string
  color?: ThemeColor
  description: string
} & (
  | {
      stats?: string
      content?: string
      chipLabel?: never
    }
  | {
      chipLabel?: string
      stats?: never
      content?: never
    }
)

export type CardStatsType = {
  statsHorizontalWithAvatar: CardStatsHorizontalWithAvatarProps[]
  statsHorizontalWithBorder: CardStatsHorizontalWithBorderProps[]
  customerStats: CardStatsCustomerStatsProps[]
}
