'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import { EChart } from '@hcorta/react-echarts'
import type { EChartsOption } from 'echarts'

const frameworkColors = {
  react: '#61dbfb',
  vue: '#41B883',
  angular: '#dd1b16'
}

const ScatterChart = () => {
  const theme = useTheme()

  // define echarts options for scatter chart using react, vue and angular colors
  const echartOptions: EChartsOption = {
    style: { height: 400 },
    color: [frameworkColors.angular, frameworkColors.vue, frameworkColors.react],
    legend: {
      data: ['React', 'Vue', 'Angular'],
      icon: 'circle',
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
        axisLabel: {
          color: theme.palette.text.disabled
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        min: 0,
        max: 25,
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
        type: 'scatter',
        symbolSize: 15,
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
        type: 'scatter',
        symbolSize: 15,
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
        type: 'scatter',
        symbolSize: 15,
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
