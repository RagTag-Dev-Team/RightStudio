// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

// Component Imports
import CardStatVertical from '@/components/card-statistics/Vertical'
import LastTransaction from '@views/dashboards/crm/LastTransaction'

// Server Action Imports
import { getServerMode } from '@core/utils/serverHelpers'

const DashboardMain = () => {
  // Vars
  const serverMode = getServerMode()

  // TODO: Replace with actual user data from your auth system
  const userData = {
    name: 'John Doe',
    ragzBalance: '1,234.56',
    tagzBalance: '789.10',
    nftCount: 12
  }

  return (
    <Grid container spacing={6}>
      {/* Welcome Message */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant='h3' sx={{ mb: 2 }}>
              Welcome back, {userData.name}! 👋
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              Here&apos;s an overview of your digital assets and recent activity.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* User Balances */}
      <Grid item xs={12} md={6}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <CardStatVertical
              title='RAGZ'
              stats={userData.ragzBalance}
              subtitle='Current Balance'
              chipText='+12%'
              avatarIcon='tabler-currency-dollar'
              avatarColor='primary'
              avatarSkin='light'
              avatarSize={44}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardStatVertical
              title='TAGZ'
              stats={userData.tagzBalance}
              subtitle='Current Balance'
              chipText='+12%'
              avatarIcon='tabler-coin'
              avatarColor='success'
              avatarSkin='light'
              avatarSize={44}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardStatVertical
              title='Assets'
              stats={userData.nftCount.toString()}
              subtitle='Total Owned'
              chipText='+12%'
              avatarIcon='tabler-photo'
              avatarColor='info'
              avatarSkin='light'
              avatarSize={44}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Recent Transactions */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant='h5' sx={{ mb: 4 }}>
              Recent Activity
            </Typography>
            <LastTransaction serverMode={serverMode} />
          </CardContent>
        </Card>
      </Grid>

      {/* Commented out other grid items
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
        <ActivityTimeline />
      </Grid>
      */}
    </Grid>
  )
}

export default DashboardMain
