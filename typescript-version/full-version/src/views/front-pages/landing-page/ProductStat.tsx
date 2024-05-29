// MUI Imports
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { ThemeColor } from '@/@core/types'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Type
type StatData = {
  title: string
  value: number
  icon: string
  color: ThemeColor
  isHover: boolean
}

// Data
const statData: StatData[] = [
  {
    title: 'Completed Sites',
    value: 137,
    icon: 'ri-layout-line',
    color: 'primary',
    isHover: false
  },
  {
    title: 'Working Hours',
    value: 1100,
    icon: 'ri-time-line',
    color: 'success',
    isHover: false
  },
  {
    title: 'Happy Customers',
    value: 137,
    icon: 'ri-user-smile-line',
    color: 'warning',
    isHover: false
  },
  {
    title: 'Awards Winning',
    value: 23,
    icon: 'ri-award-line',
    color: 'info',
    isHover: false
  }
]

const ProductStat = () => {
  return (
    <div className='plb-[64px] pli-6 md:max-is-[900px] lg:max-is-[1200px] 2xl:max-is-[1440px] mli-auto'>
      <Grid container rowSpacing={6} columnSpacing={6}>
        {statData.map((stat, index) => (
          <Grid item key={index} xs={6} md={3}>
            <div
              className='flex flex-col items-center justify-center gap-6'
              onMouseEnter={() => {
                stat.isHover = true
              }}
              onMouseLeave={() => {
                stat.isHover = false
              }}
            >
              <CustomAvatar skin='light' color={stat.color} size={82}>
                <i className={classnames(stat.icon, 'text-[2.625rem]')} />
              </CustomAvatar>
              <div className='text-center'>
                <Typography variant='h4' className='font-bold'>
                  {stat.value}+
                </Typography>
                <Typography color='text.secondary'>{stat.title}</Typography>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default ProductStat
