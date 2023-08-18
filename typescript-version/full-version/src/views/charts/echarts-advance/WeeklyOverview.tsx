'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import type { EChartsOption } from 'echarts'
import { EChart } from '@hcorta/react-echarts'

const WeeklyOverview = () => {
  const theme = useTheme()

  const echartOptions: EChartsOption = {
    style: {
      height: 400
    },
    grid: {
      show: true,
      top: 70,
      bottom: 20,
      left: 30,
      right: 10,
      backgroundColor: theme.palette.background.paper,
      borderWidth: 0
    },
    tooltip: {},
    legend: {
      icon: 'circle'
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      axisLine: {
        lineStyle: {
          type: 'dashed',
          color: theme.palette.divider
        }
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      lineStyle: {
        type: 'dashed',
        color: theme.palette.divider
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      interval: 30,
      type: 'value',
      scale: true,
      max: 90,
      min: 0,
      splitLine: {
        show: true,
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    series: [
      {
        name: 'Dynamic Bar',
        type: 'bar',
        data: [83, 68, 56, 65, 65, { value: 50, itemStyle: { color: theme.palette.primary.main } }, 39],
        barWidth: 30,
        itemStyle: {
          // color: theme.palette.customColors.trackBg,
          borderRadius: 40
        },
        emphasis: {
          disabled: true
        }
      },
      {
        name: 'Dynamic Line',
        type: 'line',
        symbolSize: 8,
        data: [63, 38, 31, 45, 46, 27, 18],
        emphasis: { scale: 1.5 },
        itemStyle: {
          color: theme.palette.primary.main
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader title={'Weekly Overview'} />
      <CardContent>
        <EChart {...echartOptions} />
      </CardContent>
    </Card>
  )
}

export default WeeklyOverview
