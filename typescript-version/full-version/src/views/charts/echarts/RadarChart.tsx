'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { useTheme } from '@mui/material/styles'

// Third-party Imports
import { EChart } from '@hcorta/react-echarts'
import type { EChartsOption } from 'echarts'

const RadarChart = () => {
  const theme = useTheme()

  const echartOptions: EChartsOption = {
    style: {
      height: 400
    },
    color: ['#fde802', '#9b88fa'],
    legend: {
      icon: 'circle',
      bottom: 0,
      data: ['Allocated Budget', 'Actual Spending'],
      textStyle: {
        color: theme.palette.text.secondary,
        align: 'right',
        baseline: 'middle'
      }
    },
    radar: {
      indicator: [
        { name: 'Sales', max: 6500 },
        { name: 'Administration', max: 16000 },
        { name: 'Information Technology', max: 30000 },
        { name: 'Customer Support', max: 38000 },
        { name: 'Development', max: 52000 },
        { name: 'Marketing', max: 25000 }
      ],
      axisLine: {
        lineStyle: {
          color: theme.palette.divider
        }
      },
      splitLine: {
        lineStyle: {
          color: theme.palette.divider
        }
      },
      axisName: {
        color: theme.palette.text.disabled
      }
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        blendMode: '',
        areaStyle: {},
        symbol: 'none',
        lineStyle: {
          width: 0
        },
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: 'Allocated Budget'
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: 'Actual Spending'
          }
        ]
      }
    ]
  }

  return (
    <Card>
      <CardHeader title={'Radar Chart'} />
      <CardContent>
        <EChart {...echartOptions} />
      </CardContent>
    </Card>
  )
}

export default RadarChart
