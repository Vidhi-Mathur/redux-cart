import { createSlice } from "@reduxjs/toolkit";

//Creating slice
const cartSlice = createSlice({
    name: 'Counter',
    initialState: { items: [], totalQuantity: 0},
    reducers: {
        addToCart(state, action){
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            //Updating cart badge
            state.totalQuantity++;
            if(!existingItem){
                //Redux toolkit will ensure not to manipulate the existing state, but update in immutable way
                state.items.push({id: newItem.id, title: newItem.title, quantity: 1, price: newItem.price, totalPrice: newItem.price})
            }
            else {
                existingItem.quantity++
                existingItem.totalPrice += newItem.price
            }
        },
        removeToCart(state, action){
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
            //Updating cart badge
            state.totalQuantity--;
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id)
            }
            else {
                existingItem.quantity--
                existingItem.totalPrice -= existingItem.price
            }
        }
    }
})

//Action creators for type of actions handled by reducer
export const cartActions = cartSlice.actions
export default cartSlice

