'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import { EChart } from '@hcorta/react-echarts'
import type { EChartsOption } from 'echarts'

const RadarChart = () => {
  const echartOptions: EChartsOption = {
    style: {
      height: 400
    },
    color: ['#fde802', '#9b88fa'],
    legend: {
      data: ['Allocated Budget', 'Actual Spending']
    },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: 'Sales', max: 6500 },
        { name: 'Administration', max: 16000 },
        { name: 'Information Technology', max: 30000 },
        { name: 'Customer Support', max: 38000 },
        { name: 'Development', max: 52000 },
        { name: 'Marketing', max: 25000 }
      ]
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
