// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import ProjectListTable from './ProjectListTable'
import UserActivityTimeLine from './UserActivityTimeline'

const OverViewTab = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <ProjectListTable />
      </Grid>
      <Grid item xs={12}>
        <UserActivityTimeLine />
      </Grid>
    </Grid>
  )
}

export default OverViewTab
