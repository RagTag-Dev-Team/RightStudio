'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import { EChart } from '@hcorta/react-echarts'

// @ts-ignore
// import avatarImage from '../../../../public/images/avatars/1.png'

const TotalVisit = () => {
  const theme = useTheme()

  const echartOptions: EChartsOption = {
    style: {
      height: 400
    },
    title: {
      text: `Polar Bar: 10`,
      subtext: 'Feature',
      left: 'center',
      top: '50%',
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
    polar: {
      radius: [120, '80%']
    },
    angleAxis: {
      show: false,
      startAngle: 270
    },
    radiusAxis: {
      show: false,
      z: 10,
      type: 'category',
      data: ['d']
    },
    graphic: [
      {
        type: 'image',
        left: 'center',
        top: '35%',
        style: {
          // image: avatarImage,
          width: 50,
          height: 50
        }
      }
    ],
    series: {
      type: 'bar',
      data: [
        {
          value: 60,
          emphasis: {
            disabled: true
          },
          itemStyle: {
            color: (theme.palette.background.paper, theme.palette.action.hover),
            borderColor: theme.palette.background.paper
          }
        },
        {
          value: 40,
          emphasis: {
            disabled: true
          },
          itemStyle: {
            color: new echarts.graphic.LinearGradient(1, 1, 0, 1, [
              {
                offset: 0,
                color: theme.palette.background.paper
              },
              {
                offset: 1,
                color: theme.palette.info.main
              }
            ])
          }
        }
      ],

      // showBackground: true,
      // backgroundStyle: {
      //   color: theme.palette.customColors.bodyBg
      // },
      coordinateSystem: 'polar',
      itemStyle: {
        borderRadius: 10
      },
      barMaxWidth: 15
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

export default TotalVisit
