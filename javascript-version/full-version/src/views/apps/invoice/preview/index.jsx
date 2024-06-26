'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import PreviewActions from './PreviewActions'
import PreviewCard from './PreviewCard'

const Preview = ({ invoiceData, id }) => {
  // Handle Print Button Click
  const handleButtonClick = () => {
    window.print()
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={9}>
        <PreviewCard invoiceData={invoiceData} id={id} />
      </Grid>
      <Grid item xs={12} md={3}>
        <PreviewActions id={id} onButtonClick={handleButtonClick} />
      </Grid>
    </Grid>
  )
}

export default Preview
