// React Imports
import { useEffect, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

// MUI Imports
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'

// Third-party imports
import { useDragAndDrop } from '@formkit/drag-and-drop/react'
import { animations } from '@formkit/drag-and-drop'
import classnames from 'classnames'
import type { Dispatch } from '@reduxjs/toolkit'

// Type Imports
import type { TaskType, ColumnType, KanbanType } from '@/types/apps/kanbanTypes'

// Slice Imports
import { addTask, editColumn, deleteColumn, updateColumnTaskIds } from '@/redux-store/slices/kanban'

// Component Imports
import OptionMenu from '@core/components/option-menu'
import TaskCard from './TaskCard'
import NewTask from './NewTask'

// Styles Imports
import styles from './styles.module.css'

type Props = {
  column: ColumnType
  tasks: (TaskType | undefined)[]
  dispatch: Dispatch
  store: KanbanType
  setDrawerOpen: (value: boolean) => void
  columns: ColumnType[]
  setColumns: (value: ColumnType[]) => void
  currentTask: TaskType | undefined
}

const KanbanList = ({ column, tasks, dispatch, store, setDrawerOpen, columns, setColumns, currentTask }: Props) => {
  // States
  const [editDisplay, setEditDisplay] = useState(false)
  const [title, setTitle] = useState(column.title)

  // Hooks
  const [tasksListRef, tasksList, setTasksList] = useDragAndDrop(tasks, {
    group: 'tasksList',
    plugins: [animations()],
    draggable: el => el.classList.contains('item-draggable')
  })

  useEffect(() => {
    // Update column taskIds on tasksList change
    dispatch(updateColumnTaskIds({ id: column.id, tasksList }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasksList])

  useEffect(() => {
    const newTasks = tasksList.map(task => {
      if (task?.id === currentTask?.id) {
        return currentTask
      }

      return task
    })

    if (currentTask !== tasksList.find(task => task?.id === currentTask?.id)) {
      setTasksList(newTasks)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTask])

  useEffect(() => {
    let taskIds: ColumnType['taskIds'] = []

    columns.map(col => {
      taskIds = [...taskIds, ...col.taskIds]
    })

    const newTasksList = tasksList.filter(task => task && taskIds.includes(task.id))

    setTasksList(newTasksList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns])

  // OnClick Edit Button
  const onClickEditButton = () => {
    setEditDisplay(!editDisplay)
  }

  // Add New Task
  const addNewTask = (title: string) => {
    dispatch(addTask({ columnId: column.id, title: title }))

    setTasksList([...tasksList, { id: store.tasks[store.tasks.length - 1].id + 1, title }])

    const newColumns = columns.map(col => {
      if (col.id === column.id) {
        return { ...col, taskIds: [...col.taskIds, store.tasks[store.tasks.length - 1].id + 1] }
      }

      return col
    })

    setColumns(newColumns)
  }

  // OnChange edit title
  const handleChangeEdit = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTitle(e.target.value)
  }

  // Handle Submit Edit
  const handleSubmitEdit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEditDisplay(!editDisplay)
    dispatch(editColumn({ id: column.id, title }))

    const newColumn = columns.map(col => {
      if (col.id === column.id) {
        return { ...col, title }
      }

      return col
    })

    setColumns(newColumn)
  }

  // Cancel Edit
  const cancelEdit = () => {
    setEditDisplay(!editDisplay)
    setTitle(column.title)
  }

  // Delete Column
  const handleDeleteColumn = () => {
    dispatch(deleteColumn({ columnId: column.id }))
    setColumns(columns.filter(col => col.id !== column.id))
  }

  return (
    <div ref={tasksListRef as React.RefObject<HTMLDivElement>} className='flex flex-col is-[16.5rem]'>
      {editDisplay ? (
        <form
          className='flex items-center mbe-4'
          onSubmit={handleSubmitEdit}
          onKeyDown={e => {
            if (e.key === 'Escape') {
              cancelEdit()
            }
          }}
        >
          <InputBase value={title} autoFocus onChange={handleChangeEdit} required />
          <IconButton color='success' size='small' type='submit'>
            <i className='ri-check-line' />
          </IconButton>
          <IconButton color='error' size='small' type='reset' onClick={cancelEdit}>
            <i className='ri-close-line' />
          </IconButton>
        </form>
      ) : (
        <div
          id='no-drag'
          className={classnames(
            'flex items-center justify-between is-[16.5rem] bs-[2.125rem] mbe-4',
            styles.kanbanColumn
          )}
        >
          <Typography noWrap className='max-is-[80%]'>
            {column.title}
          </Typography>
          <div className='flex items-center'>
            <i className={classnames('ri-drag-move-fill text-textSecondary list-handle', styles.drag)} />
            <OptionMenu
              iconClassName='text-xl text-textPrimary'
              options={[
                {
                  text: 'Edit',
                  icon: 'ri-pencil-line text-base',
                  menuItemProps: {
                    className: 'flex items-center gap-2',
                    onClick: onClickEditButton
                  }
                },
                {
                  text: 'Delete',
                  icon: 'ri-delete-bin-line text-base',
                  menuItemProps: { className: 'flex items-center gap-2', onClick: handleDeleteColumn }
                }
              ]}
            />
          </div>
        </div>
      )}
      {tasksList.map(
        task =>
          task && (
            <TaskCard
              key={task.id}
              task={task}
              dispatch={dispatch}
              column={column}
              setColumns={setColumns}
              columns={columns}
              setDrawerOpen={setDrawerOpen}
              tasksList={tasksList}
              setTasksList={setTasksList}
            />
          )
      )}
      <NewTask addTask={addNewTask} />
    </div>
  )
}

export default KanbanList
