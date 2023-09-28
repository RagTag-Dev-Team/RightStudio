'use client'

// MUI Imports
import { Card } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import { EChart } from '@hcorta/react-echarts'
import type { EChartsOption } from 'echarts'

const LineChart = () => {
  const theme = useTheme()

  const echartOptions: EChartsOption = {
    color: [theme.palette.primary.main],
    xAxis: {
      type: 'category',
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
        '19/12',
        '20/12',
        '21/12'
      ],
      axisLabel: {
        color: theme.palette.text.disabled
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      z: 10
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: theme.palette.text.disabled
        }
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: theme.palette.divider
        }
      }
    },
    grid: {
      show: false,
      bottom: '25px',
      top: '10px',
      left: '35px',
      right: '10px'
    },
    tooltip: {
      trigger: 'axis',

      // backgroundColor: theme.palette.customColors.bodyBg,
      borderColor: theme.palette.divider,
      textStyle: {
        color: theme.palette.text.primary
      }
    },
    series: [
      {
        data: [280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100, 150, 100, 50],
        type: 'line',
        symbolSize: 8,
        itemStyle: {
          color: '#ff9f43'
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader title='Line Chart' />
      <CardContent>
        <EChart {...echartOptions} />
      </CardContent>
    </Card>
  )
}

export default LineChart
