'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import type { EChartsOption } from 'echarts'
import { EChart } from '@hcorta/react-echarts'

const RadialBar = () => {
  const theme = useTheme()

  const echartOptions: EChartsOption = {
    style: {
      height: 400
    },
    title: {
      text: `Polar Bar: 10`,
      subtext: 'Feature',
      left: 'center',
      top: '40%',
      textStyle: {
        color: theme.palette.text.primary,
        fontFamily: 'Roboto',
        fontSize: '16px'
      },
      subtextStyle: {
        fontFamily: 'Roboto',
        fontSize: '14px',
        color: theme.palette.text.secondary
      }
    },
    polar: {
      radius: [120, '80%']
    },
    angleAxis: {
      show: false,
      max: 100,
      startAngle: 180
    },
    radiusAxis: {
      show: false,
      type: 'category',
      data: ['d']
    },
    series: {
      type: 'bar',
      data: [
        {
          value: 50,
          itemStyle: {
            color: (theme.palette.background.paper, theme.palette.action.hover),
            borderColor: theme.palette.background.paper,
            borderWidth: 12
          },
          emphasis: {
            disabled: true
          }
        },
        {
          value: 40,
          itemStyle: {
            color: theme.palette.primary.main
          },
          emphasis: {
            disabled: true
          }
        }
      ],

      // showBackground: true,
      /* backgroundStyle: {
        color: theme.palette.customColors.bodyBg
      }, */
      coordinateSystem: 'polar',

      itemStyle: {
        borderRadius: 45
      }
    }
  }

  return (
    <Card>
      <CardHeader title={'Radial Bar Chart'} />
      <CardContent>
        <EChart {...echartOptions} />
      </CardContent>
    </Card>
  )
}

export default RadialBar
