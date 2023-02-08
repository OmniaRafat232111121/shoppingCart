import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    isOpen:false
}
const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action)=>{
            state.is
        }
        
    }
})

export default modalSlice.reducer;