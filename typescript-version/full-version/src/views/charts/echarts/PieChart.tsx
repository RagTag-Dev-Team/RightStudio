'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import { EChart } from '@hcorta/react-echarts'
import type { EChartsOption } from 'echarts'

const PieChart = () => {
  const theme = useTheme()

  const echartOptions: EChartsOption = {
    style: {
      height: 400
    },
    tooltip: {
      trigger: 'item',
      borderColor: theme.palette.divider,
      textStyle: {
        color: theme.palette.text.primary
      }
    },
    title: {
      text: '184',
      subtext: 'Total',
      top: 'center',
      left: 'center',
      itemGap: 0,
      textStyle: {
        color: theme.palette.text.primary,
        fontSize: 32,
        fontWeight: 500,
        lineHeight: 1
      },
      subtextStyle: {
        color: theme.palette.success.main,
        fontSize: 16
      }
    },
    color: ['#00d4bd', '#ffe700', '#FFA1A1', '#826bf8'],
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['45%', '70%'],
        label: {
          show: false
        },
        data: [
          { value: 45, name: 'Search Engine' },
          { value: 58, name: 'Direct' },
          { value: 30, name: 'Email' },
          { value: 50, name: 'Union Ads' }
        ]
      }
    ]
  }

  return (
    <Card>
      <CardHeader title={'Pie Chart'} />
      <CardContent>
        <EChart {...echartOptions} />
      </CardContent>
    </Card>
  )
}

export default PieChart
