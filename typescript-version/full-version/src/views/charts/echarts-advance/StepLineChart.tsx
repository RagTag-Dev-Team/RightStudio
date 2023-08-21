'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import type { EChartsOption } from 'echarts'
import { EChart } from '@hcorta/react-echarts'

const StepLineChart = () => {
  const theme = useTheme()

  const echartOptions: EChartsOption = {
    style: {
      height: 200
    },
    color: [theme.palette.warning.main],
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      top: 0,
      bottom: 0,
      right: 0,
      left: 0
    },
    xAxis: {
      show: false,
      type: 'category'

      // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      show: false,
      type: 'value'
    },
    series: [
      {
        name: 'Step Start',
        type: 'line',
        showSymbol: false,
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,

            colorStops: [
              {
                offset: 0,
                color: theme.palette.warning.main
              },
              {
                offset: 1,
                color: theme.palette.background.paper
              }
            ]
          },
          opacity: 0.2
        },

        // step: 'middle',
        data: [2000, 2000, 4000, 4000, 3050, 3050, 2000, 2000, 3050, 3050, 4700, 4700, 2750, 2750, 5700, 5700]
      }
    ]
  }

  return (
    <Card>
      <CardHeader title={'Step Line Chart'} />
      <CardContent>
        <EChart {...echartOptions} />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam atque excepturi debitis officia sapiente,
          ducimus minus laborum iste, accusamus eligendi saepe libero iusto voluptate consequuntur? Optio debitis
          accusamus dolorum enim. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque culpa inventore
          asperiores porro molestiae placeat dolores ratione hic maiores a, perspiciatis distinctio consectetur, ducimus
          id. Voluptas labore repellendus praesentium consectetur.
        </p>
      </CardContent>
    </Card>
  )
}

export default StepLineChart
