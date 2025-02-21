import Grid from '@mui/material/Grid'

import { Typography } from '@mui/material'

import GenerateForm from '@/views/media/generator-form/GenerateForm'

export default function GeneratorPage() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h4'>Idea Generator</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant='h6' gutterBottom>
          Need inspiration?
        </Typography>
        <Typography variant='body1' paragraph>
          Struggling to come up with new music ideas? Let our AI-powered generator help you get started!
        </Typography>
        <Typography variant='body1'>
          Simply use the form to specify your preferences, and our AI will generate unique musical concepts tailored to
          your needs. It's the perfect tool for breaking through creative blocks.
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <GenerateForm />
      </Grid>
    </Grid>
  )
}
