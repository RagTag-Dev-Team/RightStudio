'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// Third-party Imports
import type { EChartsOption } from 'echarts'
import { EChart } from '@hcorta/react-echarts'

const WeeklySales = () => {
  const theme = useTheme()

  const echartOptions: EChartsOption = {
    style: {
      height: 400
    },
    tooltip: {},
    legend: {
      icon: 'circle'
    },
    toolbox: {},
    xAxis: {
      type: 'category',
      boundaryGap: true,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      scale: true,
      max: 100,
      min: -90,
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
        name: 'Earning',
        stack: 'Total',
        type: 'bar',
        barWidth: '45%',
        data: [90, 52, 67, 45, 75, 55, 48],
        itemStyle: {
          color: theme.palette.primary.main,
          borderRadius: [8, 8, 0, 0]
        },
        emphasis: {
          disabled: true
        }
      },
      {
        name: 'Expense',
        stack: 'Total',
        type: 'bar',
        data: [-53, -29, -67, -84, -60, -40, -77],
        itemStyle: {
          // color: hexToRGBA(theme.palette.primary.main, 0.12),
          borderRadius: [0, 0, 8, 8]
        },
        emphasis: {
          disabled: true
        }
      },
      {
        name: 'Expense Line',
        type: 'line',
        smooth: true,
        data: [73, 20, 50, -20, 58, 15, 31],
        symbolSize: 10,
        emphasis: {
          scale: 1.5
        },
        itemStyle: {
          color: theme.palette.warning.main
        },
        lineStyle: {
          width: 3
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader title={'Weekly Sales'} />
      <CardContent>
        <EChart {...echartOptions} />
      </CardContent>
    </Card>
  )
}

export default WeeklySales
