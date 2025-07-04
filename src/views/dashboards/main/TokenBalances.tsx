'use client'

// Next Imports
import { useState, useEffect } from 'react'

import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// import { useTheme } from '@mui/material/styles'
import CircularProgress from '@mui/material/CircularProgress'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

//import type { ApexOptions } from 'apexcharts'

const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// React Imports

// MUI Imports
// import Grid from '@mui/material/Grid'

// ThirdWeb Imports
import { useActiveAccount } from 'thirdweb/react'

// Add useSession import
import { useSession } from 'next-auth/react'

import { getUserBalances } from '@/app/server/user-actions'

// Component Imports
//import CardStatVertical from '@/components/card-statistics/Vertical'

// Add cache interface
interface CacheData {
  balances: {
    RAGZ: string
    TAGZ: string
    'Minted Media': string
  }
  chartData: {
    series: number[]
    options: any
  }
  timestamp: number
  userAddress: string // Add userAddress to ensure cache is user-specific
}

// Cache duration in milliseconds (5 minutes)
const CACHE_DURATION = 5 * 60 * 1000

// Cache key for localStorage
const CACHE_KEY = 'token_balances_cache'

const TokenBalances = () => {
  const account = useActiveAccount()
  const { data: session } = useSession()

  // const successColorWithOpacity = 'var(--mui-palette-success-lightOpacity)'

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
        width: 250
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

  useEffect(() => {
    const fetchBalances = async () => {
      setIsLoading(true)
      setError(null)

      // Get the address from account or session
      const userAddress = account?.address || (session?.user as any)?.wallet_address

      if (!userAddress) {
        setError('No wallet address found')
        setIsLoading(false)

        return
      }

      // Check if we have valid cached data in localStorage
      const now = Date.now()

      try {
        const cachedData = localStorage.getItem(CACHE_KEY)

        if (cachedData) {
          const parsedCache: CacheData = JSON.parse(cachedData)

          // Check if cache is valid and belongs to current user
          if (parsedCache.userAddress === userAddress && now - parsedCache.timestamp < CACHE_DURATION) {
            setTokenBalances(parsedCache.balances)
            setChartData(parsedCache.chartData)
            setIsLoading(false)

            return
          }
        }
      } catch (error) {
        console.error('Error reading from cache:', error)

        // Continue with fresh fetch if cache read fails
      }

      try {
        const { ragzResult, tagzResult, nftResult } = await getUserBalances(userAddress)

        // Format the balance to 2 decimal places
        const ragzBalance = Number(ragzResult.result.displayValue).toFixed(2)
        const tagzBalance = Number(tagzResult.result.displayValue).toFixed(2)
        const nftBalance = Number(nftResult.result.displayValue).toFixed(2)

        const tokenBalance = [Number(ragzBalance), Number(tagzBalance), Number(nftBalance)]

        const newBalances = {
          RAGZ: ragzBalance,
          TAGZ: tagzBalance,
          'Minted Media': nftBalance
        }

        const newChartData = {
          ...chartData,
          series: tokenBalance
        }

        // Update state
        setTokenBalances(newBalances)
        setChartData(newChartData)

        // Update cache in localStorage
        const cacheData: CacheData = {
          balances: newBalances,
          chartData: newChartData,
          timestamp: now,
          userAddress
        }

        try {
          localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData))
        } catch (error) {
          console.error('Error saving to cache:', error)

          // Continue even if cache save fails
        }
      } catch (error) {
        console.error('Error fetching balance:', error)
        setError(error instanceof Error ? error.message : 'Failed to fetch balances')
      } finally {
        setIsLoading(false)
      }
    }

    fetchBalances()
  }, [account, session])

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
            ) : error ? (
              <Typography color='error'>{error}</Typography>
            ) : (
              <AppReactApexCharts
                type='donut'
                width={250}
                height={250}
                series={chartData.series}
                options={chartData.options}
              />
            )}
          </div>
          {!isLoading && !error && (
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
