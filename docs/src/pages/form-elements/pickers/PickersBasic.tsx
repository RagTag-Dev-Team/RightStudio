// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import CustomInput from './PickersCustomInput'
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

const PickersBasic = () => {
  // States
  const [date, setDate] = useState<Date | null | undefined>(new Date())

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <AppReactDatepicker
          selected={date}
          id='basic-input'
          onChange={(date: Date) => setDate(date)}
          placeholderText='Click to select a date'
          customInput={<CustomInput label='Basic' />}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <AppReactDatepicker
          disabled
          selected={date}
          id='disabled-input'
          onChange={(date: Date) => setDate(date)}
          placeholderText='Click to select a date'
          customInput={<CustomInput label='Disabled' />}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <AppReactDatepicker
          readOnly
          selected={date}
          id='read-only-input'
          onChange={(date: Date) => setDate(date)}
          placeholderText='Click to select a date'
          customInput={<CustomInput readOnly label='Readonly' />}
        />
      </Grid>
    </Grid>
  )
}

export default PickersBasic
