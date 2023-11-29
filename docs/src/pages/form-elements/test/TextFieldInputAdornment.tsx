// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Input from '@mui/material/Input'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import FilledInput from '@mui/material/FilledInput'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'

// Third-party Imports
import classnames from 'classnames'

type State = {
  weight: string
  password: string
  showPassword: boolean
}

const TextFieldInputAdornment = () => {
  // States
  const [values, setValues] = useState<State>({
    weight: '',
    password: '',
    showPassword: false
  })

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  return (
    <Card>
      <CardHeader title='Input Adornment' />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <TextField
            fullWidth
            label='With normal TextField'
            InputProps={{
              startAdornment: <InputAdornment position='start'>Kg</InputAdornment>
            }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <OutlinedInput
              value={values.weight}
              onChange={handleChange('weight')}
              endAdornment={<InputAdornment position='end'>Kg</InputAdornment>}
              inputProps={{
                'aria-label': 'weight'
              }}
            />
            <FormHelperText>Weight</FormHelperText>
          </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel>Password</InputLabel>
            <OutlinedInput
              label='Password'
              value={values.password}
              onChange={handleChange('password')}
              type={values.showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    onClick={handleClickShowPassword}
                    onMouseDown={e => e.preventDefault()}
                    aria-label='toggle password visibility'
                  >
                    <i className={classnames(values.showPassword ? 'ri-eye-line' : 'ri-eye-off-line', 'text-xl')} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            variant='filled'
            label='With normal TextField'
            InputProps={{
              startAdornment: <InputAdornment position='start'>Kg</InputAdornment>
            }}
          />
          </Grid>
          <Grid item xs={12} md={4}>
          <FormControl variant='filled' fullWidth>
            <FilledInput
              value={values.weight}
              onChange={handleChange('weight')}
              endAdornment={<InputAdornment position='end'>Kg</InputAdornment>}
              inputProps={{
                'aria-label': 'weight'
              }}
            />
            <FormHelperText>Weight</FormHelperText>
          </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
          <FormControl variant='filled' fullWidth>
            <InputLabel>Password</InputLabel>
            <FilledInput
              value={values.password}
              onChange={handleChange('password')}
              type={values.showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    onClick={handleClickShowPassword}
                    onMouseDown={e => e.preventDefault()}
                    aria-label='toggle password visibility'
                  >
                    <i className={classnames(values.showPassword ? 'ri-eye-line' : 'ri-eye-off-line', 'text-xl')} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            variant='standard'
            label='With normal TextField'
            InputProps={{
              startAdornment: <InputAdornment position='start'>Kg</InputAdornment>
            }}
          />
          </Grid>
          <Grid item xs={12} md={4}>
          <FormControl variant='standard' className='mbs-3' fullWidth>
            <Input
              value={values.weight}
              onChange={handleChange('weight')}
              endAdornment={<InputAdornment position='end'>Kg</InputAdornment>}
              inputProps={{
                'aria-label': 'weight'
              }}
            />
            <FormHelperText>Weight</FormHelperText>
          </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
          <FormControl variant='standard' fullWidth>
            <InputLabel>Password</InputLabel>
            <Input
              value={values.password}
              onChange={handleChange('password')}
              type={values.showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    edge='end'
                    onClick={handleClickShowPassword}
                    onMouseDown={e => e.preventDefault()}
                    aria-label='toggle password visibility'
                  >
                    <i className={classnames(values.showPassword ? 'ri-eye-line' : 'ri-eye-off-line', 'text-xl')} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TextFieldInputAdornment
