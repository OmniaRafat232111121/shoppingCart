import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    isOpen:false
}
const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openMod
        
    }
})

export default modalSlice.reducer;