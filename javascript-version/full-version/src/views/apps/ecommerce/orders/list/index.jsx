'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import OrderCard from './OrderCard'
import OrderListTable from './OrderListTable'

const OrderList = ({ orderData }) => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <OrderCard />
      </Grid>
      <Grid item xs={12}>
        <OrderListTable orderData={orderData} />
      </Grid>
    </Grid>
  )
}

export default OrderList
