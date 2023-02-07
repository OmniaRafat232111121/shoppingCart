import { configureStore } from "@reduxjs/toolkit";
import {cartRedi}
export const store = configureStore({
    reducer: {
        cart:cartReducer
    }
})