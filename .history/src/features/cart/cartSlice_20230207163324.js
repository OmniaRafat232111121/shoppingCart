import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
    cartItems: cartItems,
    amount: ,
    total: 0,
    isLoading:true
}
  const cartSlice = createSlice({
    name: 'cart',
    initialState,
})
console.log(cartSlice)
export default cartSlice.reducer