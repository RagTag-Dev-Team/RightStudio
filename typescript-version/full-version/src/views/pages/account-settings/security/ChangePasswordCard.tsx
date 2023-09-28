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

const ChangePasswordCard = () => {
  // States
  const [isCurrentPasswordShown, setIsCurrentPasswordShown] = useState(false)
  const [isConfirmPasswordShown, setIsConfirmPasswordShown] = useState(false)
  const [isNewPasswordShown, setIsNewPasswordShown] = useState(false)

  const handleClickShowCurrentPassword = () => {
    setIsCurrentPasswordShown(!isCurrentPasswordShown)
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
                type={isCurrentPasswordShown ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowCurrentPassword}
                        onMouseDown={e => e.preventDefault()}
                      >
                        <Icon icon={isCurrentPasswordShown ? 'mdi:eye-off-outline' : 'mdi:eye-outline'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
          </Grid>
          <Grid container className='mbs-0'>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label='New Password'
                type={isNewPasswordShown ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={() => setIsNewPasswordShown(!isNewPasswordShown)}
                        onMouseDown={e => e.preventDefault()}
                      >
                        <Icon icon={isNewPasswordShown ? 'mdi:eye-off-outline' : 'mdi:eye-outline'} />
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
                type={isConfirmPasswordShown ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={() => setIsConfirmPasswordShown(!isConfirmPasswordShown)}
                        onMouseDown={e => e.preventDefault()}
                      >
                        <Icon icon={isConfirmPasswordShown ? 'mdi:eye-off-outline' : 'mdi:eye-outline'} />
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
