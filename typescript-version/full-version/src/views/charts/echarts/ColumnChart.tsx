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
    legend: {
      icon: 'circle',
      left: theme.direction === 'rtl' ? 'right' : 'left',
      textStyle: {
        color: theme.palette.text.secondary,
        align: 'right',
        baseline: 'middle'
      }
    },
    tooltip: {
      backgroundColor: theme.palette.background.paper,
      borderColor: theme.palette.divider,
      textStyle: {
        color: theme.palette.text.primary
      }
    },
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
      bottom: '6%',
      left: '3%',
      right: 0
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        color: theme.palette.text.disabled
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: theme.palette.divider
        }
      },
      axisLine: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: theme.palette.divider
        }
      }
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          color: theme.palette.divider
        }
      },
      axisLabel: {
        color: theme.palette.text.disabled
      }
    },
    series: [
      {
        type: 'bar',
        stack: 'one',
        barWidth: 20,
        itemStyle: {
          color: productColors.apple
        }
      },
      {
        type: 'bar',
        stack: 'one',
        barWidth: 20,
        itemStyle: {
          color: productColors.samsung
        }
      },
      {
        type: 'bar',
        stack: 'one',
        barWidth: 20,
        itemStyle: {
          color: productColors.oneplus
        }
      },
      {
        type: 'bar',
        stack: 'one',
        barWidth: 20,
        itemStyle: {
          borderRadius: [10, 10, 0, 0],
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
