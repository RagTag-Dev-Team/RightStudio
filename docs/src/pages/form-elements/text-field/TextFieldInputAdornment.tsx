// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import CustomTextField from '@core/components/mui/text-field'

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
    <Box component='form' noValidate autoComplete='off' className='flex gap-6 flex-wrap'>
      <CustomTextField
        id='icons-start-adornment'
        label='With normal TextField'
        InputProps={{
          startAdornment: <InputAdornment position='start'>Kg</InputAdornment>
        }}
      />
      <CustomTextField
        label='Password'
        value={values.password}
        id='icons-adornment-password'
        onChange={handleChange('password')}
        type={values.showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton edge='end' onClick={handleClickShowPassword}
                onMouseDown={e => e.preventDefault()}
                aria-label='toggle password visibility' >
                <i className={classnames(values.showPassword ? 'tabler-eye' : 'tabler-eye-off')} />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Box>
  )
}

export default TextFieldInputAdornment
