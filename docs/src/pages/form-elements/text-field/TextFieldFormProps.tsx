// MUI Imports
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

const TextFieldFormProps = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
      <TextField fullWidth required id='form-props-required' label='Required' defaultValue='Hello World' />
      </Grid>
      <Grid item xs={12} md={4}>
      <TextField fullWidth disabled id='form-props-disabled' label='Disabled' defaultValue='Hello World' />
      </Grid>
      <Grid item xs={12} md={4}>
      <TextField fullWidth type='password' label='Password' id='form-props-password-input' autoComplete='current-password' />
      </Grid>
      <Grid item xs={12} md={4}>
      <TextField fullWidth
        label='Read Only'
        defaultValue='Hello World'
        id='form-props-read-only-input'
        InputProps={{ readOnly: true }}
      />
      </Grid>
      <Grid item xs={12} md={4}>
      <TextField fullWidth type='number' label='Number' id='form-props-number' InputLabelProps={{ shrink: true }} />
      </Grid>
      <Grid item xs={12} md={4}>
      <TextField fullWidth
        label='Label'
        placeholder='Placeholder'
        id='form-props-full-width'
        InputLabelProps={{ shrink: true }}
      />
      </Grid>
      <Grid item xs={12} md={4}>
      <TextField fullWidth id='form-props-search' label='Search field' type='search' />
      </Grid>
      <Grid item xs={12} md={4}>
      <TextField fullWidth
        label='Helper text'
        id='form-props-helperText'
        defaultValue='Default Value'
        helperText='Some important text'
      />
      </Grid>
    </Grid>
  )
}

export default TextFieldFormProps
