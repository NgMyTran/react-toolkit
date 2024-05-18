import { createSlice } from "@reduxjs/toolkit";
// createSlice: function of react toolkit
const cartSlice = createSlice({
  name: "cart",

  //initialState: hiện trong giá trị khởi tạo có 1 object với key là 1 item với giá trị khởi tạo la 1 array rỗng
  initialState: {
    items: [],
  },
  //reducers: function set value into Cart
  reducers: {
    // state de truy cap vao initialState
    addToCard: (state, action) => {
      //action lay nhung j ben ngoai de hien vao function ten la payload
      state.items.push(action.payload);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartAction = cartSlice.actions;
