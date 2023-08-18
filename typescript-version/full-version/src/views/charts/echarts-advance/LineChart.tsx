'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import type { EChartsOption } from 'echarts'
import { EChart } from '@hcorta/react-echarts'

const LineChart = () => {
  const theme = useTheme()

  const echartOptions: EChartsOption = {
    style: {
      height: 400
    },
    color: [theme.palette.info.main],
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLabel: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    grid: {
      top: 0,
      right: 0,
      bottom: '5%',
      left: 0
    },
    series: [
      {
        data: [
          0,
          25,
          10,
          40,
          25,
          {
            value: 55,
            symbolSize: 20
          }
        ],
        symbolSize: 10,
        type: 'line',
        symbol: 'circle'
      }
    ]
  }

  return (
    <Card>
      <CardHeader title={'Line Chart'} />
      <CardContent>
        <EChart {...echartOptions} />
      </CardContent>
    </Card>
  )
}

export default LineChart
