'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
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

// Add useSession import
import { useSession } from 'next-auth/react'

import { getUserBalances } from '@/app/server/user-actions'

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
const balancesCache: CacheData | null = null

const TokenBalances = () => {
  const account = useActiveAccount()
  const { data: session } = useSession()

  const successColorWithOpacity = 'var(--mui-palette-success-lightOpacity)'

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

      // Get the address from account or session
      const userAddress = account?.address || (session?.user as any)?.wallet_address

      if (!userAddress) {
        setIsLoading(false)

        return
      }

      try {
        const { ragzResult, tagzResult, nftResult } = await getUserBalances(userAddress)

        // Format the balance to 2 decimal places
        const ragzBalance = Number(ragzResult.result.displayValue).toFixed(2)
        const tagzBalance = Number(tagzResult.result.displayValue).toFixed(2)
        const nftBalance = Number(nftResult.result).toFixed(2)

        const tokenBalance = [Number(ragzBalance), Number(tagzBalance), Number(nftBalance)]

        console.log('tokenBalance', tokenBalance)

        setTokenBalances({
          RAGZ: ragzBalance,
          TAGZ: tagzBalance,
          'Minted Media': nftBalance
        })

        setChartData(prev => ({
          ...prev,
          series: tokenBalance
        }))
      } catch (error) {
        console.error('Error fetching balance:', error)
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
