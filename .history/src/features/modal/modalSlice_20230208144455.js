import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    isOpen:false
}
const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action)=>{
            state.isOpen=true
        },
        openModal: (state, action)=>{
            state.isOpen=true
        }
        
    }
})

export default modalSlice.reducer;