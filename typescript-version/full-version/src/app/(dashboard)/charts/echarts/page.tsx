'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import LineChart from '../../../../views/charts/echarts/LineChart'
import AreaChart from '../../../../views/charts/echarts/AreaChart'
import ColumnChart from '../../../../views/charts/echarts/ColumnChart'
import ScatterChart from '../../../../views/charts/echarts/ScatterChart'
import RadarChart from '../../../../views/charts/echarts/RadarChart'
import PieChart from '../../../../views/charts/echarts/PieChart'

const ECharts = () => {
  return (
    <Grid container spacing={6} className='match-height'>
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
