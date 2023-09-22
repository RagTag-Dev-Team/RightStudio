// React Imports
import { useState } from 'react'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

// Styles Imports
import styles from '../styles.module.css'

const ChangePasswordCard = () => {
  // States
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)

  const handleClickShowCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword)
  }

  return (
    <Card>
      <CardHeader title='Change Password' />
      <CardContent>
        <form>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Current Password'
                type={showCurrentPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowCurrentPassword}
                        onMouseDown={e => e.preventDefault()}
                      >
                        <Icon icon={showCurrentPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
          </Grid>
          <Grid container className={styles.marginTop}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='New Password'
                type={showNewPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        onMouseDown={e => e.preventDefault()}
                      >
                        <Icon icon={showNewPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='Confirm New Password'
                type={showConfirmPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        onMouseDown={e => e.preventDefault()}
                      >
                        <Icon icon={showConfirmPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Password Requirements:</Typography>
              <div>
                <div className='flex items-center'>
                  <Icon icon='mdi:checkbox-blank-circle' height={8} width={8} />
                  Minimum 8 characters long - the more, the better
                </div>
                <div className='flex items-center'>
                  <Icon icon='mdi:checkbox-blank-circle' height={8} width={8} />
                  At least one lowercase & one uppercase character
                </div>
                <div className='flex items-center'>
                  <Icon icon='mdi:checkbox-blank-circle' height={8} width={8} />
                  At least one number, symbol, or whitespace character
                </div>
              </div>
            </Grid>
            <Grid item xs={12} className='flex gap-4'>
              <Button variant='contained'>Save Changes</Button>
              <Button variant='outlined' type='reset' color='secondary'>
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default ChangePasswordCard
