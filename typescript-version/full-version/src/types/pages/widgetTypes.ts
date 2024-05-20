// MUI Imports
import type { AvatarProps } from '@mui/material'

// Type Imports
import type { ThemeColor } from '@core/types'
import type { CustomAvatarProps } from '@core/components/mui/Avatar'

export type CardStatsHorizontalWithAvatarProps = {
  stats: string
  title: string
  avatarIcon: string
  avatarColor?: ThemeColor
  avatarVariant?: AvatarProps['variant']
  avatarSkin?: CustomAvatarProps['skin']
  avatarIconSize?: number
  avatarSize?: number
}

export type CardStatsHorizontalWithBorderProps = {
  title: string
  value: number
  change: number
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
      value?: string
      content?: string
      chipLable?: never
    }
  | {
      chipLable?: string
      value?: never
      content?: never
    }
)

export type CardStatsType = {
  statsHorizontalWithAvatar: CardStatsHorizontalWithAvatarProps[]
  statsHorizontalWithBorder: CardStatsHorizontalWithBorderProps[]
  customerStats: CardStatsCustomerStatsProps[]
}
