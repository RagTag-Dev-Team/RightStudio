'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import { useTheme } from '@mui/material/styles'

import type { ApexOptions } from 'apexcharts'

const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// React Imports
import { useState, useEffect } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'

// ThirdWeb Imports
import { useActiveAccount } from 'thirdweb/react'

// Component Imports
import CardStatVertical from '@/components/card-statistics/Vertical'

const TokenBalances = () => {
  // Get user account information
  const account = useActiveAccount()
  const theme = useTheme()

  const successColorWithOpacity = 'var(--mui-palette-success-lightOpacity)'

  // State for balances and loading

  const [isLoading, setIsLoading] = useState(true)

  const [chartData, setChartData] = useState<any>({
    series: [0, 0],
    options: {
      chart: {
        type: 'donut',
        width: 380
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100]
        }
      },
      stroke: {
        show: false
      },
      colors: [
        successColorWithOpacity,
        successColorWithOpacity,
        successColorWithOpacity,
        successColorWithOpacity,
        'var(--mui-palette-success-main)',
        successColorWithOpacity,
        successColorWithOpacity
      ],
      labels: ['RAGZ', 'TAGZ', 'RSMC'],
      legend: {
        labels: {
          colors: '#fff'
        },
        position: 'bottom'
      },

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    }
  })

  useEffect(() => {
    const fetchBalances = async () => {
      setIsLoading(true)

      if (!account) {
        return
      }

      try {
        if (account.address) {
          const getRagzbalance = await fetch('/api/tokens/balance', {
            method: 'POST',
            body: JSON.stringify({ account: account.address })
          })

          const { ragzResult, tagzResult, nftResult } = await getRagzbalance.json()

          //  console.log('ragzResult', ragzResult)
          //  console.log('tagzResult', tagzResult.result.displayValue)
          console.log('nftResult', nftResult)

          // Format the balance to 2 decimal places
          const ragzBalance = Number(ragzResult.result.displayValue).toFixed(2)
          const tagzBalance = Number(tagzResult.result.displayValue).toFixed(2)
          const nftBalance = Number(nftResult.result).toFixed(2)

          // const nftBalance = Number(nftResult.result)
          const tokenBalance = [Number(ragzBalance), Number(tagzBalance), Number(nftBalance)]

          console.log('tokenBalance', tokenBalance)

          setChartData({
            series: tokenBalance,
            options: {
              labels: ['RAGZ', 'TAGZ', 'RSMC'],
              legend: {
                labels: {
                  colors: '#fff'
                }
              },
              stroke: {
                show: false
              },
              responsive: [
                {
                  breakpoint: 480,
                  options: {
                    legend: {
                      position: 'bottom'
                    }
                  }
                }
              ]
            }
          })
        }
      } catch (error) {
        console.error('Error fetching balance:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBalances()
  }, [account])

  return (
    <Card>
      <CardContent>
        <div className='flex flex-col gap-y-4'>
          <div className='flex flex-col gap-y-2'>
            <Typography variant='h5'>Portfolio</Typography>
            <Typography>Account Balances</Typography>
          </div>
          <div className='flex justify-center'>
            {isLoading ? (
              <CircularProgress size={100} />
            ) : (
              <AppReactApexCharts
                type='donut'
                width={380}
                height={380}
                series={chartData.series}
                options={chartData.options}
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default TokenBalances
