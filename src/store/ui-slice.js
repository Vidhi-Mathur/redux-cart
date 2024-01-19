import { createSlice } from "@reduxjs/toolkit";

//Creating slice
const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartVisible: false },
    reducers: {
        toggle(state) {
            state.cartVisible = !state.cartVisible
        }
    }
})

//Action creators for type of actions handled by reducer
export const uiActions = uiSlice.actions
export default uiSlice.reducer