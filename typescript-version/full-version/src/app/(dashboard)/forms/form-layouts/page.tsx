'use client'

// MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import FormLayoutsBasic from '../../../../views/forms/form-layouts/FormLayoutsBasic'
import FormLayoutsIcon from '../../../../views/forms/form-layouts/FormLayoutsIcons'
import FormLayoutsSeparator from '../../../../views/forms/form-layouts/FormLayoutsSeparator'
import FormLayoutsTabs from '../../../../views/forms/form-layouts/FormLayoutsTabs'
import FormLayoutsCollapsible from '../../../../views/forms/form-layouts/FormLayoutsCollapsible'
import FormLayoutsAlignment from '../../../../views/forms/form-layouts/FormLayoutsAlignment'

import DatePickerWrapper from '../../../../@core/styles/libs/react-datepicker'

const FormLayouts = () => {
  return (
    <DatePickerWrapper>
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
          <Typography variant='h6'>Form with Tabs</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormLayoutsTabs />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6'>Collapsible Sections</Typography>
        </Grid>
        <Grid item xs={12}>
          <FormLayoutsCollapsible />
        </Grid>
        <Grid item xs={12}>
          <FormLayoutsAlignment />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default FormLayouts
