'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// ThirdWeb Imports
import { useActiveAccount } from 'thirdweb/react'
import { useContract, useTokenBalance } from '@thirdweb-dev/react'

// Component Imports
import TokenBalances from '@views/dashboards/crm/TokenBalances'

import DistributedBarChartOrder from '@views/dashboards/crm/DistributedBarChartOrder'
import LineAreaYearlySalesChart from '@views/dashboards/crm/LineAreaYearlySalesChart'
import CardStatVertical from '@/components/card-statistics/Vertical'
import BarChartRevenueGrowth from '@views/dashboards/crm/BarChartRevenueGrowth'
import EarningReportsWithTabs from '@views/dashboards/crm/EarningReportsWithTabs'
import RadarSalesChart from '@views/dashboards/crm/RadarSalesChart'
import SalesByCountries from '@views/dashboards/crm/SalesByCountries'
import ProjectStatus from '@views/dashboards/crm/ProjectStatus'
import ActiveProjects from '@views/dashboards/crm/ActiveProjects'
import LastTransaction from '@views/dashboards/crm/LastTransaction'
import ActivityTimeline from '@views/dashboards/crm/ActivityTimeline'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const DashboardCRM = () => {
  // Vars
  const serverMode = getServerMode()

  // Get user account information
  const account = useActiveAccount()

  // Get RAGZ token contract and balance
  const { contract: ragzContract } = useContract('YOUR_RAGZ_CONTRACT_ADDRESS')
  const { data: ragzBalance, isLoading: isLoadingRagz } = useTokenBalance(ragzContract, account?.address)

  // Get TAGZ token contract and balance
  const { contract: tagzContract } = useContract('YOUR_TAGZ_CONTRACT_ADDRESS')
  const { data: tagzBalance, isLoading: isLoadingTagz } = useTokenBalance(tagzContract, account?.address)

  // You can access account properties like:
  // account?.address - wallet address
  // account?.chainId - connected chain ID
  // account?.connector - wallet connector info
  console.log('account', account)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <TokenBalances />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <DistributedBarChartOrder />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <LineAreaYearlySalesChart />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <CardStatVertical
          title='Total Profit'
          subtitle='Last Week'
          stats='1.28k'
          avatarColor='error'
          avatarIcon='tabler-credit-card'
          avatarSkin='light'
          avatarSize={44}
          chipText='-12.2%'
          chipColor='error'
          chipVariant='tonal'
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <CardStatVertical
          title='Total Sales'
          subtitle='Last Week'
          stats='24.67k'
          avatarColor='success'
          avatarIcon='tabler-currency-dollar'
          avatarSkin='light'
          avatarSize={44}
          chipText='+24.67%'
          chipColor='success'
          chipVariant='tonal'
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <CardStatVertical
          title='Wallet Address'
          subtitle='Connected Account'
          stats={account?.address ? `${account.address.slice(0, 6)}...${account.address.slice(-4)}` : 'Not Connected'}
          avatarColor='primary'
          avatarIcon='tabler-wallet'
          avatarSkin='light'
          avatarSize={44}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <CardStatVertical
          title='RAGZ Balance'
          subtitle='Your Token Balance'
          stats={isLoadingRagz ? 'Loading...' : ragzBalance?.displayValue || '0'}
          avatarColor='success'
          avatarIcon='tabler-coin'
          avatarSkin='light'
          avatarSize={44}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <CardStatVertical
          title='TAGZ Balance'
          subtitle='Your Token Balance'
          stats={isLoadingTagz ? 'Loading...' : tagzBalance?.displayValue || '0'}
          avatarColor='info'
          avatarIcon='tabler-coin'
          avatarSkin='light'
          avatarSize={44}
        />
      </Grid>
      <Grid item xs={12} md={8} lg={4}>
        <BarChartRevenueGrowth />
      </Grid>
      <Grid item xs={12} lg={8}>
        <EarningReportsWithTabs />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <RadarSalesChart />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <SalesByCountries />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ProjectStatus />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ActiveProjects />
      </Grid>
      <Grid item xs={12} md={6}>
        <LastTransaction serverMode={serverMode} />
      </Grid>
      <Grid item xs={12} md={6}>
        <ActivityTimeline />
      </Grid>
    </Grid>
  )
}

export default DashboardCRM
