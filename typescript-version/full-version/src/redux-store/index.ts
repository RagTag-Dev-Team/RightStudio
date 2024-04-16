import { configureStore } from '@reduxjs/toolkit'

import kanbanReducer from '@/redux-store/slices/kanban'

export const store = configureStore({
  reducer: {
    kanbanReducer
  }
})
