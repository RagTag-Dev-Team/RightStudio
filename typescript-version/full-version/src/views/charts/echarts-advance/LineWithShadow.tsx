'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import type { EChartsOption } from 'echarts'
import { EChart } from '@hcorta/react-echarts'

const LineWithShadow = () => {
  const theme = useTheme()

  const echartOptions: EChartsOption = {
    style: {
      height: 400
    },
    color: [theme.palette.primary.main],
    legend: {
      data: ['Altitude (km) vs. temperature (°C)']
    },
    tooltip: {
      trigger: 'axis',
      formatter: 'Temperature : <br/>{b}km : {c}°C'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} °C'
      }
    },
    yAxis: {
      type: 'category',
      axisLine: { onZero: false },
      axisLabel: {
        formatter: '{value} km'
      },
      boundaryGap: false,
      data: ['0', '10', '20', '30', '40', '50', '60', '70', '80']
    },
    series: [
      {
        name: 'Altitude (km) vs. temperature (°C)',
        type: 'line',
        showSymbol: false,
        smooth: true,
        lineStyle: {
          width: 5,
          shadowColor: theme.palette.primary.main,
          shadowBlur: 10,
          shadowOffsetY: 20
        },
        data: [15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
      }
    ]
  }

  return (
    <Card>
      <CardHeader title={'Line With Shadow'} />
      <CardContent>
        <EChart {...echartOptions} />
      </CardContent>
    </Card>
  )
}

export default LineWithShadow
