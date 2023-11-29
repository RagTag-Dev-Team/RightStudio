'use client'

// React Imports
import { useRef } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import type { EChartsOption } from 'echarts'
import { EChart } from '@hcorta/react-echarts'

const PolarBar = () => {
  const theme = useTheme()

  const polarTitleData = useRef(2.8)

  const echartOptions: EChartsOption = {
    title: {
      text: `Polar Bar: ${polarTitleData.current}`,

      // text: `Polar Bar: 20`,
      subtext: 'Feature',
      left: 'center',
      top: 'center',
      textStyle: {
        color: theme.palette.text.primary,
        fontFamily: 'inter',
        fontSize: '16px'
      },
      subtextStyle: {
        fontFamily: 'inter',
        fontSize: '14px',
        color: theme.palette.text.secondary
      }
    },
    onMouseOver: (params: any) => {
      polarTitleData.current = params.value
    },
    onMouseOut: () => (polarTitleData.current = 2.8),
    style: {
      height: 400
    },
    polar: {
      radius: [80, '90%']
    },
    angleAxis: {
      show: false,
      max: 4,
      startAngle: 90
    },
    radiusAxis: {
      show: false,
      type: 'category',
      data: ['a', 'b', 'c', 'd']
    },
    series: [
      {
        type: 'bar',
        data: [
          {
            value: 2,
            itemStyle: {
              color: theme.palette.primary.main
            }
          },
          {
            value: 1.2,
            itemStyle: {
              color: theme.palette.success.main
            }
          },
          {
            value: 2.4,
            itemStyle: {
              color: theme.palette.info.main
            }
          },
          {
            value: 3.6,
            itemStyle: {
              color: theme.palette.warning.main
            }
          }
        ],
        showBackground: true,

        // backgroundStyle: {
        //   color: theme.palette.customColors.trackBg
        // },
        coordinateSystem: 'polar',
        itemStyle: {
          borderRadius: 45
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader title={'Polar Bar Chart'} />
      <CardContent>
        <EChart {...echartOptions} />
      </CardContent>
    </Card>
  )
}

export default PolarBar
