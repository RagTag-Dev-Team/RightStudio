// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import StepperLinearWithValidation from '@views/forms/form-wizard/StepperLinearWithValidation'
import StepperAlternativeLabel from '@views/forms/form-wizard/StepperAlternativeLabel'
import StepperVerticalWithNumbers from '@views/forms/form-wizard/StepperVerticalWithNumbers'
import StepperVerticalWithoutNumbers from '@views/forms/form-wizard/StepperVerticalWithoutNumbers'

const FormWizard = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant='h6'>Linear Stepper with Validation</Typography>
      </Grid>
      <Grid item xs={12}>
        <StepperLinearWithValidation />
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h6'>Alternative Label</Typography>
      </Grid>
      <Grid item xs={12}>
        <StepperAlternativeLabel />
      </Grid>
      <Grid item xs={12}>
        <StepperVerticalWithNumbers />
      </Grid>
      <Grid item xs={12}>
        <StepperVerticalWithoutNumbers />
      </Grid>
    </Grid>
  )
}

export default FormWizard
