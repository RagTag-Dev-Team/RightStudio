// MUI Imports
import { Card } from '@mui/material'

// Component Imports
import CalendarWrapper from '@views/apps/calendar/CalendarWrapper'

// Style Imports
import StyledCalendar from '@core/styles/libs/fullcalendar'

async function fetchEvents() {
  const res = await fetch(`${process.env.API_URL}/apps/calendar-events`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const CalendarApp = async () => {
  const res = (await fetchEvents()) || []

  return (
    <Card>
      <StyledCalendar className='app-calendar'>
        <CalendarWrapper events={res.events} />
      </StyledCalendar>
    </Card>
  )
}

export default CalendarApp
