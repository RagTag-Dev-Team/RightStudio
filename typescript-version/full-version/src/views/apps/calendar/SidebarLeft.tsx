'use client'

// MUI Imports
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'

// Third-party imports
import classnames from 'classnames'

// Types Imports
import type { SidebarLeftProps, CalendarFiltersType } from '@/types/apps/calendarTypes'
import type { ThemeColor } from '@core/types'

// Component Imports
import AppReactDatepicker from '@core/styles/libs/AppReactDatepicker'

const SidebarLeft = (props: SidebarLeftProps) => {
  const {
    mdAbove,
    leftSidebarOpen,
    calendars,
    calendarsColor,
    calendarApi,
    handleSelectEvent,
    handleAllCalendars,
    handleCalendarsUpdate,
    handleLeftSidebarToggle,
    handleAddEventSidebarToggle
  } = props

  const colorsArr = calendarsColor ? Object.entries(calendarsColor) : []

  const renderFilters = colorsArr.length
    ? colorsArr.map(([key, value]: string[]) => {
        return (
          <FormControlLabel
            key={key}
            label={key}
            control={
              <Checkbox
                color={value as ThemeColor}
                checked={calendars.selectedCalendars.indexOf(key as CalendarFiltersType) > -1}
                onChange={() => handleCalendarsUpdate(key as CalendarFiltersType)}
              />
            }
          />
        )
      })
    : null

  const handleSidebarToggleSidebar = () => {
    handleSelectEvent(null)
    handleAddEventSidebarToggle()
  }

  if (renderFilters) {
    return (
      <Drawer
        open={leftSidebarOpen}
        onClose={handleLeftSidebarToggle}
        variant={mdAbove ? 'permanent' : 'temporary'}
        ModalProps={{
          disablePortal: true,
          disableAutoFocus: true,
          disableScrollLock: true,
          keepMounted: true // Better open performance on mobile.
        }}
        className={classnames('block', { static: mdAbove, absolute: !mdAbove })}
        PaperProps={{
          className: classnames('items-start w-[280px] rounded shadow-none', {
            static: mdAbove,
            absolute: !mdAbove
          })
        }}
        sx={{
          zIndex: 3,
          '& .MuiDrawer-paper': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            zIndex: mdAbove ? 2 : 'drawer'
          },
          '& .MuiBackdrop-root': {
            borderRadius: 1,
            position: 'absolute'
          }
        }}
      >
        <div className='w-full p-5'>
          <Button fullWidth variant='contained' onClick={handleSidebarToggleSidebar}>
            Add Event
          </Button>
        </div>
        <Divider className='w-full' />
        <AppReactDatepicker
          inline
          onChange={date => calendarApi.gotoDate(date)}
          boxProps={{
            className: 'flex justify-center w-full',
            sx: { '& .react-datepicker': { boxShadow: 'none !important', border: 'none !important' } }
          }}
        />
        <Divider className='w-full' />

        <div className='flex flex-col p-5 w-full'>
          <Typography variant='caption' className='uppercase mbe-4'>
            Event Filters
          </Typography>
          <FormControlLabel
            label='View All'
            control={
              <Checkbox
                color='secondary'
                checked={calendars.selectedCalendars.length === colorsArr.length}
                onChange={e => handleAllCalendars(e.target.checked)}
              />
            }
          />
          {renderFilters}
        </div>
      </Drawer>
    )
  } else {
    return null
  }
}

export default SidebarLeft
