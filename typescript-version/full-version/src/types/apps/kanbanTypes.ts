export type TaskType = {
  id: number
  title: string
  badgeText?: string[]
  attachments?: number
  comments?: number
  assigned?: { src: string; name: string }[]
  image?: string
  dueDate?: string
}

export type ColumnType = {
  id: number
  title: string
  taskIds: number[]
}

export type KanbanType = {
  columns: ColumnType[]
  tasks: TaskType[]
  currentTaskId?: number
}
