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

const PieChart = () => {
  const theme = useTheme()

  const echartOptions: EChartsOption = {
    style: {
      height: 400
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
    color: [
      theme.palette.success.main

      // hexToRGBA(theme.palette.success.main, 0.6),
      // hexToRGBA(theme.palette.success.main, 0.4),
      // hexToRGBA(theme.palette.success.main, 0.2)
    ],
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
