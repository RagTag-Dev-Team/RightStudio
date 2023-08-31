// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import ApexBarChart from '@views/charts/apex/ApexBarChart'
import ApexAreaChart from '@views/charts/apex/ApexAreaChart'
import ApexLineChart from '@views/charts/apex/ApexLineChart'
import ApexRadarChart from '@views/charts/apex/ApexRadarChart'
import ApexDonutChart from '@views/charts/apex/ApexDonutChart'
import ApexColumnChart from '@views/charts/apex/ApexColumnChart'
import ApexScatterChart from '@views/charts/apex/ApexScatterChart'
import ApexHeatmapChart from '@views/charts/apex/ApexHeatmapChart'
import ApexRadialBarChart from '@views/charts/apex/ApexRadialBarChart'
import ApexCandlestickChart from '@views/charts/apex/ApexCandlestickChart'

// Style Imports
import ApexChartWrapper from '@core/styles/libs/ReactApexCharts'

const ApexCharts = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6} className='match-height'>
        <Grid item xs={12}>
          <ApexAreaChart />
        </Grid>
        <Grid item xs={12}>
          <ApexColumnChart />
        </Grid>
        <Grid item xs={12}>
          <ApexScatterChart />
        </Grid>
        <Grid item xs={12}>
          <ApexLineChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <ApexBarChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <ApexCandlestickChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <ApexHeatmapChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <ApexRadialBarChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <ApexRadarChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <ApexDonutChart />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default ApexCharts
