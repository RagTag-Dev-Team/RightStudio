'use client'

// React Imports
import { useState, useEffect, forwardRef, useCallback } from 'react'

// MUI Imports
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Select from '@mui/material/Select'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import FormControlLabel from '@mui/material/FormControlLabel'

// Third-party Imports
import classnames from 'classnames'
import DatePicker from 'react-datepicker'
import { useForm, Controller } from 'react-hook-form'

// Types
import type { EventDateType, AddEventSidebarType } from '@/types/apps/calendarTypes'

// Icon Imports
import Icon from '@core/components/IconifyIcon'

// Styled Components
import DatePickerWrapper from '@core/styles/libs/react-datepicker'

// Style Imports
import styles from './styles.module.css'

interface PickerProps {
  label?: string
  error?: boolean
  registername?: string
}

interface DefaultStateType {
  url: string
  title: string
  allDay: boolean
  calendar: string
  description: string
  endDate: Date | string
  startDate: Date | string
  guests: string[] | string | undefined
}

const capitalize = (string: string) => string && string[0].toUpperCase() + string.slice(1)

const defaultState: DefaultStateType = {
  url: '',
  title: '',
  guests: [],
  allDay: true,
  description: '',
  endDate: new Date(),
  calendar: 'Business',
  startDate: new Date()
}

const AddEventSidebar = (props: AddEventSidebarType) => {
  // Props
  const {
    calendars,
    calendarApi,
    handleAddEvent,
    handleUpdateEvent,
    handleDeleteEvent,
    handleSelectEvent,
    addEventSidebarOpen,
    handleAddEventSidebarToggle
  } = props

  // States
  const [values, setValues] = useState<DefaultStateType>(defaultState)

  const {
    control,
    setValue,
    clearErrors,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { title: '' } })

  const handleSidebarClose = async () => {
    setValues(defaultState)
    clearErrors()
    handleSelectEvent(null)
    handleAddEventSidebarToggle()
  }

  const onSubmit = (data: { title: string }) => {
    const modifiedEvent = {
      url: values.url,
      display: 'block',
      title: data.title,
      end: values.endDate,
      allDay: values.allDay,
      start: values.startDate,
      extendedProps: {
        calendar: capitalize(values.calendar),
        guests: values.guests && values.guests.length ? values.guests : undefined,
        description: values.description.length ? values.description : undefined
      }
    }

    if (
      calendars.selectedEvent === null ||
      (calendars.selectedEvent !== null && !calendars.selectedEvent.title.length)
    ) {
      handleAddEvent(modifiedEvent)
    } else {
      handleUpdateEvent({ id: parseInt(calendars.selectedEvent.id), ...modifiedEvent })
    }
    calendarApi.refetchEvents()
    handleSidebarClose()
  }

  const handleDeleteButtonClick = () => {
    if (calendars.selectedEvent) {
      handleDeleteEvent(parseInt(calendars.selectedEvent.id))
    }

    calendarApi.getEventById(calendars.selectedEvent.id).remove()
    handleSidebarClose()
  }

  const handleStartDate = (date: Date) => {
    if (date > values.endDate) {
      setValues({ ...values, startDate: new Date(date), endDate: new Date(date) })
    }
  }

  const resetToStoredValues = useCallback(() => {
    if (calendars.selectedEvent !== null) {
      const event = calendars.selectedEvent

      setValue('title', event.title || '')
      setValues({
        url: event.url || '',
        title: event.title || '',
        allDay: event.allDay,
        guests: event.extendedProps.guests || [],
        description: event.extendedProps.description || '',
        calendar: event.extendedProps.calendar || 'Business',
        endDate: event.end !== null ? event.end : event.start,
        startDate: event.start !== null ? event.start : new Date()
      })
    }
  }, [setValue, calendars.selectedEvent])

  const resetToEmptyValues = useCallback(() => {
    setValue('title', '')
    setValues(defaultState)
  }, [setValue])

  useEffect(() => {
    if (calendars.selectedEvent !== null) {
      resetToStoredValues()
    } else {
      resetToEmptyValues()
    }
  }, [addEventSidebarOpen, resetToStoredValues, resetToEmptyValues, calendars.selectedEvent])

  const PickersComponent = forwardRef(({ ...props }: PickerProps, ref) => {
    return (
      <TextField inputRef={ref} fullWidth {...props} label={props.label || ''} className='w-full' error={props.error} />
    )
  })

  const RenderSidebarFooter = () => {
    if (calendars.selectedEvent === null || (calendars.selectedEvent && !calendars.selectedEvent.title.length)) {
      return (
        <div className='flex gap-4'>
          <Button size='large' type='submit' variant='contained'>
            Add
          </Button>
          <Button size='large' variant='outlined' color='secondary' onClick={resetToEmptyValues}>
            Reset
          </Button>
        </div>
      )
    } else {
      return (
        <div className='flex gap-4'>
          <Button size='large' type='submit' variant='contained'>
            Update
          </Button>
          <Button size='large' variant='outlined' color='secondary' onClick={resetToStoredValues}>
            Reset
          </Button>
        </div>
      )
    }
  }

  return (
    <Drawer
      anchor='right'
      open={addEventSidebarOpen}
      onClose={handleSidebarClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: ['100%', 400] } }}
    >
      <Box className={classnames('flex justify-between sidebar-header', styles.addEventSidebar)}>
        <Typography variant='h6'>
          {calendars.selectedEvent && calendars.selectedEvent.title.length ? 'Update Event' : 'Add Event'}
        </Typography>
        {calendars.selectedEvent && calendars.selectedEvent.title.length ? (
          <Box className='flex items-center' sx={{ gap: calendars.selectedEvent !== null ? 1 : 0 }}>
            <IconButton size='small' onClick={handleDeleteButtonClick} className={styles.primaryTextColor}>
              <Icon icon='mdi:delete-outline' fontSize={20} />
            </IconButton>
            <IconButton size='small' onClick={handleSidebarClose} className={styles.primaryTextColor}>
              <Icon icon='mdi:close' fontSize={20} />
            </IconButton>
          </Box>
        ) : (
          <IconButton size='small' onClick={handleSidebarClose} className={styles.primaryTextColor}>
            <Icon icon='mdi:close' fontSize={20} />
          </IconButton>
        )}
      </Box>
      <Box className='sidebar-body plb-5 pli-6'>
        <DatePickerWrapper>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
            <FormControl fullWidth className='mbe-6'>
              <Controller
                name='title'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <TextField label='Title' value={value} onChange={onChange} error={Boolean(errors.title)} />
                )}
              />
              {errors.title && (
                <FormHelperText className={styles.errorColor} id='event-title-error'>
                  This field is required
                </FormHelperText>
              )}
            </FormControl>
            <FormControl fullWidth className='mbe-6'>
              <InputLabel id='event-calendar'>Calendar</InputLabel>
              <Select
                label='Calendar'
                value={values.calendar}
                labelId='event-calendar'
                onChange={e => setValues({ ...values, calendar: e.target.value })}
              >
                <MenuItem value='Personal'>Personal</MenuItem>
                <MenuItem value='Business'>Business</MenuItem>
                <MenuItem value='Family'>Family</MenuItem>
                <MenuItem value='Holiday'>Holiday</MenuItem>
                <MenuItem value='ETC'>ETC</MenuItem>
              </Select>
            </FormControl>
            <div className='mbe-6'>
              <DatePicker
                selectsStart
                id='event-start-date'
                endDate={values.endDate as EventDateType}
                selected={values.startDate as EventDateType}
                startDate={values.startDate as EventDateType}
                showTimeSelect={!values.allDay}
                dateFormat={!values.allDay ? 'yyyy-MM-dd hh:mm' : 'yyyy-MM-dd'}
                customInput={<PickersComponent label='Start Date' registername='startDate' />}
                onChange={(date: Date) => setValues({ ...values, startDate: new Date(date) })}
                onSelect={handleStartDate}
              />
            </div>
            <div className='mbe-6'>
              <DatePicker
                selectsEnd
                id='event-end-date'
                endDate={values.endDate as EventDateType}
                selected={values.endDate as EventDateType}
                minDate={values.startDate as EventDateType}
                startDate={values.startDate as EventDateType}
                showTimeSelect={!values.allDay}
                dateFormat={!values.allDay ? 'yyyy-MM-dd hh:mm' : 'yyyy-MM-dd'}
                customInput={<PickersComponent label='End Date' registername='endDate' />}
                onChange={(date: Date) => setValues({ ...values, endDate: new Date(date) })}
              />
            </div>
            <FormControl className='mbe-6'>
              <FormControlLabel
                label='All Day'
                control={
                  <Switch checked={values.allDay} onChange={e => setValues({ ...values, allDay: e.target.checked })} />
                }
              />
            </FormControl>
            <TextField
              fullWidth
              type='url'
              id='event-url'
              className='mbe-6'
              label='Event URL'
              value={values.url}
              onChange={e => setValues({ ...values, url: e.target.value })}
            />
            <FormControl fullWidth className='mbe-6'>
              <InputLabel id='event-guests'>Guests</InputLabel>
              <Select
                multiple
                label='Guests'
                value={values.guests}
                labelId='event-guests'
                id='event-guests-select'
                onChange={e => setValues({ ...values, guests: e.target.value })}
              >
                <MenuItem value='bruce'>Bruce</MenuItem>
                <MenuItem value='clark'>Clark</MenuItem>
                <MenuItem value='diana'>Diana</MenuItem>
                <MenuItem value='john'>John</MenuItem>
                <MenuItem value='barry'>Barry</MenuItem>
              </Select>
            </FormControl>
            <TextField
              rows={4}
              multiline
              fullWidth
              className='mbe-6'
              label='Description'
              id='event-description'
              value={values.description}
              onChange={e => setValues({ ...values, description: e.target.value })}
            />
            <div className='flex items-center'>
              <RenderSidebarFooter />
            </div>
          </form>
        </DatePickerWrapper>
      </Box>
    </Drawer>
  )
}

export default AddEventSidebar
