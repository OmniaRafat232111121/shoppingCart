import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
    cartItems: cartItems,
    amount: 4,
    total: 0,
    isLoading:true
}
  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      clearCart: (state) => {
        state.cartItems=[]
      },
      removeItem: (state, action) => {
        const itemId=action.payload;
        state.cartItems=state.cartItems.filter((item)=>{
          item.id!==itemId
        })
      }
    }
})
//console.log(cartSlice)
export const {clearCart,removeItem}=cartSlice.actions
export default cartSlice.reducerc:\Users\Meme\AppData\Local\Programs\Microsoft VS Code\resources\app\out\vs\code\electron-sandbox\workbench\workbench.html