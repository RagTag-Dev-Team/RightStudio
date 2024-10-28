// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// Component Imports
import FormLayoutsBasic from '@views/dashboards/fileUpload/form-layouts/FormLayoutsBasic.tsx'
import FormLayoutsIcon from '@views/dashboards/fileUpload/form-layouts/FormLayoutsIcons.tsx'
import FormLayoutsSeparator from '@views/dashboards/fileUpload/form-layouts/FormLayoutsSeparator.tsx'
import FormLayoutsTabs from '@views/dashboards/fileUpload/form-layouts/FormLayoutsTabs.tsx'
import FormLayoutsCollapsible from '@views/dashboards/fileUpload/form-layouts/FormLayoutsCollapsible.tsx'
import FormLayoutsAlignment from '@views/dashboards/fileUpload/form-layouts/FormLayoutsAlignment.tsx'

const FormLayouts = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        <FormLayoutsBasic />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormLayoutsIcon />
      </Grid>
      <Grid item xs={12}>
        <FormLayoutsSeparator />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>Form with Tabs</Typography>
      </Grid>
      <Grid item xs={12}>
        <FormLayoutsTabs />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>Collapsible Sections</Typography>
      </Grid>
      <Grid item xs={12}>
        <FormLayoutsCollapsible />
      </Grid>
      <Grid item xs={12}>
        <FormLayoutsAlignment />
      </Grid>
    </Grid>
  )
}

export default FormLayouts
