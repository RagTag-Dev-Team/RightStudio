// React Imports
import { useState } from 'react'

// Next Imports
import Link from 'next/link'

// MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'

// Icon Imports
import Icon from '../../../@core/components/IconifyIcon'

// Style Imports
import styles from './styles.module.css'

const FormLayoutsBasic = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleClickShowConfirmPassword = () => setShowConfirmPassword(show => !show)

  return (
    <Card>
      <CardHeader title='Basic' />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <TextField fullWidth label='Name' placeholder='Leonard Carter' />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Email'
                placeholder='carterleonard@gmail.com'
                helperText='You can use letters, numbers & periods'
              />
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
              <FormControl fullWidth>
                <InputLabel htmlFor='outlined-confirm-password'>Confirm Password</InputLabel>
                <OutlinedInput
                  label='Confirm Password'
                  id='outlined-confirm-password'
                  type={showConfirmPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={e => e.preventDefault()}
                        aria-label='toggle confirm password visibility'
                      >
                        <Icon icon={showConfirmPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormHelperText id='form-layouts-basic-confirm-password-helper'>
                Make sure to type the same password as above
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <Box className='flex items-center justify-between'>
                <Button variant='contained'>get started!</Button>
                <Box className='flex items-center justify-center'>
                  <Typography variant='body1'>Already have an account?</Typography>
                  <Link href='/' onClick={e => e.preventDefault()} className={styles.primaryColor}>
                    Log in
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormLayoutsBasic
