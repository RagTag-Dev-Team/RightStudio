import { configureStore } from '@reduxjs/toolkit'

import chatReducer from '@/redux-store/slices/chat'
import kanbanReducer from '@/redux-store/slices/kanban'

export const store = configureStore({
  reducer: {
    chatReducer,
    kanbanReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})
