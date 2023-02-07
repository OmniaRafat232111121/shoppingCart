import { configureStore } from "@reduxjs/toolkit";
import cartReducer} from './features/cart/c'
export const store = configureStore({
    reducer: {
        cart:cartReducer
    }
})