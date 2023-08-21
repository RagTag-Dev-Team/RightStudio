'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import type { EChartsOption } from 'echarts'
import { EChart } from '@hcorta/react-echarts'

const TotalSales = () => {
  const theme = useTheme()

  const echartOptions: EChartsOption = {
    style: {
      height: 400
    },
    xAxis: {
      type: 'category',
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    series: [
      {
        data: [0, 85, 25, 125, 90, 250, 200],
        type: 'line',
        smooth: true,
        itemStyle: {
          color: {
            type: 'linear',
            x: 1,
            y: 1,
            x2: 0,
            y2: 1,

            colorStops: [
              {
                offset: 0,
                color: theme.palette.background.paper
              },
              {
                offset: 1,
                color: theme.palette.success.main
              }
            ],
            global: false // false by default
          }
        },
        showSymbol: false,
        lineStyle: {
          width: 5
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader title={'Total Sales'} />
      <CardContent>
        <EChart {...echartOptions} />
      </CardContent>
    </Card>
  )
}

export default TotalSales
