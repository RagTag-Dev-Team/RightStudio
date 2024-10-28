// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// Component Imports

import FormLayoutsSeparator from '@views/dashboards/fileUpload/form-layouts/FormLayoutsSeparator.tsx'


const FormLayouts = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <FormLayoutsSeparator />
      </Grid>
    </Grid>
  )
}

export default FormLayouts
