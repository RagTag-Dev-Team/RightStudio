// Third-party Imports
import { configureStore } from '@reduxjs/toolkit'

// Slice Imports
import chatReducer from '@/redux-store/slices/chat'
import calendarReducer from '@/redux-store/slices/calendar'
import kanbanReducer from '@/redux-store/slices/kanban'

export const store = configureStore({
  reducer: {
    chatReducer,
    calendarReducer,
    kanbanReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})
