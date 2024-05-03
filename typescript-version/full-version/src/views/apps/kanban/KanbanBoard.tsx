'use client'

// React Imports
import { useEffect, useState } from 'react'

// Third-party imports
import { useDragAndDrop } from '@formkit/drag-and-drop/react'
import { animations } from '@formkit/drag-and-drop'
import { useDispatch, useSelector } from 'react-redux'

// Type Imports
import type { KanbanType } from '@/types/apps/kanbanTypes'

// Slice Imports
import { addColumn, updatedColumns } from '@/redux-store/slices/kanban'

// Component Imports
import KanbanList from './KanbanList'
import NewColumn from './NewColumn'
import KanbanDrawer from './KanbanDrawer'

const KanbanBoard = () => {
  // State
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Hooks
  const kanbanStore = useSelector((state: { kanbanReducer: KanbanType }) => state.kanbanReducer)
  const dispatch = useDispatch()

  const [boardRef, columns, setColumns] = useDragAndDrop(kanbanStore.columns, {
    plugins: [animations()],
    dragHandle: '.list-handle'
  })

  useEffect(() => {
    dispatch(updatedColumns(columns))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns])

  // Add New Column
  const addNewColumn = (title: string) => {
    dispatch(addColumn(title))
    setColumns([...columns, { id: kanbanStore.columns.length + 1, title, taskIds: [] }])
  }

  // To get the current task for the drawer
  const currentTask = kanbanStore.tasks.find(task => task.id === kanbanStore.currentTaskId)

  return (
    <div className='flex items-start gap-6'>
      <div ref={boardRef as React.RefObject<HTMLDivElement>} className='flex gap-6'>
        {columns.map(column => (
          <KanbanList
            key={column.id}
            dispatch={dispatch}
            column={column}
            store={kanbanStore}
            setDrawerOpen={setDrawerOpen}
            columns={columns}
            setColumns={setColumns}
            currentTask={currentTask}
            tasks={column.taskIds.map(taskId => kanbanStore.tasks.find(task => task.id === taskId))}
          />
        ))}
      </div>
      <NewColumn addColumn={addNewColumn} />
      {currentTask && (
        <KanbanDrawer
          task={currentTask}
          drawerOpen={drawerOpen}
          setDrawerOpen={setDrawerOpen}
          dispatch={dispatch}
          columns={columns}
          setColumns={setColumns}
        />
      )}
    </div>
  )
}

export default KanbanBoard
