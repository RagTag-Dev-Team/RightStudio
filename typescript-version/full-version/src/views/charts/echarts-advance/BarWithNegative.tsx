'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import type { EChartsOption } from 'echarts'
import { EChart } from '@hcorta/react-echarts'

const BarWithNegative = () => {
  const theme = useTheme()

  const echartOptions: EChartsOption = {
    style: {
      height: 400
    },
    color: [theme.palette.primary.main, theme.palette.success.main, theme.palette.error.main],
    legend: {},
    dataset: {
      dimensions: ['product', '2015', '2016', '2017'],
      source: [
        { product: 'Matcha Latte', 2015: 43.3, 2016: -85.8, 2017: 93.7 },
        { product: 'Milk Tea', 2015: 83.1, 2016: -73.4, 2017: 55.1 },
        { product: 'Cheese Cocoa', 2015: 86.4, 2016: -65.2, 2017: 82.5 },
        { product: 'Walnut Brownie', 2015: 72.4, 2016: -53.9, 2017: 39.1 }
      ]
    },
    grid: {
      top: '10%',
      bottom: '8%',
      left: '8%',
      right: 0
    },
    xAxis: {
      type: 'category',
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    yAxis: {
      splitLine: {
        show: false
      }
    },
    series: [
      {
        type: 'bar',
        stack: 'one',
        barWidth: 30,
        itemStyle: {
          borderRadius: 20,
          borderWidth: 10,
          borderColor: 'transparent'
        }
      },
      {
        type: 'bar',
        stack: 'one',

        barWidth: 30,
        itemStyle: {
          borderRadius: 20,
          borderWidth: 10,
          borderColor: 'transparent'
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader title={'Bar With Negative'} />
      <CardContent>
        <EChart {...echartOptions} />
      </CardContent>
    </Card>
  )
}

export default BarWithNegative
