import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    isOpen:false
}
const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action)=>{
            state
        }
        
    }
})

export default modalSlice.reducer;