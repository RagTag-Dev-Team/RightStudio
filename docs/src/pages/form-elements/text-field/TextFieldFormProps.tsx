// MUI Imports
import Grid from '@mui/material/Grid';

// Component Imports
import CustomTextField from '@core/components/mui/TextField';

const TextFieldFormProps = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={2}>
        <CustomTextField
          required
          id='form-props-required'
          label='Required'
          defaultValue='Hello World'
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <CustomTextField
          disabled
          id='form-props-disabled'
          label='Disabled'
          defaultValue='Hello World'
          helperText='helper text'
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <CustomTextField
          type='password'
          label='Password'
          id='form-props-password-input'
          autoComplete='current-password'
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <CustomTextField
          label='Read Only'
          defaultValue='Hello World'
          id='form-props-read-only-input'
          inputProps={{ readOnly: true }}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <CustomTextField type='number' label='Number' id='form-props-number' />
      </Grid>
      <Grid item xs={12} md={2}>
        <CustomTextField
          label='Label'
          placeholder='Placeholder'
          id='form-props-full-width'
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <CustomTextField
          id='form-props-search'
          label='Search field'
          type='search'
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <CustomTextField
          label='Helper text'
          id='form-props-helperText'
          defaultValue='Default Value'
          helperText='Some important text'
        />
      </Grid>
    </Grid>
  )
}

export default TextFieldFormProps;
