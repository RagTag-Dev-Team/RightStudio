'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import classnames from 'classnames'

// Type Imports
import type { Direction } from '@core/types'

// Component Imports
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from '@components/charts/recharts'

// Style Imports
import styles from './styles.module.css'

const angularData = [
  { x: 5.4, y: 170 },
  { x: 5.4, y: 100 },
  { x: 5.7, y: 110 },
  { x: 5.9, y: 150 },
  { x: 6.0, y: 200 },
  { x: 6.3, y: 170 },
  { x: 5.7, y: 140 },
  { x: 5.9, y: 130 },
  { x: 7.0, y: 150 },
  { x: 8.0, y: 120 },
  { x: 9.0, y: 170 },
  { x: 10.0, y: 190 },
  { x: 11.0, y: 220 },
  { x: 12.0, y: 170 },
  { x: 13.0, y: 230 }
]

const vueData = [
  { x: 14.0, y: 220 },
  { x: 15.0, y: 280 },
  { x: 16.0, y: 230 },
  { x: 18.0, y: 320 },
  { x: 17.5, y: 280 },
  { x: 19.0, y: 250 },
  { x: 20.0, y: 350 },
  { x: 20.5, y: 320 },
  { x: 20.0, y: 320 },
  { x: 19.0, y: 280 },
  { x: 17.0, y: 280 },
  { x: 22.0, y: 300 },
  { x: 18.0, y: 120 }
]

const reactData = [
  { x: 14.0, y: 290 },
  { x: 13.0, y: 190 },
  { x: 20.0, y: 220 },
  { x: 21.0, y: 350 },
  { x: 21.5, y: 290 },
  { x: 22.0, y: 220 },
  { x: 23.0, y: 140 },
  { x: 19.0, y: 400 },
  { x: 20.0, y: 200 },
  { x: 22.0, y: 90 },
  { x: 20.0, y: 120 }
]

const RechartsScatterChart = ({ direction }: { direction: Direction }) => {
  // Hooks
  const theme = useTheme()

  return (
    <Card>
      <CardHeader
        title='Framework Usage'
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
      />
      <CardContent>
        <div className='flex mbe-4 gap-6'>
          <div className='flex items-center'>
            <i className={classnames('ri-circle-fill text-xs mie-1.5', styles.reactIcon)} />
            <Typography variant='body2'>React</Typography>
          </div>
          <div className='flex items-center'>
            <i className={classnames('ri-circle-fill text-xs mie-1.5', styles.vueIcon)} />
            <Typography variant='body2'>Vue</Typography>
          </div>
          <div className='flex items-center'>
            <i className={classnames('ri-circle-fill text-xs mie-1.5', styles.angularIcon)} />
            <Typography variant='body2'>Angular</Typography>
          </div>
        </div>
        <div className={styles.chartHeight}>
          <ResponsiveContainer>
            <ScatterChart height={350} style={{ direction }} margin={{ left: -20 }}>
              <CartesianGrid />
              <XAxis type='number' dataKey='x' reversed={direction === 'rtl'} />
              <YAxis type='number' dataKey='y' orientation={direction === 'rtl' ? 'right' : 'left'} />
              <Scatter name='Angular' data={angularData} fill={theme.palette.error.main} />
              <Scatter name='Vue' data={vueData} fill={theme.palette.success.main} />
              <Scatter name='React' data={reactData} fill={theme.palette.primary.main} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export default RechartsScatterChart
