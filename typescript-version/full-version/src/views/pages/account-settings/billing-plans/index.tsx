'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Type Imports
import type { PricingPlanType } from '@/types/pages/pricingTypes'

// Component Imports
import CurrentPlan from './CurrentPlan'
import Address from './Address'
import PaymentMethod from './PaymentMethod'

const BillingPlans = ({ data }: { data: PricingPlanType[] }) => {
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
