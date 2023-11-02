// Next Imports
import Link from 'next/link'

// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

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
import styles from '@/styles/link.module.css'

const Recharts = () => {
  const direction = getDirection()

  return (
    <RechartsWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant='h5'>Recharts</Typography>
          <Typography variant='body2'>
            <code>recharts</code> is a third-party library. Please refer to its{' '}
            <Link href='https://recharts.org/' target='_blank' rel='noopener noreferrer' className={styles.link}>
              official documentation
            </Link>{' '}
            for more details.
          </Typography>
        </Grid>
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
