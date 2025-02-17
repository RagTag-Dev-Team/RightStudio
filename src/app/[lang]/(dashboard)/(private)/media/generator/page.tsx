import Grid from '@mui/material/Grid'

import GenerateForm from '@/views/media/generator-form/GenerateForm'

export default function GeneratorPage() {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <GenerateForm />
      </Grid>
    </Grid>
  )
}
