// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'
import CustomTextField from '@core/components/mui/text-field'

const PickersTime = () => {
  // States
  const [time, setTime] = useState<Date | null | undefined>(new Date())
  const [dateTime, setDateTime] = useState<Date | null | undefined>(new Date())

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={6}>
        <AppReactDatepicker
          showTimeSelect
          selected={time}
          timeIntervals={15}
          showTimeSelectOnly
          dateFormat='h:mm aa'
          id='time-only-picker'
          onChange={(date: Date) => setTime(date)}
          customInput={<CustomTextField label='Time Only' fullWidth />}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <AppReactDatepicker
          showTimeSelect
          timeFormat='HH:mm'
          timeIntervals={15}
          selected={dateTime}
          id='date-time-picker'
          dateFormat='MM/dd/yyyy h:mm aa'
          onChange={(date: Date) => setDateTime(date)}
          customInput={<CustomTextField label='Date & Time' fullWidth />}
        />
      </Grid>
    </Grid>
  )
}

export default PickersTime
