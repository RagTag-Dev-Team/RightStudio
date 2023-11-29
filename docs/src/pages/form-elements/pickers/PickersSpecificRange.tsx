// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Third-party Imports
import DatePicker from 'react-datepicker'
import { addDays, setHours, setMinutes } from 'date-fns'

// Component Imports
import CustomInput from './PickersCustomInput'

const PickersSpecificRange = () => {
  // States
  const [date, setDate] = useState<Date | null | undefined>(new Date())
  const [time, setTime] = useState<Date | null | undefined>(new Date())

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <DatePicker
          selected={date}
          id='specific-date'
          minDate={new Date()}
          maxDate={addDays(new Date(), 5)}
          onChange={(date: Date) => setDate(date)}
          customInput={<CustomInput label='Specific Date Range' />}
        />
      </Grid>
      <Grid item xs={12}>
        <DatePicker
          showTimeSelect
          selected={time}
          id='specific-time'
          dateFormat='MM/dd/yyyy h:mm aa'
          onChange={(date: Date) => setTime(date)}
          minTime={setHours(setMinutes(new Date(), 0), 17)}
          maxTime={setHours(setMinutes(new Date(), 30), 20)}
          customInput={<CustomInput label='Specific Time' />}
        />
      </Grid>
    </Grid>
  )
}

export default PickersSpecificRange
