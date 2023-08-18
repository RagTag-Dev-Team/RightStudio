'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import type { EChartsOption } from 'echarts'
import { EChart } from '@hcorta/react-echarts'

const SupportTracker = () => {
  const theme = useTheme()

  const echartOptions: EChartsOption = {
    style: {
      height: 400
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['65%', '100%'],
        avoidLabelOverlap: false,
        startAngle: 0,
        itemStyle: {
          borderColor: theme.palette.background.paper,
          borderWidth: 20
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          disabled: true
        },
        labelLine: {
          show: false
        },
        data: [
          ...new Array(20).fill(null).map((item, i) => ({
            value: 10,

            // name: 'Search Engine',
            itemStyle: { color: `rgba(115, 103, 240, ${1 - i * 0.05})` }
          })),
          {
            // make an record to fill the bottom 50%
            value: 90,

            itemStyle: {
              // stop the chart from rendering this piece
              color: 'none',
              decal: {
                symbol: 'none'
              }
            },
            label: {
              show: false
            },
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            tooltip: {
              show: false
            }
          }
        ],
        clockwise: false
      }
    ]
  }

  return (
    <Card>
      <CardHeader title={'Support Tracker'} />
      <CardContent>
        <EChart {...echartOptions} />
      </CardContent>
    </Card>
  )
}

export default SupportTracker
