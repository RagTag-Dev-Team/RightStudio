// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import RechartsBarChart from '@views/charts/recharts/RechartsBarChart'
import RechartsPieChart from '@views/charts/recharts/RechartsPieChart'
import RechartsLineChart from '@views/charts/recharts/RechartsLineChart'
import RechartsAreaChart from '@views/charts/recharts/RechartsAreaChart'
import RechartsRadarChart from '@views/charts/recharts/RechartsRadarChart'
import RechartsScatterChart from '@views/charts/recharts/RechartsScatterChart'

// Util Imports
import { getDirection } from '@/utils/get-direction'

// Style Imports
import RechartsWrapper from '@core/styles/libs/Recharts'

const Recharts = () => {
  const direction = getDirection()

  return (
    <RechartsWrapper>
      <Grid container>
        <Grid item xs={12}>
          <RechartsLineChart direction={direction} />
        </Grid>
        <Grid item xs={12}>
          <RechartsAreaChart direction={direction} />
        </Grid>
        <Grid item xs={12}>
          <RechartsScatterChart direction={direction} />
        </Grid>
        <Grid item xs={12}>
          <RechartsBarChart direction={direction} />
        </Grid>
        <Grid item xs={12} md={6}>
          <RechartsRadarChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <RechartsPieChart />
        </Grid>
      </Grid>
    </RechartsWrapper>
  )
}

export default Recharts
