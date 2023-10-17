// Next Imports
import Link from 'next/link'

// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// Component Imports
import LineChart from '@views/charts/echarts/LineChart'
import AreaChart from '@views/charts/echarts/AreaChart'
import ColumnChart from '@views/charts/echarts/ColumnChart'
import ScatterChart from '@views/charts/echarts/ScatterChart'
import RadarChart from '@views/charts/echarts/RadarChart'
import PieChart from '@views/charts/echarts/PieChart'

// Style Imports
import styles from '@/styles/link.module.css'

const ECharts = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='h5'>ECharts</Typography>
        <Typography variant='body2'>
          <code>echarts</code> is a third-party library. Please refer to its{' '}
          <Link href='https://echarts.apache.org/' target='_blank' rel='noopener noreferrer' className={styles.link}>
            official documentation
          </Link>{' '}
          for more details. <code>react-echarts</code> is a React wrapper for the ECharts library. Please refer to its{' '}
          <Link
            href='https://github.com/hugocxl/react-echarts'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.link}
          >
            official documentation
          </Link>{' '}
          for more details.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <LineChart />
      </Grid>
      <Grid item xs={12}>
        <AreaChart />
      </Grid>
      <Grid item xs={12}>
        <ColumnChart />
      </Grid>
      <Grid item xs={12}>
        <ScatterChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <RadarChart />
      </Grid>
      <Grid item xs={12} md={6}>
        <PieChart />
      </Grid>
    </Grid>
  )
}

export default ECharts
