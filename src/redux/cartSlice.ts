import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../types'

interface CartState {
  products: Product[]
}

const initialState: CartState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
})

export default cartSlice.reducer
// export const {} = cartSlice.actions
