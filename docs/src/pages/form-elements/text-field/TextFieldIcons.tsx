// MUI Imports
import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'

// Component Imports
import CustomTextField from '@core/components/mui/TextField'

const TextFieldIcons = () => {
  return (
    <form className='flex items-center'>
      <Grid container spacing={6}>
        <Grid item>
          <CustomTextField
            id='input-with-icon-adornment'
            label='With adornment'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <i className='tabler-user-circle' />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <Grid container spacing={2}>
            <Grid item className='flex items-center'>
              <i className='tabler-user-circle text-base mbs-3' />
            </Grid>
            <Grid item>
              <CustomTextField
                fullWidth
                id='input-with-icon-grid'
                label='With a grid'
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  )
}

export default TextFieldIcons;
