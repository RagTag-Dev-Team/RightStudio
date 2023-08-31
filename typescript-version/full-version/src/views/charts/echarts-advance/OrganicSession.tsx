'use client'

// MUI Imports
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Third-party Imports
import type { EChartsOption } from 'echarts'
import { EChart } from '@hcorta/react-echarts'

const OrganicSession = () => {
  const theme = useTheme()

  const echartOptions: EChartsOption = {
    style: {
      height: 400
    },
    tooltip: {
      trigger: 'item',

      // backgroundColor: theme.palette.customColors.bodyBg,
      borderColor: theme.palette.divider,
      textStyle: {
        color: theme.palette.text.primary
      }
    },
    legend: {
      bottom: '5%',
      left: 'center',
      icon: 'circle',
      selectedMode: false,
      textStyle: {
        color: theme.palette.text.primary
      }
    },
    graphic: [
      {
        type: 'group',
        left: 'center',
        top: '47%',
        children: [
          {
            type: 'text',
            z: 100,
            left: 'center',
            top: '40%',
            style: {
              fill: theme.palette.text.primary,
              text: 'Organic Session'
            }
          }
        ]
      },
      {
        type: 'group',
        left: 'center',
        top: '53%',
        children: [
          {
            type: 'text',
            z: 100,
            left: 'center',
            top: '70%',
            style: {
              fill: theme.palette.text.primary,
              text: 'Second text'
            }
          }
        ]
      }
    ],
    series: [
      {
        name: 'Organic Session',
        type: 'pie',
        radius: ['75%', '90%'],
        center: ['50%', '60%'],
        startAngle: 204,
        label: {
          show: false
        },
        itemStyle: {
          borderColor: theme.palette.background.paper, // Set the border color
          borderWidth: 10 // Set the border width
        },
        data: [
          { value: 1048, name: 'USA', itemStyle: { color: theme.palette.warning.main } },

          // { value: 735, name: 'Canada', itemStyle: { color: hexToRGBA(theme.palette.warning.main, 0.8) } },
          // { value: 580, name: 'India', itemStyle: { color: hexToRGBA(theme.palette.warning.main, 0.6) } },
          // { value: 484, name: 'Japan', itemStyle: { color: hexToRGBA(theme.palette.warning.main, 0.4) } },
          // { value: 300, name: 'France', itemStyle: { color: hexToRGBA(theme.palette.warning.main, 0.2) } },
          {
            // make an record to fill the bottom 50%
            value: 1048 + 735,
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
            // eslint-disable-next-line lines-around-comment
            // @ts-ignore
            tooltip: {
              show: false
            }
          }
        ]
      }
    ]
  }

  return (
    <Card>
      <CardHeader title={'Organic Session'} />
      <CardContent>
        <EChart {...echartOptions} />
      </CardContent>
    </Card>
  )
}

export default OrganicSession
