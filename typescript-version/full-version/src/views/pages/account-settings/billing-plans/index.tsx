// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import CurrentPlan from './CurrentPlan'
import Address from './Address'
import PaymentMethod from './PaymentMethod'

const getPricingData = async () => {
  const res = await fetch(`${process.env.API_URL}/pages/pricing`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const BillingPlans = async () => {
  const data = await getPricingData()

  return (
    <Grid container>
      <Grid item xs={12}>
        <CurrentPlan data={data} />
      </Grid>
      <Grid item xs={12}>
        <PaymentMethod />
      </Grid>
      <Grid item xs={12}>
        <Address />
      </Grid>
    </Grid>
  )
}

export default BillingPlans
