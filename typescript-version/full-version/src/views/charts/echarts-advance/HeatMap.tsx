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

const HeatMap = () => {
  const theme = useTheme()
  const hours = ['jan', 'fab', 'mar', 'apr', 'may', 'jun', 'jul', 'aug']
  const days = ['1k', '2k', '3k', '4k', '5k', '6k', '7k', '8k']
  const data = [
    [0, 0, 1],
    [0, 1, 1],
    [0, 2, 1],
    [0, 3, 1],
    [0, 4, 1],
    [0, 5, 1],
    [0, 6, 1],
    [0, 7, 1],
    [1, 0, 1],
    [1, 1, 6000],
    [1, 2, 2000],
    [1, 3, 2000],
    [1, 4, 2000],
    [1, 5, 2000],
    [1, 6, 2000],
    [1, 7, 1],
    [2, 0, 1],
    [2, 1, 2000],
    [2, 2, 6000],
    [2, 3, 4000],
    [2, 4, 4000],
    [2, 5, 4000],
    [2, 6, 2000],
    [2, 7, 1],
    [3, 0, 1],
    [3, 1, 2000],
    [3, 2, 4000],
    [3, 3, 6000],
    [3, 4, 6000],
    [3, 5, 4000],
    [3, 6, 2000],
    [3, 7, 1],
    [4, 0, 1],
    [4, 1, 2000],
    [4, 2, 4000],
    [4, 3, 6000],
    [4, 4, 6000],
    [4, 5, 4000],
    [4, 6, 2000],
    [4, 7, 1],
    [5, 0, 1],
    [5, 1, 2000],
    [5, 2, 4000],
    [5, 3, 4000],
    [5, 4, 4000],
    [5, 5, 6000],
    [5, 6, 2000],
    [5, 7, 1],
    [6, 0, 1],
    [6, 1, 2000],
    [6, 2, 2000],
    [6, 3, 2000],
    [6, 4, 2000],
    [6, 5, 2000],
    [6, 6, 6000],
    [6, 7, 1],
    [7, 0, 1],
    [7, 1, 1],
    [7, 2, 1],
    [7, 3, 1],
    [7, 4, 1],
    [7, 5, 1],
    [7, 6, 1],
    [7, 7, 1]
  ].map(function (item) {
    return [item[1], item[0], item[2] || '-']
  })

  const echartOptions: EChartsOption = {
    style: {
      height: 400
    },
    tooltip: {
      position: 'top'
    },
    grid: {
      height: '75%',
      top: 0
    },
    xAxis: {
      type: 'category',
      data: hours,
      splitArea: {
        show: true
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    yAxis: {
      type: 'category',
      data: days,
      splitArea: {
        show: true
      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      }
    },
    visualMap: {
      min: 0,
      max: 6050,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: 0

      // inRange: {
      //   color: [hexToRGBA(theme.palette.primary.main, 0.2), hexToRGBA(theme.palette.primary.main, 1)]
      // }
    },
    series: [
      {
        name: 'Punch Card',
        type: 'heatmap',
        data: data,
        itemStyle: {
          borderColor: theme.palette.background.paper,
          borderWidth: 5,
          borderRadius: 6
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader title={'Heat Map'} />
      <CardContent>
        <EChart {...echartOptions} />
      </CardContent>
    </Card>
  )
}

export default HeatMap
