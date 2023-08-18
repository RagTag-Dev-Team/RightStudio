'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import type { EChartsOption } from 'echarts'
import { EChart } from '@hcorta/react-echarts'

const HalfPie = () => {
  const theme = useTheme()

  const echartOptions: EChartsOption = {
    style: {
      height: 400
    },
    color: [theme.palette.warning.main],
    series: [
      {
        name: 'Access From',
        type: 'pie',
        startAngle: 180,
        radius: ['90%', '80%'],
        label: {
          show: false
        },
        data: [
          {
            value: 45,
            name: 'Search Engine',
            itemStyle: {
              borderRadius: 20,
              borderWidth: 10,
              borderColor: 'transparent'
            },
            emphasis: {
              scale: false
            }
          },
          {
            value: 10,
            name: 'Search Engine',
            itemStyle: {
              color: theme.palette.secondary.main,
              borderRadius: 20
            },
            emphasis: {
              scale: false
            }
          },
          {
            // make an record to fill the bottom 50%
            value: 55,
            itemStyle: {
              // stop the chart from rendering this piece
              color: 'none',
              decal: {
                symbol: 'none'
              }
            },
            label: {
              show: false
            }
          }
        ]
      }
    ]
  }

  return (
    <Card>
      <CardHeader title={'Half Pie Chart'} />
      <CardContent>
        <EChart {...echartOptions} />
      </CardContent>
    </Card>
  )
}

export default HalfPie
