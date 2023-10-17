// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import HeatMap from '@views/charts/echarts-advance/HeatMap'
import HalfPie from '@views/charts/echarts-advance/HalfPie'
import PolarBar from '@views/charts/echarts-advance/PolarBar'
import PieChart from '@views/charts/echarts-advance/PieChart'
import RadialBar from '@views/charts/echarts-advance/RadialBar'
import LineChart from '@views/charts/echarts-advance/LineChart'
import AreaChart from '@views/charts/echarts-advance/AreaChart'
import TotalSales from '@views/charts/echarts-advance/TotalSales'
import RadarChart from '@views/charts/echarts-advance/RadarChart'
import TotalVisit from '@views/charts/echarts-advance/TotalVisit'
import WeeklySales from '@views/charts/echarts-advance/WeeklySales'
import StepLineChart from '@views/charts/echarts-advance/StepLineChart'
import SupportTracker from '@views/charts/echarts-advance/SupportTracker'
import WeeklyOverview from '@views/charts/echarts-advance/WeeklyOverview'
import LineWithShadow from '@views/charts/echarts-advance/LineWithShadow'
import SimpleBarChart from '@views/charts/echarts-advance/SimpleBarChart'
import OrganicSession from '@views/charts/echarts-advance/OrganicSession'
import BarChartWithGap from '@views/charts/echarts-advance/BarChartWithGap'
import BarWithNegative from '@views/charts/echarts-advance/BarWithNegative'
import BarWithColorOpacity from '@views/charts/echarts-advance/BarWithColorOpacity'

const ECharts = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <SimpleBarChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <PolarBar />
      </Grid>
      <Grid item xs={12} md={6}>
        <BarWithColorOpacity />
      </Grid>
      <Grid item xs={12} md={6}>
        <BarChartWithGap />
      </Grid>
      <Grid item xs={12} md={6}>
        <AreaChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <LineWithShadow />
      </Grid>
      <Grid item xs={12} md={6}>
        <StepLineChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <BarWithNegative />
      </Grid>
      <Grid item xs={12} md={6}>
        <PieChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <HalfPie />
      </Grid>
      <Grid item xs={12} md={6}>
        <RadialBar />
      </Grid>
      <Grid item xs={12} md={6}>
        <LineChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <RadarChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <OrganicSession />
      </Grid>
      <Grid item xs={12} md={6}>
        <WeeklyOverview />
      </Grid>
      <Grid item xs={12} md={6}>
        <WeeklySales />
      </Grid>
      <Grid item xs={12} md={6}>
        <TotalSales />
      </Grid>
      <Grid item xs={12} md={6}>
        <SupportTracker />
      </Grid>
      <Grid item xs={12} md={6}>
        <TotalVisit />
      </Grid>
      <Grid item xs={12} md={6}>
        <HeatMap />
      </Grid>
    </Grid>
  )
}

export default ECharts
