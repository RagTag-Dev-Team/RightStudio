// React Imports
import React from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const TypographyHeadings = () => {
  return (
    <Card>
      <CardHeader title='Headings' />
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={2}>
            <Typography>H1</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='h1'>Heading 1</Typography>
            <Typography variant='body2'>font-size: / line-height: / font-weight:</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography>H2</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='h2'>Heading 2</Typography>
            <Typography variant='body2'>font-size: / line-height: / font-weight:</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography>H3</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='h3'>Heading 3</Typography>
            <Typography variant='body2'>font-size: / line-height: / font-weight:</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography>H4</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='h4'>Heading 4</Typography>
            <Typography variant='body2'>font-size: / line-height: / font-weight:</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography>H5</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='h5'>Heading 5</Typography>
            <Typography variant='body2'>font-size: / line-height: / font-weight:</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography>H6</Typography>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant='h6'>Heading 6</Typography>
            <Typography variant='body2'>font-size: / line-height: / font-weight:</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TypographyHeadings
