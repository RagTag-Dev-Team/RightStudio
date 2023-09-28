// React Imports
import React from 'react'

// MUI Imports
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'

const RadioLabelPlacement = () => {
  return (
    <FormControl>
      <RadioGroup row aria-label='position' name='vertical' defaultValue='top'>
        <FormControlLabel value='top' label='Top' labelPlacement='top' className='mie-9' control={<Radio />} />
        <FormControlLabel value='bottom' control={<Radio />} label='Bottom' labelPlacement='bottom' />
      </RadioGroup>
      <RadioGroup row aria-label='position' name='horizontal' defaultValue='start' className='mbs-4'>
        <FormControlLabel value='start' label='Start' labelPlacement='start' className='mie-4' control={<Radio />} />
        <FormControlLabel value='end' control={<Radio />} label='End' />
      </RadioGroup>
    </FormControl>
  )
}

export default RadioLabelPlacement
