'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Type Imports
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import { EChart } from '@hcorta/react-echarts'
import type { EChartsOption } from 'echarts'

const frameworkColors = (theme: Theme) => ({
  angular: theme.palette.error.main,
  vue: theme.palette.success.main,
  react: theme.palette.info.main
})

const ScatterChart = () => {
  const theme = useTheme()

  // define echarts options for scatter chart using react, vue and angular colors
  const echartOptions: EChartsOption = {
    style: { height: 400 },
    color: [frameworkColors(theme).angular, frameworkColors(theme).vue, frameworkColors(theme).react],
    legend: {
      data: ['React', 'Vue', 'Angular'],
      icon: 'circle',
      left: theme.direction === 'rtl' ? 'right' : 'left',
      textStyle: {
        color: theme.palette.text.secondary,
        align: 'right',
        baseline: 'middle'
      }
    },
    tooltip: {
      backgroundColor: theme.palette.background.paper,
      borderColor: theme.palette.divider,
      textStyle: {
        color: theme.palette.text.primary
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
        interval: 1,
        axisLabel: {
          color: theme.palette.text.disabled
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: theme.palette.divider
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: theme.palette.divider
          }
        },
        min: 5,
        z: 10
      }
    ],
    yAxis: [
      {
        position: theme.direction === 'rtl' ? 'right' : 'left',
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
    series: [
      {
        name: 'Angular',
        symbolSize: 12,
        type: 'scatter',
        data: [
          [5.4, 170],
          [5.4, 100],
          [5.7, 110],
          [5.9, 150],
          [6.0, 200],
          [6.3, 170],
          [5.7, 140],
          [5.9, 130],
          [7.0, 150],
          [8.0, 120],
          [9.0, 170],
          [10.0, 190],
          [11.0, 220],
          [12.0, 170],
          [13.0, 230]
        ]
      },
      {
        name: 'Vue',
        symbolSize: 12,
        type: 'scatter',
        data: [
          [14.0, 220],
          [15.0, 280],
          [16.0, 230],
          [18.0, 320],
          [17.5, 280],
          [19.0, 250],
          [20.0, 350],
          [20.5, 320],
          [20.0, 320],
          [19.0, 280],
          [17.0, 280],
          [22.0, 300],
          [18.0, 120]
        ]
      },
      {
        name: 'React',
        symbolSize: 12,
        type: 'scatter',
        data: [
          [14.0, 290],
          [13.0, 190],
          [20.0, 220],
          [21.0, 350],
          [21.5, 290],
          [22.0, 220],
          [23.0, 140],
          [19.0, 400],
          [20.0, 200],
          [22.0, 90],
          [20.0, 120]
        ]
      }
    ]
  }

  return (
    <Card>
      <CardHeader title={'Scatter Chart'} />
      <CardContent>
        <EChart {...echartOptions} />
      </CardContent>
    </Card>
  )
}

export default ScatterChart
