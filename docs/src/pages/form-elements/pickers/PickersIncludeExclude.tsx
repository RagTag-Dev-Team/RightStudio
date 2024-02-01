// React Imports
import { useState } from 'react'

// MUI Imports
import Grid from '@mui/material/Grid'

// Third-party Imports
import { addDays, subDays, setHours, setMinutes } from 'date-fns'

// Component Imports
import CustomInput from './PickersCustomInput'
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

const PickersIncludeExclude = () => {
  // States
  const [date, setDate] = useState<Date | null | undefined>(new Date())
  const [dateExclude, setDateExclude] = useState<Date | null | undefined>(new Date())
  const [time, setTime] = useState<Date | null | undefined>(setHours(setMinutes(new Date(), 0), 18))
  const [timeExclude, setTimeExclude] = useState<Date | null | undefined>(setHours(setMinutes(new Date(), 0), 18))

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} lg={6}>
        <AppReactDatepicker
          selected={date}
          id='include-dates'
          onChange={(date: Date) => setDate(date)}
          customInput={<CustomInput label='Include Dates' />}
          includeDates={[new Date(), addDays(new Date(), 1)]}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <AppReactDatepicker
          id='exclude-dates'
          selected={dateExclude}
          onChange={(date: Date) => setDateExclude(date)}
          customInput={<CustomInput label='Exclude Dates' />}
          excludeDates={[subDays(new Date(), 1), subDays(new Date(), 2)]}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <AppReactDatepicker
          showTimeSelect
          selected={time}
          id='include-time'
          dateFormat='MM/dd/yyyy h:mm aa'
          onChange={(date: Date) => setTime(date)}
          customInput={<CustomInput label='Include Time' />}
          includeTimes={[
            setHours(setMinutes(new Date(), 0), 17),
            setHours(setMinutes(new Date(), 30), 18),
            setHours(setMinutes(new Date(), 30), 19),
            setHours(setMinutes(new Date(), 30), 17)
          ]}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <AppReactDatepicker
          showTimeSelect
          id='exclude-time'
          selected={timeExclude}
          dateFormat='MM/dd/yyyy h:mm aa'
          onChange={(date: Date) => setTimeExclude(date)}
          customInput={<CustomInput label='Exclude Time' />}
          excludeTimes={[
            setHours(setMinutes(new Date(), 0), 17),
            setHours(setMinutes(new Date(), 30), 18),
            setHours(setMinutes(new Date(), 30), 19),
            setHours(setMinutes(new Date(), 30), 17)
          ]}
        />
      </Grid>
    </Grid>
  )
}

export default PickersIncludeExclude
