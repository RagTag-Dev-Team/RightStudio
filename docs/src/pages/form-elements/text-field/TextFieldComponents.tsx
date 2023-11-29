// React Imports
import { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import FilledInput from '@mui/material/FilledInput'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'

const TextFieldComponents = () => {
  // States
  const [name, setName] = useState<string>('Composed TextField')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
      <FormControl fullWidth variant='standard'>
        <InputLabel htmlFor='component-basic'>Name</InputLabel>
        <Input id='component-basic' value={name} onChange={handleChange} />
      </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
      <FormControl fullWidth variant='standard'>
        <InputLabel htmlFor='component-helper'>Name</InputLabel>
        <Input id='component-helper' value={name} onChange={handleChange} aria-describedby='component-helper-text' />
        <FormHelperText id='component-helper-text'>Some important helper text</FormHelperText>
      </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
      <FormControl fullWidth disabled variant='standard'>
        <InputLabel htmlFor='component-disabled'>Name</InputLabel>
        <Input id='component-disabled' value={name} onChange={handleChange} />
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
      <FormControl fullWidth error variant='standard'>
        <InputLabel htmlFor='component-error'>Name</InputLabel>
        <Input id='component-error' value={name} onChange={handleChange} aria-describedby='component-error-text' />
        <FormHelperText id='component-error-text'>Error</FormHelperText>
      </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
      <FormControl fullWidth>
        <InputLabel htmlFor='component-outlined'>Name</InputLabel>
        <OutlinedInput id='component-outlined' value={name} onChange={handleChange} label='Name' />
      </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
      <FormControl fullWidth variant='filled'>
        <InputLabel htmlFor='component-filled'>Name</InputLabel>
        <FilledInput id='component-filled' value={name} onChange={handleChange} />
      </FormControl>
      </Grid>
    </Grid>
  )
}

export default TextFieldComponents
