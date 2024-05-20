// Type Imports
import type { ThemeColor } from '@core/types'

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
  statsHorizontalWithBorder: CardStatsHorizontalWithBorderProps[]
  customerStats: CardStatsCustomerStatsProps[]
}
