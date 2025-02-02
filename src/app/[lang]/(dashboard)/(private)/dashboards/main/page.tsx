// React Imports

// import { useState, useEffect } from 'react'

// Thirdweb Imports
// import { useActiveAccount } from 'thirdweb/react'

// MUI Imports
import Grid from '@mui/material/Grid'

// import Typography from '@mui/material/Typography'
// import Card from '@mui/material/Card'
// import CardContent from '@mui/material/CardContent'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'

// Component Imports

// Component Imports
// import DistributedBarChartOrder from '@views/dashboards/crm/DistributedBarChartOrder'
// import LineAreaYearlySalesChart from '@views/dashboards/crm/LineAreaYearlySalesChart'
// import CardStatVertical from '@/components/card-statistics/Vertical'
// import BarChartRevenueGrowth from '@views/dashboards/crm/BarChartRevenueGrowth'
// import EarningReportsWithTabs from '@views/dashboards/crm/EarningReportsWithTabs'
// import RadarSalesChart from '@views/dashboards/crm/RadarSalesChart'
// import SalesByCountries from '@views/dashboards/crm/SalesByCountries'
// import ProjectStatus from '@views/dashboards/crm/ProjectStatus'
// import ActiveProjects from '@views/dashboards/crm/ActiveProjects'
// import LastTransaction from '@views/dashboards/crm/LastTransaction'
// import ActivityTimeline from '@views/dashboards/crm/ActivityTimeline'
import TokenBalances from '@views/dashboards/main/TokenBalances'

// Server Action Imports

import LatestSlider from '@/views/dashboards/main/LatestSlider'

const DashboardMain = async () => {
  // Vars

  return (
    <Grid container spacing={6}>
      {/* First row with equal height columns */}
      <Grid item container xs={12} spacing={6}>
        <Grid item xs={12} md={8}>
          <LatestSlider />
        </Grid>
        <Grid item xs={12} md={4}>
          <TokenBalances />
        </Grid>
      </Grid>

      {/* Rest of the dashboard components
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
      <Grid item xs={12} lg={8}></Grid>
    </Grid>
  )
}

export default DashboardMain
