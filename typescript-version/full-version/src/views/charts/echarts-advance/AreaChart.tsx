'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import type { EChartsOption } from 'echarts'
import { EChart } from '@hcorta/react-echarts'

const AreaChart = () => {
  const theme = useTheme()

  const echartOptions: EChartsOption = {
    style: {
      height: 400
    },
    legend: {
      icon: 'circle',
      width: '100%',
      left: theme.direction === 'rtl' ? 'right' : 'left',
      textStyle: {
        color: theme.palette.text.secondary,
        align: 'right',
        baseline: 'middle'
      }
    },
    grid: {
      left: 15,
      right: -20,
      bottom: 10,
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
          color: theme.palette.text.disabled
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        position: theme.direction === 'rtl' ? 'right' : 'left',
        axisLabel: {
          margin: theme.direction === 'rtl' ? 25 : 0
        },
        type: 'value',
        axisLine: {
          lineStyle: {
            color: theme.palette.text.disabled
          }
        },
        splitLine: {
          lineStyle: {
            color: theme.palette.divider
          }
        }
      }
    ],
    series: [
      {
        name: 'Line 1',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,

            colorStops: [
              {
                offset: 0,
                color: theme.palette.primary.main // color at 0% position
              },
              {
                offset: 1,
                color: theme.palette.background.paper // color at 100% position
              }
            ]
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: [80, 132, 101, 164, 90, 240, 150]
      },
      {
        name: 'Line 2',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,

            colorStops: [
              {
                offset: 0,
                color: theme.palette.success.main // color at 0% position
              },
              {
                offset: 1,
                color: theme.palette.background.paper // color at 100% position
              }
            ]
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 282, 111, 234, 220, 340, 310]
      }
    ]
  }

  return (
    <Card>
      <CardHeader title={'Stack Area'} />
      <CardContent>
        <EChart {...echartOptions} />
      </CardContent>
    </Card>
  )
}

export default AreaChart
