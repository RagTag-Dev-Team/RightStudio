// MUI Imports
import Card from '@mui/material/Card'

// Component Imports
import CalendarWrapper from '@views/apps/calendar/CalendarWrapper'

// Styled Component Imports
import AppFullCalendar from '@/libs/styles/AppFullCalendar'

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
      <AppFullCalendar className='app-calendar'>
        <CalendarWrapper events={res.events} />
      </AppFullCalendar>
    </Card>
  )
}

export default CalendarApp
