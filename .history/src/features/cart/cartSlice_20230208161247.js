import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const url='https://course-api.com/react-useReducer-cart-project'
const initialState = {
    cartItems: cartItems,
    amount: 2,
    total: 0,
    isLoading:true
}
export const getCartItems = createAsyncThunk('cart/getCartItems', async (name, thunkAPI) => {
  try {
    
  }
  catch (error) {
    
  }
  
});

  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      clearCart: (state) => {
        state.cartItems=[]
      },
      removeItem: (state, action) => {
        const itemId=action.payload;
        state.cartItems=state.cartItems.filter((item)=>item.id!==itemId
        )
      },
      increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    
    },
     decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
      
    },
    calculateTotal:(state,action)=>{
      let amount=0;
      let total=0;
      state.cartItems.forEach((item)=>{
        amount+=item.amount;
        total+=item.price* item.amount;
      })
      state.amount=amount;
      state.total=total;
    }
    },
    extraReducers: {
      [getCartItems.pending]: (state) => {
        state.isLoading = true;
      },
      [getCartItems.fulfilled]: (state,action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
        console.log(action)
      },
      [getCartItems.rejected]: (state) => {
        state.isLoading = true;
      }
    }
})
//console.log(cartSlice)
export const {clearCart,removeItem,increase,decrease,calculateTotal}=cartSlice.actions
export default cartSlice.reducer