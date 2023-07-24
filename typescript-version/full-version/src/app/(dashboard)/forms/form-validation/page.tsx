'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

import FormValidationBasic from '../../../../views/forms/form-validation/FormValidationBasic'
import FormValidationOnScheme from '../../../../views/forms/form-validation/FormValidationScheme'
import FormValidationAsyncSubmit from '../../../../views/forms/form-validation/FormValidationAsyncSubmit'

import PageHeader from '../../../../@core/components/PageHeader'

const FormValidation = () => {
  return (
    <Grid container spacing={6}>
      <PageHeader
        title='React Hook Form'
        subtitle='React Hooks for forms validation (Web + React Native)'
        href='https://github.com/react-hook-form/react-hook-form'
      />
      <Grid item xs={12}>
        <FormValidationBasic />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormValidationOnScheme />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormValidationAsyncSubmit />
      </Grid>
    </Grid>
  )
}

export default FormValidation
