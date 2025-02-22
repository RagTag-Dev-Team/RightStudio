// Next Imports

// MUI Imports
import Grid from '@mui/material/Grid'

// Component imports
import BasicDataTables from '@views/react-table/BasicDataTables'

const Tables = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <BasicDataTables />
      </Grid>
    </Grid>
  )
}

export default Tables
