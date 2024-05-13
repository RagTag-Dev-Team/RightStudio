// Type Imports
import type { ThemeColor } from '@core/types'

export type CardStatsHorizontalWithBorderProps = {
  title: string
  value: number
  change: number
  avatarIcon: string
  color?: ThemeColor
}

export type CardStatsType = {
  statsHorizontalWithBorder: CardStatsHorizontalWithBorderProps[]
}
