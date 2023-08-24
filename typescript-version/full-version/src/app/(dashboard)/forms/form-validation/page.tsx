'use client'

// MUI Imports
import Grid from '@mui/material/Grid'

import FormValidationBasic from '../../../../views/forms/form-validation/FormValidationBasic'
import FormValidationOnSchema from '../../../../views/forms/form-validation/FormValidationSchema'
import FormValidationAsyncSubmit from '../../../../views/forms/form-validation/FormValidationAsyncSubmit'

import PageHeader from '../../../../@core/components/PageHeader'
import DatePickerWrapper from '../../../../@core/styles/libs/react-datepicker'

const FormValidation = () => {
  return (
    <DatePickerWrapper>
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
          <FormValidationOnSchema />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormValidationAsyncSubmit />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default FormValidation
