// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControlLabel from '@mui/material/FormControlLabel'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'

// Style Imports
import styles from './styles.module.css'

// Icon Imports
import Icon from '../../../@core/components/IconifyIcon'

const FormLayoutsAlignment = () => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(show => !show)

  return (
    <Card>
      <CardHeader title='Form Alignment' />
      <CardContent className={styles.formAlignment}>
        <form onSubmit={e => e.preventDefault()} className={styles.formWrapper}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Typography variant='h5'>Sign In</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Username' placeholder='johnDoe ' />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Password'
                id='outlined-adornment-password'
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={e => e.preventDefault()}
                        aria-label='toggle password visibility'
                      >
                        <Icon icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel control={<Checkbox />} label='Remember me' />
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' type='submit' fullWidth>
                Log In
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsAlignment
