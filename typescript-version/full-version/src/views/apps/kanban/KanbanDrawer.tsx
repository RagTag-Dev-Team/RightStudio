// React Imports
import { useEffect, useState, useRef } from 'react'
import type { ChangeEvent } from 'react'

// MUI Imports
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'
import ListItemText from '@mui/material/ListItemText'
import Chip from '@mui/material/Chip'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'

// Third-party Imports
import { useForm, Controller } from 'react-hook-form'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { object, string, minLength } from 'valibot'
import type { Input } from 'valibot'
import type { Dispatch } from '@reduxjs/toolkit'

// Type Imports
import type { ColumnType, TaskType } from '@/types/apps/kanbanTypes'

// Slice Imports
import { editTask, deleteTask } from '@/redux-store/slices/kanban'

// Component Imports
import CustomAvatar from '@core/components/mui/Avatar'
import AppReactDatepicker from '@/libs/styles/AppReactDatepicker'

// Data Imports
import { chipColor } from './TaskCard'

type FormData = Input<typeof schema>

const schema = object({
  title: string([minLength(1, 'Title is required')])
})

type Props = {
  drawerOpen: boolean
  dispatch: Dispatch
  setDrawerOpen: (value: boolean) => void
  task: TaskType
  columns: ColumnType[]
  setColumns: (value: ColumnType[]) => void
}

function KanbanDrawer({ drawerOpen, dispatch, setDrawerOpen, task, columns, setColumns }: Props) {
  // States
  const [date, setDate] = useState<Date | undefined>(task.dueDate)
  const [badgeText, setBadgeText] = useState(task.badgeText || [])
  const [fileName, setFileName] = useState<string>('')
  const [comment, setComment] = useState<string>('')

  // Refs
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Hooks
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      title: task.title
    },
    resolver: valibotResolver(schema)
  })

  useEffect(() => {
    reset({ title: task.title })
    setBadgeText(task.badgeText || [])
    setDate(task.dueDate)
  }, [task, reset])

  // Handle File Upload
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    if (files && files.length !== 0) {
      setFileName(files[0].name)
    }
  }

  // Close Drawer
  const handleClose = () => {
    setDrawerOpen(false)
    reset({ title: task.title })
    setBadgeText(task.badgeText || [])
    setDate(task.dueDate)
    setFileName('')
    setComment('')

    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  // Update Task
  const updateTask = (data: FormData) => {
    dispatch(editTask({ id: task.id, title: data.title, badgeText, dueDate: date }))
    handleClose()
  }

  // Handle Reset
  const handleReset = () => {
    setDrawerOpen(false)
    dispatch(deleteTask(task.id))

    const updatedColumns = columns.map(column => {
      return {
        ...column,
        taskIds: column.taskIds.filter(taskId => taskId !== task.id)
      }
    })

    setColumns(updatedColumns)
  }

  // Handle Delete
  const handleDelete = (value: string) => {
    setBadgeText(current => current.filter(item => item !== value))
  }

  return (
    <div>
      <Drawer
        open={drawerOpen}
        anchor='right'
        variant='temporary'
        ModalProps={{ keepMounted: true }}
        sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
        onClose={handleClose}
      >
        <div className='flex justify-between items-center p-5 border-be'>
          <Typography variant='h6'>Edit Task</Typography>
          <IconButton onClick={handleClose}>
            <i className='ri-close-line' />
          </IconButton>
        </div>
        <div className='p-6'>
          <form className='flex flex-col gap-y-5' onSubmit={handleSubmit(updateTask)}>
            <Controller
              name='title'
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label='Title'
                  {...field}
                  error={Boolean(errors.title)}
                  helperText={errors.title?.message}
                />
              )}
            />

            <AppReactDatepicker
              selected={date ? new Date(date) : new Date()}
              id='basic-input'
              onChange={(date: Date) => {
                setDate(date)
              }}
              placeholderText='Click to select a date'
              customInput={<TextField label='Due Date' fullWidth />}
            />
            <FormControl fullWidth>
              <InputLabel id='demo-multiple-chip-label'>Label</InputLabel>
              <Select
                multiple
                label='Label'
                value={badgeText || []}
                onChange={e => setBadgeText(e.target.value as string[])}
                renderValue={selected => (
                  <div className='flex flex-wrap gap-1'>
                    {selected.map(value => (
                      <Chip
                        variant='tonal'
                        label={value}
                        key={value}
                        onMouseDown={e => e.stopPropagation()}
                        size='small'
                        onDelete={() => handleDelete(value)}
                        color={chipColor[value]?.color}
                      />
                    ))}
                  </div>
                )}
              >
                {Object.keys(chipColor).map(chip => (
                  <MenuItem key={chip} value={chip}>
                    <Checkbox checked={badgeText && badgeText.indexOf(chip) > -1} />
                    <ListItemText primary={chip} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div>
              <Typography variant='caption'>Assigned</Typography>
              <div className='flex gap-1'>
                {task.assigned?.map((avatar, index) => (
                  <Tooltip title={avatar.name} key={index}>
                    <CustomAvatar key={index} src={avatar.src} size={26} className='cursor-pointer' />
                  </Tooltip>
                ))}
                <CustomAvatar size={26} className='cursor-pointer'>
                  <i className='ri-add-line text-base text-textSecondary' />
                </CustomAvatar>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <TextField
                fullWidth
                label='Choose File'
                variant='outlined'
                value={fileName}
                InputProps={{
                  readOnly: true
                }}
              />
              <Button component='label' variant='contained' htmlFor='contained-button-file'>
                Choose
                <input hidden id='contained-button-file' type='file' onChange={handleFileUpload} ref={fileInputRef} />
              </Button>
            </div>
            <TextField
              fullWidth
              label='Comment'
              value={comment}
              onChange={e => setComment(e.target.value)}
              multiline
              rows={4}
              placeholder='Write a Comment....'
            />
            <div className='flex gap-4'>
              <Button variant='contained' color='primary' type='submit'>
                Update
              </Button>
              <Button variant='outlined' color='error' type='reset' onClick={handleReset}>
                Delete
              </Button>
            </div>
          </form>
        </div>
      </Drawer>
    </div>
  )
}

export default KanbanDrawer
