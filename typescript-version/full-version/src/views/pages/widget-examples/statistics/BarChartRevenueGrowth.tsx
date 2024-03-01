'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import { useColorScheme, useTheme } from '@mui/material/styles'

// Third-party Imports
import type { ApexOptions } from 'apexcharts'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const series = [{ data: [32, 52, 72, 94, 116, 94, 72] }]

const BarChartRevenueGrowth = () => {
  // Hook
  const theme = useTheme()
  const { mode, systemMode } = useColorScheme()

  // Vars
  const _mode = (mode === 'system' ? systemMode : mode) || 'light'

  // Vars
  const successColorWithOpacity = rgbaToHex(`rgb(${theme.palette.success.mainChannel} / 0.16)`)

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        distributed: true,
        columnWidth: '48%'
      }
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    colors: [
      successColorWithOpacity,
      successColorWithOpacity,
      successColorWithOpacity,
      successColorWithOpacity,
      theme.palette.success.main,
      successColorWithOpacity,
      successColorWithOpacity
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    grid: {
      show: false,
      padding: {
        top: -10,
        left: -10,
        right: -8,
        bottom: -12
      }
    },
    xaxis: {
      categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      axisTicks: { show: false },
      axisBorder: { show: false },
      tickPlacement: 'on',
      labels: {
        style: {
          colors: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.4)`),
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.body2.fontSize as string
        }
      }
    },
    yaxis: { show: false }
  }

  return (
    <Card>
      <CardContent className='flex justify-between gap-4'>
        <div className='flex flex-col justify-between'>
          <div className='flex flex-col gap-y-2'>
            <Typography variant='h5'>Revenue Growth</Typography>
            <Typography>Weekly Report</Typography>
          </div>
          <div className='flex flex-col gap-y-2 items-start'>
            <Typography variant='h3'>$4,673</Typography>
            <Chip variant='tonal' size='small' color='success' label='+15.2%' />
          </div>
        </div>
        <AppReactApexCharts type='bar' width={160} height={144} series={series} options={options} />
      </CardContent>
    </Card>
  )
}

export default BarChartRevenueGrowth
