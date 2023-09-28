'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import { EChart } from '@hcorta/react-echarts'
import type { EChartsOption } from 'echarts'

const productColors = {
  apple: '#826af9',
  samsung: '#9f87ff',
  oneplus: '#d2b0ff',
  motorola: '#f8d3ff'
}

const ColumnChart = () => {
  const theme = useTheme()

  const echartOptions: EChartsOption = {
    style: {
      height: 400
    },
    color: [theme.palette.primary.main, theme.palette.success.main, theme.palette.error.main],
    legend: {},
    tooltip: {},
    dataset: {
      dimensions: ['category', 'Apple', 'Samsung', 'Oneplus', 'Motorola'],
      source: [
        {
          category: '7/12',
          Apple: 80,
          Samsung: 130,
          Oneplus: 150,
          Motorola: 210
        },
        {
          category: '8/12',
          Apple: 100,
          Samsung: 150,
          Oneplus: 170,
          Motorola: 380
        },
        {
          category: '9/12',
          Apple: 80,
          Samsung: 140,
          Oneplus: 160,
          Motorola: 220
        },
        {
          category: '10/12',
          Apple: 100,
          Samsung: 150,
          Oneplus: 170,
          Motorola: 380
        },
        {
          category: '11/12',
          Apple: 50,
          Samsung: 90,
          Oneplus: 110,
          Motorola: 150
        },
        {
          category: '12/12',
          Apple: 125,
          Samsung: 90,
          Oneplus: 100,
          Motorola: 65
        },
        {
          category: '13/12',
          Apple: 70,
          Samsung: 110,
          Oneplus: 130,
          Motorola: 210
        },
        {
          category: '14/12',
          Apple: 100,
          Samsung: 150,
          Oneplus: 170,
          Motorola: 380
        },
        {
          category: '15/12',
          Apple: 80,
          Samsung: 100,
          Oneplus: 120,
          Motorola: 180
        },
        {
          category: '16/12',
          Apple: 30,
          Samsung: 60,
          Oneplus: 70,
          Motorola: 110
        }
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
          borderRadius: 6,
          borderWidth: 8,
          borderColor: 'transparent',
          color: productColors.apple
        }
      },
      {
        type: 'bar',
        stack: 'one',
        barWidth: 30,
        itemStyle: {
          borderRadius: 6,
          borderWidth: 8,
          borderColor: 'transparent',
          color: productColors.samsung
        }
      },
      {
        type: 'bar',
        stack: 'one',
        barWidth: 30,
        itemStyle: {
          borderRadius: 6,
          borderWidth: 8,
          borderColor: 'transparent',
          color: productColors.oneplus
        }
      },
      {
        type: 'bar',
        stack: 'one',
        barWidth: 30,
        itemStyle: {
          borderRadius: 6,
          borderWidth: 8,
          borderColor: 'transparent',
          color: productColors.motorola
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader title={'Column Chart'} />
      <CardContent>
        <EChart {...echartOptions} />
      </CardContent>
    </Card>
  )
}

export default ColumnChart
