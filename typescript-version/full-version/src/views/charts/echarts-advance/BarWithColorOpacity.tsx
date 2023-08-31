'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import type { EChartsOption } from 'echarts'
import { EChart } from '@hcorta/react-echarts'

const BarWithColorOpacity = () => {
  const theme = useTheme()

  const echartOptions: EChartsOption = {
    renderer: 'svg',
    style: {
      height: 400
    },

    // color: [hexToRGBA(theme.palette.primary.main, 0.4)],
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
      top: '35px',
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
        data: [
          5,
          20,
          {
            value: 36,
            itemStyle: {
              color: theme.palette.primary.main
            }
          },
          10,
          10,
          20,
          4
        ],
        type: 'bar',
        stack: 'total',
        label: {
          fontSize: 20,
          fontFamily: theme.typography.fontFamily,
          show: true,
          position: 'top',
          color: theme.palette.text.primary,
          fontWeight: 'bold',
          formatter: (v: any) => `${v.value}k`
        },
        itemStyle: {
          borderRadius: [6, 6, 0, 0]
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader title={'Bar With Color Opacity'} />
      <CardContent>
        <EChart {...echartOptions} />
      </CardContent>
    </Card>
  )
}

export default BarWithColorOpacity
