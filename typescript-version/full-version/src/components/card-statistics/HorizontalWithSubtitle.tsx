// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ThemeColor } from '@core/types'

export type UserDataType = {
  title: string
  value: string
  avatarIcon: string
  avatarColor?: ThemeColor
  trend: string
  trendNumber: string
  subtitle: string
}

const HorizontalWithSubtitle = (props: UserDataType) => {
  // Props
  const { title, value, avatarIcon, avatarColor, trend: trend, trendNumber: trendNumber, subtitle: subtitle } = props

  return (
    <Card>
      <CardContent className='flex justify-between gap-1'>
        <div className='flex flex-col gap-1 flex-grow'>
          <Typography color='text.primary'>{title}</Typography>
          <div className='flex items-center gap-2 flex-wrap'>
            <Typography variant='h4'>{value}</Typography>
            <Typography color={trend === 'negative' ? 'error.main' : 'success.main'}>
              {`(${trend === 'negative' ? '-' : '+'}${trendNumber})`}
            </Typography>
          </div>
          <Typography variant='body2'>{subtitle}</Typography>
        </div>
        <Avatar color={avatarColor} variant='rounded'>
          <i className={classnames(avatarIcon, 'text-[26px]')} />
        </Avatar>
      </CardContent>
    </Card>
  )
}

export default HorizontalWithSubtitle
