// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'
import CustomTextField from '@core/components/mui/TextField'

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
          customInput={<CustomTextField label='Basic' fullWidth />}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <AppReactDatepicker
          disabled
          selected={date}
          id='disabled-input'
          onChange={(date: Date) => setDate(date)}
          placeholderText='Click to select a date'
          customInput={<CustomTextField label='Disabled' fullWidth />}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <AppReactDatepicker
          readOnly
          selected={date}
          id='read-only-input'
          onChange={(date: Date) => setDate(date)}
          placeholderText='Click to select a date'
          customInput={<CustomTextField InputProps={{ readOnly: true }} label='Readonly' fullWidth />}
        />
      </Grid>
    </Grid>
  )
}

export default PickersBasic
