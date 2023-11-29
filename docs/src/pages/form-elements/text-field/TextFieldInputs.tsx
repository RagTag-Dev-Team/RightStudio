// MUI Imports
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'

const TextFieldInputs = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        <Input fullWidth defaultValue='Hello world' inputProps={{ 'aria-label': 'description' }} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Input fullWidth placeholder='Placeholder' inputProps={{ 'aria-label': 'description' }} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Input fullWidth defaultValue='Disabled' disabled inputProps={{ 'aria-label': 'description' }} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Input fullWidth defaultValue='Error' error inputProps={{ 'aria-label': 'description' }} />
      </Grid>
    </Grid>
  )
}

export default TextFieldInputs
