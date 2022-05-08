import { configureStore } from '@reduxjs/toolkit'
import customerSlice from '../features/customerSlice'
import reservationSlice from '../features/reservationSlice'

export const store = configureStore({
  reducer: {
    reservations: reservationSlice,
    customer: customerSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
