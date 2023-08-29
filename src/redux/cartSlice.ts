import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../types'
import { RootState } from './store'

const storedCartItems = localStorage.getItem('cartItems')
const products = storedCartItems !== null ? JSON.parse(storedCartItems) : []

interface CartState {
  cart: Product[]
}

const initialState: CartState = {
  cart: products,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const productToAdd = action.payload
      const isProductExists = state.cart.find(
        (product) => product.id === productToAdd.id,
      )

      if (!isProductExists) {
        const newProductToAdd = {
          ...productToAdd,
          counter: 1,
        }
        state.cart.push(newProductToAdd)
      } else {
        isProductExists.counter! += 1
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cart))
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productIdToRemove = action.payload
      const isProductExists = state.cart.find(
        (product) => product.id === productIdToRemove,
      )

      if (isProductExists) {
        state.cart = state.cart.filter((cart) => cart.id !== productIdToRemove)
        localStorage.setItem('cartItems', JSON.stringify(state.cart))
      } else {
        alert('erro ao remover')
      }
    },
    updateCart: (
      state,
      action: PayloadAction<{ id: string; amount: number }>,
    ) => {
      const { id, amount } = action.payload
      const product = state.cart.find((product) => product.id === id)
      if (product) {
        product.counter = amount
        localStorage.setItem('cartItems', JSON.stringify(state.cart))
      }
    },
  },
})

export const { addToCart, removeFromCart, updateCart } = cartSlice.actions
export const useCart = ({ cart }: RootState) => cart.cart
export default cartSlice.reducer
