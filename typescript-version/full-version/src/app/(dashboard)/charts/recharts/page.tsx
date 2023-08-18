// Next Imports
import { cookies } from 'next/headers'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { Direction } from '../../../../@core/types'

// Component Imports
import RechartsBarChart from '../../../../views/charts/recharts/RechartsBarChart'
import RechartsPieChart from '../../../../views/charts/recharts/RechartsPieChart'
import RechartsLineChart from '../../../../views/charts/recharts/RechartsLineChart'
import RechartsAreaChart from '../../../../views/charts/recharts/RechartsAreaChart'
import RechartsRadarChart from '../../../../views/charts/recharts/RechartsRadarChart'
import RechartsScatterChart from '../../../../views/charts/recharts/RechartsScatterChart'

// Style Imports
import RechartsWrapper from '../../../../@core/styles/libs/Recharts'

// Data Imports
// import { langDirection } from '../../../../data/translation/langDirection'

//TODO: Remove following code and use the above code if you want to use the data from the data folder
const langDirection: { [key: string]: Direction } = {
  en: 'ltr',
  fr: 'ltr',
  ar: 'rtl'
}

const Recharts = () => {
  const lang = cookies().get('lang')
  const direction = langDirection[lang?.value || 'en']

  return (
    <RechartsWrapper>
      <Grid container spacing={6}>
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
