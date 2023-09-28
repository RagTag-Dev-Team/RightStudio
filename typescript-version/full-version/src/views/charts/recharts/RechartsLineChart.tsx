'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from '@components/charts/recharts'
import type { TooltipProps } from '@components/charts/recharts'

// Type Imports
import type { Direction } from '@core/types'

// Style Imports
import styles from './styles.module.css'

const data = [
  { pv: 280, name: '7/12' },
  { pv: 200, name: '8/12' },
  { pv: 220, name: '9/12' },
  { pv: 180, name: '10/12' },
  { pv: 270, name: '11/12' },
  { pv: 250, name: '12/12' },
  { pv: 70, name: '13/12' },
  { pv: 90, name: '14/12' },
  { pv: 200, name: '15/12' },
  { pv: 150, name: '16/12' },
  { pv: 160, name: '17/12' },
  { pv: 100, name: '18/12' },
  { pv: 150, name: '19/12' },
  { pv: 100, name: '20/12' },
  { pv: 50, name: '21/12' }
]

const CustomTooltip = (props: TooltipProps<any, any>) => {
  // Props
  const { active, payload } = props

  if (active && payload) {
    return (
      <div className='recharts-custom-tooltip'>
        <Typography fontSize='0.875rem'>{`${payload[0].value}%`}</Typography>
      </div>
    )
  }

  return null
}

const RechartsLineChart = ({ direction }: { direction: Direction }) => {
  return (
    <Card>
      <CardHeader
        title='Balance'
        subheader='Commercial networks & enterprises'
        subheaderTypographyProps={{ sx: { color: theme => `${theme.palette.text.disabled} !important` } }}
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
      />
      <CardContent>
        <div className={styles.chartHeight}>
          <ResponsiveContainer>
            <LineChart height={350} data={data} style={{ direction }} margin={{ left: -20 }}>
              <CartesianGrid />
              <XAxis dataKey='name' reversed={direction === 'rtl'} />
              <YAxis orientation={direction === 'rtl' ? 'right' : 'left'} />
              <Tooltip content={CustomTooltip} />
              <Line dataKey='pv' stroke='#ff9f43' strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export default RechartsLineChart
