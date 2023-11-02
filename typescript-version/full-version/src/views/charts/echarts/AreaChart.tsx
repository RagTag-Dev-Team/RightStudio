'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import { EChart } from '@hcorta/react-echarts'
import type { EChartsOption } from 'echarts'

const areaColors = {
  series1: '#ab7efd',
  series2: '#b992fe',
  series3: '#e0cffe'
}

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
        data: [
          '7/12',
          '8/12',
          '9/12',
          '10/12',
          '11/12',
          '12/12',
          '13/12',
          '14/12',
          '15/12',
          '16/12',
          '17/12',
          '18/12',
          '19/12'
        ],
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
        }
      }
    ],
    yAxis: [
      {
        position: theme.direction === 'rtl' ? 'right' : 'left',
        axisLabel: {
          margin: theme.direction === 'rtl' ? 25 : 14
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
        name: 'Sales',
        type: 'line',
        color: areaColors.series1,
        stack: 'Total',
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8
        },
        emphasis: {
          focus: 'series'
        },
        data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375]
      },
      {
        name: 'Clicks',
        type: 'line',
        color: areaColors.series2,
        stack: 'Total',
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8
        },
        emphasis: {
          focus: 'series'
        },
        data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275]
      },
      {
        name: 'Visits',
        type: 'line',
        color: areaColors.series3,
        stack: 'Total',
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8
        },
        emphasis: {
          focus: 'series'
        },
        data: [20, 40, 30, 70, 40, 60, 50, 140, 120, 100, 140, 180, 220]
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
