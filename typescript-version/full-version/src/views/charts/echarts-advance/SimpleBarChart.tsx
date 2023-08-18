'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import type { EChartsOption } from 'echarts'
import { EChart } from '@hcorta/react-echarts'

const SimpleBarChart = () => {
  const theme = useTheme()

  const echartOptions: EChartsOption = {
    color: [theme.palette.primary.main],
    style: {
      height: 400
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
      },
      axisPointer: {
        type: 'none'
      }
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        stack: 'total',
        showBackground: true,
        backgroundStyle: {
          borderRadius: [6, 6, 0, 0]

          // color: theme.palette.customColors.trackBg
        },
        itemStyle: {
          borderRadius: [6, 6, 0, 0]
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader title={'Simple Bar Chart'} />
      <CardContent>
        <EChart {...echartOptions} />
      </CardContent>
    </Card>
  )
}

export default SimpleBarChart
