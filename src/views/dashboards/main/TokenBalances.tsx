'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import { useTheme } from '@mui/material/styles'
import CircularProgress from '@mui/material/CircularProgress'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import type { ApexOptions } from 'apexcharts'

const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// React Imports
import { useState, useEffect } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// ThirdWeb Imports
import { useActiveAccount } from 'thirdweb/react'

// Component Imports
import CardStatVertical from '@/components/card-statistics/Vertical'

// Add cache interface
interface CacheData {
  balances: any // Update this type based on your balance data structure
  timestamp: number
}

// Cache duration in milliseconds (30 seconds)
const CACHE_DURATION = 30000

// Create a cache object outside the component to persist between renders
let balancesCache: CacheData | null = null

const TokenBalances = () => {
  // Get user account information
  const account = useActiveAccount()
  const theme = useTheme()

  const successColorWithOpacity = 'var(--mui-palette-success-lightOpacity)'

  // State for balances and loading
  const [isLoading, setIsLoading] = useState(true)

  const [tokenBalances, setTokenBalances] = useState<{ [key: string]: string }>({
    RAGZ: '0',
    TAGZ: '0',
    'Minted Media': '0'
  })

  const [chartData, setChartData] = useState<any>({
    series: [0, 0],
    options: {
      chart: {
        type: 'donut',
        width: 300
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
      labels: ['RAGZ', 'TAGZ', 'Minted Media'],
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
              width: 180
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    }
  })

  const [balances, setBalances] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBalances = async () => {
      try {
        // Check if we have cached data and if it's still valid
        const now = Date.now()

        if (balancesCache && now - balancesCache.timestamp < CACHE_DURATION) {
          setBalances(balancesCache.balances)
          setLoading(false)

          return
        }

        const response = await fetch('/api/balances')
        const data = await response.json()

        // Update the cache with new data and timestamp
        balancesCache = {
          balances: data,
          timestamp: now
        }

        setBalances(data)
      } catch (error) {
        console.error('Error fetching balances:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBalances()
  }, [])

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
          // console.log('nftResult', nftResult)

          // Format the balance to 2 decimal places
          const ragzBalance = Number(ragzResult.result.displayValue).toFixed(2)
          const tagzBalance = Number(tagzResult.result.displayValue).toFixed(2)
          const nftBalance = Number(nftResult.result).toFixed(2)

          // const nftBalance = Number(nftResult.result)
          const tokenBalance = [Number(ragzBalance), Number(tagzBalance), Number(nftBalance)]

          //  console.log('tokenBalance', tokenBalance)

          setTokenBalances({
            RAGZ: ragzBalance,
            TAGZ: tagzBalance,
            'Minted Media': nftBalance
          })

          setChartData({
            series: tokenBalance,
            options: {
              labels: ['RAGZ', 'TAGZ', 'Minted Media'],
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
          </div>
          <div className='flex justify-center'>
            {isLoading ? (
              <CircularProgress size={100} />
            ) : (
              <AppReactApexCharts
                type='donut'
                width={300}
                height={300}
                series={chartData.series}
                options={chartData.options}
              />
            )}
          </div>
          {!isLoading && (
            <>
              <Typography>Account Balances</Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Token</TableCell>
                      <TableCell align='right'>Balance</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Object.entries(tokenBalances).map(([token, balance]) => (
                      <TableRow key={token}>
                        <TableCell component='th' scope='row'>
                          {token}
                        </TableCell>
                        <TableCell align='right'>{balance}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default TokenBalances
