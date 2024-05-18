import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart.slice";

//configureStore tạo ra kho/store, cung cấp vào đó các reducer
export const store = configureStore({
  reducer: {
    cartStore: cartReducer,
  },
});
