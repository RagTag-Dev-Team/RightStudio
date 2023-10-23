// React Imports
import React from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'

// Third-party Imports
import classnames from 'classnames'

// Styles Imports
import styles from './styles.module.css'

const TextFieldIcons = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
      <FormControl fullWidth variant='standard'>
        <InputLabel htmlFor='input-with-icon-adornment'>With a start adornment</InputLabel>
        <Input
          id='input-with-icon-adornment'
          startAdornment={
            <InputAdornment position='start'>
              <i className='ri-account-circle-line' />
            </InputAdornment>
          }
        />
      </FormControl>
      </Grid>
      <Grid item xs={12}>
      <TextField
        fullWidth
        label='TextField'
        variant='standard'
        id='input-with-icon-textfield'
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <i className='ri-account-circle-line' />
            </InputAdornment>
          )
        }}
      />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2} className='items-end'>
          <Grid item xs={1} className='flex justify-center'>
            <i className={classnames('ri-account-circle-line', styles.textFiledIconColor)} />
          </Grid>
          <Grid item xs={11}>
            <TextField fullWidth variant='standard' id='input-with-icon-grid' label='With a grid' />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TextFieldIcons
