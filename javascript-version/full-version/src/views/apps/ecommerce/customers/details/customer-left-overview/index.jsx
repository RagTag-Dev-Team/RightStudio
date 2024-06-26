// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import CustomerDetails from './CustomerDetails'
import CustomerPlan from './CustomerPlan'

const CustomerLeftOverview = ({ customerData }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CustomerDetails customerData={customerData} />
      </Grid>
      <Grid item xs={12}>
        <CustomerPlan />
      </Grid>
    </Grid>
  )
}

export default CustomerLeftOverview
