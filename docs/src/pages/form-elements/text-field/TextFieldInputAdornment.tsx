// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
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
    <Box component='form' noValidate autoComplete='off' className='flex gap-4 flex-wrap flex-col'>
      <TextField
        id='icons-start-adornment'
        label='With normal TextField'
        InputProps={{
          startAdornment: <InputAdornment position='start'>Kg</InputAdornment>
        }}
      />
      <FormControl>
        <OutlinedInput
          value={values.weight}
          id='icons-adornment-weight'
          onChange={handleChange('weight')}
          aria-describedby='icons-weight-helper-text'
          endAdornment={<InputAdornment position='end'>Kg</InputAdornment>}
          inputProps={{
            'aria-label': 'weight'
          }}
        />
        <FormHelperText id='icons-weight-helper-text'>Weight</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor='icons-adornment-password'>Password</InputLabel>
        <OutlinedInput
          label='Password'
          value={values.password}
          id='icons-adornment-password'
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
    </Box>
  )
}

export default TextFieldInputAdornment
