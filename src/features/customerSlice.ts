import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Customer {
  id: string
  name: string
  food: string[]
}

interface customerState {
  value: Customer[]
}

const initialState: customerState = {
  value: [],
}

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload)
    },
  },
})

export const { addCustomer } = customerSlice.actions
export default customerSlice.reducer
