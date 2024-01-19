import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart-slice'
import uiSlice from './ui-slice'

//Create and configure store, and passing it reducer function
const store = configureStore({
    reducer: {ui: uiSlice, cart: cartSlice.reducer}
})

export default store