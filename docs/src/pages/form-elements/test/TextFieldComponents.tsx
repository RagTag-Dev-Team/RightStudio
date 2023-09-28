// React Imports
import React, { useState } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Input from '@mui/material/Input'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import CardContent from '@mui/material/CardContent'
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
    <Card>
      <CardHeader title='Components' />
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
          <FormControl variant='standard' fullWidth>
            <InputLabel>Name</InputLabel>
            <Input value={name} onChange={handleChange} />
          </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
          <FormControl variant='standard' fullWidth>
            <InputLabel>Name</InputLabel>
            <Input value={name} onChange={handleChange} />
            <FormHelperText>Some important helper text</FormHelperText>
          </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
          <FormControl disabled variant='standard' fullWidth>
            <InputLabel>Name</InputLabel>
            <Input value={name} onChange={handleChange} />
            <FormHelperText>Disabled</FormHelperText>
          </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
          <FormControl error variant='standard' fullWidth>
            <InputLabel>Name</InputLabel>
            <Input value={name} onChange={handleChange} aria-describedby='component-error-text' />
            <FormHelperText>Error</FormHelperText>
          </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel>Name</InputLabel>
            <OutlinedInput size='small' value={name} onChange={handleChange} label='Name' />
          </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
          <FormControl variant='filled' fullWidth>
            <InputLabel>Name</InputLabel>
            <FilledInput value={name} onChange={handleChange} />
          </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TextFieldComponents
