import { configureStore } from "@reduxjs/toolkit";
import {cartRed}
export const store = configureStore({
    reducer: {
        cart:cartReducer
    }
})